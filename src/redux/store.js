import { createStore } from "redux";

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

// корневой редюсер - функция, принимает state, action
const rootReducer = (state = initialState, action) => {
    return state;
};

// создаем и экспортируем стор, передаем ему основной, корневой редюсер
export const store = createStore(rootReducer);