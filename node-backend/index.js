const youtubedl = require('youtube-dl-exec')
const YoutubeMusicApi = require('youtube-music-api')
const fs = require("fs").promises
const cors = require("cors")
require("dotenv").config()

const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

const express = require("express")
const app = express();

app.use(cors())
app.use(express.static("build"))

const api = new YoutubeMusicApi();
api.initalize()

const present = {}
fs.readdir("./songs").then(s => s.forEach((k) => present[k.slice(0, -5)] = true))

const songs = {}

class Song {
  constructor(videoId, name, artist, thumbnail, duration) {
    this.videoId = videoId;
    this.name = name;
    this.artist = artist;
    if (thumbnail.length === undefined) this.thumbnail = thumbnail
    else this.thumbnail = thumbnail[0]
    this.duration = duration
    songs[this.videoId] = this
  }

  async download() {
    return await downloadSongFromID(this.videoId)
  }
}

const downloadSongFromID = async (id) => {
  console.log(id, present)
  if (id in present) return id;

  await exec(`${process.env.YOUTUBE_DL || "youtube-dl"} https://www.youtube.com/watch?v=${id} --youtube-skip-dash-manifest --format worstaudio --output ./songs/${id}.webm`)

  /*
  await youtubedl(`https://www.youtube.com/watch?v=${id}`, {
    noCallHome: true,
    format: "worstaudio",
    output: `./songs/${id}.webm`,
    youtubeSkipDashManifest: true,
    referer: 'https://youtube.com',
    verbose: true
  })
  */

  present[id] = true;

  return id;
}


const searchFromQuery = async (query) => {
  let res = await api.search(query, "song")
  let res2 = await api.search(query, "video")
  console.log(res)
  res.content = res.content.concat(res2.content)
  const ret = res.content.filter(t => t.type == "video" || t.type == "song").map(t => {
    if (t.type == "song") {
        if (Array.isArray(t.artist)) artist = t.artist.map(a => a.name).join(", ")
        else artist = t.artist.name;
    }
    else artist = t.author
    return new Song(t.videoId, t.name, artist, t.thumbnails, t.duration)
  })
  return ret
}


app.get("/", (req, res) => {
  res.send("ok")
})

app.get("/api/search", async (req, res) => {
  if (!req.query.q) {
    res.json({})
    return
  }
  
  console.log("searching for " + req.query.q)
  res.json(await searchFromQuery(req.query.q))
})

app.get("/api/song/:id", (req, res) => {
  if (req.params.id in songs) res.json(songs[req.params.id])
  else res.json({})
})

app.get("/api/song/:id/audio", async (req, res) => {
  const id = await downloadSongFromID(req.params.id).catch(e => {
    console.error(e)
    res.json({})
    
  })
  res.sendFile(`${__dirname}/songs/${id}.webm`)
})


app.listen(5000, () => console.log("listening on 5000..."))
