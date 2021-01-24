import {
  TodoItemType,
  FetchTodoActionType,
  AddTodoActionType,
  DeleteTodoActionType,
  ToggleTodoCompletedActionType
} from "./todos.types";
import { ActionTypes } from "../todos/todos.types";
import { initialTodoListData } from "../../../data/todo-list-data";

type State = TodoItemType[];

type Action =
  | FetchTodoActionType
  | AddTodoActionType
  | DeleteTodoActionType
  | ToggleTodoCompletedActionType;

export const TodoReducer = (
  state: State = initialTodoListData,
  action: Action
): TodoItemType[] => {
  switch (action.type) {
    case ActionTypes.TODO_FETCH_ITEMS:
      return action.payload.todos;
    case ActionTypes.TODO_ADD_ITEM:
      return [...state, action.payload.todo];
    case ActionTypes.TODO_DELETE_ITEM:
      return state.filter((todo) => todo.id !== action.payload.itemId);
    case ActionTypes.TODO_TOGGLE_ITEM_COMPLETED:
      return state.map((todo) =>
        todo.id === action.payload.itemId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return state;
  }
};
