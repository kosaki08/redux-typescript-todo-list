import React from "react";

import { Title } from "./components/title/title.component";
import { Todos } from "./components/todos/todos/todos.component";

export default function App() {
  return (
    <div>
      <Title />
      <Todos />
    </div>
  );
}
