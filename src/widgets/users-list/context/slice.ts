import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsersAsync } from "./actions";
import type { User, UsersListState } from "../types/usersListTypes";

const initialState: UsersListState = {
  users: [],
  pages: 1,

  status: "idle",
  error: null,
};

const usersListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setPages(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //fetchUsersAsync
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUsersAsync.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.status = "succeeded";
          state.users = action.payload || [];
        }
      )
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { setUsers, setPages } = usersListSlice.actions;
export default usersListSlice.reducer;
