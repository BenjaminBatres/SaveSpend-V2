import React from 'react'
import AuthForm from '../components/AuthForm'
import LoginForm from '../components/LoginForm'

export default function page() {
  return (
    <AuthForm headerDesc='Welcome back'>
        <LoginForm />
    </AuthForm>
  )
}
