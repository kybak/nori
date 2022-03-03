import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  results: []
};

export const resultSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.results = action.payload;
    }
  }
});

export const { setLoading } = loginRegisterSlice.actions;

export default resultSlice.reducer;
