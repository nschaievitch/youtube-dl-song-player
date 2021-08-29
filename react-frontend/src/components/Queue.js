import SongResult from "./SongResult";
import { MdKeyboardBackspace } from "react-icons/md"

const Queue = ({ queue, removeFromQueue, playFromQueue, clearQueue, goBack }) => {
    const flexSpaceBetween = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <>
        <MdKeyboardBackspace onClick={goBack} className="svg-icon"/>
        <div style={flexSpaceBetween}>
            <h1>Queue</h1>
            <u onClick={clearQueue} className="clickableText">Clear queue</u>
        </div>
    
            {queue.map((s) => (
                <SongResult {...s} isSearch={false} removeFromQueue = {removeFromQueue} playSong={playFromQueue}/>
            ))}
        </>
    );
};

export default Queue;
