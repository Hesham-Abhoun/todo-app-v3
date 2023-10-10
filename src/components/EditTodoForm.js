import React, { useState } from "react";

export function EditTodoForm() {
  const [titleTodo, setTiltleTodo] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTiltleTodo(titleTodo);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={titleTodo}
        onChange={(e) => setTiltleTodo(e.target.value)}
        className="todo-input"
        placeholder="modifier la tache"
      />
      <button type="submit" className="todo-btn">
        modifier
      </button>
    </form>
  );
}
