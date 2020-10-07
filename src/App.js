import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodosData from "./TodosData";

export default function App() {
  const todoItem = TodosData.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });

  return (
    <div className="ToDo App">
      <div className="todo-list">{todoItem}</div>
    </div>
  );
}
