"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user } = useAuth();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome back, {user?.name || "User"}!</h2>
          <p className="text-muted-foreground">
            Here&#39;s your personalized dashboard with your recent activity and recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Orders</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-muted-foreground mt-2">Total orders</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Wishlist</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-muted-foreground mt-2">Saved items</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Reviews</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-muted-foreground mt-2">Product reviews</p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
          <p className="text-muted-foreground mb-4">
            Based on your browsing history and preferences
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-background rounded-md p-4 border border-border">
              <div className="aspect-square bg-muted rounded-md mb-2"></div>
              <h4 className="font-medium">Product Name</h4>
              <p className="text-sm text-muted-foreground">$99.99</p>
            </div>
            <div className="bg-background rounded-md p-4 border border-border">
              <div className="aspect-square bg-muted rounded-md mb-2"></div>
              <h4 className="font-medium">Product Name</h4>
              <p className="text-sm text-muted-foreground">$99.99</p>
            </div>
            <div className="bg-background rounded-md p-4 border border-border">
              <div className="aspect-square bg-muted rounded-md mb-2"></div>
              <h4 className="font-medium">Product Name</h4>
              <p className="text-sm text-muted-foreground">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 