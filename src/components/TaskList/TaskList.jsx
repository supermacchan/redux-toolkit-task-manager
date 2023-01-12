import { useSelector } from "react-redux";
import { selectTasks, selectFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => tasks.completed);
    default:
      return tasks;
  }
}

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const filterStatus = useSelector(selectFilter);
  const visibleTasks = getVisibleTasks(tasks, filterStatus);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};