import React from "react";
import "./notesList.css";
import { INote } from "../interfaces";
import OneNote from "./oneNote/OneNote";

interface INotesList {
  notes: INote[];
  toggleImportant: (id: number) => void;
  onDeleteNote: (id: number) => void;
  setSection: (section: string, id: number) => void;
}

const NotesList: React.FC<INotesList> = ({
  notes,
  toggleImportant,
  onDeleteNote,
  setSection,
}) => {
  return (
    <>
      <ul className="notes">
        {notes.map((note) => {
          const classes = ["checkbox-label"];
          if (note.important) classes.push("important");
          return (
            <OneNote
              toggleImportant={toggleImportant}
              onDeleteNote={onDeleteNote}
              setSection={setSection}
              note={note}
              classes={classes}
            />
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
