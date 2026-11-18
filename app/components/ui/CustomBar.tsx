import type { RectangleProps } from "recharts";
type CustomBarProps = RectangleProps & {
  payload?: {
    month: string;
    revenue: number;
  };
  currentMonth: string;
};

export function CustomBar({ currentMonth, ...props }: CustomBarProps) {
  const { x, y, width, height, payload } = props;

  const isCurrentMonth = payload?.month === currentMonth;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={6}
      fill={isCurrentMonth ? "var(--color-spending)" : "#dccff5"}
    />
  );
}
