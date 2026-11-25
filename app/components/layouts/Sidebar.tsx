import { LuSparkles } from "react-icons/lu";

interface ITabs {
  icon: React.ReactNode;
  name: string;
}

interface IProps {
  activeTab: string;
  setActiveTab: (item: string) => void;
  tabs: ITabs[];
}
export default function Sidebar({activeTab, setActiveTab, tabs}:IProps) {
  return (
    <div className="hidden lg:block fixed inset-0 bg-[#f3f0fe]">
      <div className="mt-4 ml-4 py-5 px-4 bg-white rounded-2xl space-y-7 h-[96.5%] w-60 relative">
        <h2 className="text-3xl font-bold text-Purple pl-2.75">SaveSpend</h2>

        <ul>
          {tabs.map((tab, id) => (
            <li
              key={id}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-3 py-4 pl-4 ${activeTab === tab.name ? "text-Purple font-semibold bg-Purple-Theme rounded-l-2xl" : "text-Gray-purple"} cursor-pointer hover:text-Purple`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-8">
          <div className="px-6 py-2.5 bg-[#efe5fe] text-Purple rounded-full font-semibold flex items-center gap-2"><LuSparkles className="text-xl" />Demo account</div>
        </div>
      </div>
    </div>
  );
}
