import React from "react";
import "./notesList.css";
import { INote } from "../interfaces";
import OneNote from "./oneNote/oneNote";

interface INotesList {
  notes: INote[];
  toggleImportant: (id: number) => void;
  onDeleteNote: (id: number) => void;
  setSection: (section: string, id: number) => void;
  editNote: (text: string, id: number) => void;
}

const NotesList: React.FC<INotesList> = ({
  notes,
  toggleImportant,
  onDeleteNote,
  setSection,
  editNote,
}) => {
  return (
    <>
      <ul className="notes">
        {notes.map((note, id) => {
          const classes = ["checkbox-label"];
          if (note.important) classes.push("important");
          return (
            <OneNote
              key={id}
              toggleImportant={toggleImportant}
              onDeleteNote={onDeleteNote}
              setSection={setSection}
              note={note}
              classes={classes}
              editNote={editNote}
            />
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
