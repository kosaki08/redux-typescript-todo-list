import { combineReducers } from "redux";

import { TodoReducer } from "./todos/todos.reducer";

export default combineReducers({
  todos: TodoReducer
});
