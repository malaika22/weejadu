import React, { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import InterviewThumbnail from "../../../../../assets/icons/interview.PNG";
import SalesThumbnail from "../../../../../assets/icons/sales.PNG";
import InteractionThumbnail from "../../../../../assets/icons/interaction.PNG";
import CareerThumbnail from "../../../../../assets/icons/career.PNG";
import PersonalThumbnail from "../../../../../assets/icons/personal.PNG";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const Interest = () => {
  const [optionPage, setoptionPage] = useState(1);
  const interestPreview = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[name=interest]:checked"
    );
    if (checkedBoxes.length === 0) {
      toast.error("select atleast 1 interest");
    } else if (checkedBoxes.length > 5) {
      toast.error("MAX 5 CAN BE SELECTED");
    } else {
      toast.success("profile completed sucessfully");
      setTimeout(() => {
        window.location.replace("/start");
      }, 2000);
    }
  };
  return (
    <>
      <h2>Choose your interests</h2>
      <p>
        SO WE CAN CUSTOMIZE YOUR BEST-FIT JADU <br />
        *MAX 5 CAN BE SELECTED
      </p>{" "}
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
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={InterviewThumbnail} alt="" />
              INTERVIEWS
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={SalesThumbnail} alt="" />
              SALES
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={InteractionThumbnail} alt="" />
              INTERACTION WITH SENIORS
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={CareerThumbnail} alt="" />
              CAREER CHOICE
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={PersonalThumbnail} alt="" />
              PRESONAL RELATIONSHIP
            </span>
          </label>
        </div>
        <div
          className={
            optionPage === 2 ? "options-wrapper active" : "options-wrapper"
          }
        >
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={SalesThumbnail} alt="" />
              SALES
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={CareerThumbnail} alt="" />
              CAREER CHOICE
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={PersonalThumbnail} alt="" />
              PRESONAL RELATIONSHIP
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={InteractionThumbnail} alt="" />
              INTERACTION WITH SENIORS
            </span>
          </label>
          <label className="option">
            <input type="checkbox" name="interest" />
            <span className="checkmark">
              <img src={InterviewThumbnail} alt="" />
              INTERVIEWS
            </span>
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
          interestPreview();
        }}
      >
        Next
      </Button>
    </>
  );
};
export default Interest;
