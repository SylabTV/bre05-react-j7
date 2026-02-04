import React, { useState } from "react";

function ToDoForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ToDoForm;
