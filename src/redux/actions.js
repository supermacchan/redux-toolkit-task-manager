// Добавить новую задачу с текстом, введенным пользователем
export const addTask = {
    type: "tasks/addTask",
    payload: {
        id: "generated id",
        text: "entered text",
        completed: false,
    }
};

// Удалить задачу
export const deleteTask = {
    type: "tasks/deleteTask",
    payload: "task id",
};

// Переключить статус задачи
export const toggleCompleted = {
    type: "tasks/toggleCompleted",
    payload: "task id",
};

// Изменить значение фильтра статуса
export const setStatusFilter = {
    type: "filters/setStatusFilter",
    payload: "filter value",
}