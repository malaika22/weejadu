import React, { useState } from "react";
import {
  ArrowRight,
  ArrowForwardIosOutlined,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import Header from "../../partails/header/index";
import Footer from "../../partails/footer/index";
import InterviewHeader1 from "../../../../assets/interviewModule/interviewHeader1.jpg";
import InterviewThumbnail from "../../../../assets/interviewModule/interviewThumbnail.jpg";
import InterviewThumbnail2 from "../../../../assets/interviewModule/interviewThumbnail2.jpg";
import backPack from "../../../../assets/interviewModule/backPack.jpg";
import laptop from "../../../../assets/interviewModule/laptop.jpg";
import { ChevronRight, PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./styles.scss";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
});

const InterviewModule = () => {
  const interviewData = [
    {
      id: 1,
      title: "Interview competency-1 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: backPack,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: laptop,
          videoTitle: "Convinving your parents on your career choice",
          likes: 180,
        },
      ],
    },
    {
      id: 2,
      title: "Interview competency-2 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: backPack,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: laptop,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id: 3,
      title: "Interview competency-3 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: backPack,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: laptop,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id: 4,
      title: "Interview competency-4 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: backPack,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: laptop,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id: 5,
      title: "Interview competency-5 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: backPack,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: laptop,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
  ];

  const classes = useStyles();
  const [interviewLength, setInterviewLength] = useState(0);
  const [videoLength, setVideoLength] = useState(0);

  const handleShowMore = () => {
    if (interviewLength < interviewData.length - 2) {
      setInterviewLength(interviewLength + 1);
    } else {
      setInterviewLength(0);
    }
  };

  const handleShowLess = () => {
    if (interviewLength > 0) {
      setInterviewLength(interviewLength - 1);
    } else {
      setInterviewLength(interviewData.length - 2);
    }
  };

  return (
    <div className="interview-home-container bg-wrapper-2">
      <Header image="true" arrow="true" link="/home" />
      <div className="interview-container">
        <div className="interview-header">
          <div className="jadu-title">
            <span className="do-span">Do</span>
            <span className="jadu-span">Jadu</span>
            <ArrowRight className="arrow-right-icon" />
          </div>
          <div className="challenges-title">CHALLENGES THAT UP YOUR SKILLS</div>
          <div className="interviews-length">
            <span className="interview-span">INTERVIEWS</span>
            <span className="videos-span">1254 VIDEOS</span>
          </div>
        </div>
        <div className="interview-content">
          <div onClick={handleShowLess} className="show-more">
            <KeyboardArrowUpOutlined />
          </div>
          <Grid container className={classes.gridContainer}>
            <Grid item md={8} xs={12}>
              {interviewData
                .slice(interviewLength, interviewLength + 2)
                .map((interviewDetails) => (
                  <div className="interview-div-main">
                    <Grid container>
                      <Grid item md={5} xs={12}>
                        <div className="interview-header">
                          <Grid container className={classes.gridContainer}>
                            <Grid item md={12} xs={3}>
                              <img
                                src={InterviewHeader1}
                                alt={interviewDetails.title}
                              />
                            </Grid>
                            <Grid item md={12} xs={10}>
                              <div className="header-content">
                                <div className="header-title">
                                  {interviewDetails?.title}
                                </div>
                                <div className="level-div">
                                  <span>
                                    {interviewDetails?.challenges} CHALLENGES
                                  </span>
                                  <span className="level">
                                    LEVEL - {interviewDetails?.level}{" "}
                                  </span>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item md={7}>
                        <div className="interview-body">
                          <div className="load-more-desktop">
                            <KeyboardArrowUpOutlined />{" "}
                          </div>
                          <Grid container>
                            {interviewDetails.videoDetails.map((video) => (
                              <Grid item md={12} xs={12} className="grid-item">
                                <div className="interview-div">
                                  <Link
                                    to={`/jadu-interviews/interview/${interviewDetails.id}`}
                                  >
                                    <Grid
                                      container
                                      className={classes.gridContainer}
                                    >
                                      <Grid item md={3} xs={3}>
                                        <div className="image-overlay">
                                          <PlayCircle />
                                          <img
                                            src={video?.img}
                                            title={video.videoTitle}
                                            alt="img"
                                          />
                                        </div>
                                      </Grid>
                                      <Grid item md={9} xs={9}>
                                        <div className="video-content">
                                          <div className="video-title">
                                            {video?.videoTitle}
                                          </div>
                                          <div className="likes-count">
                                            LIKES : {video.likes}
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </Link>
                                </div>
                              </Grid>
                            ))}
                          </Grid>
                          <div className="load-more-desktop">
                            <KeyboardArrowDownOutlined />{" "}
                          </div>
                          <div className="load-more">Load more</div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ))}
            </Grid>
          </Grid>
          <div className="show-less" onClick={handleShowMore}>
            <KeyboardArrowDownOutlined />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewModule;
