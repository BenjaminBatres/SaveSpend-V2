interface IProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
  theme: string;
}

export default function Features({
  icon,
  title,
  desc,
  children,
  theme,
}: IProps) {
  return (
    <div className="px-4 py-6 bg-white rounded-3xl flex flex-col gap-5">
      <div
        className={`flex justify-center items-center ${theme} rounded-2xl size-14`}
      >
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-Gray-purple">{desc}</p>
      </div>
      <div className={`p-3 rounded-2xl ${theme} w-full`}>{children}</div>
    </div>
  );
}
