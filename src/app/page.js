"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PageTransition from './components/PageTransition';

// Dynamically import header with no SSR
const DynamicHeader = dynamic(
  () => Promise.resolve(({ children }) => <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z-10 border-b-2 border-blue-100">{children}</header>),
  { ssr: false }
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      handleSearch();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (mounted) {
      window.addEventListener('keypress', handleKeyPress);
      return () => window.removeEventListener('keypress', handleKeyPress);
    }
  }, [mounted, handleKeyPress]);

  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) return;
    router.push(`/search-results?searchTerm=${encodeURIComponent(searchTerm)}`);
  }, [searchTerm, router]);

  const handleMagicButtonClick = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/recommendations");
    }, 800); // Increased to 800ms to allow for fade animation
  }, [router]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <PageTransition isActive={isTransitioning} />
      <div className={`min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100 ${isTransitioning ? 'transitioning' : ''}`}>
        <DynamicHeader>
          <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Superior University Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Superior University Open Library
              </h1>
            </div>
            <nav className="flex space-x-8">
              <button 
                onClick={() => router.push("/")} 
                className="px-4 py-2 text-gray-600 font-semibold hover:text-blue-600 transition duration-300 ease-in-out hover:scale-105"
              >
                Home
              </button>
              <button 
                onClick={() => router.push("/about")} 
                className="px-4 py-2 text-gray-600 font-semibold hover:text-blue-600 transition duration-300 ease-in-out hover:scale-105"
              >
                About Us
              </button>
              <button 
                onClick={() => router.push("/contact")} 
                className="px-4 py-2 text-gray-600 font-semibold hover:text-blue-600 transition duration-300 ease-in-out hover:scale-105"
              >
                Contact
              </button>
            </nav>
          </div>
        </DynamicHeader>
        <header className="mb-8 text-center mt-24">
          <h1 className="text-5xl font-extrabold text-gray-800">Superior Digital Library</h1>
          <p className="text-lg text-gray-700 mt-2">Find your next favorite book in 30 seconds </p>
          <p className="text-md text-gray-600 mt-2">Our library is free for everyone to use and explore.</p>
        </header>
        <main className="flex flex-col items-center">
          <div className="flex w-full max-w-md mb-8">
            <input
              type="text"
              placeholder="Search for a book..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 border rounded-l w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="p-3 bg-blue-500 text-white rounded-r shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
          <button
            onClick={handleMagicButtonClick}
            className="p-3 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Magic Button
          </button>
        </main>
      </div>
    </>
  );
}
