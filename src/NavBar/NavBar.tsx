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
            Notes
          </a>
          <span className="logo-heart">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </div>
        <ul>
          <li>
            <a href="/">Education</a>
            <span className="underline"></span>
          </li>
          <li>
            <a href="/">Sport</a>
            <span className="underline"></span>
          </li>
          <li>
            <a href="/">Art</a>
            <span className="underline"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
