import { ActionTypes } from "../redux/actions/action-types";

export type TodoItemType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type FetchTodoType = () => void;

export type AddTodoType = (todo: TodoItemType) => void;

export type DeleteTodoType = (itemId: string) => void;

export type ToggleCompletedType = (itemId: string) => void;

export type FetchTodoActionType = {
  type: ActionTypes.TODO_FETCH_ITEMS;
  payload: {
    todos: TodoItemType[];
  };
};

export type AddTodoActionType = {
  type: ActionTypes.TODO_ADD_ITEM;
  payload: {
    todo: TodoItemType;
  };
};

export type DeleteTodoActionType = {
  type: ActionTypes.TODO_DELETE_ITEM;
  payload: {
    itemId: number;
  };
};

export type ToggleTodoCompletedActionType = {
  type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED;
  payload: {
    itemId: number;
  };
};

export type FetchedItemType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
