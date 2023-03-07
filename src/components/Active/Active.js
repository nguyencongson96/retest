import React, { useContext } from "react";
import TaskList from "../TaskList/TaskList";
import { ListContext } from "../ListContext/ListContext";
import AddTask from "../AddTask/AddTask";

const All = () => {
  const { list } = useContext(ListContext);
  const filterList = list.filter((ele) => ele.done === false);
  return (
    <div className="all">
      <AddTask />
      <TaskList list={filterList} />
    </div>
  );
};

export default All;
