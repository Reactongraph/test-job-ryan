"use client";

import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import TelegramLogin from "@/components/TelegramLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <LoginForm />
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow mr-3"></div>
          <span className="text-gray-600 text-sm">or</span>
          <div className="border-t border-gray-300 flex-grow ml-3"></div>
        </div>
        <TelegramLogin />
        <p className="text-center text-gray-600 mt-6">
          {`Don't have an account? `}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
