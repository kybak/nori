import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errors: [],
  email: "",
  name: "",
  password: "",
  password2: ""
};

export const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addError: (state, action) => {
      addErrorUtil(action.payload, state.errors);
    },
    removeError: (state, action) => {
      removeErrorUtil(action.payload, state.errors);
    },
    handleUpdate: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: state => {
      return { ...state, ...initialState };
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

export default loginRegisterSlice.reducer;
