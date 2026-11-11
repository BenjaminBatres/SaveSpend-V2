import { GiReceiveMoney } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <GiReceiveMoney />,
      title: "Income:",
      descripition: "You choose where your money should go",
    },
    {
      icon: <TbTargetArrow />,
      title: "Goals:",
      descripition: "What matters most to you",
    },
    {
      icon: <TbPigMoney />,
      title: "Budget:",
      descripition: "Recurring and one-time purchases",
    },
    {
      icon: <FaChartPie />,
      title: "Categories:",
      descripition: "Dedicate your percentage",
    },
  ];
  return (
    <section id="features" className="sm:pt-10 lg:pt-5 pb-10 sm:pb-20 px-5">
      <div className="max-w-300 mx-auto space-y-10">
        <h2 className="text-[32px] sm:text-[40px] leading-[120%] lg:text-5xl text-center font-bold">
          See where you stand and how you can do better.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
          {features.map((feature, id) => (
            <div
              key={id}
              className="px-4 py-6 border border-zinc-300 rounded-3xl flex flex-col gap-5 items-center md:items-start shadow"
            >
              <div className="flex justify-center items-center bg-white rounded-full size-12 border border-zinc-300">
                <div className="text-Purple text-2xl">{feature.icon}</div>
              </div>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-zinc-600 text-center md:text-left">
                  {feature.descripition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
