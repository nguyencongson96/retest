import React, { useContext } from "react";
import TaskList from "../TaskList/TaskList";
import { ListContext } from "../ListContext/ListContext";

const All = () => {
  const { list, clearDoneTask } = useContext(ListContext);
  const filterList = list.filter((ele) => ele.done === true);
  const handleClearAll = () => {
    clearDoneTask();
  };
  return (
    <div className="completion">
      <TaskList list={filterList} />
      <button className="btn-clear-all" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default All;
