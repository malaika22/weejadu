import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Search, Close } from "@mui/icons-material";
import Logo from "../../../../assets/logo.png";
import BackArrowPurple from "../../../../assets/back-arrow-theme.png";
import BackArrowWhite from "../../../../assets/back-arrow-white.png";
import {useHistory} from "react-router-dom"
import "./index.css";
const Header = ({ image, arrow, color, link, func }) => {
  const [searhboxPreview, setsearhboxPreview] = useState(false);
  const searchBoxHandler = () => {
    setsearhboxPreview(!searhboxPreview);
  };
  const toggleFunction = () => {
    func();
  };


  const history = useHistory()


  const handleRoute = (e) => {
    console.log("in select", e.target.value)
    if(e.target.value === "interview"){
      history.push("/jadu-interviews")

    }
  }
  return (
    <header>
      {arrow === "true" &&
        (func ? (
          <span
            onClick={() => {
              toggleFunction();
            }}
            className="back-arrow"
          >
            {color === "white" ? (
              <img src={BackArrowWhite} alt="" />
            ) : (
              <img src={BackArrowPurple} alt="" />
            )}
          </span>
        ) : (
          <Link to={link} className="back-arrow">
            {color === "white" ? (
              <img src={BackArrowWhite} alt="" />
            ) : (
              <img src={BackArrowPurple} alt="" />
            )}
          </Link>
        ))}
      <Grid container>
        <Grid item xs={2}>
          {image === "true" && (
            <div className="logo-box">
              <Link to="/start">
                <img src={Logo} alt="" />
              </Link>
            </div>
          )}
        </Grid>
        <Grid item xs={8}>
          <div className="search-box-wrapper">
            <div
              className={searhboxPreview ? "search-box active" : "search-box"}
            >
              <select onChange={handleRoute}>
                <option>I want to improve in</option>
                <option value="interview"> 
                  Interviews
                  </option>
                <option>Career Choice</option>
                <option>Bosss Interaction</option>
              </select>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="search-button">
            <button
              onClick={() => {
                searchBoxHandler();
              }}
            >
              {searhboxPreview ? <Close /> : <Search />}
            </button>
            <div
              className={
                searhboxPreview ? "search-box-input active" : "search-box-input"
              }
            >
              <input type="text" placeholder="Search...." />
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;
