import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataFromServer: [],
  favorites: [],
  mycards: [],
  editCardObject: {},
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.dataFromServer = action.payload;
    },
    addFavorites(state, action) {
      state.favorites.push(action.payload);
      let cardIndex1 = state.dataFromServer.findIndex(
        (card) => card._id === action.payload._id
      );
      if (state.dataFromServer[cardIndex1]) {
        state.dataFromServer[cardIndex1].likes = true;
      }
      let cardIndex2 = state.mycards.findIndex(
        (card) => card._id === action.payload._id
      );
      if (state.mycards[cardIndex2]) {
        state.mycards[cardIndex2].likes = true;
      }
    },
    setEditCardObject(state, action) {
      state.editCardObject = action.payload;
    },
    editCard(state, action) {
      let cardIndex1 = state.dataFromServer.findIndex(
        (card) => card._id === action.payload._id
      );
      if (state.dataFromServer[cardIndex1]) {
        state.dataFromServer[cardIndex1] = action.payload;
      }
      let cardIndex2 = state.mycards.findIndex(
        (card) => card._id === action.payload._id
      );
      if (state.mycards[cardIndex2]) {
        state.mycards[cardIndex2] = action.payload;
      }
      let cardIndex3 = state.favorites.findIndex(
        (card) => card._id === action.payload._id
      );
      if (state.favorites[cardIndex3]) {
        state.favorites[cardIndex3] = action.payload;
      }
    },
    deleteCard(state, action) {
      state.dataFromServer = state.dataFromServer.filter(
        (card) => action.payload !== card._id
      );
      state.favorites = state.favorites.filter(
        (card) => action.payload !== card._id
      );
      state.mycards = state.mycards.filter(
        (card) => action.payload !== card._id
      );
    },
    removeFavorites(state, action) {
      state.favorites = [
        ...state.favorites.filter((card) => action.payload !== card._id),
      ];
      let cardIndex1 = state.dataFromServer.findIndex(
        (card) => card._id === action.payload
      );
      if (state.dataFromServer[cardIndex1]) {
        state.dataFromServer[cardIndex1].likes = false;
      }
      let cardIndex2 = state.mycards.findIndex(
        (card) => card._id === action.payload
      );
      if (state.mycards[cardIndex2]) {
        state.mycards[cardIndex2].likes = false;
      }
    },
    clearAll(state) {
      state.dataFromServer = [];
      state.favorites = [];
      state.mycards = [];
    },
    addMyCards(state, action) {
      state.mycards.push(action.payload);
      let cardIndex1 = state.dataFromServer.findIndex(
        (card) => card._id === action.payload._id
      );
      if (!state.dataFromServer[cardIndex1]) {
        state.dataFromServer.push(action.payload);
      }
    },
  },
});
export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
