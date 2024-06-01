import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import style from "./form.module.css";

export default function Form({ taskList, setTaskList }) {
  const [task, setTask] = useState({ name: "", done: false });

  const showToast = () => {
    toast.error("Please Enter task !!");
  };

  function handleSubmit(e) {
    e.preventDefault();
    task.name
      ? (setTaskList([...taskList, task]), setTask({ name: "", done: false }))
      : showToast();
  }

  return (
    <div>
      <form className={style.taskForm} onSubmit={handleSubmit}>
        <div className={style.taskContainer}>
          <input
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            value={task.name}
            className={style.taskInput}
            type="text"
            placeholder="Add Task Here"
          />
          <button className={style.taskBtn} type="submit">
            Add
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
