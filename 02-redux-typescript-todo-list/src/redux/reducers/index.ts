import { combineReducers } from "redux";

import { TodoReducer } from "./todo-reducer";
import { TodoItemType } from "../../types/todo-list.type";

export type StoreState = {
  todos: TodoItemType[];
};

export default combineReducers<StoreState>({
  todos: TodoReducer
});
