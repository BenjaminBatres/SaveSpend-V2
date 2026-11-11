import { BsBullseye } from "react-icons/bs";
import { LuCalendarCheck } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import Features from "../ui/Features";
import { MonthlySpendingChart } from "../ui/MonthlySpendingChart";
export default function FeaturesSection() {
  const features = [
    {
      icon: <LuChartNoAxesCombined className="text-Purple" />,
      title: "Track Your Expenses",
      desc: "See where your money goes and understand your spending habits.",
      theme: "bg-Purple-Theme",
    },
    {
      icon: <LuWallet className="text-Green" />,
      title: "Manage Your Budget",
      desc: "Set spending limits and stay on top of your monthly budget.",
      theme: "bg-Green-Theme",
    },
    {
      icon: <LuCalendarCheck className="text-Orange" />,
      title: "Bills & Subscriptions",
      desc: "Keep track of upcoming payments and recurring expenses.",
      theme: "bg-Orange-Theme",
    },
    {
      icon: <BsBullseye className="text-Blue" />,
      title: "Savings Goals",
      desc: "Set goals, monitor your progress, and build better saving habits.",
      theme: "bg-Blue-Theme",
    },
  ];
  return (
    <section id="features" className="sm:pt-10 lg:pt-5 pb-10 sm:pb-20 px-5">
      <div className="max-w-300 mx-auto space-y-10">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-Purple font-medium uppercase">Features</h3>
          <h2 className="text-[32px] sm:text-[40px] leading-[120%] lg:text-5xl font-bold text-center ">
            Everything you need to manage your money.
          </h2>
          <p className="text-Gray-purple sm:text-lg text-center">
            Take control of your finances with simple tools that help you track
            spending, manage bills, and reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, id) => (
            <Features
              key={id}
              theme={feature.theme}
              title={feature.title}
              icon={feature.icon}
              desc={feature.desc}
            >
              {id === 0 && (
                <>
                  <div className="flex justify-between items-center">
                    <p className="text-Gray-purple text-sm">Monthly spending</p>
                    <p className="font-semibold">$1,240</p>
                  </div>
                  <MonthlySpendingChart />
                </>
              )}
              {id === 1 && (
                <div className="space-y-3">
                  <p className="text-Gray-purple text-sm">Monthly budget</p>
                  <p className="text-2xl font-semibold">$2,000</p>
                  <div className="w-full bg-[#d9eadf] rounded-full relative">
                    <div className="h-3 w-[65%] bg-Green rounded-full" />
                  </div>
                  <p className="text-Green text-sm">65% used</p>
                </div>
              )}
              {id === 2 && (
                <div className="pt-1 space-y-4">
                  <div className="flex justify-between items-center border-b border-Orange/30 pb-5 mb-5">
                    <p className="font-semibold text-sm">Netflix</p>
                    <p className="font-semibold text-sm">$15.99</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">Internet</p>
                    <p className="font-semibold text-sm">$60.00</p>
                  </div>
                  <p className="text-Orange">2 upcoming payments</p>
                </div>
              )}
              {id === 3 && (
                <div className="space-y-3">
                  <p className="text-Gray-purple text-sm">New Laptop</p>
                  <p className="text-2xl font-semibold">$750 / $1,000</p>
                  <div className="w-full bg-[#dce6f8] rounded-full relative">
                    <div className="h-3 w-[65%] bg-Blue rounded-full" />
                  </div>
                  <p className="text-Blue text-sm">75% completed</p>
                </div>
              )}
            </Features>
          ))}
        </div>
      </div>
    </section>
  );
}
