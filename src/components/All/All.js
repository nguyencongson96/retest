import React, { useContext } from "react";
import TaskList from "../TaskList/TaskList";
import { ListContext } from "../ListContext/ListContext";
import AddTask from "../AddTask/AddTask";

const All = () => {
  const { list } = useContext(ListContext);
  return (
    <div className="all">
      <AddTask />
      <TaskList list={list} />
    </div>
  );
};

export default All;
