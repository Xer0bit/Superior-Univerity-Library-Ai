"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = async () => {
    console.log("Searching for:", searchTerm);
    try {
      const query = encodeURIComponent(searchTerm).replace(/%20/g, '+');
      const url = `https://openlibrary.org/search.json?q=${query}`;
      console.log("Fetching search results from:", url); // Log the URL
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched data:", data); // Log the fetched data
      const results = data.docs.map((doc) => ({
        id: doc.key,
        title: doc.title,
        author: doc.author_name ? doc.author_name.join(", ") : "Unknown Author",
        first_publish_year: doc.first_publish_year || "Unknown Year",
      }));
      setSearchResults(results);
      router.push({
        pathname: "/search-results",
        query: { searchTerm }
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleMagicButtonClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/recommendations");
    }, 500); // Match this duration with the CSS transition duration
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={`min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100 ${isTransitioning ? 'transitioning' : ''}`}>
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
          className="p-3 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Magic Button
        </button>
      </main>
    </div>
  );
}
