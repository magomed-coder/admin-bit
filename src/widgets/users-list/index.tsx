import React, { useCallback, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { selectUsers, selectStatus, selectError } from "./context/selectors";

import { fetchUsersAsync } from "./context/actions";
import { SortOrder, TableUser } from "./types/usersListTypes";

import { fetchUserDetailsAsync } from "../user-transactions/context/actions";
import {
  openUserDetails,
  selectUser,
} from "../user-transactions/context/slice";
import Typography from "../../shared/components/Typography";
import Box from "../../shared/components/Box";
import { theme } from "../../app/Theme";
import UsersTable from "./components/UsersTable";
import SearchInput from "./components/InputField";
import { filterAndSortUsers } from "./utils";

const UsersList: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [filterValue, setFilterValue] = useState("");

  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const handleChangeSortOrder = useCallback(() => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  }, []);

  const MemoizedFilteredAndSortedUsers = useCallback(() => {
    return filterAndSortUsers(users, filterValue, sortOrder);
  }, [users, filterValue, sortOrder]);

  const filteredAndSortedUsers = MemoizedFilteredAndSortedUsers();

  const handleRowClick = (event: React.MouseEvent, user: TableUser) => {
    const target = event.target as HTMLElement;

    if (target.closest(".no-click-action")) {
      return;
    }

    dispatch(fetchUserDetailsAsync(user.id));
    dispatch(selectUser(user));
    dispatch(openUserDetails());
  };

  const handleDelete = useCallback((userId: string) => {
    alert("handleDelete " + userId);
  }, []);

  const handleEdit = useCallback((userId: string) => {
    alert("handleEdit " + userId);
  }, []);

  let content: React.ReactNode;

  if (status === "loading") {
    content = (
      <Box
        sx={{
          textAlign: "center",
          color: theme.colors.text.main,
          fontSize: "22px",
        }}
      >
        loading...
      </Box>
    );
  } else if (status === "failed") {
    content = (
      <Box
        sx={{
          textAlign: "center",
          color: theme.colors.text.main,
          fontSize: "22px",
        }}
      >
        error: {error}
      </Box>
    );
  } else {
    content = (
      <>
        {filteredAndSortedUsers.length > 0 ? (
          <UsersTable
            users={filteredAndSortedUsers}
            handleChangeSortOrder={handleChangeSortOrder}
            onDelete={handleDelete}
            onEdit={handleEdit}
            sortOrder={sortOrder}
            onRowClick={handleRowClick}
          />
        ) : (
          <Typography sx={{ textAlign: "center" }}>Нет совпадений</Typography>
        )}
      </>
    );
  }

  return (
    <>
      <Typography
        as="h1"
        sx={{
          borderBottom: `1px solid ${theme.colors.borders.main}`,
          paddingBottom: "24px",
          paddingLeft: "16px",
          fontSize: "22px",
          fontWeight: 600,

          [theme.breakpoints.SMALL]: {
            paddingLeft: "24px",
          },

          [theme.breakpoints.LARGE]: {
            paddingLeft: "34px",
          },
        }}
      >
        Моя организация
      </Typography>

      <Box
        sx={{
          padding: "26px 16px",

          [theme.breakpoints.SMALL]: {
            padding: "24px",
          },

          [theme.breakpoints.LARGE]: {
            padding: "29px 34px",
          },
        }}
      >
        <Typography
          as="h2"
          sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "24px" }}
        >
          Пользователи
        </Typography>
        <Box
          sx={{
            marginBottom: "18px",
            [theme.breakpoints.LARGE]: {
              marginBottom: "24px",
            },
          }}
        >
          <SearchInput
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </Box>
        {content}
      </Box>
    </>
  );
};

export default UsersList;
