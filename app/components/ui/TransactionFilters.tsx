import { IoIosArrowDown } from "react-icons/io";

interface IFilters {
  icon: React.ReactNode;
  filters: string[];
  name: string;
}

export default function TransactionFilters({ filters, name, icon }: IFilters) {
  return (
    <>
      <button className="border border-zinc-200 px-4 rounded-lg shadow cursor-pointer flex items-center gap-10">
        <span className="text-2xl text-Purple md:hidden">{icon}</span>
        <span className="hidden md:block">{name}</span>
         <IoIosArrowDown className="hidden md:block text-lg" />
      </button>
    </>
  );
}
