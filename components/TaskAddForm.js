import { Button } from "@mui/material";
import { useState } from "react";

// Task Form
const TaskAddForm = function ({ onTaskAdd, isAdd }) {
  const submitHandler = function (e) {
    e.preventDefault();

    if (!title || !content) return;

    const time = new Date();

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Use 24-hour format
    };
    const timeString = time.toLocaleTimeString("en-US", options);

    const taskDetails = {
      title: title,
      content: content,
      check: false,
      time: timeString,
    };

    // console.log(taskDetails);
    onTaskAdd(taskDetails);

    isAdd(false);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form onSubmit={submitHandler} className="add__form">
      <div>
        <label htmlFor="title">Title</label>
        <input
          className="content__input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <input
          className="content__input"
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* <button type="submit" className="add">
          Add
        </button> */}
      <Button type="submit" sx={{ mr: 2, mt: 1 }} variant="contained">
        Add
      </Button>
    </form>
  );
};

export default TaskAddForm;
