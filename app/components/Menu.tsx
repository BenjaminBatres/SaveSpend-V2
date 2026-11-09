"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

interface ILinks {
  path: string;
  name: string;
}

interface IProps {
  links: ILinks[];
}
export default function Menu({ links }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block cursor-pointer"
      >
        {isOpen ? (
          <IoClose className="text-[30px]" />
        ) : (
          <HiOutlineMenu className="text-3xl" />
        )}
      </button>
      <div
        className={`${
          isOpen ? "" : "pointer-events-none"
        } absolute w-full left-0 top-16 sm:top-15`}
      >
        <div
          className={`transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/60 bg-[#E9DFFF] py-5 px-2 shadow-lg shadow-purple-900/15">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl p-3 font-medium text-[#211936] transition hover:bg-purple-200/70"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="my-4 h-px bg-purple-300/50" />

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-purple-300 px-4 py-3 text-center font-semibold text-[#5425A5] transition hover:bg-purple-200/70"
              >
                Log In
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-[#8c5cff] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#8c5cff]/80"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
