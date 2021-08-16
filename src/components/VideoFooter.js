import React from 'react'
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from 'ticker';

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@debadritaghosh</h3>
                <p>this is a description</p>
                <MusicNoteIcon />
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""></img>
        </div>
    )
}

export default VideoFooter
