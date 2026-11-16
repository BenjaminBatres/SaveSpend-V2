"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading } from "react-icons/ai";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirebaseErrorMessage } from "../firebase/getFirebaseErrorMessage";
import { auth } from "../firebase/firebase";

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

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [fieldValues, setFieldValues] = useState<FieldValues>({
    email: "",
    password: "",
  });
  const inputFields: InputField[] = [
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

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidPassword = (value: string) => value.length >= 8;

  const handleInputChange = (stateKey: string, value: string) => {
    setFieldValues({
      ...fieldValues,
      [stateKey]: value,
    });
  };

  const showError = (field: string): boolean => {
    if (field === "email") {
      return !isValidEmail(fieldValues.email) && fieldValues.email.length > 0;
    }

    if (field === "password") {
      return (
        !isValidPassword(fieldValues.password) &&
        fieldValues.password.length > 0
      );
    }

    return false;
  };
  const handleSubmit = async (e: any) => {
    setMessage("");
    setLoading(true);
    e.preventDefault();
    try {
      if (userDisplayName.length < 3) {
        setMessage("Display name must be at least 3 characters long.");
        setLoading(false);
        return;
      } else if (userDisplayName.length > 20) {
        setMessage("Display name cannot exceed 20 characters.");
        setLoading(false);
        return;
      }
      const { user } = await createUserWithEmailAndPassword(
        auth,
        fieldValues.email,
        fieldValues.password,
      );

      await updateProfile(user, {
        displayName: userDisplayName,
      });
    } catch (err) {
      setMessage(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 rounded-3xl bg-white space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-[28px] font-semibold">
          Create your account
        </h2>
        <p className="text-Gray-purple">
          Start building better financial habits today.
        </p>
      </div>
      {/* Full name input */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          onChange={(e) => setUserDisplayName(e.target.value)}
          className={`border border-zinc-300 focus:outline-Purple rounded-lg p-3`}
        />
      </div>
      {/* Email and password */}
      {inputFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1">
          <label className="font-semibold">{field.label}</label>
          <input
            name={field.id}
            type={field.type}
            value={fieldValues[field.stateKey] || ""}
            placeholder={field.placeholder}
            onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
            className={`border rounded-lg p-3 ${showError(field.type) ? "border-pink-500" : "border-zinc-300"} focus:outline-Purple`}
          />
          {field.type === "password" && (
            <p className="text-Gray-purple text-sm">At least 8 characters</p>
          )}
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
            "Create Account"
          )}
        </button>
        <div className="flex items-center gap-2 before:content-[''] before:block before:flex-1 before:h-px before:bg-zinc-300 after:content-[''] after:block after:flex-1 after:h-px after:bg-zinc-300">
          <p className="text-zinc-400 text-sm">OR</p>
        </div>

        <button className="border border-zinc-300 rounded-full text-center flex justify-center items-center gap-2 w-full py-3.5 font-semibold">
          <FcGoogle className="text-2xl" />
          Sign up with Google
        </button>
        <div className="flex justify-center gap-1">
          <p className="text-Gray-purple">Already have an account?</p>
          <Link
            href={"/login"}
            className="text-Purple font-semibold cursor-pointer"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
