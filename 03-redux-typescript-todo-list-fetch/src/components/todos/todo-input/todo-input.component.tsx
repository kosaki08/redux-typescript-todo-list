import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

import { StoreState } from "../../../redux/reducers";
import { AddTodo } from "../../../redux/actions";
import { AddTodoType } from "../../../types/todo-list.type";

type Props = {
  AddTodo: AddTodoType;
};

const TodoInput: React.FC<Props> = ({ AddTodo }) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) {
      focusInput();
      return;
    }
    const newItem = { id: uuidv4(), text: value, isCompleted: false };
    AddTodo(newItem);
    setValue("");
    focusInput();
  }

  useEffect(() => {
    focusInput();
  }, [inputRef]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Add Task..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const mapSateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export default connect(mapSateToProps, {
  AddTodo
})(TodoInput);
