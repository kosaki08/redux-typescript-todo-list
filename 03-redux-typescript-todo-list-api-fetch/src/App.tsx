import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";
import { Todos } from "./components/todos/todos/todos.component";

const store = createStore(reducers, applyMiddleware(thunk));

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
