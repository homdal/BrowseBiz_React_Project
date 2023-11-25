import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkTheme(state, action) {
      state.isDarkTheme = true;
      if (action.payload) {
        let prefString = JSON.stringify({
          user: action.payload,
          pref: true,
        });
        localStorage.setItem("themePref", prefString);
      }
    },
    lightTheme(state, action) {
      state.isDarkTheme = false;
      if (action.payload) {
        let prefString = JSON.stringify({
          user: action.payload,
          pref: false,
        });
        localStorage.setItem("themePref", prefString);
      }
    },
  },
});
export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
