// const appState = {
//     tasks: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//     filters: {
//       status: "all",
//     },
//   };

// Редюсер (reducer) - это функция, которая принимает текущее состояние 
// и экшен в качестве аргументов и возвращает новое состояние. 
// Редюсер определяет, как изменяется состояние приложения 
// в ответ на экшены, отправленные в стор. 

import { statusFilters } from "./constants";

// начальное значение state приложения
const initialState = {
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
      ],
      filters: {
        status: "all",
      },
};

export const rootReducer = (state = initialState, action) => {
    // Редюсер различает экшены по значению свойства type
  switch (action.type) {
    // В зависимости от типа экшена будет выполняться разная логика
    case "tasks/addTask": {
        // Нужно вернуть новый объект состояния
        return {
          // в котором есть все данные существующего состояния
          ...state,
          // и новый массив задач
          tasks: [
            // в котором есть все существующие задачи
            ...state.tasks,
            // и объект новой задачи
            action.payload,
          ],
        };
    }
    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
    return state;
  }
};