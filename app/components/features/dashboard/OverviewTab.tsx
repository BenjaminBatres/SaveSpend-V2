import { demoUser } from "@/app/data/demo-data";
import DashboardGoals from "./DashboardGoals";
import DashboardHeader from "./DashboardHeader";
import DashboardIncome from "./DashboardIncome";
import DashboardTransaction from "./DashboardTransaction";

export default function OverviewTab() {
  return (
    <div className="grid gap-5 lg:overflow-y-auto">
      <DashboardHeader name={demoUser.name} />
      <DashboardIncome
        balance={demoUser.balance}
        expenses={demoUser.expenses}
        income={demoUser.income}
      />
      <DashboardGoals />
      <DashboardTransaction />
    </div>
  );
}
