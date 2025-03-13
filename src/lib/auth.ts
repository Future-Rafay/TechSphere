import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword, updateLastLogin } from "./sanity/users";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await getUserByEmail(credentials.email);
        
        if (!user || !user.hashedPassword) {
          throw new Error("No user found with this email");
        }

        const isValid = await verifyPassword(user.hashedPassword, credentials.password);
        
        if (!isValid) {
          throw new Error("Invalid password");
        }

        if (!user.isActive) {
          throw new Error("User account is inactive");
        }

        // Update last login time
        await updateLastLogin(user._id);

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          isAdmin: user.role === "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // Error code passed in query string as ?error=
    verifyRequest: "/login", // (used for check email message)
    newUser: "/signup", // New users will be directed here on first sign in
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          userId: user.id,
          isAdmin: user.isAdmin,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.user.id = token.userId as string;
      session.accessToken = token.accessToken as string;
      session.user.isAdmin = token.isAdmin as boolean;
      
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 