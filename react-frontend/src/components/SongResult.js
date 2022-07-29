import styles from "./SongResult.module.scss";
import { MdAdd } from "react-icons/md"
import { TiDelete } from "react-icons/ti"

const SongResult = (props) => {

    const play = (ev) => {
        if (ev.target.tagName.toLowerCase() == "svg" || ev.target.tagName.toLowerCase() == "path") return;
        props.playSong(props)
    }

    const getDuration = (duration) => {
        if (!duration) return "";

        const allSecs = Math.round(duration / 1000);
        const mins = Math.floor(allSecs/60);
        const secs = allSecs % 60;
        return `${mins}:${secs >= 10 ? secs : "0" + secs}`
    }

    const addToQueue = () => props.addToQueue({...props, _key: props.makeKey()})
    const removeFromQueue = () => props.removeFromQueue(props._key)

    const crop = (txt, chs) => {
        if (txt.length > chs) {
            return txt.slice(0, chs - 3) + "..."
        }

        return txt
    }

    return (
        <div className={styles.songResult} onClick = {play}>
            <div className={styles.left}>
                <img src={props.thumbnail.url} />
                <div className={styles.nameArtist}>
                    <h1>{props.name}</h1>
                    <h2>{props.artist}</h2>
                </div>
            </div>

            <div className={styles.right}>
                <span>{getDuration(props.duration)}</span>
                {
                    props.isSearch ?
                    <MdAdd onClick={addToQueue} className="svg-icon"/>
                    : 
                    <TiDelete onClick={removeFromQueue} className="svg-icon"/>
                }
            </div>

        </div>
    )
}

export default SongResult