"use client";

import { useState } from "react";
import { 
  FaBell, 
  FaShoppingBag, 
  FaTag, 
  FaTruck, 
  FaInfoCircle, 
  FaTrash, 
  FaCheck,
  FaFilter
} from "react-icons/fa";

// Sample notification data
const initialNotifications = [
  {
    id: 1,
    type: "order",
    title: "Order Shipped",
    message: "Your order #12345 has been shipped and is on its way to you.",
    date: "2023-05-15T10:30:00",
    isRead: false,
    icon: <FaTruck className="text-primary" />
  },
  {
    id: 2,
    type: "promo",
    title: "Flash Sale: 40% Off",
    message: "Don't miss our flash sale! Get 40% off on all audio products for the next 24 hours.",
    date: "2023-05-14T15:45:00",
    isRead: false,
    icon: <FaTag className="text-secondary" />
  },
  {
    id: 3,
    type: "order",
    title: "Order Delivered",
    message: "Your order #12089 has been delivered. Enjoy your new tech!",
    date: "2023-05-12T09:15:00",
    isRead: true,
    icon: <FaCheck className="text-success" />
  },
  {
    id: 4,
    type: "system",
    title: "Account Security",
    message: "We've detected a new login to your account from a new device. If this wasn't you, please secure your account.",
    date: "2023-05-10T18:20:00",
    isRead: true,
    icon: <FaInfoCircle className="text-info" />
  },
  {
    id: 5,
    type: "promo",
    title: "New Products Arrived",
    message: "Check out our latest collection of smartphones that just arrived in our store!",
    date: "2023-05-08T11:05:00",
    isRead: true,
    icon: <FaShoppingBag className="text-secondary" />
  },
  {
    id: 6,
    type: "system",
    title: "Password Changed",
    message: "Your account password was successfully changed. If you didn't make this change, please contact support.",
    date: "2023-05-05T14:30:00",
    isRead: true,
    icon: <FaInfoCircle className="text-info" />
  },
  {
    id: 7,
    type: "promo",
    title: "Weekend Sale",
    message: "Enjoy our weekend sale with up to 30% off on selected gaming accessories!",
    date: "2023-05-03T09:45:00",
    isRead: true,
    icon: <FaTag className="text-secondary" />
  },
  {
    id: 8,
    type: "order",
    title: "Order Confirmed",
    message: "Your order #12567 has been confirmed and is being processed.",
    date: "2023-05-01T16:20:00",
    isRead: true,
    icon: <FaShoppingBag className="text-primary" />
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");
  
  // Format date to relative time (e.g., "2 days ago")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInDays > 7) {
      return date.toLocaleDateString();
    } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMins > 0) {
      return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };
  
  // Mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };
  
  // Delete a notification
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  
  // Clear all notifications
  const clearAll = () => {
    setNotifications([]);
  };
  
  // Filter notifications
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === filter);
  
  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.isRead).length;
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
    
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaBell className="text-primary text-2xl mr-3" />
            <h1 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark">
              Notifications
            </h1>
            {unreadCount > 0 && (
              <span className="ml-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            {notifications.length > 0 && (
              <>
                <button 
                  onClick={markAllAsRead}
                  className="text-sm text-primary hover:text-primary-dark transition-colors"
                >
                  Mark all as read
                </button>
                <button 
                  onClick={clearAll}
                  className="text-sm text-error hover:text-error/80 transition-colors"
                >
                  Clear all
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
          <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark mr-2">
            <FaFilter className="mr-1" />
            <span className="text-sm">Filter:</span>
          </div>
          {['all', 'order', 'promo', 'system'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === type 
                  ? 'bg-primary text-white' 
                  : 'bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark'
              } transition-colors`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.isRead 
                    ? 'bg-bg-card-light dark:bg-bg-card-dark border-border-light dark:border-border-dark' 
                    : 'bg-primary/5 dark:bg-primary/10 border-primary/20'
                } transition-colors`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-bg-hover-light dark:bg-bg-hover-dark mr-4">
                    {notification.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-semibold ${
                          notification.isRead 
                            ? 'text-text-primary-light dark:text-text-primary-dark' 
                            : 'text-primary'
                        }`}>
                          {notification.title}
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
                          {formatDate(notification.date)}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.isRead && (
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="p-1 text-primary hover:text-primary-dark transition-colors"
                            aria-label="Mark as read"
                          >
                            <FaCheck size={14} />
                          </button>
                        )}
                        <button 
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1 text-text-muted-light dark:text-text-muted-dark hover:text-error transition-colors"
                          aria-label="Delete notification"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <FaBell className="text-text-muted-light dark:text-text-muted-dark text-5xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                No notifications
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {notifications.length === 0 
                  ? "You don't have any notifications yet." 
                  : "No notifications match your current filter."}
              </p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
} 