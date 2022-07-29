package main

import (
	"io"
	"os"
)

func DownloadVideo(videoID string) (err error) {
	video, err := client.GetVideo(videoID)

	if err != nil {
		return
	}

	stream, _, err := client.GetStream(video, video.Formats.FindByItag(249))

	if err != nil {
		return
	}

	file, err := os.Create("audio.webm")

	if err != nil {
		return
	}

	defer file.Close()

	_, err = io.Copy(file, stream)

	return
}
