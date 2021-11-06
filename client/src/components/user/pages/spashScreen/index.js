import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Logo from "../../../../assets/logo.png";
import Background from "../../../../assets/background.png";
import "./index.css";
const SplashScreen = () => {
  const [responsive] = useState({
    0: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  });
  return (
    <section className="splash-screen">
      <div className="logo-box">
        <img src={Logo} alt="" />
      </div>
      <div className="key-points">
        <OwlCarousel
          responsive={responsive}
          className="owl-theme"
          margin={0}
          loop={true}
          autoplay={true}
          autoplayHoverPause={true}
          dots={true}
          nav={false}
        >
          <div className="item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
          <div className="item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
          <div className="item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </OwlCarousel>
      </div>
      <Link to="/start" className="start-now">
        Start
      </Link>
      <img className="background" src={Background} alt="" />
    </section>
  );
};
export default SplashScreen;
