import SignUpForm from "../components/features/auth/SignUpForm";
import AuthForm from "../components/features/auth/AuthForm";

export default function page() {
  return (
    <AuthForm headerDesc="Your finances, made simple" paddingY="py-10">
      <SignUpForm />
      <p className="text-sm text-Gray-purple text-center">
        By creating an account, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </AuthForm>
  );
}
