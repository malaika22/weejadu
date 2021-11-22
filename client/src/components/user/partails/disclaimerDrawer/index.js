import React from "react";
import DisclaimerImg from "../../../../assets/interviewModule/disclaimer.jpg";
import { SwipeableDrawer, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
  slider: {
    borderRadius: "20px 20px 0 0",
  },
});

const Disclaimer = ({
  toggleState,
  setToggleState,
  checkStatus,
  setCheckStatus,
  setCheckError,
}) => {
  const classes = useStyles();
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={toggleState}
        onClose={() => setToggleState(false)}
        onOpen={() => setToggleState(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        className={classes.slider}
      >
        <Grid container>
          <Grid item md={8} xs={12}>
            <div className="disclaimer-div">
              <div className="cross-icon" onClick={() => setToggleState(false)}>
                {" "}
                <span>X</span>
              </div>
              <div className="disclaimer">DISCLAIMER : </div>
              <img src={DisclaimerImg} alt="disclaimer" />
              <div className="disclaimer-points">
                1. I agree to the Terms of Condition and Terms of Privacy state
                herein
              </div>
              <div className="disclaimer-points">
                2. I am the original creaor of this video, and its content,
                audio/graphics and am not violating any third party copyrights
                by posting this video.
              </div>
              <div className="disclaimer-points">
                3. I have taken adequate care in using language or visual
                element that it doesnt offent others, is abusive, sexist,
                casteist or hurts religious sentiments.
              </div>
              <div className="disclaimer-points">
                I acknowledge that Wejadu team will screen all uploaded videos
                and may not approve videos that may be deemed objectionable, at
                the sole discretion of the <span>Wejadu management</span>
              </div>
              <button
                onClick={() => {
                  setCheckStatus(true);
                  setCheckError(false);
                  setToggleState(false);
                }}
              >
                I ACCEPT
              </button>
            </div>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </>
  );
};

export default Disclaimer;
