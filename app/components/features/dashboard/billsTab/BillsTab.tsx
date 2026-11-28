import { useState } from "react";
import TabHeader from "../../../ui/TabHeader";
import { Calendar } from "@/components/ui/calendar";
import BillsOverview from "./BillsOverview";
import { demoBills } from "@/app/data/demo-bills";
import Bill from "@/app/components/ui/Bill";

export default function BillsTab() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const tableTop = [
    "Name",
    "Date",
    "Category",
    "Amount",
    "Paying for",
    "Status",
  ];

  return (
    <div className="px-4 py-5 bg-white rounded-2xl space-y-4 sm:space-y-3">
      <TabHeader
        title="Bills"
        desc="Keep track of your upcoming bills."
        buttonName="Add Bill"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <BillsOverview />
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border shadow w-full xl:w-100"
          />
        </div>
      </div>
      <div className="text-2xl font-semibold">All Bills</div>
      <table className="w-full">
        <thead className="hidden md:table-header-group">
          <tr>
            {tableTop.map((item, id) => (
              <th
                key={id}
                className={`text-left text-Gray-purple font-semibold ${id === 0 ? "pl-0" : "pl-5"}`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {demoBills.map((bill) => (
            <Bill
              key={bill.id}
              name={bill.name}
              category={bill.category}
              dueDate={bill.dueDate}
              amount={bill.amount}
              frequency={bill.frequency}
              status={bill.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
