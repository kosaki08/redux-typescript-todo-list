import React from "react";
import { connect } from "react-redux";

import {
  TodoItemType,
  DeleteTodoFuncType,
  ToggleCompletedFuncType
} from "../../../redux/todos/todos.types";
import {
  deleteTodo,
  toggleTodoCompleted
} from "../../../redux/todos/todos.actions";

type Props = {
  item: TodoItemType;
  deleteTodo: DeleteTodoFuncType;
  toggleTodoCompleted: ToggleCompletedFuncType;
};

const TodoItem: React.FC<Props> = ({
  item,
  deleteTodo,
  toggleTodoCompleted
}) => {
  function handleRemoveClick(id: string) {
    deleteTodo(id);
  }

  function handleCheck(id: string) {
    toggleTodoCompleted(id);
  }

  return (
    <li key={item.id}>
      <label htmlFor={`todo-${item.id}`}>
        <input
          type="checkbox"
          id={`todo-${item.id}`}
          onChange={() => handleCheck(item.id)}
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

export default connect(null, {
  deleteTodo,
  toggleTodoCompleted
})(TodoItem);
