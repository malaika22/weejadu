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
import { Link } from "react-router-dom";
import './styles.scss'
import { makeStyles } from "@mui/styles";
import { Grid} from "@mui/material";


const useStyles = makeStyles({
  gridContainer : {
    alignItems : "center"
  }
})

const InterviewModule = () => {
  const interviewData = [
    {
      id: 1,
      title: "Interview competency-1 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: InterviewThumbnail,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: InterviewThumbnail2,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id : 2,
      title: "Interview competency-2 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: InterviewThumbnail,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: InterviewThumbnail2,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id : 3,
      title: "Interview competency-3 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: InterviewThumbnail,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: InterviewThumbnail2,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
    {
      id : 4,
      title: "Interview competency-4 name",
      challenges: 10,
      level: 1,
      videoDetails: [
        {
          img: InterviewThumbnail,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
        {
          img: InterviewThumbnail2,
          videoTitle: "Convinving your parents on your career choice",
          likes: 1279,
        },
      ],
    },
  ];


  const classes = useStyles()
  const [interviewLength, setInterviewLength] = useState(0);
  console.log("interview length", interviewLength);
  console.log(
    interviewData
      .slice(interviewLength, interviewLength + 2)
      .map((detail) => console.log(detail))
  );
  const handleShowMore = () => {
    setInterviewLength(interviewLength + 1);
  };

  const handleShowLess = () => {
    if(interviewLength > 0) {
      setInterviewLength(interviewLength - 1)
    }
  }

  return (
    <div className="interview-home-container bg-wrapper-2">
      <Header image="true" arrow="true" link="/start" />
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
          <div onClick={handleShowMore} className="show-more">
            <KeyboardArrowUpOutlined />
          </div>
          <Grid container className={classes.gridContainer}>
            <Grid item md={7}>
                {interviewData
                  .slice(interviewLength, interviewLength + 2)
                  .map((interviewDetails) => (
                    <Link to={`/interview/${interviewDetails.id}`}>
                      <div className="interview-div-main">
                        <div className="interview-header">
                          <Grid container className={classes.gridContainer}>
                            <Grid item md={3}>
                              <img
                                src={InterviewHeader1}
                                alt={interviewDetails.title}
                              />
                            </Grid>
                            <Grid item md={9}>
                              <div className="header-content">
                                <div className="header-title">
                                  {interviewDetails?.title}
                                </div>
                                <div className="level-div">
                                  <span>{interviewDetails?.challenges} CHALLENGES</span>
                                  <span className="level">LEVEL - {interviewDetails?.level} </span>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div className="interview-body">
                          {interviewDetails.videoDetails.map((video) => (
                            <div className="interview-div">
                              <Grid container className={classes.gridContainer}>
                                <Grid item md={3}>
                                  <img src={video?.img} title={video.videoTitle} />
                                </Grid>
                                <Grid item md={9}>
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
                            </div>
                          ))}
                          <div className="load-more">Load more</div>
                        </div>
                      </div>
                    </Link>
                  ))}

            </Grid>
          </Grid>
          <div className="show-less" onClick={handleShowLess}>
            <KeyboardArrowDownOutlined />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewModule;
