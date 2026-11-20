"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { CustomBar } from "../../ui/CustomBar";

export default function DashboardGoals() {
  const currentMonth = new Date().toLocaleString("en-US", {
    month: "short",
  });
  const chartData = [
    { month: "Jan", spending: 500 },
    { month: "Feb", spending: 700 },
    { month: "Mar", spending: 650 },
    { month: "Apr", spending: 900 },
    { month: "May", spending: 650 },
    { month: "Jun", spending: 1050 },
    { month: "Jul", spending: 780 },
    { month: "Aug", spending: 930 },
    { month: "Sept", spending: 800 },
    { month: "Oct", spending: 700 },
    { month: "Nov", spending: 500 },
    { month: "Dec", spending: 660 },
  ];

  const chartConfig = {
    spending: {
      label: "Spending",
      color: "#8062D6",
    },
  } satisfies ChartConfig;
  return (
    <div className="grid sm:grid-cols-2 sm:auto-rows-70 gap-4">
      <div className="px-3.5 pt-5 pb-12 bg-white rounded-2xl overflow-hidden shadow-sm">
        <h2 className="text-2xl font-semibold">Monthly spending</h2>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 0, right: 0 }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={14}
              ticks={["Jan", "Dec"]}
            />
            <Bar
              dataKey="spending"
              radius={[6, 6, 6, 6]}
              shape={<CustomBar currentMonth={currentMonth} />}
            />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="px-3.5 py-5 bg-white rounded-2xl space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold">Savings goal</h2>
        <div className="space-y-3">
          <p className="text-3xl font-semibold">$750 / $1,000</p>
          <div className="w-full bg-Purple-Theme rounded-full">
            <div className="h-3.5 bg-Purple rounded-full w-[75%]" />
          </div>
          <p className="text-Purple">75% completed</p>
          <p className="text-Gray-purple">New Laptop</p>
        </div>
      </div>
    </div>
  );
}
