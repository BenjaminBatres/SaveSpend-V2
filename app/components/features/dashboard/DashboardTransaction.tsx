import { demoTransactions } from "@/app/data/demo-data";

export default function DashboardTransaction() {
  return (
    <div className="bg-white rounded-2xl px-3 py-5 shadow-sm">
      <h2 className="text-2xl font-semibold">Recent transactions</h2>
      <div>
        {demoTransactions.map((transaction) => (
          <div
            className="flex justify-between items-center border-b border-zinc-200 py-4"
            key={transaction.id}
          >
            <div>
              <p className="font-semibold">{transaction.name}</p>
              <p className="text-Gray-purple">{transaction.category}</p>
            </div>
            <p className="font-semibold text-[#E05252]">-${transaction.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
