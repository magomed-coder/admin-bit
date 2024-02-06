import React from "react";
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line } from "recharts";
import { theme } from "../../../../app/Theme";

interface ITransactionData {
  date: number;
  tokens: number;
}

interface TransactionAreaChartProps {
  data: ITransactionData[];
}

const TransactionAreaChart: React.FC<TransactionAreaChartProps> = ({
  data,
}) => {
  return (
    <ResponsiveContainer width="100%" height={25}>
      <LineChart data={data}>
        <Line dataKey="tokens" stroke={theme.colors.additional} dot={false} />
        <XAxis dataKey="date" hide />
        <YAxis dataKey="tokens" hide />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionAreaChart;
