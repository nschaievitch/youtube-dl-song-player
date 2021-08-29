package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	youtube "github.com/kkdai/youtube/v2"
)

var client youtube.Client

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func searchHandler(w http.ResponseWriter, r *http.Request) {
	q, ok := r.URL.Query()["q"]

	if !ok {
		return
	}

	fmt.Printf("searching %s...", q)
	jsonRep, err := json.Marshal(SearchQuery(q[0]))

	check(err)

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, string(jsonRep))
}

func audioHandler(w http.ResponseWriter, r *http.Request) {
	pathParts := strings.Split(r.URL.Path, "/")

	if pathParts[3] != "audio" {
		return
	}

	videoId := pathParts[2]

	fmt.Printf("downloadind %s...", videoId)

	err := DownloadVideo(videoId)

	if err != nil {
		fmt.Println(err)
		return
	}

	w.Header().Set("Content-Type", "application/octet-stream")

	fileBytes, err := ioutil.ReadFile("audio.webm")

	check(err)

	w.Write(fileBytes)

}

func main() {
	http.HandleFunc("/search", searchHandler)
	http.HandleFunc("/song/", audioHandler)
	//time.Sleep(time.Hour)
	fmt.Println("listening on port 3000")
	http.ListenAndServe("0.0.0.0:3000", nil)
}
