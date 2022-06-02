import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = null;

export const activeCardSlice = createSlice({
  name: "activeCard",
  initialState: { value: initialStateValue },
  reducers: {
    setActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActive } = activeCardSlice.actions;

export default activeCardSlice.reducer;
