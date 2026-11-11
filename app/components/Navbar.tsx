import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import Menu from "./Menu";

export default function Navbar() {
  const links = [
    {
      path: "#",
      name: "Home",
    },
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#save",
      name: "Save",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];
  return (
    <header className="fixed w-full px-5">
      <div className="max-w-300 mx-auto py-5 sm:py-8">
        <nav className="flex justify-between items-center backdrop-blur-2xl bg-white/80 rounded-full py-2 px-4 shadow-lg">
          <h1 className="text-[30px] sm:text-4xl font-bold text-[#1e1926]">
            SaveSpend
          </h1>
          <ul className="hidden md:flex justify-center items-center gap-8 lg:gap-10">
            {links.map((link, id) => (
              <li key={id}>
                <Link href={link.path} className="text-[17px]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/"}
            className="hidden md:flex items-center gap-3.5 transition-all duration-300 group w-fit py-2 pl-5 pr-2.5 font-medium bg-[#8c5cff] text-white rounded-full"
          >
            Get Started
            <div className="relative w-8 h-8 bg-white text-[#8c5cff] overflow-hidden rounded-full text-Primary text-2xl">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                <RiArrowRightUpLongLine />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                <RiArrowRightUpLongLine />
              </span>
            </div>
          </Link>
          <Menu links={links} />
        </nav>
      </div>
    </header>
  );
}
