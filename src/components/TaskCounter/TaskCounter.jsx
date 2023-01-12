import { useSelector } from "react-redux";
import { selectTasks } from "redux/selectors";
import { BsExclamationLg, BsCheckLg } from "react-icons/bs";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const tasks = useSelector(selectTasks);

  // На базе состояния Redux получаем производные данные
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}><BsExclamationLg className={css.icon}/>Active: {count.active}</p>
      <p className={css.text}><BsCheckLg className={css.icon}/>Completed: {count.completed}</p>
    </div>
  );
};