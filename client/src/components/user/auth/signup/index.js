import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Header from "../../partails/header";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import {
  Person,
  Email,
  Room,
  Group,
  Lock,
  Visibility,
  FacebookOutlined,
  Google,
  LinkedIn,
} from "@mui/icons-material";
import "./index.css";
const Signup = () => {
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const [showPassword, setshowPassword] = useState(false);
  const [agreeCheck, setagreeCheck] = useState(false);
  const [userNumber, setUserNumber] = useState("");
  const showPass = () => {
    setshowPassword(!showPassword);
  };
  function userNumberChange(e) {
    setUserNumber(e);
  }
  const onSubmit = (e) => {
    if (agreeCheck === false) {
      toast.error("Please agree our terms & condition and privacy policy");
    } else {
      window.location.replace("/verify");
    }
    e.preventDefault();
  };
  return (
    <>
      <section className="signup-wrapper bg-wrapper-2">
        <Header image="true" arrow="true" link="/start" />
        <div className="signup-box">
          <form className="signup" onSubmit={onSubmit}>
            <h2>SIGN UP/CREATE ACCOUNT</h2>
            <Grid container>
              <Grid item xs={12}>
                <div className="input-wrapper">
                  <Person />
                  <input type="text" required placeholder="Name" />
                </div>
                <div className="input-wrapper">
                  <Email />
                  <input type="email" required placeholder="Email Address" />
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="input-wrapper">
                  <Room />
                  <select required>
                    {state.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="input-wrapper">
                  <Room />
                  <input type="text" required placeholder="city" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="input-wrapper">
                  <Group />
                  <input
                    type="text"
                    required
                    placeholder="Organization/Institutes"
                  />
                </div>
                <div className="input-wrapper">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    placeholder="Enter phone number"
                    name="userNumber"
                    value={userNumber}
                    onChange={userNumberChange}
                  />
                </div>
                <div className="input-wrapper">
                  <Lock />
                  <input
                    type={showPassword === true ? "text" : "password"}
                    required
                    placeholder="Password"
                  />
                  <Visibility
                    className="password-switch"
                    onClick={() => {
                      showPass();
                    }}
                  />
                </div>
              </Grid>
              <p style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setagreeCheck(e.target.checked);
                  }}
                />{" "}
                <span>
                  I agree to the
                  <Link to="/"> Terms &amp; Conditions</Link> and
                  <Link to="/"> Privacy Policy</Link>
                </span>
              </p>
              <button>CREATE ACCOUNT</button>
              <Grid item xs={12}>
                <div className="signup-with">
                  <b>Signup with</b>
                  <b>
                    <span className="fb">
                      <FacebookOutlined />
                    </span>
                    <span className="ggl">
                      <Google />
                    </span>
                    <span className="ln">
                      <LinkedIn />
                    </span>
                  </b>
                </div>
              </Grid>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Grid>
          </form>
        </div>
      </section>
    </>
  );
};
export default Signup;
