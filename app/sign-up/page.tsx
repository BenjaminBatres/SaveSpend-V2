import Link from 'next/link'
import React from 'react'
import AccountForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Purple-Theme">
      <div className="py-10 px-4 w-full">
        <div className="max-w-200 mx-auto w-full space-y-4">
          <div className="flex flex-col items-center gap-2">
            <h2>
              <Link href={"/"} className="text-3xl font-bold text-Purple">
                SaveSpend
              </Link>
            </h2>
            <p className="uppercase text-Gray-purple">
              Your finances, made simple
            </p>
          </div>
          <SignUpForm />
          <p className="text-sm text-Gray-purple text-center">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
