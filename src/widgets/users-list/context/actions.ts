import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPages } from "./slice";
import { type User } from "../types/usersListTypes";
import { BaseAxiosInstance } from "../../../app/api";

export const fetchUsersAsync = createAsyncThunk<User[], void>(
  "user-list",
  async (_, { dispatch }) => {
    const res = await BaseAxiosInstance.get("/user/list");

    const users: User[] = res.data.data;
    const pages: number = res.data.pages;

    dispatch(setPages(pages));

    return users;
  }
);
