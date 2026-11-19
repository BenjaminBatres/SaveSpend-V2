"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { auth } from "../../../firebase/firebase";
import { getFirebaseErrorMessage } from "../../../firebase/getFirebaseErrorMessage";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState("");
  const emailErrorMessage = "Please enter a valid email address.";
  const passwordErrorMessage = "Please enter your password.";
  const invalidErrorMessage = "Invalid email or password. Please try again.";
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

  const handleErrors = (err: string) => {
    if (message === invalidErrorMessage) {
      return "border-pink-500";
    }
    const errorMessages: Record<string, string[]> = {
      email: [emailErrorMessage],
      password: [passwordErrorMessage],
    };

    return errorMessages[err]?.includes(message)
      ? "border-pink-500"
      : "border-zinc-300";
  };

  const handleInputChange = (stateKey: string, value: string) => {
    setFieldValues({
      ...fieldValues,
      [stateKey]: value,
    });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    const results = await signInWithPopup(auth, provider);
    const user = results.user;
    if (user) {
      router.push("/dashboard");
    }
  };

  const handleSubmit = async (e: any) => {
    setMessage("");
    setLoading(true);
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        fieldValues.email,
        fieldValues.password,
      );
      router.push("/dashboard");
    } catch (err) {
      setMessage(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };
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
            placeholder={field.placeholder}
            onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
            className={`border rounded-lg p-3 ${handleErrors(field.id)} focus:outline-Purple`}
          />
        </div>
      ))}

      {message && <p className="text-sm text-pink-500">{message}</p>}

      <div className="space-y-5">
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="bg-Purple text-white font-bold py-4 rounded-full text-center w-full flex justify-center cursor-pointer active:translate-y-1 disabled:cursor-not-allowed"
        >
          {loading ? (
            <AiOutlineLoading className="text-3xl animate-spin" />
          ) : (
            "Login"
          )}
        </button>
        <div className="flex items-center gap-2 before:content-[''] before:block before:flex-1 before:h-px before:bg-zinc-300 after:content-[''] after:block after:flex-1 after:h-px after:bg-zinc-300">
          <p className="text-zinc-400 text-sm">OR</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="border border-zinc-300 rounded-full text-center flex justify-center items-center gap-2 w-full py-3.5 font-semibold cursor-pointer active:translate-y-1"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
        <div className="flex justify-center gap-1">
          <p className="text-Gray-purple">Don't have an account?</p>
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
