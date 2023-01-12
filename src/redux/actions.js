import { nanoid } from "nanoid";

// Добавить новую задачу с текстом, введенным пользователем
export const addTask = text => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            text,
            completed: false,
        },
    };
};

// Удалить задачу
export const deleteTask = id => {
    return {
        type: "tasks/deleteTask",
        payload: id,
    };
};

// Переключить статус задачи
export const toggleCompleted = id => {
    return {
        type: "tasks/toggleCompleted",
        payload: id,
    };
};

// Изменить значение фильтра статуса
export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};

// Отправка экшенов происходит через dispatch (хук useDispatch())