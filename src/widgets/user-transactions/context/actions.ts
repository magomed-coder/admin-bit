import { createAsyncThunk } from "@reduxjs/toolkit";

import { type UserTransaction } from "../types/userTypes";
import { BaseAxiosInstance } from "../../../app/api";

export const fetchUserDetailsAsync = createAsyncThunk(
  "user-transactions",
  async (userId: string) => {
    const res = await BaseAxiosInstance.get(`/user/${userId}/transactions`);
    const userTransactions: UserTransaction[] = res.data;
    // dispatch(selectUser(userTransactions));

    return userTransactions;
  }
);
