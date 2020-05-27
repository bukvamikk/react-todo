import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

export default function App() {
  return (
    <div className="ToDo App">
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}
