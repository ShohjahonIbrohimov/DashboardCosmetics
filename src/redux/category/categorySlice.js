import { createSlice } from "@reduxjs/toolkit";
import { get, create, deleteCat, update } from "./thunks";

// Define the initial state using that type
const initialState = {
  category: [],
  subcategory: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [get.fulfilled.toString()]: (state, action) => {
      state[action.payload.type] = action.payload.res.data.data;
    },
    [create.fulfilled.toString()]: (state, action) => {
      state[action.payload.type] = [
        ...state[action.payload.type],
        action.payload.res.data.data,
      ];
    },
    [deleteCat.fulfilled.toString()]: (state, action) => {
      state[action.payload.type] = [
        ...state[action.payload.type].filter(
          (c) => c._id !== action.payload.data.id
        ),
      ];
    },
    [update.fulfilled.toString()]: (state, action) => {
      if (action.payload.type === "subcategory") {
        let data = action.payload.res.data.data;
        state.subcategory = [
          data,
          ...state.subcategory.filter((c) => c._id !== data._id),
        ];
      } else {
        let data = action.payload.res.data.data;
        state.category[action.payload.index] = data;
      }
    },
  },
});

export default categorySlice.reducer;
