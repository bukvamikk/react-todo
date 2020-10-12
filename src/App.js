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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItem = this.state.todos.map((item) => {
      return (
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
      );
    });

    return (
      <div className="ToDo App">
        <div className="todo-list">{todoItem}</div>
      </div>
    );
  }
}

export default App;
