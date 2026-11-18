import { demoTransactions } from "@/app/data/demo-data"

export default function DashboardTransaction() {
  return (
    <div className='bg-white rounded-2xl px-3 py-5'>
        <h2>Recent transactions</h2>
        <div>
        {demoTransactions.map((transaction) => (
            <div className="flex justify-between items-center border-b border-zinc-200 py-4" key={transaction.id}>
                <div>
                    <p className="font-semibold">{transaction.name}</p>
                    <p className="text-Gray-purple">{transaction.category}</p>                   
                </div>
                <p className="font-semibold">-${transaction.amount.toFixed(2)}</p>
            </div>
        ))}

        </div>
    </div>
  )
}
