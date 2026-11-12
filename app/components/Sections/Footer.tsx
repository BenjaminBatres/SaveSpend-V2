import Link from "next/link";
import React from "react";

export default function Footer() {
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
    <footer className="py-10 px-5 bg-white">
      <div className="max-w-300 mx-auto space-y-6 md:space-y-10">
        <div className="flex flex-col gap-y-6 md:flex-row items-center justify-between">
          <h2>
            <Link href={"/"} className="text-5xl font-bold">
              SaveSpend
            </Link>
          </h2>
          <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {links.map((link, id) => (
              <li key={id}>
                <Link href={link.path} className="md:text-lg hover:text-Purple duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row justify-between items-center">
            <p className="text-Gray-purple ">&copy; {new Date().getFullYear()} SaveSpend. All rights reserved.</p>
            <div className="flex gap-4 text-Gray-purple">
            <p>Term of use</p>
            <p>Privacy Policy</p>

            </div>
        </div>
      </div>
    </footer>
  );
}
