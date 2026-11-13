import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import Menu from "./Menu";
import * as motion from "motion/react-client";
export default function Navbar() {
  const links = [
    {
      path: "#",
      name: "Home",
    },
    {
      path: "#features",
      name: "Features",
    },
    {
      path: "#how-it-works",
      name: "How it works",
    },
    {
      path: "#about",
      name: "About",
    },
  ];
  return (
    <header className="fixed w-full px-5 z-50">
      <div className="max-w-300 mx-auto py-5 sm:py-8">
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center backdrop-blur-2xl bg-white/80 rounded-full py-2 px-4 shadow-lg"
        >
          <h1 className="text-[30px] sm:text-4xl font-bold text-[#1e1926]">
            <Link href={"/"}>SaveSpend</Link>
          </h1>
          <ul className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.path}
                  className="lg:text-[17px] hover:text-Purple duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/get-started"}
            className="hidden md:flex items-center gap-3.5 transition-all duration-300 group w-fit py-2 pl-5 pr-2.5 font-medium bg-Purple text-white rounded-full"
          >
            Get Started
            <div className="relative w-8 h-8 bg-white text-Purple overflow-hidden rounded-full text-Primary text-2xl">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                <RiArrowRightUpLongLine />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                <RiArrowRightUpLongLine />
              </span>
            </div>
          </Link>
          <Menu links={links} />
        </motion.nav>
      </div>
    </header>
  );
}
