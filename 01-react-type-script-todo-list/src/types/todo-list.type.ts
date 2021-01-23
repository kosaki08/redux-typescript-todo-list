export type TodoItemType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type AddTodoType = (todo: TodoItemType) => void;

export type RemoveTodoType = (itemId: string) => void;

export type ToggleCompletedType = (itemId: string) => void;
