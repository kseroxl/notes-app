import React, { useState } from "react";
import { INote } from "../../interfaces";
import IconsSet from "../iconsSet/iconsSet";
import "./OneNote.css";

interface IOneNote {
  note: INote;
  toggleImportant: (id: number) => void;
  onDeleteNote: (id: number) => void;
  setSection: (section: string, id: number) => void;
  classes: string[];
}

const OneNote: React.FC<IOneNote> = ({
  note,
  toggleImportant,
  onDeleteNote,
  setSection,
  classes,
}) => {
  const [hint, showHint] = useState(-1);
  const setHint = (id: number): void => {
    showHint(id);
  };
  const unsetHint = () => {
    showHint(-1);
  };
  return (
    <li className="note" key={note.id}>
      <div className="input-checkbox">
        <span className={`hint ${hint === note.id ? `active-hint` : ""}`}>
          {note.important ? "Important" : "Make important"}
        </span>
        <input
          type="checkbox"
          checked={note.important}
          onChange={() => toggleImportant(note.id)}
          onMouseOver={() => setHint(note.id)}
          onMouseOut={() => unsetHint()}
        />
        <label className={classes.join(" ")} htmlFor={note.title}>
          {note.title}
        </label>
      </div>
      <IconsSet
        currentSection={note.section}
        setSection={setSection}
        id={note.id}
        onDeleteClick={() => onDeleteNote(note.id)}
      />
    </li>
  );
};
export default OneNote;
