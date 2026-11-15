import Link from "next/link";
import SignUpForm from "../components/SignUpForm";
import AuthForm from "../components/AuthForm";

export default function page() {
  return (
    <AuthForm headerDesc="Your finances, made simple">
      <SignUpForm />
      <p className="text-sm text-Gray-purple text-center">
        By creating an account, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </AuthForm>
  );
}
