import React, { useState } from "react";
import cartoonInterview from "../../../../../../../assets/interviewModule/cartoonInterview.gif";
import interview from "../../../../../../../assets/interviewModule/cartoon.png";
import { Grid, Checkbox, SwipeableDrawer } from "@mui/material";
import Disclaimer from "../../../../../partails/disclaimerDrawer";
import { useHistory } from "react-router";
import "./styles.scss";
import { VolumeUpOutlined, VolumeOffOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VideoCarousel from "../../../../../partails/videoCarousel/VideoCarousel";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  gridItems: {
    margin: "auto",
  },
  gridBorderItems: {
    borderBottom: "1px solid white",
  },
});

const InterviewType = ({ title, preview, setPreview }) => {
  const [textValue, setTextValue] = useState(
    "I'm a smart worker, one who sets goals and is constantly working towards his/her goals. I also understands the importance of unwinding and keeping a healthy mind."
  );
  const [toggleState, setToggleState] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [muteType, setMuteType] = useState(false);
  // const [preview, setPreview] = useState(false);
  const history = useHistory();
  const handleChangeRoute = () => {
    if (!checkStatus) {
      setCheckError(true);
    } else if (checkStatus && !checkError) {
      history.push("/thankyou");
    }
  };
  return (
    <div className="interviewType-container">
      <div className="interview-body">
        <div className="interview-header">
          TYPE TEXT &amp; USE OUR CARTOON TEMPLATES
          {preview ? (
            muteType ? (
              <span className="mute-button" onClick={() => setMuteType(false)}>
                <VolumeUpOutlined />
              </span>
            ) : (
              <span className="mute-button" onClick={() => setMuteType(true)}>
                <VolumeOffOutlined />
              </span>
            )
          ) : (
            <></>
          )}
        </div>
        {preview ? (
          <div className="interview-type">
            INDIVIDUAL INTERVIEW <span>{`>`}</span> PREVIEW
          </div>
        ) : (
          <div className="interview-type">INDIVIDUAL INTERVIEW</div>
        )}

        <Grid container>
          <Grid item md={10} xs={12}>
            <div className="cartoon-div">
              {!preview ? (
                <img src={interview} alt="Interview type" />
              ) : (
                <img src={cartoonInterview} alt="Interview type" />
              )}
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6}>
            <div className="person-type">INTERVIEWER</div>
          </Grid>
          <Grid item md={6}>
            <div className="person-type">CANDIDATE</div>
          </Grid>
        </Grid>
      </div>
      <div className="message-div">
        <TextField
          // id="outlined-multiline-static"
          // label="Multiline"
          className="review-textfield"
          multiline
          autoFocus
          rows={6}
          variant="outlined"
          onFocus={function (e) {
            var val = e.target.value;
            e.target.value = "";
            e.target.value = val;
          }}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
      </div>
      <div className="actions-div">
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
        <Grid container>
          <Grid item md={4}>
            <button className="action-button" onClick={() => setPreview(true)}>
              PREVIEW
            </button>
          </Grid>
          <Grid item md={4}>
            <button className="action-button" onClick={handleChangeRoute}>
              UPLOAD THIS RESPONSE
            </button>
          </Grid>
        </Grid>
      </div>
      <div className="saved-jadu-container">
        <VideoCarousel title="My Saved Jadu's" />
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

export default InterviewType;
