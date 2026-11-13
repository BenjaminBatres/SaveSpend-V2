import * as motion from "motion/react-client";
interface IDetails {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
}

export default function StepsDetails({
  id,
  icon,
  title,
  desc,
  children,
}: IDetails) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (id + 1) * 0.2, duration: 0.5 }}
      className="p-4 bg-white rounded-xl flex flex-col gap-3 justify-between"
    >
      <div className="space-y-4 md:space-y-5">
        <div className="flex justify-between items-center">
          <p className="bg-[#efe5fe] py-1 px-2.5 uppercase rounded-full text-Purple font-semibold text-sm">
            Step 0{id + 1}
          </p>
          <div className="text-Purple text-2xl">{icon}</div>
        </div>
        <h2 className="text-xl font-semibold text-center md:text-left">
          {title}
        </h2>
        <p className="text-Gray-purple text-center md:text-left">{desc}</p>
      </div>
      <div className="p-4 bg-[#eee6ff] rounded-xl">
        <div className="p-3 bg-white rounded-lg">{children}</div>
      </div>
    </motion.div>
  );
}
