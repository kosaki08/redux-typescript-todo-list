import React from "react";
import { Container } from "@material-ui/core";

import TodoInput from "../todo-input/todo-input.component";
import TodoList from "../todo-list/todo-list.component";

const Todos = () => (
  <Container maxWidth="md">
    <TodoInput />
    <TodoList />
  </Container>
);

export { Todos };
