import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import { Grid, Checkbox, SwipeableDrawer } from "@mui/material";
import InterviewImages from "../../../../../../assets/interviewModule/avatarImages.jpg";
import RecordButton from "../../../../../../assets/interviewModule/holdButton.gif";
import { makeStyles } from "@mui/styles";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import avatarOne from "../../../../../../assets/avatarOne.png";
import avatarTwo from "../../../../../../assets/avatarTwo.png";
import avatarThree from "../../../../../../assets/avatarThree.jpg";
import avatarFour from "../../../../../../assets/avatarFour.jpg";
import avatarFive from "../../../../../../assets/avatarFive.jpg";
import avatarSix from "../../../../../../assets/avatarSix.jpg";
import avatarSeven from "../../../../../../assets/avatarSeven.jpg";
import avatarEight from "../../../../../../assets/avatarEight.jpg";
import PreviewAudio from "./PreviewAudio/PreviewAudio";
import VideoCarousel from "../../../../partails/videoCarousel/VideoCarousel";
import { toast } from "react-toastify";
import Disclaimer from "../../../../partails/disclaimerDrawer";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  slider: {
    borderRadius: "20px 20px 0 0",
  },
});

const AvatarAudio = ({ previewAudio, setPreviewAudio }) => {
  const history = useHistory();
  const [toggleState, setToggleState] = useState(false);
  //const [previewAudio, setPreviewAudio] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const classes = useStyles();
  const handleUploadClick = () => {
    if (!checkStatus) {
      setCheckError(true);
    } else if (checkStatus && !checkError) {
      history.push("/thankyou");
    }
  };

  console.log("check status", checkStatus);
  const handlePreview = () => {
    if (!avatar) {
      toast.error("Please select an avatar");
    } else {
      setPreviewAudio(true);
    }
  };
  const handleSelectAvatar = (image) => {
    console.log("image", image.target.src);
    // const img = URL.createObjectURL(image.src);
    setAvatar(image.target.src);
    // setAvatar(img);
  };
  console.log("avatar", avatar);
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
                    <div className="avatarContainer">
                      <Grid container>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarOne}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarTwo}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarThree}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarFour}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarFive}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarSix}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarSeven}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div className="avatar-div">
                            <img
                              src={avatarEight}
                              onClick={handleSelectAvatar}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className="image-div">
                      <img src={RecordButton} alt="Press to record" />
                      <div className="record-label record-desktop">
                        Click to record
                      </div>
                      <div className="record-label record-mobile">
                        Hold &amp; press to record
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div className="build-avatar">
                <span className="tags"> BUILD YOUR OWN AVATAR </span>{" "}
                <span className="seperator">|</span>{" "}
                <span className="tags">ADD YOUR AVATAR</span>
              </div>
              <div className="record-time">
                MAX RECORD TIME ALLOWED : 02 : 00 minutes
              </div>
              <div className="buttons-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <button
                      className="video-option-buttons"
                      onClick={handlePreview}
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
                    <span onClick={() => setToggleState(!toggleState)}>
                      Disclaimer
                    </span>{" "}
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
            </>
          ) : (
            <PreviewAudio
              setAvatar={setAvatar}
              avatar={avatar}
              checkStatus={checkStatus}
              setCheckStatus={setCheckStatus}
              checkError={checkError}
              setCheckError={setCheckError}
              previewAudio={previewAudio}
              setPreviewAudio={setPreviewAudio}
              toggleState={toggleState}
              setToggleState={setToggleState}
            />
          )}
        </div>
        <div className="saved-jadu-container">
          <VideoCarousel title="My Saved Jadu's" />
        </div>
      </div>
      {toggleState && (
        <Disclaimer
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
          toggleState={toggleState}
          setToggleState={setToggleState}
          setCheckError={setCheckError}
        />
      )}
    </div>
  );
};

export default AvatarAudio;
