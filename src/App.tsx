import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ContentBox from "./ContentBox/ContentBox";
import InputField from "./InputField/InputField";

const App: React.FC = () => {
  const onAdd = (title: string) => {
    console.log(title);
  };
  return (
    <>
      <NavBar />
      <ContentBox>
        <InputField onAdd={onAdd} />
      </ContentBox>
    </>
  );
};

export default App;
