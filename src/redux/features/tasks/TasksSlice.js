import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTasks: (state, { payload }) => {
      const deleted = state.tasks.filter((item) => item.id !== payload);
      state.tasks = deleted;
    },
    updateTasks: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
  },
});

export const { addTasks, updateTasks, removeTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
