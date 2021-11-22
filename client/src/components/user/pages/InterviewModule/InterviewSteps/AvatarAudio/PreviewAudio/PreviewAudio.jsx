import React, { useState } from "react";
import { Grid, Checkbox, SwipeableDrawer } from "@mui/material";
// import Avatar from "../../../../../../../assets/interviewModule/avatar.jpg";
import avatar from "../../../../../../../assets/interviewModule/avatar.gif";
import Disclaimer from "../../../../../partails/disclaimerDrawer";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import "./styles.scss";

const PreviewAudio = ({
  // avatar,
  setAvatar,
  checkStatus,
  setCheckStatus,
  checkError,
  setCheckError,
  setPreviewAudio,
  previewAudio,
  toggleState,
  setToggleState,
}) => {
  const [textValue, setTextValue] = useState(
    "My bissgest goat would be to fast-track my deliverables I"
  );
  const history = useHistory();
  // const [toggleState, setToggleState] = useState(false);
  // const [checkStatus, setCheckStatus] = useState(false);
  // const [checkError, setCheckError] = useState(false);

  const [save, setSave] = useState(false);
  const handleUploadClick = () => {
    if (!checkStatus) {
      setCheckError(false);
    } else if (checkStatus && !checkError) {
      history.push("/thankyou");
    }
  };

  const handleSave = () => {
    setSave(true);
    toast.success("Saved succesfully");
    setTimeout(() => {
      setPreviewAudio(false);
    }, 2000);
  };
  return (
    <>
      <div className="avatar-header">
        <div className="avatar-title">
          RECORD AUDIO WITH AVATAR <span className="preview-span">{`>`}</span>{" "}
          PREVIEW
        </div>
      </div>
      <div className="avatar-image">
        <img src={avatar} alt="" />
      </div>

      <div className="suggestion-title">DO YOU MEAN THIS:</div>
      <div className="suggestion-div">
        <TextField
          // id="outlined-multiline-static"
          // label="Multiline"
          className="review-textfield"
          multiline
          autoFocus
          rows={4}
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
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <button className="record-buttons" onClick={handleSave}>
            SAVE FOR LATER
          </button>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <button
            className="record-buttons"
            onClick={() => setPreviewAudio(false)}
          >
            DISCARD
          </button>
        </Grid>
      </Grid>
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

      {/* {toggleState && (
        <Disclaimer
          toggleState={toggleState}
          setToggleState={setToggleState}
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
        />
      )} */}
    </>
  );
};

export default PreviewAudio;
