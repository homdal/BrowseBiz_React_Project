import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
};
const formSlice = createSlice({
  name: "login-register",
  initialState,
  reducers: {
    changeToLogin(state) {
      state.isRegister = false;
    },
    changeToRegister(state) {
      state.isRegister = true;
    },
  },
});
export const formActions = formSlice.actions;
export default formSlice.reducer;
