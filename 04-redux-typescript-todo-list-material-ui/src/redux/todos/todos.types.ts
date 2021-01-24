export enum ActionTypes {
  TODO_ADD_ITEM,
  TODO_DELETE_ITEM,
  TODO_TOGGLE_ITEM_COMPLETED,
  TODO_FETCH_ITEMS
}

export type TodoItemType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type FetchTodoFuncType = () => void;

export type AddTodoFuncType = (todo: TodoItemType) => void;

export type DeleteTodoFuncType = (itemId: string) => void;

export type ToggleCompletedFuncType = (itemId: string) => void;

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
    itemId: string;
  };
};

export type ToggleTodoCompletedActionType = {
  type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED;
  payload: {
    itemId: string;
  };
};

export type FetchedItemType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
