import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./redux/reducers";
import { Todos } from "./components/todos/todos/todos.component";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-2xl">Simple Todo List</h1>
        <Todos />
      </div>
    </Provider>
  );
}
