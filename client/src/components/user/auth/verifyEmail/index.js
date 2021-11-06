import React from "react";
import { Link } from "react-router-dom";
import Header from "../../partails/header";
import Footer from "../../partails/footer";
import verifyEmailThumbnail from "../../../../assets/verify-email.png";
import { Button } from "@mui/material";
import "./index.css";
const VerifyEmail = () => {
  return (
    <>
      <section className="verify-email-wrapper bg-wrapper-2">
        <Header image="true" arrow="true" link="/start" />
        <div className="verify-email">
          <div>
            <h2>Thank You</h2>
            <p>
              Thankyou for signing-up <br />
              we have sent a verification link on your registered Email
            </p>
            <img src={verifyEmailThumbnail} alt="" />
            <Link to="/">GO TO REGISTERED EMAIL AND VERIFY NOW</Link>
            <label>Did not receive verification email ?</label>
            <Button className="resend">RESEND NOW</Button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default VerifyEmail;
