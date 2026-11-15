"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

type FieldValues = {
  email: string;
  password: string;
};

type InputField = {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "password";
  stateKey: keyof FieldValues;
};
export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [fieldValues, setFieldValues] = useState<FieldValues>({
    email: "",
    password: "",
  });
  const inputFields: InputField[] = [
    {
      label: "Email address",
      type: "email",
      id: "email",
      placeholder: "you@example.com",
      stateKey: "email",
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      placeholder: "Enter your password",
      stateKey: "password",
    },
  ];
  return (
    <div className="p-4 rounded-3xl bg-white space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-[28px] font-semibold">Welcome back!</h2>
        <p className="text-Gray-purple">
          Log in to continue managing your finances.
        </p>
      </div>

      {inputFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1">
          <label className="font-semibold">{field.label}</label>
          <input
            type={field.type}
            className="border border-zinc-300 rounded-lg p-3"
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div className="space-y-5">
        <button className="bg-Purple text-white font-bold py-4 rounded-full text-center w-full">
          {isLogin ? "Login" : "Create Account"}
        </button>
        <div className="flex items-center gap-2 before:content-[''] before:block before:flex-1 before:h-px before:bg-zinc-300 after:content-[''] after:block after:flex-1 after:h-px after:bg-zinc-300">
          <p className="text-zinc-400 text-sm">OR</p>
        </div>

        <button className="border border-zinc-300 rounded-full text-center flex justify-center items-center gap-2 w-full py-3.5 font-semibold">
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
        <div className="flex justify-center gap-1">
          <p className="text-Gray-purple">
            Don't have an account?
          </p>
          <Link
            href={"/sign-up"}
            className="text-Purple font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
