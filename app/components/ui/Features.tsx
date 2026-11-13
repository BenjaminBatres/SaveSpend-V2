import * as motion from "motion/react-client";

interface IProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
  theme: string;
}

export default function Features({
  icon,
  id,
  title,
  desc,
  children,
  theme,
}: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (id + 1) * 0.15, duration: 0.5 }}
      className="px-4 py-6 bg-white rounded-3xl flex flex-col gap-5"
    >
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
    </motion.div>
  );
}
