import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// cоздаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

// создаем и экспортируем стор, передаем ему основной, корневой редюсер
export const store = createStore(rootReducer, enhancer);
// Чтобы у приложения был доступ к store, в index.js оборачиваем App в Provider и передаем ему стор в атрибуте store