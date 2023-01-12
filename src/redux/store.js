import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});