import { categoryColors } from "@/app/data/category-colors";

interface ITransactions {
  id: string;
  description: string;
  category: keyof typeof categoryColors;
  type: string;
  amount: number;
  date: string;
}

export default function Transaction({
  id,
  description,
  date,
  amount,
  type,
  category,
}: ITransactions) {
  const colors = categoryColors[category];
  return (
    <tr key={id} className="border-b">
        {/* Date Desktop */}
      <td className="hidden sm:table-cell pl-5 py-4 font-medium">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          day: "numeric",
          month: "short",
        })}
      </td>
      {/* Description */}
      <td className="pl-3 sm:pl-5 py-4 font-medium">
        {description}
        <div
          className="sm:hidden px-3 py-0.5 border w-fit rounded-full font-medium mt-2"
          style={{
            backgroundColor: colors.background,
            color: colors.text,
          }}
        >
          {category}
        </div>
      </td>
      <td className="hidden sm:table-cell pl-5 py-2">
        <div
          className="px-3 py-0.5 border w-fit rounded-full font-medium"
          style={{
            backgroundColor: colors.background,
            color: colors.text,
          }}
        >
          {category}
        </div>
      </td>
      <td
        className={`flex flex-col gap-2 sm:table-cell items-end pl-5 pr-3 sm:pr-0 py-4`}
      >
        {category === "Income" ? (
          <span className="text-Green font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount)}
          </span>
        ) : (
          <span className="text-[#E05252] font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount * -1)}
          </span>
        )}
        <span className="text-[15px] sm:hidden font-medium">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            day: "numeric",
            month: "short",
          })}
        </span>
      </td>
    </tr>
  );
}
