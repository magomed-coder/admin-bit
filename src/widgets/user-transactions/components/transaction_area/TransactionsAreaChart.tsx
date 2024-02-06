import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { ITransactionData } from ".";
import { theme } from "../../../../app/Theme";
import { formatChartDate } from "../../utils/formatDate";

interface TransactionAreaChartProps {
  data: ITransactionData[];
  rightPadding: number;
}

const TransactionAreaChart: React.FC<TransactionAreaChartProps> = ({
  data,
  rightPadding,
}) => {
  return (
    <ResponsiveContainer width="100%" style={{ aspectRatio: "16/9" }}>
      <AreaChart data={data} margin={{ top: 30, right: 20 }}>
        <defs>
          <linearGradient
            id="color"
            x1="185.5"
            y1="0"
            x2="185.5"
            y2="217"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={theme.colors.additional} />
            <stop
              offset="1"
              stopColor={theme.colors.additional}
              stopOpacity="0.2"
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="tokens"
          stroke={theme.colors.additional}
          fill="url(#color)"
          strokeWidth={2}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          fontSize={14}
          tickCount={4}
          tickFormatter={(timestamp) => formatChartDate(timestamp)}
          allowDataOverflow={false}
          interval={Math.ceil((data.length / 4) * 0.85)}
          dx={40}
          dy={10}
        />
        <YAxis
          dataKey="tokens"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          orientation="right"
          fontSize={14}
          width={rightPadding}
          dy={-10}
          dx={10}
          allowDataOverflow={false}
        />

        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TransactionAreaChart;

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: number;
}) {
  if (
    active &&
    payload &&
    payload.length > 0 &&
    payload[0].value !== undefined
  ) {
    const formattedLabel = label ? formatChartDate(label) : "";

    return (
      <div
        style={{
          fontSize: "11px",
          color: theme.colors.text.main,
        }}
      >
        <h4 style={{ margin: 0 }}>{formattedLabel}</h4>
        <p style={{ margin: 0 }}>${payload[0].value} </p>
      </div>
    );
  }

  return null;
}
