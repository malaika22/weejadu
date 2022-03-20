import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Menu, MenuItem } from "@mui/material";
import { Search, Close, ArrowDropDown } from "@mui/icons-material";
import Logo from "../../../../assets/logo.png";
import BackArrowPurple from "../../../../assets/back-arrow-theme.png";
import { ArrowDownward } from "@mui/icons-material";
import BackArrowWhite from "../../../../assets/back-arrow-white.png";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    alignItems: "center",
  },
});
const Header = ({ image, arrow, color, link, func }) => {
  const location = useLocation();
  const optionType = location.pathname.split("/")[1];
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // const user = JSON.parse()
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(optionType);
  const history = useHistory();
  const [searhboxPreview, setsearhboxPreview] = useState(false);
  const searchBoxHandler = () => {
    setsearhboxPreview(!searhboxPreview);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleFunction = () => {
    func();
  };

  const handleClick = (e) => {
    setAnchorEl(e.target);
    setOpen(!open);
  };
  const renderSelectOptions = () => {
    console.log(optionType);
    switch (optionType) {
      case "jadu-interviews":
        return (
          <select onChange={handleRoute}>
            <option value="" disabled selected>
              Interviews
            </option>
            <option value="interview">Memorability</option>
            <option>Enthusiasm</option>
            <option>Achievement orientation</option>
          </select>
        );
      default:
        return (
          <select onChange={handleRoute}>
            <option value="" disabled selected>
              I want to improve in
            </option>
            <option value="interview">Interviews</option>
            <option>Career Choice</option>
            <option>Bosss Interaction</option>
          </select>
        );
    }
  };
  const handleRoute = (e) => {
    console.log("in select", e.target.value);
    if (e.target.value === "interview") {
      history.push("/jadu-interviews");
    }
  };
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
      <Grid container className={classes.gridContainer}>
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
              {renderSelectOptions()}
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="right-div">
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
                  searhboxPreview
                    ? "search-box-input active"
                    : "search-box-input"
                }
              >
                <input type="text" placeholder="Search...." />
              </div>
            </div>
            <div className="drop-down-div">
              <button
                className="profile-button"
                onClick={handleClick}
                // onMouseEnter={() => setOpen(true)}
                // onMouseLeave={() => setOpen(false)}
              >
                <AccountCircleOutlined />
              </button>

              {open && (
                <div className="menu-container">
                  <ul>
                    <li>Profile</li>
                    <li>My account</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}

              {/* <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  className="dropdown"
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;
