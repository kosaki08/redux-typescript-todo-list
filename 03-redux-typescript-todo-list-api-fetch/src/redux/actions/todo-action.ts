import fetch from "isomorphic-unfetch";
import { Dispatch } from "redux";

import {
  TodoItemType,
  FetchTodoActionType,
  AddTodoActionType,
  DeleteTodoActionType,
  ToggleTodoCompletedActionType,
  FetchedItemType
} from "../../types/todo-list.type";
import { ActionTypes } from "./action-types";
import { initialTodoListData } from "../../data/todo-list-data";

export const FetchTodo = () => {
  return async (dispatch: Dispatch) => {
    let todoItems: TodoItemType[] = [];
    const url = `https://jsonplaceholder.typicode.com/todos/`;
    // const url = `https://api.example.com/`;
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item: FetchedItemType) => {
            todoItems.push({
              id: String(item.id),
              text: item.title,
              isCompleted: item.completed
            });
          });
        });
      todoItems = todoItems.slice(0, 10);
    } catch (error) {
      todoItems = initialTodoListData;
    }
    dispatch<FetchTodoActionType>({
      type: ActionTypes.TODO_FETCH_ITEMS,
      payload: {
        todos: todoItems
      }
    });
  };
};

export const AddTodo = (todo: TodoItemType): AddTodoActionType => {
  return {
    type: ActionTypes.TODO_ADD_ITEM,
    payload: { todo }
  };
};

export const DeleteTodo = (itemId: number): DeleteTodoActionType => {
  return {
    type: ActionTypes.TODO_DELETE_ITEM,
    payload: { itemId }
  };
};

export const ToggleTodoCompleted = (
  itemId: number
): ToggleTodoCompletedActionType => {
  return {
    type: ActionTypes.TODO_TOGGLE_ITEM_COMPLETED,
    payload: { itemId }
  };
};
