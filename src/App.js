import React, { useEffect, useState } from "react";
// import { Button, Divider, Toolbar } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Btn from "./components/Btn";
import TaskList from "./components/TaskList";
import TaskAddForm from "./components/TaskAddForm";
import Footer from "./components/Footer";
// import { useState } from "react";

// Dummy data
// const tasklist = [
//   {
//     title: "Web Design",
//     content: "create a web desing using CSS",
//     check: false,
//     time: "2:30 PM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
//   {
//     title: "react App",
//     content: "Create an React APP",
//     check: false,
//     time: "6:00 AM",
//   },
// ];

// App component
function App() {
  const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  const [isAdd, setIsAdd] = useState(false);

  // Save tasks to localStorage whenever tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // console.log(tasks);

  const showTaskFormHandler = function () {
    setIsAdd((isAdd) => !isAdd);
  };

  // taskAddHandler
  const taskAddHandler = function (task) {
    setTasks((tasks) => [...tasks, task]);
  };

  // taskRemoveHandler
  const taskRemoveHandler = function (task) {
    setTasks((tasks) => tasks.filter((tasks) => tasks.title !== task.title));
  };

  // update task
  const updateTaskHandler = function (updateTask, content) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task !== updateTask ? task : { ...task, content: content }
      )
    );
  };

  // task Check
  const taskCheckHandler = function (task) {
    setTasks((tasks) =>
      tasks.map((tasks) => (tasks !== task ? tasks : { ...tasks, check: true }))
    );

    alert("Your task is Checked");
  };

  // task Clear
  const clearListHandler = function () {
    setTasks([]);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        {tasks.length ? (
          <TaskList
            tasks={tasks}
            onTaskRemove={taskRemoveHandler}
            onUpdate={updateTaskHandler}
            onCheck={taskCheckHandler}
            onClear={clearListHandler}
          />
        ) : (
          <p className="empty__msg">The task is empty</p>
        )}

        {isAdd && <TaskAddForm onTaskAdd={taskAddHandler} isAdd={setIsAdd} />}

        <div className="addBtn">
          <Btn onClick={showTaskFormHandler}>
            {isAdd ? "Close" : "Add Task"}
          </Btn>
        </div>
      </div>
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
