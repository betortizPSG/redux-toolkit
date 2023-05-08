import { addTask, completedTask, removeTask } from "./action";
import { createReducer } from "@reduxjs/toolkit";

let id = 0;

export default createReducer([], {
  [addTask]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload,
      completed: false,
    });
  },
  [removeTask]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index);
  },
  [completedTask]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = true;
  },
});