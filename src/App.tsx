import React from "react";
import Todo from "./components/todos/todo-list/todo-list.component";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-2xl">Simple Todo List</h1>
      <Todo />
    </div>
  );
}
