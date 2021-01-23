import { v4 as uuidv4 } from "uuid";

import { TodoItemType } from "../../types/todo-list.type";
import { ActionTypes } from "../actions/types";

type State = TodoItemType[];

type Action = {
  type: ActionTypes;
  payload: any;
};

const initialData = [
  { id: uuidv4(), text: "Buy a milk", isCompleted: true },
  { id: uuidv4(), text: "Put gas in the car", isCompleted: false },
  { id: uuidv4(), text: "Study English", isCompleted: false }
];

export const TodoReducer = (
  state: State = initialData,
  action: Action
): TodoItemType[] => {
  switch (action.type) {
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
