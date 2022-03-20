import React, { useState } from "react";
import recordVideoMobile from "../../../../../../assets/interviewModule/recordButtonMobile.gif";
import recordVideoDesktop from "../../../../../../assets/interviewModule/recordButtonDesktop.gif";
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
import video from "../../../../../../assets/video.mp4";
import Disclaimer from "../../../../../../assets/interviewModule/disclaimer.jpg";
import { useHistory } from "react-router";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import "./styles.scss";
import VideoCarousel from "../../../../partails/videoCarousel/VideoCarousel";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  slider: {
    borderRadius: "20px 20px 0 0",
  },
});

const RecordVideo = ({ previewVideo, setPreviewVideo }) => {
  const [toggleState, setToggleState] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [save, setSave] = useState(false);
  console.log("status", checkStatus);
  const classes = useStyles();
  const history = useHistory();
  const handleUploadClick = () => {
    if (!checkStatus) {
      setCheckError(true);
    } else if (checkStatus && !checkError) {
      history.push("/thankyou");
    }
  };

  const handleSave = () => {
    setSave(true);
    toast.success("Saved succesfully");
    setTimeout(() => {
      setPreviewVideo(false);
    }, 2000);
  };

  const handleDiscardVideo = () => {
    toast.success("Video discarded succesfully");
    setTimeout(() => {
      setPreviewVideo(false);
    }, 2000);
  };

  return (
    <div className="record-video-container">
      {previewVideo ? (
        <>
          <div className="record-title">RECORD YOUR VIDEO {`>`} PREVIEW</div>
          <div className="video-div">
            <iframe
              width="100%"
              height="400"
              src={video}
              title="shark"
            ></iframe>
          </div>
          <div className="allowed-time">
            MAX RECORD TIME ALLOWED : 02:00 minutes
          </div>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <button className="record-buttons" onClick={handleSave}>
                SAVE FOR LATER
              </button>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <button className="record-buttons" onClick={handleDiscardVideo}>
                DISCARD
              </button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <div className="record-title">RECORD YOUR VIDEO</div>
          <div className="video-div">
            <div className="record-div record-div-desktop">
              <img src={recordVideoDesktop} alt="Record video" />
            </div>
            <div className="record-div record-div-mobile">
              <img src={recordVideoMobile} alt="Record video" />
            </div>
          </div>
          <div className="allowed-time">
            MAX RECORD TIME ALLOWED : 02:00 minutes
          </div>
          <Grid container>
            <Grid item md={4} sm={12} xs={12}>
              <button
                className="record-buttons"
                onClick={() => setPreviewVideo(true)}
              >
                PREVIEW
              </button>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <button className="record-buttons">SAVE FOR LATER</button>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <button
                className="record-buttons"
                // onClick={() => setPreviewVideo(false)}
              >
                DISCARD
              </button>
            </Grid>
          </Grid>
        </>
      )}

      <div className="terms-conditions">
        <div className="terms-div">
          <Checkbox
            onChange={() => {
              setCheckStatus(!checkStatus);
              setCheckError(false);
            }}
            className={`${checkError ? `error` : ``}`}
            checked={checkStatus}
          />
          <div className="agreement-div">
            I agree to have read the -{" "}
            <span onClick={() => setToggleState(!toggleState)}>Disclaimer</span>{" "}
          </div>
        </div>
        {checkError ? (
          <div className="error-span">
            Please read and accept the disclaimer checkbox
          </div>
        ) : (
          <></>
        )}
      </div>

      <button className="upload-button" onClick={handleUploadClick}>
        UPLOAD THIS VIDEO
      </button>
      <div className="saved-jadu-container">
        <VideoCarousel title="MY SAVED JADU'S" />
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
              <button
                onClick={() => {
                  setCheckStatus(true);
                  setCheckError(false);
                  setToggleState(false);
                }}
              >
                I ACCEPT
              </button>
            </div>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </div>
  );
};

export default RecordVideo;
