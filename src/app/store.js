import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "services/post";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(store.dispatch);
