import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const activeCardSlice = createSlice({
  name: "activeCard",
  initialState: { value: initialStateValue },
  reducers: {
    setActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default activeCardSlice.reducer;
