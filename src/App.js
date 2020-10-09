import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodosData from "./TodosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodosData
    };
  }

  render() {
    const todoItem = this.state.todos.map((item) => {
      return <TodoItem key={item.id} item={item} />;
    });

    return (
      <div className="ToDo App">
        <div className="todo-list">{todoItem}</div>
      </div>
    );
  }
}

export default App;
