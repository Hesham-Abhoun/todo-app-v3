import React, { useState } from "react";

export function EditTodoForm() {
  const [titleTodo, setTitleTodo] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTitleTodo(titleTodo);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm editTodo">
      <input
        type="text"
        value={titleTodo}
        onChange={(e) => setTitleTodo(e.target.value)}
        className="todo-input"
        placeholder="modifier la tache"
      />
      <button type="submit" className="todo-btn">
        modifier
      </button>
      <button className="todo-btn">annuler</button>
    </form>
  );
}
