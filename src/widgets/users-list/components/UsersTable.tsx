import React, { useState } from "react";
import { CSSProperties } from "styled-components";
import Box from "../../../shared/components/Box";
import { theme } from "../../../app/Theme";
import IconButton from "../../../shared/components/IconButton";
import {
  ArrowDownwardIcon,
  DeleteIcon,
  EditIcon,
} from "../../../shared/components/Icons";
import { TableUser } from "../types/usersListTypes";
import Pagination from "../../../shared/components/Pagination";

const cellStyle: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: "500",
  textAlign: "center",

  fontSize: "12px",
};

interface UsersTableProps {
  users: TableUser[];
  sortOrder: "desc" | "asc";
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
  handleChangeSortOrder: () => void;
  onRowClick: (event: React.MouseEvent, user: TableUser) => void;
}

const usersPerPage = 10;

const UsersTable: React.FC<UsersTableProps> = ({
  users,
  handleChangeSortOrder,
  sortOrder,
  onDelete,
  onEdit,
  onRowClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startSlice = (currentPage - 1) * usersPerPage;
  const endSlice = startSlice + usersPerPage;
  const slicedUsers = users.slice(startSlice, endSlice);
  const totalCount = users.length;

  return (
    <>
      <Box
        as="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <Box
            as="tr"
            sx={{
              color: theme.colors.text.mild,
              backgroundColor: theme.colors.primary,
              height: "44px",
              [theme.breakpoints.XLARGE]: { height: "46px" },
            }}
          >
            <Box
              as="th"
              sx={{
                borderRadius: "8px 0 0 8px",
                ...cellStyle,

                width: "60%",
                [theme.breakpoints.XLARGE]: { width: "50%", fontSize: "14px" },
                [theme.breakpoints.XXLARGE]: { width: "calc(100%/6)" },
              }}
            >
              Email
            </Box>
            <Box
              as="th"
              sx={{
                ...cellStyle,
                width: "40%",
                [theme.breakpoints.SMALL]: { width: "calc(50%/2)" },
                [theme.breakpoints.XLARGE]: {
                  width: "calc(50%/4)",
                  fontSize: "14px",
                },
                [theme.breakpoints.XXLARGE]: { width: "calc(100%/6)" },
              }}
            >
              Имя
            </Box>
            <Box
              as="th"
              sx={{
                ...cellStyle,
                display: "none",

                [theme.breakpoints.XLARGE]: {
                  display: "table-cell",
                  width: "calc(50%/4)",
                  fontSize: "14px",
                },
                [theme.breakpoints.XXLARGE]: { width: "calc(100%/6)" },
              }}
            >
              Роль
            </Box>
            <Box
              as="th"
              sx={{
                ...cellStyle,
                display: "none",

                [theme.breakpoints.SMALL]: { fontSize: "14px" },
                [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                [theme.breakpoints.XXLARGE]: {
                  display: "table-cell",
                  width: "calc(100%/6)",
                },
              }}
            >
              Подписка
            </Box>

            <Box
              as="th"
              sx={{
                ...cellStyle,
                display: "none",

                [theme.breakpoints.SMALL]: {
                  display: "table-cell",
                  width: "calc(50%/2)",
                },

                [theme.breakpoints.XLARGE]: {
                  width: "calc(50%/4)",
                  fontSize: "14px",
                },

                [theme.breakpoints.XXLARGE]: { width: "calc(100%/6)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  columnGap: "10px",
                }}
              >
                <span>Токены</span>
                <IconButton
                  onClick={handleChangeSortOrder}
                  icon={<ArrowDownwardIcon />}
                  sx={{
                    transition: ".3s transform",
                    transform: `rotate(${
                      sortOrder === "asc" ? "180deg" : "0deg"
                    })`,
                  }}
                />
              </Box>
            </Box>
            <Box
              as="th"
              sx={{
                borderRadius: "0 8px 8px 0",
                ...cellStyle,
                display: "none",

                [theme.breakpoints.XLARGE]: {
                  display: "table-cell",
                  width: "calc(50%/4)",
                  fontSize: "14px",
                },

                [theme.breakpoints.XXLARGE]: { width: "calc(100%/6)" },
              }}
            >
              Действия
            </Box>
          </Box>
        </thead>

        <tbody>
          {slicedUsers.map((user) => (
            <Box
              as="tr"
              key={user.id}
              onClick={(e: React.MouseEvent) => onRowClick(e, user)}
              sx={{
                color: theme.colors.text.main,
                borderBottom: `1px solid ${theme.colors.borders.main}`,
                cursor: "pointer",
                height: "64px",
              }}
            >
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {user.email}
              </Box>
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {user.name}
              </Box>
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {user.role}
              </Box>

              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {user.subscription}
              </Box>

              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {user.tokens} TKN
              </Box>

              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  padding: "23px",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
                className="no-click-action"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    columnGap: "10px",
                  }}
                >
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => onEdit(user.id)}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => onDelete(user.id)}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </tbody>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          padding: "24px 0 10px",
        }}
      >
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={usersPerPage}
          onPageChange={(page: React.SetStateAction<number>) =>
            setCurrentPage(page)
          }
        />
      </Box>
    </>
  );
};

export default UsersTable;
