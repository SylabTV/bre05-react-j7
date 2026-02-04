import React from "react";

function ToDoItem({ id, text, done, removeTask, toggleTask }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => toggleTask(id)}
      />
      <label htmlFor={id} className="task-text">
        {text}
      </label>
      <button className="delete-btn" onClick={() => removeTask(id)}>
        &times;
      </button>
    </li>
  );
}

export default ToDoItem;
