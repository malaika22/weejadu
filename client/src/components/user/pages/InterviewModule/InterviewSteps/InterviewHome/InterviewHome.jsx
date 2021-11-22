import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import InterviewVideo from "../../../../../../assets/interviewModule/interviewVideo.jpg";
import InterviewIcon from "../../../../../../assets/interviewModule/interviewicon.jpg";
import VideoPlayer from "../../../../partails/videoPlayer/index";
import {
  FavoriteSharp,
  Telegram,
  SaveAlt,
  ArrowBackIos,
  ArrowForwardIos,
  PlayCircle,
} from "@mui/icons-material";
import ExpertOne from "../../../../../../assets/interviewModule/expertOne.jpg";
import ExpertTwo from "../../../../../../assets/interviewModule/expertTwo.jpg";
import ExpertThree from "../../../../../../assets/interviewModule/expertThree.jpg";
import interview from "../../../../../../assets/interviewModule/interview.jpg";
import { makeStyles } from "@mui/styles";
import VideoCarousel from "../../../../partails/videoCarousel/VideoCarousel";
import "./styles.scss";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
});
const InterviewHome = ({ setSteps, steps }) => {
  const classes = useStyles();

  const [showVideo, setShowVideo] = useState(false);
  const handleSteps = () => {
    setSteps(steps + 1);
  };
  return (
    <>
      <div className="interview-home-container">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <div className="video-container">
              <div className="video-div">
                <div className="image-overlay">
                  <PlayCircle onClick={() => setShowVideo(true)} />
                  <img src={interview} alt="video" />
                </div>
              </div>
              <Grid container className={classes.gridContainer}>
                <Grid item md={2} xs={12}>
                  <img src={InterviewIcon} alt="interview" />
                </Grid>
                <Grid item md={10} xs={12}>
                  <div className="story-info-div">
                    <div className="story-title">INTERVIEW STORY TELLING</div>
                    <div className="story-info">
                      More specificaly, you can use storytelling in interviews
                      to bring a revelant experience to life, share what you
                      learned from itm and convey something about you that you
                      want the interviewer to appreciate and remember.
                    </div>
                  </div>
                </Grid>
                <Grid item md={12} xs={12}>
                  <div className="share-container">
                    <div className="icon-div">
                      <FavoriteSharp />
                      <span>120K</span>
                    </div>
                    <div className="icon-div">
                      <Telegram />
                      <span>SHARE</span>
                    </div>
                    <div className="icon-div">
                      <SaveAlt />
                      <span>SAVE</span>
                    </div>
                  </div>
                  <button>SUBSCRIBE</button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="enhance-container">
              <div className="enchance-options">
                <div className="enhance-title">YOU'LL ENHANCE : </div>
                <p>use of power words linked to desired role, </p>
                <p>Memorability, Enthusiam</p>
              </div>
              <div className="enchance-options">
                <div className="enhance-title">
                  JADU'S LEFT TO NEXT LEVEL : 05
                </div>
              </div>
              <div className="enchance-options">
                <div className="enhance-title">ON COMPLETION OF THIS LEVEL</div>
                <p>Win - Persuasive skills course from - john Maxwell</p>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="response-container">
          <Grid container spacing={2} style={{ alignItems: "center" }}>
            <Grid item md={6} xs={12}>
              <div className="response-header">I WANT TO RESPOND BY : </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="response-button" onClick={handleSteps}>
                RECORD OWN VIDEO
              </div>
              <div className="response-button" onClick={() => setSteps(2)}>
                RECORD AUDIO WITH AVATAR
              </div>
              <div className="response-button" onClick={() => setSteps(3)}>
                TEXT TYPED INTO CATROON TEMPLATE
              </div>
            </Grid>
          </Grid>
        </div>

        <VideoCarousel title="EXPERT JADU VIDEOS" />
        {/* <div className="expert-videos">
        <div className="expert-header">EXPERT JADU VIDEOS</div>
        <Grid container className={classes.gridContainer}>
          <Grid item md={1} xs={12}>
            <ArrowBackIos />
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={ExpertOne} alt="expert" />
              <p>Interview story-telling</p>
            </div>
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={ExpertTwo} alt="expert" />
              <p>Sales Power words</p>
            </div>
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={ExpertThree} alt="expert" />
              <p>Super Rapport building</p>
            </div>
          </Grid>
          <Grid item md={1} xs={12}>
            <ArrowForwardIos />
          </Grid>
        </Grid>
      </div> */}
      </div>
      {showVideo ? <VideoPlayer toggle={() => setShowVideo(false)} /> : <></>}
    </>
  );
};
export default InterviewHome;
