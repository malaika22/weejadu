import React, { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const Experience = ({ toggle }) => {
  const [optionPage, setoptionPage] = useState(1);
  const experiencePreview = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[name=expreience]:checked"
    );
    console.log(checkedBoxes.length);
    if (checkedBoxes.length >= 1) {
      toggle();
    } else {
      toast.error("select experience please");
    }
  };
  return (
    <>
      <h2>Welcome John Doe</h2>
      <p>Select your current experience level</p>
      <div className="selection-wrapper">
        <button
          onClick={() => {
            setoptionPage(1);
          }}
        >
          <KeyboardArrowUp />
        </button>
        <div
          className={
            optionPage === 1 ? "options-wrapper active" : "options-wrapper"
          }
        >
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Studying ( 0 year experience)</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Fresher ( upto 1 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Junior ( 1.1 to 3 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Supervisory ( 3.1-5 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Managerial ( 5.1-8 years )</span>
          </label>
        </div>
        <div
          className={
            optionPage === 2 ? "options-wrapper active" : "options-wrapper"
          }
        >
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Fresher ( upto 1 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Managerial ( 5.1-8 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Junior ( 1.1 to 3 years )</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Studying ( 0 year experience)</span>
          </label>
          <label className="option">
            <input type="radio" name="expreience" />
            <span className="checkmark">Supervisory ( 3.1-5 years )</span>
          </label>
        </div>
        <button
          onClick={() => {
            setoptionPage(2);
          }}
        >
          <KeyboardArrowDown />
        </button>
      </div>
      <Button
        className="next"
        onClick={() => {
          experiencePreview();
        }}
      >
        Next
      </Button>
    </>
  );
};
export default Experience;
