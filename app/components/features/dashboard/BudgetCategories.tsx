import { BsForkKnife } from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import Budget from "../../ui/Budget";
export default function BudgetCategories() {
  const budgetCategories = [
    {
      icon: <BsForkKnife />,
      name: "Food",
      spent: 350,
      amount: 500,
    },
    {
      icon: <IoLogoGameControllerB />,
      name: "Entertainment",
      spent: 120,
      amount: 300,
    },
    {
      icon: <IoBag />,
      name: "Shopping",
      spent: 100,
      amount: 200,
    },
  ];

  return (
    <div className="shadow rounded-2xl p-4 pr-0 space-y-6 xl:w-1/2 2xl:w-[65%]">
      <h2 className="text-xl font-semibold">Budget Categories</h2>
      <div className="space-y-6 max-h-60 overflow-y-auto pr-4">
        {budgetCategories.map((budget, id) => (
          <Budget
            key={id}
            name={budget.name}
            spent={budget.spent}
            icon={budget.icon}
            amount={budget.amount}
          />
        ))}
      </div>
    </div>
  );
}
