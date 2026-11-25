import Image from "next/image";
import BudgetImage from "@/app/assets/budget.svg";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
export default function BudgetTip({ isOpen, setIsOpen }: IProps) {
  const [tipTitle, setTipTitle] = useState("");
  const [tipDesc, setTipDesc] = useState("");
  const [tipQuickPlan, setTipQuickPlanTip] = useState<string[]>([]);
  const budgetTips = [
    {
      title: "Dining Out Budget Tip",
      desc: "Set a monthly dining-out budget of $50–$100 to enjoy meals at restaurants while keeping your overall spending under control.",
      quickPlan: [
        "Set a dining-out budget of $50–$100/month.",
        "Track restaurant and food delivery expenses.",
        "Limit unnecessary dining-out purchases.",
        "Review your spending every week.",
      ],
    },
    {
      title: "Shopping Budget Tip",
      desc: "Control impulse purchases by setting a monthly shopping limit and prioritizing essential items over unnecessary purchases.",
      quickPlan: [
        "Set a shopping budget of $100–$150/month.",
        "Make a shopping list before purchasing.",
        "Wait 24 hours before buying non-essential items.",
        "Track all shopping transactions.",
      ],
    },
    {
      title: "Savings Goal Tip",
      desc: "Build a healthy savings habit by setting aside a portion of your income every month before spending on non-essential things.",
      quickPlan: [
        "Set a monthly savings goal of $200–$300.",
        "Save at least 10–20% of your income.",
        "Automate monthly savings transfers.",
        "Monitor your savings progress regularly.",
      ],
    },
    {
      title: "Entertainment Budget Tip",
      desc: "Enjoy movies, games, subscriptions, and other entertainment activities without overspending by creating a fixed monthly budget.",
      quickPlan: [
        "Set an entertainment budget of $50–$80/month.",
        "Review and cancel unused subscriptions.",
        "Look for free or low-cost activities.",
        "Track entertainment expenses weekly.",
      ],
    },
    {
      title: "Transportation Budget Tip",
      desc: "Reduce transportation expenses by planning trips, monitoring fuel costs, and choosing cost-effective travel options whenever possible.",
      quickPlan: [
        "Set a transportation budget of $100–$200/month.",
        "Track fuel, parking, and public transport expenses.",
        "Combine errands to reduce unnecessary trips.",
        "Review transportation costs at the end of each month.",
      ],
    },
  ];

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * budgetTips.length);
    setTipTitle(budgetTips[randomIndex].title);
    setTipDesc(budgetTips[randomIndex].desc);
    setTipQuickPlanTip(budgetTips[randomIndex].quickPlan);
  };
  useEffect(() => {
    getRandomTip();
  }, []);

  return (
    <div
      className={`${isOpen ? "opacity-100 max-h-220 md:max-h-170 xl:max-h-100" : "opacity-0 pointer-events-none max-h-0"} border border-Purple rounded-2xl transition-height duration-500 overflow-hidden`}
    >
      <div className=" flex flex-col xl:flex-row gap-4 md:gap-10 px-3 py-8 md:p-8">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10">
          <Image src={BudgetImage} alt="" className="w-60" />
          <div className="space-y-3 xl:border-r-2 border-zinc-200 xl:pr-6">
            <h2 className="text-xl sm:text-2xl font-bold">{tipTitle}</h2>
            <p className="text-sm sm:text-base">{tipDesc}</p>
            <div className="py-4 px-3 sm:p-4 bg-Purple-Theme rounded-2xl space-y-2.5">
              <h3 className="font-bold text-Purple text-lg">Quick Plan</h3>
              <div className="space-y-3">
                {tipQuickPlan.map((tip, id) => (
                  <div key={id} className="flex gap-2.5 items-center">
                    <FaCheckCircle className="text-Purple sm:text-lg" />
                    <p className="font-medium text-xs sm:text-base">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-3 xl:w-[30%]">
          <IoClose
            onClick={setIsOpen}
            className="absolute top-0 right-0 text-4xl text-Purple cursor-pointer"
          />
          <button className="py-3 w-full bg-Purple rounded-xl text-white">
            Create Budget
          </button>
          <button
            onClick={setIsOpen}
            className="py-3 w-full border border-Purple rounded-xl cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
