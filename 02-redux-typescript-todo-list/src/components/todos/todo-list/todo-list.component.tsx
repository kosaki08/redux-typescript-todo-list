import React from "react";
import { connect } from "react-redux";

import { StoreState } from "../../../redux/reducers";
import { TodoItemType } from "../../../types/todo-list.type";
import {
  RemoveTodoType,
  ToggleCompletedType
} from "../../../types/todo-list.type";
import { DeleteTodo, ToggleTodoCompleted } from "../../../redux/actions";

type Props = {
  todos: TodoItemType[];
  DeleteTodo: RemoveTodoType;
  ToggleTodoCompleted: ToggleCompletedType;
};

const Todo: React.FC<Props> = ({ todos, DeleteTodo, ToggleTodoCompleted }) => {
  function handleRemoveClick(id: string) {
    DeleteTodo(id);
  }

  function handleCheck(id: string) {
    ToggleTodoCompleted(id);
  }

  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
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
              <button
                data-itemid={item.id}
                onClick={() => handleRemoveClick(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapSateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export default connect(mapSateToProps, {
  DeleteTodo,
  ToggleTodoCompleted
})(Todo);
