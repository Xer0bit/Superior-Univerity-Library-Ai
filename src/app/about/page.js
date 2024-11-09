
"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z-10 border-b-2 border-blue-100">
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
      </header>
      <main className="mt-24">
        <h1 className="text-4xl font-bold text-center mb-8">About Superior Digital Library</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Superior Digital Library is a comprehensive online resource providing access to thousands of books...
          </p>
          {/* Add more about content */}
        </div>
      </main>
    </div>
  );
}