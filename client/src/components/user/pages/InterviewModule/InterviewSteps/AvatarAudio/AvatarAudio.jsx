import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import { Grid, Checkbox, SwipeableDrawer } from "@mui/material";
import InterviewImages from "../../../../../../assets/interviewModule/avatarImages.jpg";
import RecordButtonDesktop from "../../../../../../assets/interviewModule/holdButtonDesktop.gif";
import RecordButtonMobile from "../../../../../../assets/interviewModule/holdButtonMobile.gif";
import { makeStyles } from "@mui/styles";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import avatarOne from "../../../../../../assets/avatar/avatar1.png";
import avatarTwo from "../../../../../../assets/avatar/avatar2.png";
import avatarThree from "../../../../../../assets/avatar/avatar3.png";
import avatarFour from "../../../../../../assets/avatar/avatar4.png";
import avatarFive from "../../../../../../assets/avatar/avatar5.png";
import avatarSix from "../../../../../../assets/avatar/avatar6.png";
import avatarSeven from "../../../../../../assets/avatar/avatar7.png";
import avatarEight from "../../../../../../assets/avatar/avatar8.png";
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
  const handleSelectAvatar = (avatar) => {
    setAvatar(avatar);
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
                          <div
                            className={`avatar-div ${
                              avatar === "avatarOne" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarOne}
                              onClick={() => handleSelectAvatar("avatarOne")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarTwo" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarTwo}
                              onClick={() => handleSelectAvatar("avatarTwo")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarThree" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarThree}
                              onClick={() => handleSelectAvatar("avatarThree")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarFour" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarFour}
                              onClick={() => handleSelectAvatar("avatarFour")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarFive" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarFive}
                              onClick={() => handleSelectAvatar("avatarFive")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarSix" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarSix}
                              onClick={() => handleSelectAvatar("avatarSix")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarSeven" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarSeven}
                              onClick={() => handleSelectAvatar("avatarSeven")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          <div
                            className={`avatar-div ${
                              avatar === "avatarEight" ? "selectedAvatar" : ""
                            }`}
                          >
                            <img
                              src={avatarEight}
                              onClick={() => handleSelectAvatar("avatarEight")}
                              alt="avatar"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className="image-div image-div-desktop">
                      <img src={RecordButtonDesktop} alt="Press to record" />
                    </div>
                    <div className="image-div image-div-mobile">
                      <img src={RecordButtonDesktop} alt="Press to record" />
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
