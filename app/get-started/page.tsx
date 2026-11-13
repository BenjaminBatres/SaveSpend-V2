import AccountForm from "../components/AccountForm";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Purple-Theme">
      <div className="py-10 px-4 w-full">
        <div className="max-w-200 mx-auto w-full space-y-4">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold text-Purple">SaveSpend</h2>
            <p className="uppercase text-Gray-purple font-medium ">
              Your finances, made simple
            </p>
          </div>
          <AccountForm />
          <p className="text-sm text-Gray-purple text-center">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
