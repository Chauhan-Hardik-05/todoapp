import "react-toastify/dist/ReactToastify.css";
import style from "./toDoItem.module.css";

export default function ToDoItem({ item, taskList, setTaskList }) {
  function handleDelete(name) {
    setTaskList(taskList.filter((task) => task.name !== name));
  }

  function handleComplete(name) {
    let newTaskList = taskList.map((task) =>
      task.name === name ? { ...task, done: !task.done } : task
    );
    setTaskList(newTaskList);
  }

  const isCompleted = item.done ? style.completed : "";

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={isCompleted} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.name)}
            className={style.deleteBtn}
          >
            X
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
}
