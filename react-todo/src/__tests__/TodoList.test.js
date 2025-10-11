import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("todo-input");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const item = screen.getByText("Learn React");
    fireEvent.click(item);
    expect(item).toHaveStyle("text-decoration: line-through");
    fireEvent.click(item);
    expect(item).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const item = screen.getByText("Learn React");
    const deleteBtn = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(deleteBtn);
    expect(item).not.toBeInTheDocument();
  });
});
