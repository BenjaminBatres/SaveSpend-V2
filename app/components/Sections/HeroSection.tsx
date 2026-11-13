import Image from "next/image";
import HeroImg from "../../assets/HeroImg.svg";
import Link from "next/link";
import * as motion from "motion/react-client";
export default function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-Hero-background">
      <div className="pt-30 sm:pt-40 lg:pt-55 pb-20 px-5">
        <div className="max-w-300 mx-auto flex flex-col gap-y-10 items-center lg:items-start lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-bold text-[40px] leading-[100%] sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-md text-center lg:text-left"
            >
              Smart way to manage money
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:max-w-sm md:text-lg text-center lg:text-left"
            >
              Visualize your spending habits, track goals, and grow your savings
              with ease.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href={"/"}
                className="flex items-center gap-3.5 transition-all duration-300 group w-fit py-5 px-8 font-medium lg:text-lg bg-Purple text-white rounded-full"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
          <motion.figure
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image src={HeroImg} alt="" loading="eager" className="w-137.5" />
          </motion.figure>
        </div>
      </div>
    </div>
  );
}
