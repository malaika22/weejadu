import React from "react";
import Avatar from "../../../../../../../assets/interviewModule/avatar.jpg";
import "./styles.scss";

const PreviewAudio = () => {
  return (
    <>
      <div className="avatar-header">
        <div className="avatar-title">RECORD AUDIO WITH AVATAR</div>
      </div>
      <div className="avatar-image">
        <img src={Avatar} alt="" />
      </div>

      <div className="suggestion-title">DO YOU MEAN THIS:</div>
      <div className="suggestion-div">
        <div className="suggestion">
          My bissgest <span>goat</span> would be to fast-track my deliverables I
        </div>
      </div>
    </>
  );
};

export default PreviewAudio;
