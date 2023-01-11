import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  return (
    <div className={css.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};