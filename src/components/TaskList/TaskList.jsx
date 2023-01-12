import { useSelector } from "react-redux";
import { selectTasks } from "redux/selectors";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};