"use client";
import { useState } from "react";
import TabHeader from "../../ui/TabHeader";
import BudgetCategories from "./BudgetCategories";
import BudgetPieChart from "./BudgetPieChart";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import BudgetTip from "../../ui/BudgetTip";

export default function BudgetTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-5 bg-white rounded-2xl space-y-4 sm:space-y-3 ">
      <TabHeader
        title="Budget"
        buttonName="Create Budget"
        desc="Set and track your spending limits."
      />
      <div className="flex flex-col xl:flex-row gap-4">
        <BudgetPieChart />
        <BudgetCategories />
      </div>
      <div className="bg-Purple-Theme flex items-center justify-between gap-5 rounded-lg px-3 py-5 sm:p-5">
        <div className="flex items-center gap-3">
          <HiOutlineLightBulb className="hidden sm:block text-5xl text-Purple" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Budget Tip</h3>
            <p className="text-Gray-purple text-sm sm:text-base">
              Try setting a budget for dinning out to stay on track!
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center size-10 sm:size-12 p-2 bg-Purple rounded-lg cursor-pointer"
        >
          <IoIosArrowForward
            className={`text-3xl text-white ${isOpen ? "-rotate-90" : "rotate-0"} duration-300`}
          />
        </button>
      </div>

      <BudgetTip isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
    </div>
  );
}
