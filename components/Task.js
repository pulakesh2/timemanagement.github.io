import { useState } from "react";
import Btn from "./Btn";

// Task Component
const Task = function ({ task, onTaskRemove, onUpdate, onCheck }) {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState("");

  const taskUpdateHandler = function () {
    onUpdate(task, content);
  };

  const taskCheckHandler = function () {
    onCheck(task);
  };

  const addEditHandler = function () {
    setIsShow((isShow) => !isShow);
  };

  return (
    <li className={`task ${task.check ? "check" : ""}`}>
      {task.check ? (
        <p>Completed</p>
      ) : (
        <>
          <p className="task__title">{task.title}</p>
          <p className="task__content">
            {!isShow ? (
              task.content
            ) : (
              <input
                className="spacebar"
                placeholder="Update The task"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            )}
          </p>
          <p className="time">{task.time}</p>
          <Btn onClick={addEditHandler}>{isShow ? "Close" : "Edit"}</Btn>
          <Btn onClick={taskCheckHandler}>Check</Btn>
          <Btn onClick={() => onTaskRemove(task)}>Remove</Btn>
          {isShow ? <Btn onClick={taskUpdateHandler}>Update</Btn> : ""}
        </>
      )}
    </li>
  );
};

export default Task;
