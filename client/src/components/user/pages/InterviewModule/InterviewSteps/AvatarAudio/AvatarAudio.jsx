import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import { Grid, Checkbox, SwipeableDrawer } from "@mui/material";
import InterviewImages from "../../../../../../assets/interviewModule/avatarImages.jpg";
import RecordButton from "../../../../../../assets/interviewModule/holdButton.jpg";
import { makeStyles } from "@mui/styles";
import {
  FavoriteSharp,
  Telegram,
  SaveAlt,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import Disclaimer from "../../../../../../assets/interviewModule/disclaimer.jpg";
import OwlCarousel from "react-owl-carousel";
import SavedThumbnailOne from "../../../../../../assets/interviewModule/savedThumbnailOne.jpg";
import SavedThumbnailTwo from "../../../../../../assets/interviewModule/savedThumbnailTwo.jpg";
import SavedThumbnailThree from "../../../../../../assets/interviewModule/savedThumbnailThree.jpg";
import "./styles.scss";
import PreviewAudio from "./PreviewAudio/PreviewAudio";
import VideoCarousel from "../../../../partails/videoCarousel/VideoCarousel";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  slider: {
    borderRadius: "20px 20px 0 0",
  },
});

const AvatarAudio = ({ previewAudio, setPreviewAudio }) => {
  const [toggleState, setToggleState] = useState(false);
  //const [previewAudio, setPreviewAudio] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const classes = useStyles();
  return (
    <div className="avatar-audio-container">
      <div className="avatar-div">
        <div className="avatar-content">
          {!previewAudio ? (
            <>
              <div className="avatar-header">
                <div className="avatar-title">RECORD AUDIO WITH AVATAR</div>
                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <img src={InterviewImages} alt="Avatars" />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className="image-div">
                      <img src={RecordButton} alt="Press to record" />
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div className="build-avatar">
                BUILD YOUR OWN AVATAR | ADD YOUR AVATAR
              </div>
              <div className="record-time">
                MAX RECORD TIME ALLOWED : 02 : 00 minutes
              </div>
              <div className="buttons-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <button
                      className="video-option-buttons"
                      onClick={() => setPreviewAudio(true)}
                    >
                      PREVIEW
                    </button>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <button className="video-option-buttons">
                      SAVE FOR LATER
                    </button>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <button className="video-option-buttons">DISCARD</button>
                  </Grid>
                </Grid>
              </div>
            </>
          ) : (
            <PreviewAudio />
          )}

          <div className="terms-conditions">
            <Checkbox className={`${uploadState ? `selected` : ``}`} />
            <div className="agreement-div">
              I agree to have read the -{" "}
              <span onClick={() => setToggleState(!toggleState)}>
                Disclamier
              </span>{" "}
            </div>
          </div>
          <button className="upload-button" onClick={() => setUploadState(true)}>
            UPLOAD THIS VIDEO
          </button>
        </div>
        <div className="saved-jadu-container">
          <VideoCarousel title="My Saved Jadu's" />
        </div>
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

export default AvatarAudio;
