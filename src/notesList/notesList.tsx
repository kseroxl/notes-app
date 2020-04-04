import React, { useState } from "react";
import "./notesList.css";
import { INote } from "../interfaces";
import IconsSet from "./iconsSet/iconsSet";

interface INotesList {
  notes: INote[];
  toggleImportant: (id: number) => void;
  onDeleteNote: (id: number) => void;
  setSection: (section: string) => void;
}

const NotesList: React.FC<INotesList> = ({
  notes,
  toggleImportant,
  onDeleteNote,
  setSection,
}) => {
  const [hint, showHint] = useState(-1);
  const setHint = (id: number): void => {
    showHint(id);
  };
  const unsetHint = () => {
    showHint(-1);
  };
  return (
    <>
      <ul className="notes">
        {notes.map((note) => {
          const classes = ["checkbox-label"];
          if (note.important) classes.push("important");
          return (
            <li className="note" key={note.id}>
              <div className="input-checkbox">
                <span
                  className={`hint ${hint === note.id ? `active-hint` : ""}`}
                >
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
                setSection={setSection}
                onDeleteClick={() => onDeleteNote(note.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
