import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface IProp {
  name: string;
}
export default function DashboardHeader({ name }: IProp) {
  return (
    <div className="bg-white px-4 py-6 rounded-2xl space-y-4 sm:space-y-2">
      <div className="flex flex-col sm:flex-row space-y-4 justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Good moring, {name.split(" ")[0]}!
          </h2>
          <p className="text-Gray-purple text-[15px]">
            Here's your financial overview.
          </p>
        </div>
        <div className="py-1 px-3 text-Purple uppercase font-semibold bg-[#efe5fe] rounded-full">
          Demo mode
        </div>
      </div>
      <div className="rounded-2xl bg-Purple-Theme px-3 py-5 space-y-2.5">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Exploring SaveSpend?</h3>
          <p className="text-Gray-purple">
            You're viewing sample financial data. Create an account to manage
            your own finances.
          </p>
        </div>
        <Link
          href={"/signup"}
          className="flex items-center gap-2 p-3 font-semibold rounded-full bg-Purple text-white w-fit"
        >
          Create an Account <GoArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
}
