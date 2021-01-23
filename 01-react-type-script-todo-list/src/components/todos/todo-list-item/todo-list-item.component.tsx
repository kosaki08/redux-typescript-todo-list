import React from "react";

import {
  TodoItemType,
  RemoveTodoType,
  ToggleCompletedType
} from "../../../types/todo-list.type";

type Props = {
  item: TodoItemType;
  removeTodo: RemoveTodoType;
  toggleCompleted: ToggleCompletedType;
};

const TodoListItem: React.FC<Props> = ({
  item,
  removeTodo,
  toggleCompleted
}) => {
  function handleRemoveClick(id: string) {
    removeTodo(id);
    // if (e.target instanceof Element) {
    //   const itemId: number = Number(e.target.getAttribute("data-itemid"));
    //   if (itemId) removeTodo(itemId)
    // }
  }

  function handleCheck(id: string, isCompleted: boolean) {
    toggleCompleted(id);
  }

  return (
    <li key={item.id}>
      <label htmlFor={`todo-${item.id}`}>
        <input
          type="checkbox"
          id={`todo-${item.id}`}
          onChange={() => handleCheck(item.id, item.isCompleted)}
          checked={item.isCompleted}
        />
        <span
          style={{
            textDecoration: item.isCompleted ? "line-through" : "none"
          }}
        >
          {item.text}
        </span>
      </label>
      <button data-itemid={item.id} onClick={() => handleRemoveClick(item.id)}>
        Delete
      </button>
    </li>
  );
};

export { TodoListItem };
