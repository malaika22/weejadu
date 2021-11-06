import React from "react";
import "./index.css";
import ReactPlayer from "react-player";
import { Close } from "@mui/icons-material";
import VideoThumb from "../../../../assets/video.mp4";
const VideoPlayer = ({ toggle }) => {
  function handleHide() {
    toggle();
  }
  return (
    <section className="video-player-wrapper">
      <div className="video-player">
        <span className="close-wrapper" onClick={handleHide}>
          <Close />
        </span>
        <ReactPlayer
          className="video"
          playing={true}
          url={VideoThumb}
          controls={true}
        />
      </div>
    </section>
  );
};
export default VideoPlayer;
