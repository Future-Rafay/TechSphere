# TechSphere Authentication System

This directory contains the authentication system for the TechSphere e-commerce platform. It uses NextAuth.js for authentication and provides both server-side and client-side utilities for protecting routes and managing authentication state.

## Features

- Multiple authentication providers (GitHub, Google, Credentials)
- JWT-based authentication
- Server-side route protection
- Client-side route protection
- Custom hooks for authentication state management
- TypeScript support

## Environment Variables

Make sure to set the following environment variables in your `.env.local` file:

```
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Usage

### Server-Side Authentication

For server components, use the utilities in `src/lib/utils/auth.ts`:

```tsx
import { requireAuth } from "@/lib/utils/auth";

export default async function ProtectedPage() {
  // This will redirect to login if not authenticated
  const session = await requireAuth();
  const user = session.user;

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
```

### Client-Side Authentication

For client components, use the `useAuth` hook:

```tsx
"use client";

import { useAuth } from "@/lib/hooks/useAuth";

export default function AuthComponent() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
```

### Protected Routes

For client components, you can use the `ProtectedRoute` component:

```tsx
"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

## Authentication Flow

1. User visits a protected route
2. If not authenticated, they are redirected to the login page
3. User logs in with credentials or OAuth provider
4. On successful authentication, user is redirected to the original route
5. The session is stored in a JWT cookie
6. The session is available in both server and client components

## Customization

- To add more OAuth providers, update the `authOptions` in `src/app/api/auth/[...nextauth]/route.ts`
- To customize the login/signup pages, modify the components in `src/app/login` and `src/app/signup`
- To add database integration, update the `authorize` function in the CredentialsProvider 