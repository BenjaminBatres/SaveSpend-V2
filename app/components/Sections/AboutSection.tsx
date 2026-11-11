import { TbSparkles2 } from "react-icons/tb";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { BsBullseye } from "react-icons/bs";

export default function AboutSection() {
  const finances = [
    {
      icon: <FiTrendingUp />,
      title: "Income",
      amount: "3,200",
    },
    {
      icon: <FiTrendingDown />,
      title: "Expenses",
      amount: "1,450",
    },
  ];

  const purpose = [
    {
      icon: <IoEyeOutline className="text-3xl" />,
      title: "Clarity",
      desc: "See where your money goes.",
    },
    {
      icon: <BsBullseye className="text-2xl" />,
      title: "Progress",
      desc: "Keep moving toward your goals.",
    },
  ];
  return (
    <section id="about" className="py-15 px-5">
      <div className="max-w-300 mx-auto space-y-4">
        <div className="space-y-3">
          <h3 className="text-Purple font-medium uppercase">About SaveSpend</h3>
          <h2 className="text-[32px] sm:text-[40px] leading-[120%] font-bold">
            A better relationship with your money starts here.
          </h2>
          <p className="text-Gray-purple sm:text-lg">
            Managing money shouldn't feel overwhelming. SaveSpend was designed
            to make understanding your finances, tracking expenses, and working
            toward savings goals easier.
          </p>
        </div>

        <div className="px-3 py-4 bg-[#eee6ff] rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Your finances, simplified.
            </h2>
            <TbSparkles2 className="text-3xl text-Purple" />
          </div>

          <div className="px-3 py-4 bg-white rounded-2xl space-y-3">
            <div className="space-y-3 pb-3">
              <h3 className="text-Gray-purple uppercase text-[15px]">
                Your finanical overview
              </h3>
              <p className="text-3xl font-semibold">$4,850.00</p>
              <p className="text-Gray-purple">Available balance</p>
            </div>
            <div className="border-Gray-purple/20 border-t pt-8 space-y-4">
              <div className="grid grid-cols-2">
                {finances.map((finance, id) => (
                  <div className="space-y-4" key={id}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-Purple">{finance.icon}</span>
                      <span className="text-Gray-purple text-sm">
                        {finance.title}
                      </span>
                    </div>
                    <p className="text-xl font-semibold">${finance.amount}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#eee6ff] p-4 rounded-2xl space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Monthly savings</h2>
                  <p className="text-Purple font-medium">72%</p>
                </div>
                <div className="w-full bg-[#e1d5f5] rounded-full">
                  <div className="h-3 bg-Purple rounded-full w-[72%]" />
                </div>
                <p className="text-Gray-purple text-sm">
                  $720 savings toward your $1,000 goal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {purpose.map((item, id) => (
            <div key={id} className="bg-white p-3 rounded-2xl space-y-2">
              <div className="text-Purple">{item.icon}</div>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-Gray-purple text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
