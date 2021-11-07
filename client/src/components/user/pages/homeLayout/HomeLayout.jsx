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
import Cadila from "../../../../assets/home/caldia.jpg";
import { ArrowRight, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./styles.scss";

const optionsData = [
  {
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

const useStyles = makeStyles({
  gridItem: {
    textAlign: "center",
  },
});
const HomeLayout = () => {
  const [homeOptionsm, setHomeOptions] = useState([...optionsData]);
  const classes = useStyles();

  return (
    <div className="home-container bg-wrapper-1 ">
      <Header image="true" arrow="true" link="/start" />
      <div className="home-content">
        <Grid container>
          <Grid item md={10} xs={12}>
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
        </Grid>
        <div className="jadu-options-container">
          <Grid container>
            <Grid item md={6} sm={12}>
              <div className="option-div">
                <Grid container>
                  <Grid item md={3} sm={3} xs={12} className={classes.gridItem}>
                    <img src={OptionOne} alt="Sponsored Job Interview" />
                  </Grid>
                  <Grid item md={9} sm={9} xs={12}>
                    <div className="option-tab">
                      <div className="sponsor-div">
                        <div className="option">
                          <img src={Cadila} alt="Cadila" />
                          <span className="title">Sponsered Job Interview</span>
                          <span className="icon-span">
                            <ArrowForwardIosOutlined />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div></div>

                    <div className="options-situation">
                      for Cadilla Medical Represeentatives
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            {window.innerWidth > 600 ? (
              homeOptionsm.map((option) => (
                <Grid item md={6} sm={12}>
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
                            <span className="title">{option?.title}</span>
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
                </Grid>
              ))
            ) : (
              <></>
            )}
          </Grid>
          <div className="view-more">View All</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
