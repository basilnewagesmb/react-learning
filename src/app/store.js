import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "services/post";
import authSlice from "features/auth/authSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    auth:authSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(store.dispatch);
