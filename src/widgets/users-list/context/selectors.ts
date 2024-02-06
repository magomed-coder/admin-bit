import { RootState } from "../../../app/store/store";

// usersList
export const selectUsers = (state: RootState) => state.users.users;
export const selectStatus = (state: RootState) => state.users.status;
export const selectError = (state: RootState) => state.users.error;
