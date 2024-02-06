import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetailsAsync } from "./actions";
import { UserTransaction, UserTransactionState } from "../types/userTypes";
import { TableUser } from "../../users-list/types/usersListTypes";

const initialState: UserTransactionState = {
  userTransactions: null,
  selectedUser: null,
  isUserDetailsOpen: false,
  status: "idle",
  error: null,
};

const usersListSlice = createSlice({
  name: "user-transaction",
  initialState,
  reducers: {
    selectUserTransactions(state, action: PayloadAction<UserTransaction[]>) {
      state.userTransactions = action.payload;
    },
    selectUser(state, action: PayloadAction<TableUser>) {
      state.selectedUser = action.payload;
    },
    openUserDetails(state) {
      state.isUserDetailsOpen = true;
    },
    closeUserDetails(state) {
      state.isUserDetailsOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      //fetchUserDetailsAsync
      .addCase(fetchUserDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserDetailsAsync.fulfilled,
        (state, action: PayloadAction<UserTransaction[]>) => {
          state.status = "succeeded";
          state.userTransactions = action.payload;
        }
      )
      .addCase(fetchUserDetailsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { selectUser, openUserDetails, closeUserDetails } =
  usersListSlice.actions;
export default usersListSlice.reducer;
