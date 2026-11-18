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
      <main className="bg-[#f3f0fe] pl-4 pt-4 pb-29 pr-4 lg:pr-0 lg:py-4 lg:ml-75 gap-5 relative">
        <div className="grid gap-5 lg:overflow-y-auto lg:pr-4">
          <DashboardHeader name={demoUser.name} />
          <DashboardIncome
            balance={demoUser.balance}
            expenses={demoUser.expenses}
            income={demoUser.income}
          />
          <DashboardGoals />
          <DashboardTransaction />
        </div>
      </main>
    </>
  );
}
