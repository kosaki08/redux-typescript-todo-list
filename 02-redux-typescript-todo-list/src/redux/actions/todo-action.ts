import { ActionTypes } from "./types";
import { TodoItemType } from "../../types/todo-list.type";

type AddTodoAction = {
  type: ActionTypes.TODO_ADD_ITEM;
  payload: {
    todo: TodoItemType;
  };
};

type DeleteTodoAction = {
  type: ActionTypes.TODO_DELETE_ITEM;
  payload: {
    itemId: number;
  };
};

type ToggleTodoCompletedAction = {
  type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED;
  payload: {
    itemId: number;
  };
};

export const AddTodo = (todo: TodoItemType): AddTodoAction => {
  return {
    type: ActionTypes.TODO_ADD_ITEM,
    payload: { todo }
  };
};

export const DeleteTodo = (itemId: number): DeleteTodoAction => {
  return {
    type: ActionTypes.TODO_DELETE_ITEM,
    payload: { itemId }
  };
};

export const ToggleTodoCompleted = (
  itemId: number
): ToggleTodoCompletedAction => {
  return {
    type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED,
    payload: { itemId }
  };
};
