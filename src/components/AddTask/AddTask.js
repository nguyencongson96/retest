import React, { useContext, useState } from "react";
import { ListContext } from "../ListContext/ListContext";

const AddTask = () => {
  const { addTask } = useContext(ListContext);
  const [textInput, setTextInput] = useState("");
  const handleAdd = () => {
    addTask(textInput);
    setTextInput("");
  };
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Please type your task here"
        value={textInput}
        onChange={handleChange}
      />
      <button className="btn-add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
