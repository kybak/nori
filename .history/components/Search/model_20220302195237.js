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
      state.loading = action.payload;
    }
  }
});

export const {
  setLoading,
  addError,
  removeError,
  handleUpdate,
  reset
} = loginRegisterSlice.actions;

export default resultSlice.reducer;
