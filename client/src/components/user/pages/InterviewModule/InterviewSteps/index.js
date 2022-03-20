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
  const [interviewHomePreview, setInterviewHomePreivew] = useState(true);
  const [recordVideoPreview, setRecordPreview] = useState(false);
  const [avatarAudioPreview, setAvatarAudioPreview] = useState(false);
  const [cartoonTextPreview, setCartoonTextPreview] = useState(false);
  const [previewAudio, setPreviewAudio] = useState(false);
  const [previewCartoon, setPreviewCatroon] = useState(false);
  const [interviewType, setInterviewType] = useState("");
  const [previewVideo, setPreviewVideo] = useState(false);
  console.log("steps", steps, previewAudio);
  const renderInterviewContent = () => {
    switch (steps) {
      case 0:
        return <InterviewHome setSteps={setSteps} steps={steps} />;
      case 1:
        return (
          <RecordVideo
            previewVideo={previewVideo}
            setPreviewVideo={setPreviewVideo}
          />
        );
      case 2:
        return (
          <AvatarAudio
            previewAudio={previewAudio}
            setPreviewAudio={setPreviewAudio}
          />
        );
      case 3:
        return (
          <CartoonText
            interviewType={interviewType}
            setInterviewType={setInterviewType}
            preview={previewCartoon}
            setPreview={setPreviewCatroon}
          />
        );
      default:
        <></>;
    }
  };
  return (
    <div className="interview-steps-container bg-wrapper-2">
      {steps === 0 ? (
        <Header image="true" arrow="true" link="/jadu-interviews" />
      ) : previewAudio ? (
        <Header image="true" arrow="true" func={() => setPreviewAudio(false)} />
      ) : previewCartoon ? (
        <Header
          image="true"
          arrow="true"
          func={() => setPreviewCatroon(false)}
        />
      ) : interviewType ? (
        <Header image="true" arrow="true" func={() => setInterviewType("")} />
      ) : previewVideo ? (
        <Header image="true" arrow="true" func={() => setPreviewVideo(false)} />
      ) : (
        <Header image="true" arrow="true" func={() => setSteps(0)} />
      )}

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
