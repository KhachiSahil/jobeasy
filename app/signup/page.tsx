'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, CircleUserRound } from 'lucide-react';
import { useFormState } from 'react-dom';
import { signIn } from 'next-auth/react';
import { registerUser } from '@/actions/signup';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, formAction] = useFormState(registerUser, null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Email = formData.get('email') as string;
    const Password = formData.get('password') as string;

    const res = await signIn('credentials', {
      Email,
      Password,
      redirect: false,
    });

    if (res?.error) {
      setLoginError(res.error);
    } else {
      setLoginError(null);
      window.location.href = '/'; // redirect to home/dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0f0f0f] border border-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          {isLogin ? 'Login to ResumeMatch' : 'Create an Account'}
        </h2>

        {/* SIGN UP */}
        {!isLogin && (
          <form action={formAction} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Email</label>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-lg px-3">
                <Mail className="text-purple-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-transparent py-3 px-2 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Password</label>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-lg px-3">
                <Lock className="text-pink-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-transparent py-3 px-2 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Error */}
            {formState && (
              <p className="text-sm text-red-500 font-medium">
                {(formState as Error).message}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:brightness-110 transition"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* LOGIN */}
        {isLogin && (
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Email</label>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-lg px-3">
                <Mail className="text-purple-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent py-3 px-2 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Password</label>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-lg px-3">
                <Lock className="text-pink-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-transparent py-3 px-2 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Login Error */}
            {loginError && (
              <p className="text-sm text-red-500 font-medium">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:brightness-110 transition"
            >
              Login
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="mt-6 text-center text-gray-400 text-sm">— or continue with —</div>

        {/* Google Sign In */}
        <button
          onClick={() => signIn('google')}
          className="mt-4 w-full flex items-center justify-center space-x-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          <CircleUserRound className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-medium">Sign in with Google</span>
        </button>

        {/* Switch between login and signup */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <button onClick={() => setIsLogin(false)} className="text-purple-400 hover:underline">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} className="text-purple-400 hover:underline">
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
