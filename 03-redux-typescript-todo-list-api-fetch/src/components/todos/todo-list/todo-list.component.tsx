import React, { useEffect } from "react";
import { connect } from "react-redux";

import TodoItem from "../todo-list-item/todo-list-item.component";
import {
  TodoItemType,
  FetchTodoFuncType
} from "../../../redux/todos/todos.types";
import { fetchTodo } from "../../../redux/todos/todos.actions";

type Props = {
  todos: TodoItemType[];
  fetchTodo: FetchTodoFuncType;
};

const TodoList: React.FC<Props> = ({ todos, fetchTodo }) => {
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <TodoItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export type StoreState = {
  todos: TodoItemType[];
};

const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, {
  fetchTodo
})(TodoList);
