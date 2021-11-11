import React, { useState } from "react";
import RecordVideoIcon from "../../../../../../assets/interviewModule/recordVideo.jpg";
import { Checkbox, Grid, SwipeableDrawer } from "@mui/material";
import {
  FavoriteSharp,
  Telegram,
  SaveAlt,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import SavedThumbnailOne from "../../../../../../assets/interviewModule/savedThumbnailOne.jpg";
import SavedThumbnailTwo from "../../../../../../assets/interviewModule/savedThumbnailTwo.jpg";
import SavedThumbnailThree from "../../../../../../assets/interviewModule/savedThumbnailThree.jpg";
import Disclaimer from "../../../../../../assets/interviewModule/disclaimer.jpg";
import { makeStyles } from "@mui/styles";
import "./styles.scss";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  slider: {
    borderRadius: "20px 20px 0 0",
  },
});

const UserVideo = () => {
  const [toggleState, setToggleState] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const classes = useStyles();
  return (
    <div className="record-video-container">
      <div className="record-title">RECORD YOUR VIDEO</div>
      <div className="video-div">
        <img src={RecordVideoIcon} alt="Record video" />
      </div>
      <div className="allowed-time">
        MAX RECORD TIME ALLOWED : 02:00 minutes
      </div>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <button className="record-buttons">PREVIEW</button>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <button className="record-buttons">SAVE FOR LATE</button>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <button className="record-buttons">DISCARD</button>
        </Grid>
      </Grid>
      <div className="terms-conditions">
        <Checkbox className={`${uploadState ? `selected` : ``}`} />
        <div className="agreement-div">
          I agree to have read the -{" "}
          <span onClick={() => setToggleState(!toggleState)}>Disclamier</span>{" "}
        </div>
      </div>
      <button className="upload-button">UPLOAD THIS VIDEO</button>
      <div className="saved-jadu-container">
        <div className="saved-header">MY SAVED JADU'S</div>
        <Grid container alignItems="center">
          <Grid item md={1} xs={12}>
            <ArrowBackIos />
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={SavedThumbnailOne} alt="expert" />
              <p>Interview story-telling</p>
            </div>
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={SavedThumbnailTwo} alt="expert" />
              <p>Sales Power words</p>
            </div>
          </Grid>
          <Grid item md={3.3} xs={12}>
            <div className="expert-div">
              <img src={SavedThumbnailThree} alt="expert" />
              <p>Super Rapport building</p>
            </div>
          </Grid>
          <Grid item md={1} xs={12}>
            <ArrowForwardIos />
          </Grid>
        </Grid>
      </div>
      <SwipeableDrawer
        anchor="bottom"
        open={toggleState}
        onClose={() => setToggleState(false)}
        onOpen={() => setToggleState(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        className={classes.slider}
      >
        <Grid container>
          <Grid item md={8} xs={12}>
            <div className="disclaimer-div">
              <div className="cross-icon" onClick={() => setToggleState(false)}>
                {" "}
                <span>X</span>
              </div>
              <div className="disclaimer">DISCLAIMER : </div>
              <img src={Disclaimer} alt="disclaimer" />
              <div className="disclaimer-points">
                1. I agree to the Terms of Condition and Terms of Privacy state
                herein
              </div>
              <div className="disclaimer-points">
                2. I am the original creaor of this video, and its content,
                audio/graphics and am not violating any third party copyrights
                by posting this video.
              </div>
              <div className="disclaimer-points">
                3. I have taken adequate care in using language or visual
                element that it doesnt offent others, is abusive, sexist,
                casteist or hurts religious sentiments.
              </div>
              <div className="disclaimer-points">
                I acknowledge that Wejadu team will screen all uploaded videos
                and may not approve videos that may be deemed objectionable, at
                the sole discretion of the <span>Wejadu management</span>
              </div>
              <button onClick={() => setToggleState(false)}>I ACCEPT</button>
            </div>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </div>
  );
};

export default UserVideo;
