import React, { useState } from "react";
import "./iconsSet.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sections } from "../../interfaces";

const IconsSet: React.FC<{
  onDeleteClick(): void;
  setSection(section: string, id: number): void;
  id: number;
  currentSection: string;
}> = ({ onDeleteClick, setSection, id, currentSection }) => {
  const [hint, showHint] = useState("");
  const setHint = (section: string): void => {
    showHint(section);
  };
  const unsetHint = () => {
    showHint("");
  };
  return (
    <div className="icons-set">
      <div>
        <span className={`hint ${hint === sections[0] ? `active-hint` : ""}`}>
          {currentSection === sections[0] ? "Added" : "Add to section"}
        </span>
        <div
          onMouseOver={() => setHint(sections[0])}
          onMouseOut={() => unsetHint()}
          onClick={() => setSection(sections[0], id)}
        >
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
      </div>
      <div>
        <span className={`hint ${hint === sections[1] ? `active-hint` : ""}`}>
          {currentSection === sections[1] ? "Added" : "Add to section"}
        </span>
        <div
          onMouseOver={() => setHint(sections[1])}
          onMouseOut={() => unsetHint()}
          onClick={() => setSection(sections[1], id)}
        >
          <FontAwesomeIcon icon={faVolleyballBall} />
        </div>
      </div>
      <div>
        <span className={`hint ${hint === sections[2] ? `active-hint` : ""}`}>
          {currentSection === sections[2] ? "Added" : "Add to section"}
        </span>
        <div
          onMouseOver={() => setHint(sections[2])}
          onMouseOut={() => unsetHint()}
          onClick={() => setSection(sections[2], id)}
        >
          <FontAwesomeIcon icon={faPalette} />
        </div>
      </div>
      <span onClick={onDeleteClick} className="times-sign">
        &times;
      </span>
    </div>
  );
};

export default IconsSet;
