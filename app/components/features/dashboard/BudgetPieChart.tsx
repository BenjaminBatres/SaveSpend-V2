import { Cell, Pie, PieChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

export default function BudgetPieChart() {
  const budget = 2100;
  const spent = 1500;

  const percentage = Math.round((spent / budget) * 100);
  const remaining = Math.max(budget - spent, 0);
  const data = [
    {
      name: "Spent",
      amount: Math.min(spent, budget),
      fill: "#6abd9a",
    },
    {
      name: "Remaining",
      amount: remaining,
      fill: "#E7E1EF",
    },
  ];

  const chartConfig = {
    spent: {
      label: "Spent",
      color: "#6abd9a",
    },
    remaining: {
      label: "Remaining",
      color: "#E7E1EF",
    },
  };

  return (
    <div className="shadow px-5 pb-5 sm:pb-0 flex flex-col sm:flex-row justify-center items-center rounded-2xl xl:w-1/2 2xl:w-[35%]">
      <div className="relative">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full h-50 sm:h-58"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="name"
              innerRadius={65}
              outerRadius={85}
              strokeWidth={0}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-[#241C35]">
            {percentage}%
          </span>
          <span className="text-sm text-Gray-purple">Used</span>
        </div>
      </div>

      <div className="mt-3 text-center sm:text-left space-y-1">
        <p className="text-sm text-Gray-purple">Total Budget</p>

        <p className="text-xl font-bold text-[#241C35]">
          ${spent.toLocaleString()} / ${budget.toLocaleString()}
        </p>

        <p className="text-sm text-green-600">
          ${remaining.toLocaleString()} remaining
        </p>
      </div>
    </div>
  );
}
