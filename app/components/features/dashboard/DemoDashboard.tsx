"use client";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { BsBullseye } from "react-icons/bs";
import { useState } from "react";
import MobileNavbar from "../../layouts/MobileNavbar";
import Sidebar from "../../layouts/Sidebar";
import TransactionsTab from "./TransactionsTab";
import OverviewTab from "./OverviewTab";
import BudgetTab from "./BudgetTab";
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
        className={`bg-[#f3f0fe] pt-4 pb-29 px-4 lg:py-4 lg:ml-65 relative min-h-screen`}
      >
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Transactions" && <TransactionsTab />}
        {activeTab === "Budget" && <BudgetTab />}
      </main>
    </>
  );
}
