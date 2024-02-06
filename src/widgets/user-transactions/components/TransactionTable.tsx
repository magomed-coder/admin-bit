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
  padding: "12px",
  fontWeight: "500",
  textAlign: "center",
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
          <tr style={{ height: "48px", color: theme.colors.text.mild }}>
            <Box as="th" sx={{ borderRadius: "10px 0 0 0", ...cellStyle }}>
              Тип
            </Box>
            <Box as="th" sx={{ ...cellStyle }}>
              Сумма
            </Box>
            <Box as="th" sx={{ borderRadius: "0 10px 0 0", ...cellStyle }}>
              Дата
            </Box>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              style={{ height: "64px", cursor: "pointer" }}
            >
              <Box as="td" sx={{ ...cellStyle, color: theme.colors.text.main }}>
                {TransactionAction[transaction.type]}
              </Box>
              <Box
                as="td"
                sx={{
                  ...cellStyle,
                  color: ActionTypeColors[transaction.type],
                  whiteSpace: "normal",
                }}
              >
                {transaction.type == ActionType.WRITE_OFF ? "-" : "+"}
                {transaction.amount} BTKN
              </Box>
              <Box as="td" sx={{ ...cellStyle }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  {format(parseISO(transaction.created_at), "dd.MM.yy")},
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  {format(parseISO(transaction.created_at), "HH:mm:ss")}
                </Typography>
              </Box>
            </tr>
          ))}
        </tbody>
      </Box>
    </Box>
  );
};

export default TransactionTable;
