"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";

// Component to handle search params
function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  
  const { login, loginWithProvider, isLoading, error: authError } = useAuth();

  // If there's an error from the auth hook, display it
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    await login(email, password, callbackUrl);
  };

  const handleOAuthSignIn = async (provider: string) => {
    await loginWithProvider(provider, callbackUrl);
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-orbitron font-bold text-primary">
                Tech<span className="text-secondary">Sphere</span>
              </span>
            </Link>
            <h2 className="mt-4 text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Welcome back!
            </h2>
            <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Sign in to your account to continue
            </p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-400 text-red-700 dark:text-red-400 rounded-lg flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted-light dark:text-text-muted-dark">
                <FaUser />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="block w-full pl-10 pr-3 py-3 border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark"
                placeholder="Email Address"
                disabled={isLoading}
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted-light dark:text-text-muted-dark">
                <FaLock />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="block w-full pl-10 pr-3 py-3 border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark"
                placeholder="Password"
                disabled={isLoading}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border-light rounded"
                  disabled={isLoading}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-primary hover:text-primary-dark transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors relative"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-light dark:border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-bg-card-light dark:bg-bg-card-dark text-text-muted-light dark:text-text-muted-dark">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOAuthSignIn("google")}
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-border-light dark:border-border-dark rounded-lg shadow-sm bg-white dark:bg-bg-input-dark text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-bg-hover-dark transition-colors"
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                onClick={() => handleOAuthSignIn("github")}
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-border-light dark:border-border-dark rounded-lg shadow-sm bg-gray-800 text-white hover:bg-gray-900 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Don&#39;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:text-primary-dark transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading fallback
function LoginLoading() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginContent />
    </Suspense>
  );
} 