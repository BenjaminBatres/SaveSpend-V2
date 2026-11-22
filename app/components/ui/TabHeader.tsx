import { demoUser } from "@/app/data/demo-data";
import { IoAddOutline } from "react-icons/io5";

interface IProps {
  title: string;
  desc: string;
  buttonName: string;
}

export default function TabHeader({title, desc, buttonName}:IProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-3 justify-between">
      <div className="space-y-1.5">
        <h2 className="text-3xl font-semibold text-center sm:text-left">
          {title}
        </h2>
        <p className="text-Gray-purple text-[15px] sm:text-base text-center sm:text-left">
          {desc}
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-end gap-2">
        <div className="flex items-center gap-4">
          <div className="py-2 px-5 text-Purple uppercase font-semibold bg-[#efe5fe] rounded-full">
            Demo mode
          </div>
          <div className="size-11 bg-[#efe5fe] rounded-full flex justify-center items-center text-Purple font-medium">
            {demoUser.name.split("")[0]}
          </div>
        </div>
        <button className="bg-Purple px-3 py-2 rounded-full text-white flex items-center gap-1.5">
          <IoAddOutline className="text-2xl" /> {buttonName}
        </button>
      </div>
    </div>
  );
}
