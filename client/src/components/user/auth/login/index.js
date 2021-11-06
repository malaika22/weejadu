import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../partails/header";
import PhoneInput from "react-phone-number-input";
import "./index.css";
import { Button } from "@mui/material";
import { Person, Lock } from "@mui/icons-material";
const Login = () => {
  const [userNumber, setUserNumber] = useState("");
  const [error, seterror] = useState(false);
  function userNumberChange(e) {
    setUserNumber(e);
    seterror(false);
  }
  function sendOtp() {
    seterror(true);
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="login-wrapper bg-wrapper-2">
        <Header image="true" arrow="true" link="/start" />
        <div className="login-box">
          <form className="login" onSubmit={onSubmit}>
            <h2>SIGN IN</h2>
            <label>Login with mobile number</label>
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
            <Button onClick={sendOtp}>SEND OTP</Button>
            {error && (
              <p className="error">
                ERROR: This mobile number is not registered with us. <br />{" "}
                Please
                <Link to="/signup"> Signup Here</Link>
              </p>
            )}
            <span>OR</span>
            <div className="input-wrapper">
              <Person />
              <input type="text" required placeholder="Username / Email here" />
            </div>
            <div className="input-wrapper">
              <Lock />
              <input type="password" required placeholder=" Password" />
            </div>
            <p>
              Forget Password? <Link to="/">Reset Here</Link>
            </p>
            <button>LOGIN</button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">Please Signup Here</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
