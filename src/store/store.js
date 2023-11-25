import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";
import dataSlice from "./dataSlice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: {
    themeReducer,
    authSlice,
    searchSlice,
    dataSlice,
    formSlice,
  },
});

export default store;
