import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/actions";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button 
        className={css.btn}
        type="button"
        onClick={handleDelete}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};