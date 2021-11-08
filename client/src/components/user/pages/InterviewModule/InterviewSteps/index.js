import React, { useState } from "react";
import Header from "../../../partails/header";
import { ArrowRight } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "./styles.scss";
import InterviewHome from "./InterviewHome/InterviewHome";
import RecordVideo from "./RecordVideo/RecordVideo";
import AvatarAudio from "../InterviewSteps/AvatarAudio/AvatarAudio";
import "./styles.scss";
import CartoonText from "./CartoonText/CartoonText";

const InterviewSteps = () => {
  const [steps, setSteps] = useState(0);
  console.log("steps", steps);
  const renderInterviewContent = () => {
    switch (steps) {
      case 0:
        return <InterviewHome setSteps={setSteps} steps={steps} />;
      case 1:
        return <RecordVideo />;
      case 2:
        return <AvatarAudio />;
      case 3:
        return <CartoonText />;
      default:
        <></>;
    }
  };
  return (
    <div className="interview-steps-container bg-wrapper-2">
      <Header image="true" arrow="true" link="/jadu-interviews" />
      <div className="interview-steps-section">
        <div className="interview-header">
          <div className="jadu-title">
            <span className="do-span">Do</span>
            <span className="jadu-span">Jadu</span>
            <ArrowRight className="arrow-right-icon" />
          </div>
          <div className="interview-level">
            Interview {`>`} ENTHUSIASM {`>`} LEVEL - 1{" "}
          </div>
        </div>
        <div className="interview-steps-body">
          <Grid container>
            <Grid item md={9} xs={12}>
              {renderInterviewContent()}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default InterviewSteps;
