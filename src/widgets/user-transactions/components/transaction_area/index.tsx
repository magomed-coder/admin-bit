import TransactionAreaChart from "./TransactionsAreaChart";
import TransactionsLineChart from "./TransactionsLineChart";
import { TableUser } from "../../../users-list/types/usersListTypes";
import DoubleSlider from "./double-slider";
import { SetStateAction, useEffect, useState } from "react";
import Typography from "../../../../shared/components/Typography";
import Box from "../../../../shared/components/Box";
import { theme } from "../../../../app/Theme";

const rightPadding = 40;

export interface ITransactionData {
  date: number;
  tokens: number;
}

interface TransactionChartProps {
  data: ITransactionData[];
  user: TableUser | null;
}

const TransactionsChart: React.FC<TransactionChartProps> = ({ data, user }) => {
  const dateArray = data.map((item) => item.date);
  let minDate = 0;
  let maxDate = 100;

  const [values, setValues] = useState([maxDate, minDate]);

  if (data.length > 0) {
    minDate = Math.min(...dateArray);
    maxDate = Math.max(...dateArray);
  }

  useEffect(() => {
    if (data.length > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      minDate = Math.min(...dateArray);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      maxDate = Math.max(...dateArray);

      const oneThirdOfMax = minDate + (maxDate - minDate) / 3;
      const twoThirdsOfMax = minDate + (2 * (maxDate - minDate)) / 3;

      setValues([oneThirdOfMax, twoThirdsOfMax]);
    }
  }, [data]);

  const handleChange = (newValues: SetStateAction<number[]>) =>
    setValues(newValues);

  const filteredData = data.filter(
    (item) => item.date >= values[0] && item.date <= values[1]
  );

  return (
    <Box>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "90%",
        }}
      >
        Использование токенов
      </Typography>

      <TransactionAreaChart
        data={filteredData || []}
        rightPadding={rightPadding}
      />

      <Box
        sx={{
          margin: "12px 0",
          marginRight: `${rightPadding + 20}px`,
          position: "relative",
        }}
      >
        <TransactionsLineChart data={data || []} />
        <DoubleSlider
          minDate={minDate}
          maxDate={maxDate}
          values={values}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            width: "12px",
            height: "12px",
            backgroundColor: theme.colors.additional,
            borderRadius: "2px",
            marginRight: "10px",
          }}
        />
        <Typography
          sx={{
            color: theme.colors.text.subtle,
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {user?.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionsChart;
