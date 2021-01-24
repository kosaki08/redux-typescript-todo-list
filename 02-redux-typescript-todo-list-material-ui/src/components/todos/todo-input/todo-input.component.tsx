import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { addTodo } from "../../../redux/todos/todos.actions";
import { AddTodoFuncType } from "../../../redux/todos/todos.types";

type Props = {
  addTodo: AddTodoFuncType;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "1rem 0 3rem"
    }
  })
);

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

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
    addTodo(newItem);
    setValue("");
    focusInput();
  }

  useEffect(() => {
    focusInput();
  }, [inputRef]);

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        label="Add Task"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
        placeholder="Add Task..."
      />
      <Button variant="contained" color="secondary" type="submit">
        Add Todo
      </Button>
    </form>
  );
};

export default connect(null, {
  addTodo
})(TodoInput);
