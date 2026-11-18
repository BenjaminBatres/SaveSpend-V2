import AuthForm from "../components/features/auth/AuthForm";
import LoginForm from "../components/features/auth/LoginForm";

export default function page() {
  return (
    <AuthForm headerDesc="Welcome back">
      <LoginForm />
    </AuthForm>
  );
}
