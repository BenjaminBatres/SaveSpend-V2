import { IoCalendarOutline } from "react-icons/io5";
import { TbReceipt } from "react-icons/tb";
import { demoBills } from "@/app/data/demo-bills";
import { getBillStatus } from "@/lib/bill.utils";
import UpcomingBill from "@/app/components/ui/UpcomingBill";

export default function BillsOverview() {
  const billsOverview = [
    {
      icon: <TbReceipt />,
      title: "Monthly bills",
      amount: 1842.97,
      desc: "Across 8 recurring bills",
    },
    {
      icon: <IoCalendarOutline />,
      title: "Upcoming bills",
      billsAmount: 3,
      desc: "Due in the next 7 days",
    },
  ];

  const paid = demoBills.find((bill) => bill.status === "paid");
  const upcoming = demoBills.find((bill) => bill.status === "upcoming");
  const overdue = demoBills.find((bill) => bill.status === "overdue");

  return (
    <div className="space-y-4">
      <div className="grid xl:grid-cols-2 gap-4">
        {billsOverview.map((overview, id) => (
          <div
            key={id}
            className="px-3 py-4 border border-zinc-100 shadow rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">{overview.title}</h3>
              <span className="text-xl text-Purple">{overview.icon}</span>
            </div>
            {overview.amount ? (
              <h2 className="text-2xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(overview.amount)}
              </h2>
            ) : (
              <h2 className="text-2xl font-bold">{overview.billsAmount}</h2>
            )}
            <p>{overview.desc}</p>
          </div>
        ))}
      </div>
      <div className="px-3 py-4 shadow rounded-2xl space-y-3.5">
        <h2 className="font-semibold text-lg">Upcoming payments</h2>
        <div className="space-y-3">
          <UpcomingBill
            category={paid?.category}
            name={paid?.name}
            dueDate={3}
            status={paid?.status}
          />
          <UpcomingBill
            category={upcoming?.category}
            name={upcoming?.name}
            dueDate={5}
            status={upcoming?.status}
          />
          <UpcomingBill
            category={overdue?.category}
            name={overdue?.name}
            dueDate={-7}
            status={overdue?.status}
          />
        </div>
      </div>
    </div>
  );
}
