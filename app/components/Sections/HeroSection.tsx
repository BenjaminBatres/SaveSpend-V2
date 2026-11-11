import Image from "next/image";
import HeroImg from "../../assets/HeroImg.svg";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-Hero-background">
      <div className="pt-30 sm:pt-40 lg:pt-55 pb-20 px-5">
        <div className="max-w-300 mx-auto flex flex-col gap-y-10 items-center lg:items-start lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <h2 className="font-bold text-[40px] leading-[100%] sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-md text-center lg:text-left">
              Smart way to manage money
            </h2>
            <p className="lg:max-w-sm md:text-lg text-center lg:text-left">
              Visualize your spending habits, track goals, and grow your savings
              with ease.
            </p>
            <Link
              href={"/"}
              className="flex items-center gap-3.5 transition-all duration-300 group w-fit py-5 px-8 font-medium lg:text-lg bg-Purple text-white rounded-full"
            >
              Get Started
            </Link>
          </div>

          <Image src={HeroImg} alt="" loading="eager" className="w-137.5" />
        </div>
      </div>
    </div>
  );
}
