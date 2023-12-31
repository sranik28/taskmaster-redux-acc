import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/TasksSlice";
import UsersSlice from "./features/users/UsersSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    usersSlice: UsersSlice,
  },
});

export default store;
