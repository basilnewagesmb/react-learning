import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "cookies/token";
import { removeToken } from "./../../cookies/token";
const initialState = { user: false, token: null, name: null, email: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
      setToken(payload.token);
    },
    logout: (state, { payload }) => {
      state.user = false;
      state.token = null;
      state.name = null;
      state.email = null;
      removeToken();
    },
  },
});

export const { loginUser, logout } = authSlice.actions;

export default authSlice.reducer;
