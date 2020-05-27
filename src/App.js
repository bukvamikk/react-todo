import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

export default function App() {
  return (
    <div className="ToDo App">
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}
