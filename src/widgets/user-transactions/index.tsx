import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Overlay from "../../shared/components/Overlay";
import Box from "../../shared/components/Box";
import Typography from "../../shared/components/Typography";
import IconButton from "../../shared/components/IconButton";

import TransactionTable from "./components/TransactionTable";
import TransactionsChart from "./components/transaction_area";

import { theme } from "../../app/Theme";
import { CloseIcon } from "../../shared/components/Icons";

import { closeUserDetails } from "./context/slice";
import {
  isUserDetailsOpen,
  selectedUser,
  userTransactions,
} from "./context/selectors";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";

const UserDetails: React.FC = () => {
  const modalRootRef = useRef<HTMLDivElement | null>(null);

  const isOpen = useAppSelector(isUserDetailsOpen);
  const transactions = useAppSelector(userTransactions);
  const user = useAppSelector(selectedUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalRootRef.current) {
      modalRootRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const handleClose = () => {
    dispatch(closeUserDetails());
  };

  const chartData = transactions
    ?.map((transaction) => ({
      date: new Date(transaction.created_at).getTime(),
      tokens: transaction.amount,
    }))
    .reverse();

  return createPortal(
    <>
      <Overlay isOpen={isOpen} onClick={handleClose} />

      <Box
        ref={modalRootRef}
        sx={{
          position: "fixed",
          top: 0,
          right: isOpen ? "0" : "-650px",
          zIndex: 99,
          padding: "30px 16px",
          transition: "0.3s ease-in-out",
          height: "100%",
          backgroundColor: theme.colors.secondary,
          width: "100%",

          [theme.breakpoints.SMALL]: {
            width: "470px",
            padding: "56px 20px",
          },

          overflowY: "scroll",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#616D8D",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              color: theme.colors.text.main,
              fontSize: "20px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "90%",
            }}
          >
            {" "}
            {user?.email}{" "}
          </Typography>

          <IconButton
            onClick={handleClose}
            icon={<CloseIcon />}
            sx={{
              padding: "4px",
              border: "2px solid transparent",
              borderRadius: "4px",
              "&:hover": {
                border: `2px solid ${theme.colors.additional}`,
              },
            }}
          />
        </Box>

        <Box sx={{ borderBottom: "1px solid #222B44" }}>
          <TransactionsChart data={chartData || []} user={user} />
        </Box>

        <Box>
          <Typography
            sx={{
              color: theme.colors.text.main,
              fontSize: "20px",
              fontWeight: 600,
              padding: "20px 0",
            }}
          >
            История операций
          </Typography>
          <TransactionTable transactions={transactions || []} />
        </Box>
      </Box>
    </>,
    document.getElementById("modal-root")!
  );
};

export default UserDetails;
