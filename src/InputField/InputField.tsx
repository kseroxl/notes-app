import React, { useRef } from "react";
import "./InputField.css";

interface IInputForm {
  onAdd(title: string): void;
}

const InputField: React.FC<IInputForm> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-block">
      <label htmlFor="input">Enter note</label>
      <input
        type="text"
        id="input"
        ref={ref}
        placeholder="Enter note"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default InputField;
