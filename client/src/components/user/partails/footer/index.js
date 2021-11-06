import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Terms &amp; Condition</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
