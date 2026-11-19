interface IUserIncomeDetails {
  balance: number;
  income: number;
  expenses: number;
}

export default function DashboardIncome({
  balance,
  expenses,
  income,
}: IUserIncomeDetails) {
  const userIncomeDetails = [
    {
      title: "Total balance",
      balance: balance,
    },
    {
      title: "Income",
      balance: income,
    },
    {
      title: "Expenses",
      balance: expenses,
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4 auto-rows-30">
      {userIncomeDetails.map((detail, id) => (
        <div key={id} className="bg-white p-3 rounded-2xl space-y-2 shadow-sm">
          <h3 className="text-Gray-purple text-sm">{detail.title}</h3>
          <p className="text-3xl font-semibold">
            ${detail.balance.toLocaleString()}
          </p>
          {id !== 0 && <p className="text-Gray-purple text-sm">This month</p>}
        </div>
      ))}
    </div>
  );
}
