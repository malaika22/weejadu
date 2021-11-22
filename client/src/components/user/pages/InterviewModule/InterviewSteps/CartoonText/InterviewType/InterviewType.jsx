import React, { useState } from "react";
import cartoonInterview from "../../../../../../../assets/interviewModule/cartoonInterview.gif";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";
import "./styles.scss";
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

const InterviewType = ({ title }) => {
  const [textValue, setTextValue] = useState(
    "I'm a smart worker, one who sets goals and is constantly working towards his/her goals. I also understands the importance of unwinding and keeping a healthy mind."
  );

  const history = useHistory();
  const handleChangeRoute = () => {
    history.push("/thankyou");
  };
  return (
    <div className="interviewType-container">
      <div className="interview-body">
        <div className="interview-header">
          TYPE TEXT &amp; USE OUR CARTOON TEMPLATES
        </div>
        <div className="interview-type">INDIVIDUAL INTERVIEW</div>
        <Grid container>
          <Grid item md={10} xs={12}>
            <div className="cartoon-div">
              <img src={cartoonInterview} alt="Interview type" />
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
        <Grid container>
          <Grid item md={4}>
            <button className="action-button">PREVIEW</button>
          </Grid>
          <Grid item md={4}>
            <button className="action-button" onClick={handleChangeRoute}>
              UPLOAD THIS RESPOSE
            </button>
          </Grid>
        </Grid>
      </div>
      <div className="saved-jadu-container">
        <VideoCarousel title="My Saved Jadu's" />
      </div>
    </div>
  );
};

export default InterviewType;
