import React from "react";
import logo from "../images/logo-projects-react.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <a href="https://www.linkedin.com/in/katherine-cruz-7588b763" className="link">
        <img className="logo" src={logo} alt="logo clicks counter" />
      </a>
    </div>
  );
}

export default Logo;
