import React from "react";
import cartoonMock from "../../../../../../../assets/interviewModule/cartoonMock.jpg";
import { Grid } from "@mui/material";
import "./styles.scss";

const InterviewType = ({ title }) => {
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
              <img src={cartoonMock} alt="Interview type" />
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
        <div className="interview-questions">
          I'm smart worker, one who sets goals and is constantly working towards
          his/her goals, I also understand the importance of unwinding and
          keeping a healthy mmind.
        </div>
      </div>
      <div className="actions-div">
        <Grid container>
          <Grid item md={4}>
            <button className="action-button">PREVIEW</button>
          </Grid>
          <Grid item md={4}>
            <button className="action-button">UPLOAD THIS RESPOSE</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InterviewType;
