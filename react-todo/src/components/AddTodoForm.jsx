import React from "react";

function AddTodoForm({ newTodo, setNewTodo, onAdd }) {
  return (
    <form onSubmit={onAdd}>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        aria-label="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
