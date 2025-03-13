import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}

// Use this in server components to protect routes
export async function requireAuth() {
  const session = await getSession();
  
  if (!session) {
    redirect("/login");
  }
  
  return session;
}

// Use this in server components to redirect authenticated users
// For example, from login/signup pages
export async function redirectIfAuthenticated(redirectTo: string = "/") {
  const session = await getSession();
  
  if (session) {
    redirect(redirectTo);
  }
  
  return session;
} 