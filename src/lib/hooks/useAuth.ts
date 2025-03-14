"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  const login = async (
    email: string,
    password: string,
    callbackUrl: string = "/"
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
        return false;
      }

      router.push(callbackUrl);
      return true;
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const loginWithProvider = async (provider: string, callbackUrl: string = "/") => {
    setLoading(true);
    setError(null);

    try {
      await signIn(provider, { callbackUrl });
      return true;
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await update(null);
      
      await signOut({ 
        callbackUrl: '/',
        redirect: true
      });
      
      router.push('/');
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
      setError("An unexpected error occurred during logout");
    } finally {
      setLoading(false);
    }
  };

  return {
    session,
    user: session?.user,
    isAuthenticated,
    isLoading: isLoading || loading,
    error,
    login,
    loginWithProvider,
    logout,
  };
} 