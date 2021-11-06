import React from "react";
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
import "./index.css";
const CareerGrowth = () => {
  return (
    <>
      <section className="career-growth-wrapper bg-wrapper-2">
        <Header image="true" arrow="true" link="/start" />
        <div className="career-growth">
          <div>
            <h2>
              Employability, Promotion <br /> &amp; Career Growth
            </h2>
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
            <h4>
              Jobs that require <br />
              specific skills
            </h4>
            <div className="search-box">
              <input type="text" placeholder="Search by skills" />
              <button>
                <Search />
              </button>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search by industry" />
              <button>
                <Search />
              </button>
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
          </div>
        </div>
      </section>
    </>
  );
};
export default CareerGrowth;
