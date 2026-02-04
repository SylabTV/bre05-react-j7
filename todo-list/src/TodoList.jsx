import React, { useReducer } from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { listReducer } from "./reducer";

function ToDoList() {
  const [tasks, dispatch] = useReducer(listReducer, [
    { id: "task1", text: "Coder le design dark mode", done: false },
    { id: "task2", text: "Préparer le café", done: false },
    { id: "task3", text: "Dominer le monde (ou presque)", done: false },
  ]);

  const addTask = (text) => {
    dispatch({ type: "ADD_TASK", payload: text });
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  return (
    <>
      <ToDoForm addTask={addTask} />
      <ul className="todo-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
