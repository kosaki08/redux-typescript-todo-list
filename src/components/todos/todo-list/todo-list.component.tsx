import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoListItem } from "../todo-list-item/todo-list-item.component";
import { TodoInput } from "../todo-input/todo-input.component";
import { TodoItemType } from "../../../types/todo-list.type";

const initialData = [
  { id: uuidv4(), text: "Buy a milk", isCompleted: true },
  { id: uuidv4(), text: "Put gas in the car", isCompleted: false },
  { id: uuidv4(), text: "Study English", isCompleted: false }
];

const Todo: React.FC = () => {
  const [todos, setTodo] = useState<TodoItemType[]>(initialData);

  function removeTodo(itemId: string) {
    setTodo((todos) => todos.filter((todo) => todo.id !== itemId));
  }

  function addTodo(todo: TodoItemType) {
    setTodo([...todos, todo]);
  }

  function toggleCompleted(itemId: string) {
    const newTodo = todos.map((todo) =>
      todo.id === itemId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodo(newTodo);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              removeTodo={removeTodo}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
