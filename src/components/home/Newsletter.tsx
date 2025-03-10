"use client";

import { useState } from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-16 bg-bg-hover-light dark:bg-bg-hover-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-xl p-8 md:p-12 border border-border-light dark:border-border-dark">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Stay in the Loop
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, tech news, and early access to our latest products.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-success/10 text-success p-4 rounded-lg text-center">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">We&#39;ve sent a confirmation email to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted-light dark:text-text-muted-dark">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center ${
                    isLoading
                      ? "bg-primary/70 text-white cursor-not-allowed"
                      : "bg-primary text-white hover:bg-primary-dark"
                  } transition-colors`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <FaArrowRight className="ml-2" />
                    </span>
                  )}
                </button>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-3 text-center">
                By subscribing, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and <a href="#" className="underline hover:text-primary">Terms of Service</a>.
              </p>
            </form>
          )}
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">Exclusive Deals</span>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">Weekly Updates</span>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 