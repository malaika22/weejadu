import React, { useState } from "react";
import Header from "../../partails/header";
import carrerGrowthThumb from "../../../../assets/career-growth-points.png";
import jobThumbnail1 from "../../../../assets/job-1.png";
import jobThumbnail2 from "../../../../assets/job-2.jpg";
import jobThumbnail3 from "../../../../assets/job-3.jpg";
import jobThumbnail4 from "../../../../assets/job-4.jpg";
import jobThumbnail5 from "../../../../assets/job-5.jpg";
import jobThumbnail6 from "../../../../assets/job-6.png";
import jobThumbnail7 from "../../../../assets/job-7.png";
import { Stack, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "./index.css";
import { makeStyles } from "@mui/styles";

const skills = [
  "Leadership",
  "Problem solving",
  "Teamwork",
  "Communication",
  "Organisation",
  "Confidence",
];

const industries = [
  "Leadership",
  "Problem solving",
  "Teamwork",
  "Communication",
  "Organisation",
  "Confidence",
];

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
});
const CareerGrowth = () => {
  const classes = useStyles();
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [filteredIndustry, setFilteredIndustry] = useState([]);
  const handleSearch = (e) => {
    if (e.target.name === "skills") {
      if (e.target.value) {
        const check = skills.filter((skill) => {
          const val = e.target.value.toLocaleLowerCase().split(" ")[0];
          console.log(
            e.target.value.toLocaleLowerCase().split(" ")[0],
            e.target.value,
            skill
          );
          if (skill.toLocaleLowerCase().indexOf(val) !== -1) {
            return true;
          }
        });
        console.log(check);
        setFilteredSkills([...check]);
      } else {
        setFilteredSkills([]);
      }
    } else if (e.target.name === "industry") {
      console.log("in industry", e.target.name, e.target.value);
      if (e.target.value) {
        const check = industries.filter((industry) => {
          const val = e.target.value.toLocaleLowerCase().split(" ")[0];
          if (industry.toLocaleLowerCase().indexOf(val) !== -1) {
            return true;
          }
        });
        console.log(check);
        setFilteredIndustry([...check]);
      } else {
        setFilteredIndustry([]);
      }
    }
  };

  console.log("filtered industry", filteredIndustry);

  return (
    <>
      <section className="career-growth-wrapper bg-wrapper-2">
        <Header image="true" arrow="true" link="/start" />
        <div className="career-growth">
          <div>
            <Grid container className={classes.gridContainer}>
              <Grid item md={12} xs={12}>
                <h2>
                  Employability, Promotion <br /> &amp; Career Growth
                </h2>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="career-growth-points">
                  <img src={carrerGrowthThumb} alt="" />
                  <div className="career-growth-point advisory">
                    <h5>Advisory Selling</h5>
                    <p>for consulting companies</p>
                  </div>
                  <div className="career-growth-point consultative">
                    <h5>Consultative Selling</h5>
                    <p>for Telecom</p>
                  </div>
                  <div className="career-growth-point presuasive">
                    <h5>presuasive communication</h5>
                    <p>for BPOs</p>
                  </div>
                  <div className="career-growth-point negotiation">
                    <h5>Senior Negotiation Skills for</h5>
                    <p>Purchase teams</p>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <h4>
                  Jobs that require <br />
                  specific skills
                </h4>
                <div className="search-box-container">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search by skills"
                      onChange={handleSearch}
                      name="skills"
                    />
                    <button>
                      <Search />
                    </button>
                  </div>
                  {filteredSkills?.length ? (
                    <div className="filtered-skills-div">
                      {filteredSkills.map((skill) => (
                        <div className="skill-option">{skill}</div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="search-box-container">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search by industry"
                      onChange={handleSearch}
                      name="industry"
                    />
                    <button>
                      <Search />
                    </button>
                  </div>
                  {filteredIndustry?.length ? (
                    <div className="filtered-industry-div">
                      {filteredIndustry.map((skill) => (
                        <div className="skill-option">{skill}</div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "center" }}
                >
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail1}
                  />
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail2}
                  />
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail3}
                  />
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail4}
                  />
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "center" }}
                >
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail5}
                  />
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail6}
                  />
                  <Avatar
                    alt="genpact"
                    className="career-thumbnail"
                    src={jobThumbnail7}
                  />
                </Stack>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
};
export default CareerGrowth;
