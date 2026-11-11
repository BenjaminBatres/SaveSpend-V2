"use client";

import { Bar, BarChart } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", spending: 500 },
  { month: "Feb", spending: 700 },
  { month: "Mar", spending: 650 },
  { month: "Apr", spending: 900 },
  { month: "May", spending: 650 },
  { month: "Jun", spending: 1050 },
  { month: "Jul", spending: 800 },
];

const chartConfig = {
  spending: {
    label: "Spending",
    color: "#8062D6",
  },
} satisfies ChartConfig;

export function MonthlySpendingChart() {
  return (
    <ChartContainer config={chartConfig} className="h-25 w-full">
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 8, right: 8 }}
      >
        <Bar
          dataKey="spending"
          fill="var(--color-spending)"
          radius={[6, 6, 6, 6]}
        />
      </BarChart>
    </ChartContainer>
  );
}
