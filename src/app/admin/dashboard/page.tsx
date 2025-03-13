import { requireAuth } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  FaUsers, 
  FaShoppingCart, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaBox, 
  FaClipboardList, 
  FaComments, 
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Admin Dashboard | TechSphere",
  description: "Admin dashboard for TechSphere e-commerce platform",
};

export default async function AdminDashboardPage() {
  // Check if user is authenticated and is an admin
  const session = await requireAuth();
  
  if (!session.user.isAdmin) {
    // Redirect non-admin users to the home page
    redirect("/");
  }

  // Mock statistics data
  const stats = {
    totalUsers: 1254,
    totalOrders: 867,
    totalRevenue: 124589.99,
    averageOrderValue: 143.7,
    pendingOrders: 23,
    lowStockProducts: 12,
    newReviews: 8,
  };

  // Mock recent orders
  const recentOrders = [
    { id: "ORD-9385", customer: "John Doe", date: "2023-06-15", total: 299.99, status: "Delivered" },
    { id: "ORD-9384", customer: "Jane Smith", date: "2023-06-15", total: 149.99, status: "Processing" },
    { id: "ORD-9383", customer: "Robert Johnson", date: "2023-06-14", total: 499.99, status: "Shipped" },
    { id: "ORD-9382", customer: "Emily Davis", date: "2023-06-14", total: 89.99, status: "Pending" },
    { id: "ORD-9381", customer: "Michael Brown", date: "2023-06-13", total: 199.99, status: "Delivered" },
  ];

  // Mock top products
  const topProducts = [
    { id: 1, name: "Wireless Earbuds Pro", sales: 124, revenue: 12276 },
    { id: 2, name: "Ultra HD Smart TV 55\"", sales: 89, revenue: 78232 },
    { id: 3, name: "Premium Smartphone X", sales: 76, revenue: 60724 },
    { id: 4, name: "Noise-Cancelling Headphones", sales: 68, revenue: 13532 },
    { id: 5, name: "Gaming Laptop Elite", sales: 52, revenue: 67548 },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex space-x-2">
            <Link 
              href="/admin/products/new" 
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              Add New Product
            </Link>
            <Link 
              href="/admin/settings" 
              className="px-4 py-2 bg-bg-card-light dark:bg-bg-card-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Users</p>
                <h3 className="text-3xl font-bold">{stats.totalUsers}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <FaUsers className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">+12% this month</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Orders</p>
                <h3 className="text-3xl font-bold">{stats.totalOrders}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <FaShoppingCart className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">+8% this month</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Revenue</p>
                <h3 className="text-3xl font-bold">${stats.totalRevenue.toLocaleString()}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <FaMoneyBillWave className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">+15% this month</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Avg. Order Value</p>
                <h3 className="text-3xl font-bold">${stats.averageOrderValue.toFixed(2)}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <FaChartLine className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">+5% this month</span>
            </div>
          </div>
        </div>
        
        {/* Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6 border-l-4 border-amber-500">
            <div className="flex items-center">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg mr-4">
                <FaClipboardList className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Pending Orders</h3>
                <p className="text-2xl font-bold">{stats.pendingOrders}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/admin/orders?status=pending" className="text-primary text-sm hover:underline">
                View all pending orders →
              </Link>
            </div>
          </div>
          
          <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4">
                <FaBox className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Low Stock Products</h3>
                <p className="text-2xl font-bold">{stats.lowStockProducts}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/admin/products?filter=low-stock" className="text-primary text-sm hover:underline">
                View low stock products →
              </Link>
            </div>
          </div>
          
          <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                <FaComments className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">New Reviews</h3>
                <p className="text-2xl font-bold">{stats.newReviews}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/admin/reviews?filter=new" className="text-primary text-sm hover:underline">
                Moderate new reviews →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Orders Table */}
        <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Link href="/admin/orders" className="text-primary hover:underline text-sm">
              View All Orders
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light dark:border-border-dark">
                  <th className="text-left py-3 px-4 font-medium">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Total</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border-light dark:border-border-dark">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                        order.status === 'Processing' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400' :
                        'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link href={`/admin/orders/${order.id}`} className="text-primary hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Top Products */}
        <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Top Selling Products</h2>
            <Link href="/admin/products" className="text-primary hover:underline text-sm">
              View All Products
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light dark:border-border-dark">
                  <th className="text-left py-3 px-4 font-medium">Product</th>
                  <th className="text-right py-3 px-4 font-medium">Sales</th>
                  <th className="text-right py-3 px-4 font-medium">Revenue</th>
                  <th className="text-right py-3 px-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border-light dark:border-border-dark">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4 text-right">{product.sales}</td>
                    <td className="py-3 px-4 text-right">${product.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <Link href={`/admin/products/${product.id}`} className="text-primary hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 