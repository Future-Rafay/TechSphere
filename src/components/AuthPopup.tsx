"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const AuthPopup = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasClosedPopup, setHasClosedPopup] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authPopupClosed = sessionStorage.getItem('authPopupClosed');
    if (authPopupClosed) return;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage > 50 && !hasClosedPopup) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = (e: globalThis.MouseEvent) => {
      if (e.clientY <= 0 && !hasClosedPopup) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasClosedPopup]);

  const closePopup = (): void => {
    setIsVisible(false);
    setHasClosedPopup(true);
    sessionStorage.setItem('authPopupClosed', 'true');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (activeTab === 'login') {
        const result = await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          setError('Invalid email or password');
        } else {
          closePopup();
          router.refresh();
        }
      } else {
        // Handle signup - you'll need to implement this endpoint
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Something went wrong');
        }

        // After successful signup, log the user in
        await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        closePopup();
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    await signIn(provider, { callbackUrl: window.location.href });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg w-11/12 max-w-4xl relative shadow-xl overflow-hidden animate-slideUp">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 bg-transparent border-none text-2xl cursor-pointer text-gray-700 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 overflow-hidden hidden md:block">
            <Image
              width={600}
              height={600}
              src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Join our community"
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('login')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'login'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'signup'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            {activeTab === 'login' ? (
              <>
                <h2 className="text-gray-800 text-2xl font-bold mb-4">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mb-5">
                  Log in to access exclusive content and features.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-3 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Logging in...' : 'Log In'}
                  </button>
                </form>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    Google
                  </button>
                  <button
                    onClick={() => handleSocialLogin('github')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-gray-800 text-2xl font-bold mb-4">
                  Create an Account
                </h2>
                <p className="text-gray-600 mb-5">
                  Join our community to get exclusive access and updates.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-3 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Creating account...' : 'Sign Up'}
                  </button>
                </form>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    Google
                  </button>
                  <button
                    onClick={() => handleSocialLogin('github')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup; 