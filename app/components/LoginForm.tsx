"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

type FieldValues = {
  name: string;
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
export default function AccountForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [fieldValues, setFieldValues] = useState<FieldValues>({
    name: "",
    email: "",
    password: "",
  });
  const inputFields: InputField[] = [
    {
      label: "Full name",
      type: "text",
      id: "name",
      placeholder: "John Doe",
      stateKey: "name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "you@example.com",
      stateKey: "email",
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      placeholder: "Create a password",
      stateKey: "password",
    },
  ];
  return (
    <div className="p-4 rounded-3xl bg-white space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-[28px] font-semibold">
          {isLogin ? "Sign in to SaveSpend" : "Create your account"}
        </h2>
        <p className="text-Gray-purple">
          Start building better financial habits today.
        </p>
      </div>
      {isLogin ? (
        <>
          {inputFields.slice(1, 3).map((field) => (
            <div key={field.id} className="flex flex-col gap-1">
              <label className="font-semibold">{field.label}</label>
              <input
                type={field.type}
                className="border border-zinc-300 rounded-lg p-3"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {inputFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1">
              <label className="font-semibold">{field.label}</label>
              <input
                type={field.type}
                className="border border-zinc-300 rounded-lg p-3"
                placeholder={field.placeholder}
              />
              {field.type === "password" && (
                <p className="text-Gray-purple text-sm">
                  At least 8 characters
                </p>
              )}
            </div>
          ))}
        </>
      )}
      <div className="space-y-5">
        <button className="bg-Purple text-white font-bold py-4 rounded-full text-center w-full">
          {isLogin ? "Login" : "Create Account"}
        </button>
        <div className="flex items-center gap-2 before:content-[''] before:block before:flex-1 before:h-px before:bg-zinc-300 after:content-[''] after:block after:flex-1 after:h-px after:bg-zinc-300">
          <p className="text-zinc-400 text-sm">OR</p>
        </div>

        <button className="border border-zinc-300 rounded-full text-center flex justify-center items-center gap-2 w-full py-3.5 font-semibold">
          <FcGoogle className="text-2xl" />
          {isLogin ? "Log in" : "Sign up"} with Google
        </button>
        <div className="flex justify-center gap-1">
          <p className="text-Gray-purple">
            {isLogin ? "Don't have an account" : "Already have an account"}?
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-Purple font-semibold cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}
