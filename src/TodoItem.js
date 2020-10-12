import React from "react";

function TodoItem(props) {
  return (
    <label className="todo-item">
      <input
        className="my-checkbox"
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleChange(props.item.id);
        }}
      />
      {props.item.text}
    </label>
  );
}

export default TodoItem;
