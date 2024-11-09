"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

export default function SearchResults() {
  const exampleData = [
    {
      id: 1,
      cover_i: 123456,
      title: "Example Book Title",
      author: "Example Author",
      first_publish_year: 2023,
    },
    {
      id: 2,
      cover_i: 654321,
      title: "Another Example Book",
      author: "Another Author",
      first_publish_year: 2022,
    },
  ];

  const [searchResults, setSearchResults] = useState(exampleData);
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z- border-b-2 border-blue-100">
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
      <div className="pt-20">
        <header className="mb-11 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Search Results</h1>
        </header>
        <main className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
            {searchResults.map((result) => (
              <div key={result.id} className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src={`https://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg`}
                  alt={result.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="mt-2 text-2xl font-bold text-gray-800">{result.title}</h2>
                  <p className="text-gray-700 mt-1">by {result.author}</p>
                  <p className="text-gray-600 mt-1">First published: {result.first_publish_year}</p>
                  <button
                    onClick={() => router.push(`/book/${result.id}`)}
                    className="mt-4 w-full p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}