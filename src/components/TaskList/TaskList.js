import React, { useState, useContext } from "react";
import { ListContext } from "../ListContext/ListContext";

const Task = (props) => {
  const {
    ele: { id, content, done },
  } = props;
  const { updateDone, clearTask } = useContext(ListContext);
  const [isDone, setIsDone] = useState(done);

  const handleChange = (e) => {
    setIsDone(!isDone);
    updateDone(e.target.name);
  };

  const handleClear = (e) => {
    clearTask(e.target.name);
  };

  return (
    <div className="task" key={id}>
      <div className="task-text">
        <input
          type="checkbox"
          className="task-input"
          checked={isDone}
          name={id}
          onChange={handleChange}
        />
        <span className="task-content">{content}</span>
      </div>
      <button className="btn-clear" name={id} onClick={handleClear}>
        x
      </button>
    </div>
  );
};

const TaskList = (props) => {
  const { list } = props;
  const TaskElement = list.map((ele) => <Task ele={ele} key={ele.id} />);
  return <div className="task-list">{TaskElement}</div>;
};

export default TaskList;
