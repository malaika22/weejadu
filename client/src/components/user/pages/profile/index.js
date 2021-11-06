import React, { useState } from "react";
import Header from "../../partails/header";
import Footer from "../../partails/footer";
import { Button, Grid } from "@mui/material";
import Experience from "./partials/experience";
import Industry from "./partials/industry";
import Interest from "./partials/interest";
import "./index.css";
const Profile = () => {
  const [experience, setexperience] = useState(true);
  const [industry, setindustry] = useState(false);
  const [interest, setinterest] = useState(false);
  const experiencePreview = () => {
    setexperience(!experience);
    setindustry(!industry);
  };
  const industryPreview = () => {
    setindustry(!industry);
    setinterest(!interest);
  };
  const industryBackPreview = () => {
    setindustry(!industry);
    setexperience(!experience);
  };
  const interestBackPreview = () => {
    setinterest(!interest);
    setindustry(!industry);
  };
  return (
    <section className="create-profile-wrapper bg-wrapper-2">
      {industry ? (
        <Header image="true" arrow="true" func={industryBackPreview} />
      ) : interest ? (
        <Header image="true" arrow="true" func={interestBackPreview} />
      ) : (
        <Header image="true" arrow="true" link="/start" />
      )}
      <div className="create-profile">
        <Grid container>
          <Grid item xs={12}>
            {experience && <Experience toggle={experiencePreview} />}
            {industry && <Industry toggle={industryPreview} />}
            {interest && <Interest />}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </section>
  );
};
export default Profile;
