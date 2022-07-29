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

	fmt.Printf("searching %s...\n", q)
	jsonRep, err := json.Marshal(SearchQuery(q[0]))

	check(err)

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	fmt.Fprint(w, string(jsonRep))
}

func audioHandler(w http.ResponseWriter, r *http.Request) {
	pathParts := strings.Split(r.URL.Path, "/")

	if pathParts[3] != "audio" {
		return
	}

	videoId := pathParts[2]

	fmt.Printf("downloading %s...\n", videoId)

	err := DownloadVideo(videoId)

	fmt.Println("done")

	if err != nil {
		fmt.Println(err)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/octet-stream")

	fileBytes, err := ioutil.ReadFile("audio.webm")

	check(err)

	w.Write(fileBytes)

}

func main() {
	fs := http.FileServer(http.Dir("./build"))

	http.HandleFunc("/search", searchHandler)
	http.HandleFunc("/song/", audioHandler)
	http.Handle("/", fs)
	//time.Sleep(time.Hour)
	fmt.Println("listening on port 5000")
	http.ListenAndServe("0.0.0.0:5000", nil)
}
