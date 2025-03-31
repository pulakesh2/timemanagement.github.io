import { useState } from "react";
import Btn from "./Btn";
import Task from "./Task";

// taskList component
const TaskList = function ({
  tasks,
  onTaskRemove,
  onUpdate,
  onCheck,
  onClear,
}) {
  const [select, setSelect] = useState("default");

  // Sort Task List
  let sortTasks;

  if (select === "default") sortTasks = tasks;

  if (select === "status")
    sortTasks = tasks.slice().sort((a, b) => a.check - b.check);

  if (select === "time")
    sortTasks = tasks.slice().sort((a, b) => {
      return (
        new Date(`01/01/2000 ${a.time}`) - new Date(`01/01/2000 ${b.time}`)
      );
    });

  return (
    <>
      <div className="sort">
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="default">default</option>
          <option value="status">sorted by status</option>
          <option value="time">sorted by time</option>
        </select>
        <Btn onClick={onClear}>Clear</Btn>
      </div>

      <ul className="task__list">
        {sortTasks.map((task) => (
          <Task
            task={task}
            onTaskRemove={onTaskRemove}
            onUpdate={onUpdate}
            onCheck={onCheck}
            key={Math.random() * 100}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
