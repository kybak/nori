import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  results: []
};

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.results = action.payload;
    }
  }
});

export const actions = resultSlice.actions;

export default resultSlice.reducer;
