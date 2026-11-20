import { demoUser } from "@/app/data/demo-data";
import { IoAddOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import TransactionFilters from "../../ui/TransactionFilters";
import { demoTransactions } from "@/app/data/demo-transaction";
import Transaction from "../../ui/Transaction";
import { useState } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { PiSortAscendingFill } from "react-icons/pi";

export default function TransactionsTab() {
  const [select, setSelect] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Latest");

  const categories = [
    "All Categories",
    "Food",
    "Income",
    "Entertainment",
    "Transportation",
    "Shopping",
    "Utilites",
    "Health",
    "Housing",
    "Education",
  ];

  const sortByOptions = ["Latest", "A to Z", "Z to A", "Highest", "Lowest"];
  const tableTop = ["Date", "Description", "Category", "Amount"];

  return (
    <div className="px-4 py-5 bg-white rounded-2xl space-y-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-3 justify-between">
        <div className="space-y-1.5">
          <h2 className="text-3xl font-semibold text-center sm:text-left">
            Transactions
          </h2>
          <p className="text-Gray-purple text-[15px] sm:text-base text-center sm:text-left">
            View and manage your transactions.
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-3">
          <div className="flex items-center gap-4">
            <div className="py-2 px-5 text-Purple uppercase font-semibold bg-[#efe5fe] rounded-full">
              Demo mode
            </div>
            <div className="size-11 bg-[#efe5fe] rounded-full flex justify-center items-center text-Purple font-medium">
              {demoUser.name.split("")[0]}
            </div>
          </div>
          <button className="bg-Purple px-3 py-2 rounded-full text-white flex items-center gap-1.5">
            <IoAddOutline className="text-2xl" /> Add Transaction
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex items-center w-70">
          <FiSearch className="absolute left-11 text-lg" />
          <input
            type="text"
            className="sm:hidden border border-zinc-200 shadow rounded-lg py-2 pl-10 pr-4 outline-Purple w-full"
            placeholder="Search trans..."
          />
          <input
            type="text"
            className="hidden sm:block border border-zinc-200 shadow rounded-lg py-2 pl-10 pr-4 outline-Purple w-full"
            placeholder="Search transactions..."
          />
        </div>
        <div className="flex gap-2 sm:gap-4 justify-end">
          <TransactionFilters
            icon={<RiFilter2Fill />}
            name={select}
            filters={categories}
          />
          <TransactionFilters
            icon={<PiSortAscendingFill />}
            name={sortBy}
            filters={sortByOptions}
          />
        </div>
      </div>

      <table className="w-full shadow-md">
        <thead className="bg-Purple-Theme hidden sm:table-header-group">
          <tr>
            {tableTop.map((item) => (
              <th
                key={item}
                className="text-left py-4 px-5 text-Gray-purple font-semibold"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {demoTransactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              amount={transaction.amount}
              id={transaction.id}
              category={transaction.category}
              date={transaction.date}
              description={transaction.description}
              type={transaction.type}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
