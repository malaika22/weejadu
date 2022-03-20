import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import CartoonOne from "../../../../../../assets/interviewModule/cartoonOne.jpg";
import CartoonTwo from "../../../../../../assets/interviewModule/cartoonTwo.jpg";
import CartoonThree from "../../../../../../assets/interviewModule/cartoonThree.jpg";
import CartoonFour from "../../../../../../assets/interviewModule/cartoonFour.jpg";
import SavedThumbnailOne from "../../../../../../assets/interviewModule/savedThumbnailOne.jpg";
import SavedThumbnailTwo from "../../../../../../assets/interviewModule/savedThumbnailTwo.jpg";
import SavedThumbnailThree from "../../../../../../assets/interviewModule/savedThumbnailThree.jpg";
import "./styles.scss";
import InterviewType from "./InterviewType/InterviewType";
import VideoCarousel from "../../../../partails/videoCarousel/VideoCarousel";

const CartoonText = ({
  interviewType,
  setInterviewType,
  preview,
  setPreview,
}) => {
  return (
    <div className="cartoon-text-container">
      {!interviewType ? (
        <>
          <div className="cartoon-text-header">
            <div className="cartoon-text">
              TYPE TEXT &amp; USE OUR CARTOON TEMPLATES
            </div>
            <div className="instruction">
              DOUBLE-TAP TO START WITH YOUR CARTOON TEMPLATE
            </div>
          </div>
          <div className="cartoon-text-body">
            <Grid container>
              <Grid item md={12} xs={12}>
                <KeyboardArrowUpOutlined className="arrow-icon" />
              </Grid>
              <Grid item md={6} xs={12}>
                <div
                  className="cartoon-div"
                  onClick={() => setInterviewType("panel-interview")}
                >
                  <img src={CartoonOne} alt="Panel interview" />
                  <div className="interview-type">PANEL INTERVIEW</div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div
                  className="cartoon-div"
                  onClick={() => setInterviewType("panel-interview")}
                >
                  <img src={CartoonTwo} alt="Coffee table interview" />
                  <div className="interview-type">COFFEE TABLE INTERVIEW</div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div
                  className="cartoon-div"
                  onClick={() => setInterviewType("panel-interview")}
                >
                  <img src={CartoonThree} alt="Individual interview" />
                  <div className="interview-type">INDIVIDUAL INTERVIEW</div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div
                  className="cartoon-div"
                  onClick={() => setInterviewType("panel-interview")}
                >
                  <img src={CartoonFour} alt="Panel inerview" />
                  <div className="interview-type">WHITEBOARD INTERVIEW</div>
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <KeyboardArrowDownOutlined className="arrow-icon" />
              </Grid>
            </Grid>
            <div className="saved-jadu-container">
              <VideoCarousel title="My Saved Jadu's" />
            </div>
          </div>
        </>
      ) : (
        <InterviewType setPreview={setPreview} preview={preview} />
      )}
    </div>
  );
};

export default CartoonText;
