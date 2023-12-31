import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  usersTasks: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
