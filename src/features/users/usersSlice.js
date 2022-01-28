import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (data) => data.json()
  );
  if (!res[0]) {
    return thunkAPI.rejectWithValue("response was not okay");
  }
  return res;
});

const initialState = {
  entities: [],
  loading: false,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
