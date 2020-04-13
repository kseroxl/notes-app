import React, { useState, useRef, useEffect } from "react";
import CSS from "csstype";
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
  const liRef = useRef<HTMLLIElement>(null);
  const [hint, showHint] = useState(-1);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(inputRef.current!.clientHeight);
    console.log(liRef.current.getAttribute(style));
  }, [editing]);

  const style: CSS.Properties = {
    display: `none`,
  };

  const style2: CSS.Properties = {
    display: `inline-block`,
  };

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

  const autosize = () => {
    const rows = inputRef.current!.rows;
    const value = inputRef.current!.value;
    const lines = value.split("\n");
    const cols = inputRef.current!.cols;
    let linecount = 0;
    lines.forEach((el) => (linecount += Math.ceil(el.length / cols)));
    if (linecount > 2) inputRef.current!.rows = linecount;
    console.log(lines, linecount);
    console.log(rows, value);
  };

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value);
    setContent(event.currentTarget.value);
    autosize();
  };

  return (
    <li
      ref={liRef}
      style={editing ? { height: `${inputRef.current!.clientHeight}px` } : {}}
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
        <label
          style={editing ? style : style2}
          className={classes.join(" ")}
          htmlFor={note.title}
        >
          {note.title}
        </label>
        <textarea
          style={!editing ? style : style2}
          onChange={(e) => handleChange(e)}
          ref={inputRef}
          onKeyPress={handleKeyPress}
          value={content}
          className="note-input"
          rows={2}
          cols={100}
        ></textarea>
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
