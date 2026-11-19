"use client";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { BsBullseye } from "react-icons/bs";
import { useState } from "react";
import { demoUser } from "../../../data/demo-data";
import DashboardHeader from "./DashboardHeader";
import DashboardIncome from "./DashboardIncome";
import DashboardGoals from "./DashboardGoals";
import DashboardTransaction from "./DashboardTransaction";
import MobileNavbar from "../../layouts/MobileNavbar";
import Sidebar from "../../layouts/Sidebar";
import TransactionsTab from "./TransactionsTab";
export default function DemoDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = [
    {
      icon: <MdOutlineDashboard />,
      name: "Overview",
    },
    {
      icon: <HiOutlineArrowsRightLeft />,
      name: "Transactions",
    },
    {
      icon: <LuWallet />,
      name: "Budget",
    },
    {
      icon: <LuCalendarDays />,
      name: "Bills",
    },
    {
      icon: <BsBullseye />,
      name: "Savings",
    },
  ];
  return (
    <>
      <MobileNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <main
        className={`bg-[#f3f0fe] pt-4 pb-29 px-4 lg:py-4 lg:ml-75 relative`}
      >
        {activeTab === "Overview" && (
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
        )}
        {activeTab === "Transactions" && <TransactionsTab />}
      </main>
    </>
  );
}
