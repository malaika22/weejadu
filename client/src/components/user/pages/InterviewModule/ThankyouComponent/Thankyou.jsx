import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import {
  ArrowRight,
  ArrowForwardIosOutlined,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import Response from "../../../../../assets/interviewModule/response.jpg";
import responseTwo from "../../../../../assets/interviewModule/response2.jpg";
import responseThree from "../../../../../assets/interviewModule/response3.jpg";
import responseFour from "../../../../../assets/interviewModule/response4.jpg";
import responseFive from "../../../../../assets/interviewModule/response5.jpg";
import responseSix from "../../../../../assets/interviewModule/response6.jpg";
import clock from "../../../../../assets/interviewModule/clock.jpg";
import Header from "../../../partails/header/index";
import { makeStyles } from "@mui/styles";
import VideoCarousel from "../../../partails/videoCarousel/VideoCarousel";
import "./styles.scss";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  gridItems: {
    margin: "auto",
  },
  gridBorderItems: {
    borderBottom: "1px solid white",
  },
});

const Thankyou = () => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  setTimeout(() => {
    setLoading(false);
  }, 5000);
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
        <div className="result-container">
          <div className="received-response">
            <Grid container>
              <Grid item md={8} xs={12} className={classes.gridItems}>
                <div className="test-response">
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <img src={Response} />
                    </Grid>
                    <Grid container>
                      <Grid item md={8} sx={12}>
                        <div className="wait-notice">
                          WE HAVE RECEIVED YOUR REPONSE HOLD ON, WHILE WE
                          PREPARE YOUR RESULT
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <Grid item md={12} xs={12}>
                  <div className="analysis-div">
                    <div className="response-analysis">
                      SENTICLOUD ANALYSIS FOR YOUR RESPONSE A315
                    </div>
                    <div className="analysis-instructions">
                      The word you chose, express Sentiments. Interviewrs use
                      these to make a HIRE / REJECT decision.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid iten md={8}>
                {loading ? (
                  <Grid container>
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#29bbf6" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>YOU ARE COMING ACROSS AS</h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={4}>
                                    <ThumbUp />
                                  </Grid>
                                  <Grid item md={4}>
                                    <img src={clock} />
                                  </Grid>
                                  <Grid item md={4}>
                                    <ThumbDown />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#7550f5" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>POWER WORDS YOU USED</h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={8}>
                                    <img src={responseTwo} />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#af0303" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>
                                WEAK / NEGATIVE WORDS YOUR SHOULD CONSIDER
                                REPLACING
                              </h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={8}>
                                    <img src={responseThree} />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    {/* Divider */}
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#8fd342" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>YOU CAN TRY TO COME ACROSS AS</h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={8}>
                                    <img src={responseFour} />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#5662f6" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>BY USING THESE POWERFUL WORD</h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={8}>
                                    <img src={responseFive} />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#af0303" }}
                      >
                        <Grid container>
                          <Grid item md={6}>
                            <div className="response-div">
                              <h5>AND AVOIDING THESE WEAK/NEGATIVE WORDS</h5>
                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={8}>
                                    <img src={responseSix} />
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#29bbf6" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={8}>
                                  <h5 className="after-load">
                                    YOU ARE COMING ACROSS AS
                                  </h5>
                                </Grid>
                                <Grid item md={4}>
                                  <ThumbUp className="thumbs-up" />
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      Enthusiastic , Memorable
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#29bbf6" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={8}>
                                  <h5 className="after-load">
                                    YOU ARE COMING ACROSS AS
                                  </h5>
                                </Grid>
                                <Grid item md={4}>
                                  <ThumbDown className="thumbs-up" />
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      Handling tough situations Linkage to Role
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#7550f5" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={12}>
                                  <h5 className="after-load">
                                    POWER WORDS YOU USED
                                  </h5>
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      <div>
                                        "Can't wait", Excited, immediately, My
                                        ambition
                                      </div>
                                      <div>
                                        "Definitely", bang-on, Create value
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#af0303" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={12}>
                                  <h5 className="after-load">
                                    WEAK/NEGATIVE WORDS YOU SHOULD COSNIDER
                                    REPLACING
                                  </h5>
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      Not very comfortable, "Can't
                                      visualize","Let me think about it"
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#8fd342" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={12}>
                                  <h5 className="after-load">
                                    YOU CAN TRY TO COME ACROSS AS
                                  </h5>
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      Result Oriented, Leader Great Self Concept
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#5662f6" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={12}>
                                  <h5 className="after-load">
                                    BY USING THESE POWERFUL WORD
                                  </h5>
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      "Spearheaded","I stand by","very
                                      dooble","finish in no time","am pretty
                                      confident","I like to stay on top of
                                      situation"
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <div
                        className="response-wrapper"
                        style={{ backgroundColor: "#af0303" }}
                      >
                        <Grid container>
                          <Grid item md={8}>
                            <div className="response-div">
                              <Grid
                                container
                                className={classes.gridBorderItems}
                              >
                                <Grid item md={12}>
                                  <h5 className="after-load">
                                    AND AVOIDING THESE WEAK/NEGATIVE WORDS
                                  </h5>
                                </Grid>
                              </Grid>

                              <div className="response-icons">
                                <Grid
                                  container
                                  className={classes.gridContainer}
                                >
                                  <Grid item md={12}>
                                    <div className="review-div">
                                      "Not my cup of
                                      tea","nightmarish,consensus,"awaiting
                                      green-light","try my best"
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                )}
                <div className="response-footer">
                  <Grid container>
                    <Grid item md={4} xs={12}>
                      <button>TRY ANOTHER JADU</button>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <button>SEE OTHERS JADU</button>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <button>MY USER JADUBOARD</button>
                    </Grid>
                  </Grid>
                </div>
                <div className="saved-jadu-container">
                  <VideoCarousel title="EXPLORE EXPERT VIDEOS FOR THIS SKILL" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
