import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { AddTodoType } from "../../../types/todo-list.type";

type Props = {
  addTodo: AddTodoType;
};

const TodoInput: React.FC<Props> = ({ addTodo }) => {
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
    addTodo({ id: uuidv4(), text: value, isCompleted: false });
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

export { TodoInput };
