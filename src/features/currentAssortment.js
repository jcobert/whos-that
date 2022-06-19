import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { filter: false, search: false };

export const currentAssortmentSlice = createSlice({
  name: "currentAssortment",
  initialState: { value: initialStateValue },
  reducers: {
    setFilteredState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilteredState } = currentAssortmentSlice.actions;

export default currentAssortmentSlice.reducer;
