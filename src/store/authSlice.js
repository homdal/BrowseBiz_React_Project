import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loggedIn: false,
  userData: undefined,
  userDetails: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
      toast(`Welcome, ${state.userDetails.name.first}!`, {
        autoClose: 3000,
      });
    },
    logout(state) {
      state.loggedIn = false;
      state.userData = undefined;
      state.userDetails = undefined;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      toast(`See you next time!`, {
        autoClose: 3000,
      });
    },
    saveUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
