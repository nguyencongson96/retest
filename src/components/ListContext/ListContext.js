import React, { useState } from "react";

export const ListContext = React.createContext();

export function ListProvider({ children }) {
  const taskList = localStorage.getItem("taskList") || [
    { id: 0, content: "123", done: true },
    { id: 1, content: "123", done: false },
    { id: 2, content: "123", done: true },
    { id: 3, content: "123", done: true },
  ];
  const [list, setList] = useState(taskList);

  function updateDone(id) {
    const index = list.findIndex((ele) => ele.id === Number(id));
    list[index].done = !list[index].done;
    setList(list);
  }

  function clearTask(id) {
    setList(list.filter((ele) => ele.id !== Number(id)));
  }

  function addTask(content) {
    const newTask = {
      id: list[list.length - 1].id + 1,
      content: content,
      done: false,
    };
    setList([...list, newTask]);
  }

  function clearDoneTask() {
    setList(list.filter((ele) => ele.done === false));
  }

  return (
    <ListContext.Provider
      value={{ list, updateDone, clearTask, addTask, clearDoneTask }}
    >
      {children}
    </ListContext.Provider>
  );
}
