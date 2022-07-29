package main

/*
class Song {
  constructor(videoId, name, artist, thumbnail, duration) {
    this.videoId = videoId;
    this.name = name;
    this.artist = artist;
    if (thumbnail.length === undefined) this.thumbnail = thumbnail
    else this.thumbnail = thumbnail[0]
    this.duration = duration
  }

  async download() {
    return await downloadSongFromID(this.videoId)
  }
}

*/

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/go-rod/rod"
)

type Thumbnail struct {
	Url    string `json:"url"`
	Width  int    `json:"width"`
	Height int    `json:"height"`
}

type Song struct {
	VideoID   string    `json:"videoId"`
	Name      string    `json:"name"`
	Artist    string    `json:"artist"`
	Thumbnail Thumbnail `json:"thumbnail"`
	Duration  int       `json:"duration"`
}

func (song Song) Download() (err error) {
	err = DownloadVideo(song.VideoID)
	return
}

func timeTextToSecs(str string) int {
	parts := strings.Split(str, ":")
	mins, err := strconv.Atoi(parts[0])

	check(err)

	secs, err := strconv.Atoi(parts[1])

	check(err)

	return 60*mins + secs
}

func makeQueryString(query string) string {
	parts := strings.Split(query, " ")
	return strings.Join(parts, "+")
}

func SearchQuery(query string) []Song {
	var songs []Song
	queryUrl := fmt.Sprintf("https://music.youtube.com/search?q=%s", makeQueryString(query))
	page := rod.New().MustConnect().MustPage(queryUrl)
	page.MustElement("tp-yt-paper-button").MustClick()
	page.MustElement("yt-icon.style-scope:nth-child(2)")
	els := page.MustElements("ytmusic-responsive-list-item-renderer")

	for _, el := range els {
		name, _ := el.MustElement("a").Text()
		videoIDRaw := (*(el.MustElement("a").MustAttribute("href")))[8:]
		videoID := strings.Split(videoIDRaw, "&")[0]
		artist, _ := el.MustElement(".secondary-flex-columns").MustElement("a").Text()
		spans := el.MustElement(".secondary-flex-columns").MustElements("span")
		durationString, _ := spans[len(spans)-1].Text()
		duration := timeTextToSecs(durationString)
		imgSrcSmall := *(el.MustElement("img").MustAttribute("src"))
		imgSrc := strings.ReplaceAll(imgSrcSmall, "w60-h60", "w256-h256")
		thumbnail := Thumbnail{
			Url:    imgSrc,
			Width:  256,
			Height: 256,
		}

		song := Song{
			VideoID:   videoID,
			Name:      name,
			Artist:    artist,
			Duration:  duration * 1000,
			Thumbnail: thumbnail,
		}

		songs = append(songs, song)
	}

	page.Close()

	return songs
}
