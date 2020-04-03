import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="grid-box">
        <div id="logo">
          <a href="/" id="logo-icon">
            App
          </a>
          <span className="logo-heart">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
            <span className="underline"></span>
          </li>
          <li>
            <a href="/">About us</a>
            <span className="underline"></span>
          </li>
          <li>
            <a href="/">Contact us</a>
            <span className="underline"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
