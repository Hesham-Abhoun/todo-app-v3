import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();
export default function TodoLocalStorage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage["todos"]) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodo = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodo);
    localStorage.setItem["todos".JSON.stringfy(newTodo)];

    const toggleComplete = (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
    };
    const deleteTodo = (id) => {
      const newTodo = todos.filter((todo) => todo.id !== id);
      setTodos(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
    };
    const editTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    };

    const editTask = (task, id) => {
      const newTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      );
      setTodos(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
    };
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}
