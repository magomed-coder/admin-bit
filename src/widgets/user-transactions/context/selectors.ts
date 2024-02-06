import { RootState } from "../../../app/store/store";

export const userTransactions = (state: RootState) =>
  state.userTransaction.userTransactions;
export const isUserDetailsOpen = (state: RootState) =>
  state.userTransaction.isUserDetailsOpen;
export const selectedUser = (state: RootState) =>
  state.userTransaction.selectedUser;
export const status = (state: RootState) => state.userTransaction.status;
export const error = (state: RootState) => state.userTransaction.error;
