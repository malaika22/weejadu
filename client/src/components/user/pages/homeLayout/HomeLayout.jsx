import React, { useEffect, useState } from "react";
import Header from "../../partails/header/index";
import HomeBanner from "../../../../assets/home/homeBanner.jpg";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OptionOne from "../../../../assets/home/optionOne.jpg";
import OptionTwo from "../../../../assets/home/optionTwo.jpg";
import OptionThree from "../../../../assets/home/optionThree.jpg";
import OptionFour from "../../../../assets/home/optionFour.jpg";
import OptionFive from "../../../../assets/home/optionFive.jpg";
import lockVideo from "../../../../assets/interviewModule/lockVideo.jpg";
import Cadila from "../../../../assets/home/caldia.jpg";
import {
  ArrowRight,
  ArrowForwardIosOutlined,
  LockClock,
  Lock,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./styles.scss";
import Footer from "../../partails/footer";

const useStyles = makeStyles({
  gridItem: {
    textAlign: "center",
  },
});
const HomeLayout = () => {
  const optionsData = [
    {
      route: "jadu-interviews",
      title: "JADU INTERVIEWS",
      situations: "1214",
      image: OptionTwo,
    },
    {
      title: "jadu selling",
      situations: 1350,
      image: OptionThree,
    },
    {
      title: "jadu boss interactions",
      situations: "2350",
      image: OptionFour,
    },
    {
      title: "jadu parent covincing",
      situations: "5650",
      image: OptionFive,
    },
  ];
  // const [homeOptionsm, setHomeOptions] = useState([...optionsData]);
  const [homeOptionsLength, setHomeOptionsLength] = useState(0);
  const classes = useStyles();
  const handleShowMore = () => {
    console.log("interview length", optionsData);
    if (homeOptionsLength < optionsData.length - 2) {
      setHomeOptionsLength(homeOptionsLength + 1);
    } else {
      setHomeOptionsLength(0);
    }
  };

  const handleShowLess = () => {
    if (homeOptionsLength > 0) {
      setHomeOptionsLength(homeOptionsLength - 1);
    } else {
      setHomeOptionsLength(optionsData.length - 2);
    }
  };
  return (
    <div className="home-container bg-wrapper-2 ">
      <Header image="true" arrow="true" link="/start" />
      <div className="home-content">
        <Grid container>
          <Grid item md={6} xs={12}>
            <div className="home-banner-container">
              <div className="home-banner">
                <img src={HomeBanner} alt="Home banner" />
              </div>
              <div className="banner-footer">
                <div className="jadu-title">
                  <span className="do-span">Do</span>
                  <span className="jadu-span">Jadu</span>
                  <ArrowRight className="arrow-right-icon" />
                </div>
                <div className="footer-content">
                  <div className="upper-content">
                    CHALLENGES THAT UP TO YOUR SKILLS
                  </div>
                  <div className="bottom-content">
                    Take challenge &amp; win prize every week (top 3 response)
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={6} xs={12}>
            {" "}
            <div className="jadu-options-container">
              <div className="options-container">
                <div onClick={handleShowLess} className="show-more">
                  <KeyboardArrowUpOutlined />
                </div>
                <Grid container>
                  <Grid item md={12} sm={12}>
                    <div className="option-div">
                      <Grid container>
                        <Grid
                          item
                          md={3}
                          sm={3}
                          xs={12}
                          className={classes.gridItem}
                        >
                          <div className="clock-video-div">
                            <img
                              src={lockVideo}
                              alt="Sponsored Job Interview"
                              className="lock-image"
                            />
                            <Lock />
                          </div>
                        </Grid>
                        <Grid item md={9} sm={9} xs={12}>
                          <div className="option-tab">
                            <div className="sponsor-div">
                              <div className="option">
                                <img src={Cadila} alt="Cadila" />

                                <span className="title">
                                  Sponsered Job Interview
                                </span>
                                <span className="icon-span">
                                  <ArrowForwardIosOutlined />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="options-situation">
                            for Cadilla Medical Represeentatives
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  {optionsData
                    .slice(homeOptionsLength, homeOptionsLength + 2)
                    .map((option) => (
                      <Grid item md={12} sm={12}>
                        <Link to={`/${option?.route}`}>
                          <div className="option-div">
                            <Grid container spacing={2}>
                              <Grid
                                item
                                md={3}
                                sm={3}
                                xs={12}
                                className={classes.gridItem}
                              >
                                <img src={option?.image} alt={option?.title} />
                              </Grid>
                              <Grid item md={9} sm={9} xs={12}>
                                <div className="option-tab">
                                  <div className="option">
                                    <span className="title">
                                      {option?.title}
                                    </span>
                                    <span className="icon-span">
                                      <ArrowForwardIosOutlined />
                                    </span>
                                  </div>
                                  <div className="options-situation">
                                    {option?.situations} situations
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
                <div className="show-less" onClick={handleShowMore}>
                  <KeyboardArrowDownOutlined />
                </div>
                <div className="view-more">View All</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
