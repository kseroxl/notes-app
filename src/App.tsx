import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ContentBox from "./ContentBox/ContentBox";
import InputField from "./InputField/InputField";
import NotesList from "./notesList/notesList";
import { INote } from "./interfaces";

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const onAdd = (title: string) => {
    const newNote: INote = {
      title: title,
      id: Date.now(),
      important: false,
    };
    setNotes([newNote, ...notes]);
  };
  return (
    <>
      <NavBar />
      <ContentBox>
        <InputField onAdd={onAdd} />
        <NotesList notes={notes} />
      </ContentBox>
    </>
  );
};

export default App;
