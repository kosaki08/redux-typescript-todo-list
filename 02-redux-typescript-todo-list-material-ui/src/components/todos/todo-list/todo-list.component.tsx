import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      "& .MuiListItem-container": {
        borderBottom: "1px solid #ddd"
      }
    }
  })
);

const TodoList: React.FC<Props> = ({ todos, fetchTodo }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <>
      {todos.length > 0 && (
        <List className={classes.root}>
          {todos.map((item) => (
            <TodoItem item={item} key={item.id} />
          ))}
        </List>
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
