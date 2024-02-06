import { format, parseISO } from "date-fns";

import { ActionType, UserTransaction } from "../types/userTypes";
import { CSSProperties } from "styled-components";
import Box from "../../../shared/components/Box";
import Typography from "../../../shared/components/Typography";
import { theme } from "../../../app/Theme";

const ActionTypeColors: Record<ActionType, string> = {
  [ActionType.WRITE_OFF]: "#FE4242",
  [ActionType.REPLENISH]: "#1ABB34",
};

const TransactionAction: Record<ActionType, string> = {
  [ActionType.WRITE_OFF]: "Списание",
  [ActionType.REPLENISH]: "Пополнение",
};

const cellStyle: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: "500",
  textAlign: "center",
  fontSize: "12px",
};

interface TransactionTableProps {
  transactions: UserTransaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <Box>
      <Box
        as="table"
        sx={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}
      >
        <thead
          style={{
            position: "sticky",
            top: "-56px",
            backgroundColor: theme.colors.primary,
          }}
        >
          <Box
            as="tr"
            sx={{
              height: "44px",
              color: theme.colors.text.mild,
              [theme.breakpoints.LARGE]: { height: "46px" },
            }}
          >
            <Box
              as="th"
              sx={{
                borderRadius: "10px 0 0 0",
                ...cellStyle,
                [theme.breakpoints.XLARGE]: { fontSize: "14px" },
              }}
            >
              Тип
            </Box>
            <Box
              as="th"
              sx={{
                ...cellStyle,
                [theme.breakpoints.XLARGE]: { fontSize: "14px" },
              }}
            >
              Сумма
            </Box>
            <Box
              as="th"
              sx={{
                borderRadius: "0 10px 0 0",
                ...cellStyle,
                [theme.breakpoints.XLARGE]: { fontSize: "14px" },
              }}
            >
              Дата
            </Box>
          </Box>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <Box
              as="tr"
              key={transaction.id}
              sx={{
                height: "64px",
                cursor: "pointer",
                borderBottom: `1px solid ${theme.colors.borders.main}`,
              }}
            >
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  color: theme.colors.text.main,
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {TransactionAction[transaction.type]}
              </Box>
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  color: ActionTypeColors[transaction.type],
                  whiteSpace: "normal",
                  [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                }}
              >
                {transaction.type == ActionType.WRITE_OFF ? "-" : "+"}
                {transaction.amount} BTKN
              </Box>
              <Box as="td" sx={{ ...cellStyle }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                  }}
                >
                  {format(parseISO(transaction.created_at), "dd.MM.yy")},
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    [theme.breakpoints.XLARGE]: { fontSize: "14px" },
                  }}
                >
                  {format(parseISO(transaction.created_at), "HH:mm:ss")}
                </Typography>
              </Box>
            </Box>
          ))}
        </tbody>
      </Box>
    </Box>
  );
};

export default TransactionTable;
