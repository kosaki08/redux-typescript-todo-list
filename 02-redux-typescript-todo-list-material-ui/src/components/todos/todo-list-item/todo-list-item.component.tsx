import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
    <ListItem button onClick={() => handleCheck(item.id)}>
      <ListItemIcon>
        <Checkbox
          checked={item.isCompleted}
          id={`todo-${item.id}`}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </ListItemIcon>
      <ListItemText
        style={{
          textDecoration: item.isCompleted ? "line-through" : "none"
        }}
      >
        {item.text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          aria-label="delete"
          data-itemid={item.id}
          onClick={() => handleRemoveClick(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect(null, {
  deleteTodo,
  toggleTodoCompleted
})(TodoItem);
