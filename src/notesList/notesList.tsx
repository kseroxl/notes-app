import React from "react";
import "./notesList.css";
import { INote } from "../interfaces";

interface INotesList {
  notes: INote[];
}

const NotesList: React.FC<INotesList> = ({ notes }) => {
  const handleChange = () => {};
  return (
    <>
      <ul className="notes">
        {notes.map((note) => {
          return (
            <li className="note" key={note.id}>
              <input
                type="checkbox"
                id={note.title}
                checked={note.important}
                onChange={handleChange}
              />
              <label htmlFor={note.title}>
                {note.title}
                <span></span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
