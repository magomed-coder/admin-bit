import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatChartDate = (label: number) => {
  const date = new Date(label);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return format(date, "dd LLL HH:mm", { locale: ru })
    .split(" ")
    .map((part, index) =>
      index === 1 ? part.charAt(0).toUpperCase() + part.slice(1) : part
    )
    .join(" ")
    .replace(".", "");
};
