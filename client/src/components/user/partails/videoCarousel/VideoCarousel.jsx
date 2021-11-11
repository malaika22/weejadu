import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ExpertOne from "../../../../assets/interviewModule/expertOne.jpg";
import { ChevronRight, PlayCircle } from "@mui/icons-material";
import "./styles.scss";
import VideoPlayer from "../videoPlayer";
const VideoCarousel = ({ title, data }) => {
  const [showPlayer, setshowPlayer] = useState(false);

  console.log("show video player", showPlayer);
  const showPlayerHandle = () => {
    console.log("set show", showPlayer);
    setshowPlayer(!showPlayer);
  };

  const [responsive] = useState({
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  });
  return (
    <div className="carousel-container">
      <div className="expert-videos">
        <div className="expert-header">{title}</div>
        <OwlCarousel
          responsive={responsive}
          className="owl-theme"
          margin={0}
          loop={true}
          dots={false}
          nav={true}
        >
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
          <div className="expert-div" onClick={showPlayerHandle}>
            <div className="image-overlay">
              <PlayCircle />
              <img src={ExpertOne} alt="expert" />
            </div>
            <p>Interview story-telling</p>
          </div>
        </OwlCarousel>
        <div className="carousel-footer">
          Terms &amp; conditions | Privacy policy
        </div>
      </div>
      {showPlayer && <VideoPlayer toggle={showPlayerHandle} />}
    </div>
  );
};

export default VideoCarousel;
