import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ContentBox from "./ContentBox/ContentBox";
import InputField from "./InputField/InputField";
import NotesList from "./notesList/notesList";
import { INote, sections } from "./interfaces";

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  const onAddNote = (title: string) => {
    if (title !== "") {
      const newNote: INote = {
        title: title,
        id: Date.now(),
        important: false,
        section: sections.NONE,
      };
      setNotes((prev) => SortNotes([newNote, ...prev]));
    }
  };

  const SortNotes = (allNotes: INote[]): INote[] => {
    return allNotes.sort((a, b) => {
      if (a.important && !b.important) return -1;
      else if (!a.important && b.important) return 1;
      return 0;
    });
  };

  const setSection = (section: string): void => {
    console.log(section);
  };

  const toggleImportant = (id: number) => {
    setNotes(() => {
      const allNotes = notes.map((note) => {
        if (note.id === id) {
          note.important = !note.important;
        }
        return note;
      });
      return SortNotes(allNotes);
    });
  };

  const onDeleteNote = (id: number) => {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  };

  return (
    <>
      <NavBar />
      <ContentBox>
        <InputField onAdd={onAddNote} />
        <NotesList
          setSection={setSection}
          notes={notes}
          toggleImportant={toggleImportant}
          onDeleteNote={onDeleteNote}
        />
      </ContentBox>
    </>
  );
};

export default App;
