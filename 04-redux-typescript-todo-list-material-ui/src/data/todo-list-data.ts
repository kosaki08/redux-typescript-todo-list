import { v4 as uuidv4 } from "uuid";

export const initialTodoListData = [
  { id: uuidv4(), text: "Buy a milk", isCompleted: true },
  { id: uuidv4(), text: "Put gas in the car", isCompleted: false },
  { id: uuidv4(), text: "Study English", isCompleted: false }
];
