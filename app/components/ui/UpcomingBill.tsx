import { billCategories } from "@/app/data/bill-categories";

interface IBill {
  name?: string;
  category?: string;
  status?: string;
  dueDate: number;
}
export default function UpcomingBill({
  name,
  category,
  dueDate,
  status,
}: IBill) {
  const todaysDate = new Date().toISOString().split("T")[0];
  const addDays = (dateString: string, days: number) => {
    const date = new Date(dateString + "T00:00:00");
    date.setDate(date.getDate() + days);

    return date.toISOString().split("T")[0];
  };
  const billCategory = billCategories.find((bill) => bill?.name === category);

  const getBillStatus = (status?: string) => {
    if (status === "paid") {
      return "bg-Green text-white";
    }
    if (status === "upcoming") {
      return "bg-zinc-400 text-white";
    }
    if (status === "overdue") {
      return "bg-red-900 text-rose-400";
    }
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center size-12 rounded-xl bg-Purple-Theme">
          <span className="text-Purple text-2xl">{billCategory?.icon}</span>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <span className="text-[15px] text-Gray-purple">
            {category} &middot; Due{" "}
            {new Date(addDays(todaysDate, dueDate)).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
              },
            )}
          </span>
        </div>
      </div>
      <div
        className={`py-0.5 px-3 text-sm font-medium capitalize ${getBillStatus(status)} rounded-full`}
      >
        {status}
      </div>
    </div>
  );
}
