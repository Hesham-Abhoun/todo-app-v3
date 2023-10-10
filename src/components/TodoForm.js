import React, { useEffect, useRef, useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [(handleSubmit) => handleSubmit]);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (todoTitle !== "") {
      addTodo(todoTitle);
      setTodoTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        placeholder="tapper votre tache ici..."
        type="text"
        value={todoTitle}
        onChange={(ev) => setTodoTitle(ev.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="todo-btn ">
        Ajouter
      </button>
    </form>
  );
};
