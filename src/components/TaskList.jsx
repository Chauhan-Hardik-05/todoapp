import ToDoItem from "./ToDoItem";
import style from "./taskList.module.css";

export default function TaskList({ taskList, setTaskList }) {
  let sortedTaskList = taskList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {sortedTaskList.length > 0 ? (
        sortedTaskList.map((item) => (
          <ToDoItem
            key={item.name}
            item={item}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))
      ) : (
        <p className={style.noTaskMessage}>No Tasks Added</p>
      )}
    </div>
  );
}
