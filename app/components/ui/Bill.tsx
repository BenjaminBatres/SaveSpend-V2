import { billCategories } from "@/app/data/bill-categories";

type TBill = {
  name: string;
  amount: number;
  category: string;
  dueDate: string;
  frequency: string;
  status: string;
};

export default function Bill({
  amount,
  category,
  dueDate,
  frequency,
  name,
  status,
}: TBill) {
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
    <tr className="border-b">
      {/* Name */}
      <td className="py-5 font-medium flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center size-12 rounded-xl bg-Purple-Theme">
            <span className="text-Purple text-2xl">{billCategory?.icon}</span>
          </div>
          <span className="max-w-30 xl:max-w-full">{name}</span>
        </div>
        {/* Status */}
        <div className="flex items-center gap-2">
          <div
            className={`md:hidden py-0.5 px-3 w-fit rounded-full font-semibold capitalize ${getBillStatus(status)}`}
          >
            {status}
          </div>
          <div className="sm:hidden text-sm text-zinc-500">
            {new Date(dueDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </td>
      {/* Date */}
      <td className="hidden sm:table-cell pl-5">
        <div>
          {new Date(dueDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
        </div>
        <div className="md:hidden">{category}</div>
      </td>
      {/* Category */}
      <td className="hidden md:table-cell font-medium pl-5">{category}</td>
      {/* Amount */}
      <td className="font-semibold pl-5 text-right md:text-left space-y-1">
        <div className="md:hidden capitalize text-lg">{frequency}</div>
        <div>${amount.toFixed(2)}</div>
        <div className="sm:hidden font-normal text-sm text-zinc-500">
          {category}
        </div>
      </td>
      {/* Paying for */}
      <td className="hidden md:table-cell font-semibold capitalize pl-5 text-lg">
        {frequency}
      </td>
      {/* Status */}
      <td className="hidden md:table-cell pl-5">
        <div
          className={`py-0.5 px-3 w-fit rounded-full font-semibold capitalize ${getBillStatus(status)}`}
        >
          {status}
        </div>
      </td>
    </tr>
  );
}
