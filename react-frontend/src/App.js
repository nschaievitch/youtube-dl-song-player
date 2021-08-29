import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Queue from "./components/Queue";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { MdQueueMusic } from "react-icons/md";
import "./App.scss";

//const BASE_URL = "/api"
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
    const [songs, setSongs] = useState([]);
    var [url, setUrl] = useState("");
    let _url;
    const [header, setHeader] = useState("");
    const [queue, setQueue] = useState([]);
    const [queueOpen, setQueueOpen] = useState(false);
    const [currSong, setCurrSong] = useState({});
    const [history, setHistory] = useState([]);

    const makeKey = () => Math.round(Math.random() * 10000000).toString(32);

    const doSearch = async (query) => {
        const res = await axios.get(BASE_URL + "/search", {
            params: {
                q: query,
            },
        });

        setQueueOpen(false);

        setSongs(
            res.data.map((s) => {
                const _key = makeKey();
                return { ...s, _key, key: _key };
            })
        );
    };

    function handleNext(details) {
        console.log(this.url);
        playPrev();
    }

    const playSong = (song) => {
        setUrl(BASE_URL + `/song/${song.videoId}/audio`);
        _url = url;
        setHeader(`${song.artist} - ${song.name}`);
        document.title = `${song.artist} - ${song.name}`;

        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: song.name,
                artist: song.artist,
                artwork: [
                    {
                        src: song.thumbnail.url,
                        sizes: `${song.thumbnail.width}x${song.thumbnail.height}`,
                        type: "image/jpeg",
                    },
                ],
            });

            navigator.mediaSession.setActionHandler("previoustrack", () => {
                console.log(_url);
                playPrev();
            });
            navigator.mediaSession.setActionHandler("nexttrack", () =>
                playNext()
            );
        }
    };

    const playFromSearch = (song) => {
        //clearQueue();
        playSong(song);
    };

    const clearQueue = () => setQueue([]);
    const addToQueue = (song) => setQueue([...queue, song]);
    const shiftQueue = () => {
        let song = false;
        setQueue((queue) => {
            if (queue.length == 0) return []
            song = queue[0]
            return queue.slice(1)
        });

        return song;
    }
    const removeFromQueue = (key) => {
        console.log("removing", key);
        setQueue(queue.filter((t) => t._key != key));
    };
    const playFromQueue = (song) => {
        console.log();
        let i = 0;
        while (i < queue.length && queue[i]._key != song._key) i++;
        playSong(queue[i]);
        setQueue(queue.slice(i + 1));
    };

    const toggleQueue = () => setQueueOpen(!queueOpen);

    const playNext = () => {
        const song = shiftQueue();
        if (song) playSong(song);
    };

    function playPrev() {
        setUrl((url) => {
            console.log(url)
            return url + "?";
        });
    }

    return (
        <main>
            <SearchBar doSearch={doSearch} />
            {!queueOpen ? (
                <Results
                    songs={songs}
                    playSong={playFromSearch}
                    addToQueue={addToQueue}
                    makeKey={makeKey}
                />
            ) : (
                <Queue
                    queue={queue}
                    removeFromQueue={removeFromQueue}
                    clearQueue={clearQueue}
                    playFromQueue={playFromQueue}
                    goBack={() => setQueueOpen(false)}
                />
            )}
            <div id="audioPlayer">
                <AudioPlayer
                    src={url}
                    header={header}
                    onClickPrevious={playPrev}
                    onClickNext={playNext}
                    onEnded={playNext}
                    showJumpControls={false}
                    showSkipControls={true}
                    customVolumeControls={[
                        <MdQueueMusic
                            onClick={toggleQueue}
                            className="svg-icon"
                        />,
                        RHAP_UI.VOLUME,
                    ]}
                />
            </div>
        </main>
    );
}

export default App;
