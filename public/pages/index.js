
"use client";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);
  };

  const handleMagicButtonClick = () => {
    router.push("/recommendations");
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100" cz-shortcut-listen="true">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Superior Digital Library</h1>
        <p className="text-lg text-gray-700 mt-2">Find your next favorite book</p>
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
          className="p-3 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Magic Button
        </button>
      </main>
    </div>
  );
}