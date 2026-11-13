import { LuUserRoundPlus } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import * as motion from "motion/react-client";
import StepsDetails from "../ui/StepsDetails";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <LuUserRoundPlus />,
      title: "Create your account",
      desc: "Get started in minutes. Set up your personal account and create your financial workspace.",
    },
    {
      icon: <LuWallet />,
      title: "Track your spending",
      desc: "Add your income and expenses to see where your money goes and stay on top of your spending.",
    },
    {
      icon: <LuChartNoAxesCombined />,
      title: "Create your account",
      desc: "Monitor your progress, build savings, and make smarter financial decisions with a clearer picture of your money.",
    },
  ];

  const bills = [
    {
      name: "Housing",
      price: "$650",
    },
    {
      name: "Food",
      price: "$350",
    },
    {
      name: "Other",
      price: "$245",
    },
  ];
  return (
    <section id="how-it-works" className="py-10 sm:py-20 px-5">
      <div className="max-w-300 mx-auto space-y-8">
        <div className="flex flex-col items-center gap-3">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-Purple font-semibold uppercase"
          >
            How it works
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[32px] sm:text-[40px] leading-[120%] lg:text-5xl font-bold text-center "
          >
            Managing money, made simple.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-Gray-purple sm:text-lg text-center"
          >
            Three simple steps to take control of your finances and build better
            habits.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, id) => (
            <StepsDetails
              key={id}
              id={id}
              title={step.title}
              desc={step.desc}
              icon={step.icon}
            >
              {id === 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Welcome to SaveSpend
                  </h3>
                  <div className="space-y-2.5">
                    {new Array(2).fill(0).map((_, id) => (
                      <div key={id}>
                        <input
                          type="text"
                          disabled
                          placeholder={
                            id === 0 ? "Email address" : "Create password"
                          }
                          className="p-2 bg-Purple-Theme w-full rounded-lg text-sm"
                        />
                      </div>
                    ))}
                    <div className="bg-Purple text-white text-center py-2 rounded-xl font-medium">
                      Create Account
                    </div>
                  </div>
                </div>
              )}
              {id === 1 && (
                <div className="space-y-3">
                  <h3 className="text-Gray-purple text-sm">Monthly expenses</h3>
                  <h2 className="text-[28px] font-medium">$1,245.00</h2>
                  <div className="w-full bg-Purple-Theme rounded-full relative">
                    <div className="h-3 w-[45%] bg-Purple rounded-l-full" />
                    <div className="absolute h-3 w-[30%] bg-[#b99bef] left-[45%] top-0" />
                  </div>
                  <div className="space-y-4">
                    {bills.map((bill, id) => (
                      <div
                        key={id}
                        className="flex justify-between items-center"
                      >
                        <p className="text-Gray-purple text-sm">{bill.name}</p>
                        <p className="text-sm font-medium">{bill.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {id === 2 && (
                <div className="space-y-3">
                  <h3 className="text-Gray-purple text-sm">Savings goal</h3>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[28px] font-medium">$3,200</h2>
                    <p className="text-Purple font-medium">64%</p>
                  </div>
                  <div className="w-full bg-Purple-Theme rounded-full">
                    <div className="h-3 bg-Purple rounded-full w-[64%]" />
                  </div>
                  <p className="text-Gray-purple text-sm">
                    $5,000 target &sdot; $1,800 to go
                  </p>
                </div>
              )}
            </StepsDetails>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[28px] sm:text-3xl font-medium"
          >
            Ready to take control?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-Gray-purple"
          >
            Start building better financial habits today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href={"/"}
              className="bg-Purple py-4 px-6 rounded-full text-white font-medium flex gap-1 items-center hover:bg-[#8062D6]/80 duration-300"
            >
              Get Started
              <MdOutlineArrowRightAlt className="text-xl" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
