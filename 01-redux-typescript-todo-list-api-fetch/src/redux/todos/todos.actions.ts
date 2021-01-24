import { Dispatch } from "redux";

import {
  TodoItemType,
  FetchTodoActionType,
  AddTodoActionType,
  DeleteTodoActionType,
  ToggleTodoCompletedActionType
} from "./todos.types";
import { ActionTypes } from "./todos.types";
import { fetchTodoItems } from "./todos.utils";

export const fetchTodo = () => (dispatch: Dispatch) => {
  fetchTodoItems().then((todos) => {
    dispatch<FetchTodoActionType>({
      type: ActionTypes.TODO_FETCH_ITEMS,
      payload: {
        todos: todos
      }
    });
  });
};

export const addTodo = (todo: TodoItemType): AddTodoActionType => {
  return {
    type: ActionTypes.TODO_ADD_ITEM,
    payload: { todo }
  };
};

export const deleteTodo = (itemId: string): DeleteTodoActionType => {
  return {
    type: ActionTypes.TODO_DELETE_ITEM,
    payload: { itemId }
  };
};

export const toggleTodoCompleted = (
  itemId: string
): ToggleTodoCompletedActionType => {
  return {
    type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED,
    payload: { itemId }
  };
};
