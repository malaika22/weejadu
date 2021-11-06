import React from "react";
import LoaderIcon from "../../assets/loader.gif";
import "./index.css";

const Loader = () => {
  return (
    <div className="loading-screen">
      <img src={LoaderIcon} alt="" />
    </div>
  );
};

export default Loader;
