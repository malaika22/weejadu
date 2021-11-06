import React, { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const Industry = ({ toggle }) => {
  const [optionPage, setoptionPage] = useState(1);
  const industryPreview = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[name=industry]:checked"
    );
    if (checkedBoxes.length === 0) {
      toast.error("select atleast 1 industry");
    } else if (checkedBoxes.length > 3) {
      toast.error("only 3 industry allow");
    } else {
      toggle();
    }
  };
  return (
    <>
      <h2>Please select your industry</h2>
      <p>*MAX 3 CAN BE SELECTED</p>
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
            <input type="checkbox" name="industry" />
            <span className="checkmark">It/Software</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">Accounting/finance</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">education</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">event/facilities</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">It/Software</span>
          </label>
        </div>
        <div
          className={
            optionPage === 2 ? "options-wrapper active" : "options-wrapper"
          }
        >
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">Accounting/finance</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">It/Software</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">event/facilities</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">It/Software</span>
          </label>
          <label className="option">
            <input type="checkbox" name="industry" />
            <span className="checkmark">education</span>
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
          industryPreview();
        }}
      >
        Next
      </Button>
    </>
  );
};
export default Industry;
