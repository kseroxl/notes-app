import React, { useState, useRef } from "react";
import { INote } from "../../interfaces";
import IconsSet from "../iconsSet/iconsSet";
import "./OneNote.css";

interface IOneNote {
  note: INote;
  toggleImportant: (id: number) => void;
  onDeleteNote: (id: number) => void;
  setSection: (section: string, id: number) => void;
  classes: string[];
  editNote: (text: string, id: number) => void;
}

const OneNote: React.FC<IOneNote> = ({
  note,
  toggleImportant,
  onDeleteNote,
  setSection,
  classes,
  editNote,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hint, showHint] = useState(-1);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");
  const setHint = (id: number): void => {
    showHint(id);
  };
  const unsetHint = () => {
    showHint(-1);
  };
  const makeInput = () => {
    setEditing(true);
    setContent(note.title);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (editing) setEditing(false);
      editNote(content, note.id);
    }
  };
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value);
    setContent(event.currentTarget.value);
  };

  return (
    <li
      style={
        editing && inputRef.current
          ? { height: `${inputRef.current!.clientHeight}px` }
          : {}
      }
      onDoubleClick={() => makeInput()}
      className="note"
    >
      <div className="input-checkbox">
        {!editing && (
          <>
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
          </>
        )}
        {!editing ? (
          <label className={classes.join(" ")} htmlFor={note.title}>
            {note.title}
          </label>
        ) : (
          <textarea
            onChange={(e) => handleChange(e)}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            value={content}
            className="note-input"
          ></textarea>
        )}
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
