export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: `task${state.length + 1}`, text: action.payload, done: false },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      );
    default:
      return state;
  }
};
