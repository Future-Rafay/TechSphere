# TechSphere E-commerce Platform

A modern, feature-rich e-commerce platform for electronics and tech products built with Next.js.

## Features

### Authentication
- Multiple authentication providers (GitHub, Google, Credentials)
- JWT-based authentication
- Server-side route protection
- Client-side route protection
- Custom hooks for authentication state management
- Admin role detection and admin dashboard

### User Interface
- Modern, responsive design
- Dark/light mode support
- Animated transitions and interactions
- Mobile-friendly navigation

### E-commerce Functionality
- Product browsing and filtering
- Dynamic product details pages
- Shopping cart with localStorage persistence
- Quantity adjustment and item removal
- One-click checkout
- Order summary with tax calculation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   GITHUB_ID="your-github-client-id"
   GITHUB_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Authentication

### Test Accounts
- Regular User:
  - Email: user@example.com
  - Password: password
- Admin User:
  - Email: admin@example.com
  - Password: admin

### Protected Routes
- `/profile` - Server-side protected
- `/dashboard` - Client-side protected
- `/admin/dashboard` - Admin-only access

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/lib` - Utilities, hooks, and context providers
- `/src/lib/hooks` - Custom React hooks
- `/src/lib/context` - React context providers
- `/src/lib/utils` - Utility functions

## License

MIT
