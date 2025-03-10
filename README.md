# TechSphere

A modern e-commerce platform built with Next.js, featuring authentication, product categories, blog, and more.

## Features

- Next.js 14 with App Router
- Authentication with NextAuth.js (GitHub and Google providers)
- Responsive design with Tailwind CSS
- Dark/Light mode with next-themes
- Shopping cart and wishlist functionality
- Blog section
- Notifications system
- Deals and categories pages

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/techsphere.git
   cd techsphere
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your own values for the environment variables

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your project.
3. Set the environment variables in the Vercel dashboard.
4. Deploy!

### Deploying to other platforms

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   ```

## Environment Variables

- `NEXTAUTH_SECRET`: Secret used for NextAuth.js
- `NEXTAUTH_URL`: Your deployment URL
- `GITHUB_ID`: GitHub OAuth Client ID
- `GITHUB_SECRET`: GitHub OAuth Client Secret
- `GOOGLE_CLIENT_ID`: Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth Client Secret

## License

This project is licensed under the MIT License.
