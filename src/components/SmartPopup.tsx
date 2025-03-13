"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SmartPopup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasClosedPopup, setHasClosedPopup] = useState<boolean>(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem('popupClosed');
    if (popupClosed) return;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

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
    sessionStorage.setItem('popupClosed', 'true');
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
          <div className="flex-1 overflow-hidden">
            <Image
              width={600}
              height={600}
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Special offer"
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="mt-0 text-gray-800 text-2xl font-bold mb-4">
              Get 10% Off Your First Order
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Join our newsletter and receive exclusive offers directly to your inbox!
            </p>

            <form className="flex flex-col gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-2">
              No spam, just valuable content. You can unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPopup;