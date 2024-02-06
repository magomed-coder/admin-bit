import { configureStore } from "@reduxjs/toolkit";
import usersListReducer from "../../widgets/users-list/context/slice";
import userTransactionReducer from "../../widgets/user-transactions/context/slice";

export const store = configureStore({
  reducer: {
    users: usersListReducer,
    userTransaction: userTransactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
