import React, { useState } from "react";
import Header from "../../../partails/header";
import { ArrowRight } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "./styles.scss";
import InterviewHome from "./InterviewHome/InterviewHome";
import RecordVideo from "./RecordVideo/RecordVideo";
import "./styles.scss";

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
        return <div>Enoji</div>;
      case 3:
        return <div>Step 3</div>;
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
