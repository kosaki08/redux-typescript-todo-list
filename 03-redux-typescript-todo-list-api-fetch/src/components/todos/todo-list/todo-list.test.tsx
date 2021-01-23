import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./todo-list.component";

describe("<TodoList />", () => {
  it("should render without crash", () => {
    render(<TodoList />);
  });
});
