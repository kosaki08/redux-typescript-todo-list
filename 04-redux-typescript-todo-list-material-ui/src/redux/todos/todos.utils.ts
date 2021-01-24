import fetch from "isomorphic-unfetch";
import { TodoItemType, FetchedItemType } from "./todos.types";
import { initialTodoListData } from "../../data/todo-list-data";

export async function fetchTodoItems() {
  let todoItems: TodoItemType[] = [];
  const url = `https://jsonplaceholder.typicode.com/todos/`;
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
    })
    .catch((Error) => {
      console.log(Error);
      todoItems = initialTodoListData;
    });
  return todoItems.slice(0, 10);
}
