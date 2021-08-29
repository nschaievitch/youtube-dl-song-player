import SongResult from "./SongResult";

const Results = ({ songs, playSong, addToQueue, makeKey }) => {
    return (
        <div>
            {songs.length > 0 ? <h1>Results</h1> : ""}
            {songs.map((s) => (
                <SongResult
                    {...s}
                    playSong={playSong}
                    addToQueue={addToQueue}
                    isSearch={true}
                    makeKey={makeKey}
                />
            ))}
        </div>
    );
};

export default Results;
