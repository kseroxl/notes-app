import React, { useState, ReactElement } from "react";
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
  const makeHint: React.StatelessComponent<{
    hintTextFirst: string;
    hintTextSecond: string;
    sectionText: string;
    sectionId: number;
  }> = (hintTextFirst, hintTextSecond, sectionText, sectionId) => {
    return (
      <>
        <span className="active-hint">
          {
            <p>
              {currentSection !== sections[sectionId]
                ? `${hintTextFirst}`
                : `${hintTextSecond}`}
              <span>{sectionText}</span>
            </p>
          }
        </span>
      </>
    );
  };
  return (
    <div className="icons-set">
      {((currentSection && currentSection === sections[0]) ||
        !currentSection) && (
        <div>
          {hint === sections[0] &&
            makeHint("Add to section", "Added to", "education", 0)}
          {/* <span className={`hint ${hint === sections[0] ? `active-hint` : ""}`}>
            {
              <p>
                {currentSection !== sections[0]
                  ? `Add to section`
                  : `Added to `}{" "}
                <span>education</span>
              </p>
            }
          </span> */}
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
          <span className={`hint ${hint === sections[1] ? `active-hint` : ""}`}>
            {
              <p>
                {currentSection !== sections[1]
                  ? `Add to section`
                  : `Added to `}{" "}
                <span>sport</span>
              </p>
            }
          </span>
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
          <span className={`hint ${hint === sections[2] ? `active-hint` : ""}`}>
            {
              <p>
                {currentSection !== sections[2]
                  ? `Add to section`
                  : `Added to `}{" "}
                <span>art</span>
              </p>
            }
          </span>
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
