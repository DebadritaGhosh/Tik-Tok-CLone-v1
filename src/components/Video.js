import React, { useRef, useState } from 'react'
import "./Video.css";

import VideoFooter from "./VideoFooter";

const Video = () => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }
    return (
        <div className="video">
            <video
                className="video__player"
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src="https://player.vimeo.com/external/524748008.sd.mp4?s=8772392acebd9a216a04161a965db9a4c6d4e741&profile_id=165&oauth2_token_id=57447761">
            </video>
            <VideoFooter />
        </div>
    )
}

export default Video
