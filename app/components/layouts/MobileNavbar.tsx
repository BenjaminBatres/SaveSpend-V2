interface ITabs {
  icon: React.ReactNode;
  name: string;
}

interface IProps {
  activeTab: string;
  setActiveTab: (item: string) => void;
  tabs: ITabs[];
}

export default function MobileSidebar({
  tabs,
  setActiveTab,
  activeTab,
}: IProps) {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white p-4  pb-[max(1.8rem,env(safe-area-inset-bottom))] space-y-7 z-50">
      <ul className="flex justify-between sm:gap-7">
        {tabs.map((tab, id) => (
          <li
            key={id}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center gap-3  ${activeTab === tab.name ? "text-Purple font-semibold" : "text-Gray-purple"} cursor-pointer hover:text-Purple`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-xs">{tab.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
