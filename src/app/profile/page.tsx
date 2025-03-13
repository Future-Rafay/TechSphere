import { requireAuth } from "@/lib/utils/auth";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | TechSphere",
  description: "Manage your TechSphere account and preferences",
};

export default async function ProfilePage() {
  // This will redirect to login if not authenticated
  const session = await requireAuth();
  const user = session.user;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-6">
            {user.image ? (
              <Image 
                width={96}
                height={96}
                src={user.image} 
                alt={user.name || "Profile"} 
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                {user.name?.charAt(0) || user.email?.charAt(0)}
              </div>
            )}
            
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="text-sm mt-2">Account ID: {user.id}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
            <p className="text-muted-foreground mb-4">
              Manage your account settings and preferences
            </p>
            <button className="btn btn-primary">
              Edit Profile
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            <p className="text-muted-foreground mb-4">
              View your past orders and track current orders
            </p>
            <button className="btn btn-primary">
              View Orders
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 