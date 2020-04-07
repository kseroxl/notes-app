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
  const makeHint = (
    hintTextFirst: string,
    hintTextSecond: string,
    sectionText: string,
    sectionId: number
  ) => {
    return (
      <span className=" hint active-hint">
        {
          <p>
            {currentSection !== sections[sectionId]
              ? `${hintTextFirst}`
              : `${hintTextSecond}`}
            <span>{sectionText}</span>
          </p>
        }
      </span>
    );
  };
  return (
    <div className="icons-set">
      {((currentSection && currentSection === sections[0]) ||
        !currentSection) && (
        <div>
          {hint === sections[0] &&
            makeHint("Add to section ", "Added to ", "education", 0)}
          <div
            id="education-icon"
            onMouseOver={() => setHint(sections[0])}
            onMouseOut={() => unsetHint()}
            onClick={() => setSection(sections[0], id)}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
        </div>
      )}
      {((currentSection && currentSection === sections[1]) ||
        !currentSection) && (
        <div>
          {hint === sections[1] &&
            makeHint("Add to section ", "Added to ", "sport", 0)}
          <div
            id="sport-icon"
            onMouseOver={() => setHint(sections[1])}
            onMouseOut={() => unsetHint()}
            onClick={() => setSection(sections[1], id)}
          >
            <FontAwesomeIcon icon={faVolleyballBall} />
          </div>
        </div>
      )}
      {((currentSection && currentSection === sections[2]) ||
        !currentSection) && (
        <div>
          {hint === sections[2] &&
            makeHint("Add to section ", "Added to ", "art", 0)}
          <div
            id="art-icon"
            onMouseOver={() => setHint(sections[2])}
            onMouseOut={() => unsetHint()}
            onClick={() => setSection(sections[2], id)}
          >
            <FontAwesomeIcon icon={faPalette} />
          </div>
        </div>
      )}
      <span onClick={onDeleteClick} className="times-sign">
        &times;
      </span>
    </div>
  );
};

export default IconsSet;
