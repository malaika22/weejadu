import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Header from "../../partails/header";
import VideoPlayer from "../../partails/videoPlayer";
import { Button, Grid } from "@mui/material";
import { ChevronRight, PlayCircle } from "@mui/icons-material";
import CareerGrowthThumbnail from "../../../../assets/career-growth.png";
import videoThumbnail1 from "../../../../assets/video-thumbnail-1.png";
import videoThumbnail2 from "../../../../assets/video-thumbnail-2.png";
import videoThumbnail3 from "../../../../assets/video-thumbnail-3.png";
import videoThumbnail4 from "../../../../assets/video-thumbnail-4.png";
import videoThumbnail5 from "../../../../assets/video-thumbnail-5.png";
import "./index.css";
const Home = () => {
  const [showPlayer, setshowPlayer] = useState(false);
  const showPlayerHandle = () => {
    setshowPlayer(!showPlayer);
  };
  return (
    <section className="home-screen bg-wrapper-2">
      <Header image="true" arrow="true" link="/" />
      <div className="card-box-wrapper">
        <Grid container>
          <Grid item md={6} xs={12}>
            <div className="card-box">
              <h2>Respond to tough situation</h2>
              <h4>Check your skills-on-the-go</h4>
              <p>
                Compare yourself on skills that employers find critical, to hire
                or promote
              </p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="card-box">
              <Grid container>
                <Grid item md={6} xs={12}>
                  <div className="side-image">
                    <img
                      src={CareerGrowthThumbnail}
                      onClick={() => {
                        showPlayerHandle();
                      }}
                      alt="jadu-carrer-growth"
                    />
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <h2>WHY DO - JADU ?</h2>
                  <h4>
                    <Link to="/career-growth">
                      Employability Promotion &amp; Career Growth
                    </Link>
                  </h4>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="card-box">
              <p>Take challenges and respond to situations</p>
              <h6>win iphone &amp; laptops</h6>
              <Marquee
                className="video-items"
                pauseOnHover={true}
                gradient={false}
              >
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail1} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail2} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail3} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail4} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail5} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail1} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail2} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail3} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail4} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail5} alt="" />
                </div>
              </Marquee>
              <Link to="/home">
                <Button>
                  do jadu <ChevronRight />
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="card-box">
              <p>Explore - how other responded to situations</p>
              <h6>and improve your skills</h6>
              <Marquee
                className="video-items"
                pauseOnHover={true}
                gradient={false}
              >
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail1} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail2} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail3} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail4} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail5} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail1} alt="" />
                </div>{" "}
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail2} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail3} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail4} alt="" />
                </div>
                <div
                  className="video-thumbnail"
                  onClick={() => {
                    showPlayerHandle();
                  }}
                >
                  <PlayCircle />
                  <img src={videoThumbnail5} alt="" />
                </div>
              </Marquee>
              <Link to="/buildprofile" className="other-jadu">
                <Button>
                  see other's jadu
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
        <p className="signup-text-wrapper">
          Don't have an account ?<Link to="/signup">Please signup here</Link>
        </p>
      </div>
      {showPlayer && <VideoPlayer toggle={showPlayerHandle} />}
    </section>
  );
};
export default Home;
