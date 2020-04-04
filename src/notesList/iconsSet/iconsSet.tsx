import React from "react";
import "./iconsSet.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsSet: React.FC<{
  onDeleteClick(): void;
  setSection(section: string): void;
}> = ({ onDeleteClick, setSection }) => {
  return (
    <div className="icons-set">
      <div onClick={() => setSection("EDUCATION")}>
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
      <div onClick={() => setSection("SPORT")}>
        <FontAwesomeIcon icon={faVolleyballBall} />
      </div>
      <div onClick={() => setSection("ART")}>
        <FontAwesomeIcon icon={faPalette} />
      </div>
      <span onClick={onDeleteClick} className="times-sign">
        &times;
      </span>
    </div>
  );
};

export default IconsSet;
