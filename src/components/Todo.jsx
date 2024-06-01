import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TaskList from "./TaskList";
export default function Todo() {
  const [taskList, setTaskList] = useState([]);
  const completedTask = taskList.filter((task) => task.done).length;
  const totalTask = taskList.length;
  return (
    <div>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Footer completedTask={completedTask} totalTask={totalTask} />
    </div>
  );
}
