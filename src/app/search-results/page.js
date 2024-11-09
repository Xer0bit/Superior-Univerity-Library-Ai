"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from 'next/image';

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  useEffect(() => {
    let isMounted = true;

    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const searchTerm = searchParams.get('searchTerm');
        if (!searchTerm) {
          setSearchResults([]);
          return;
        }

        const query = encodeURIComponent(searchTerm).replace(/%20/g, '+');
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        
        if (!isMounted) return;

        const data = await response.json();

        const results = data.docs.map((doc) => ({
          id: doc.key,
          cover_i: doc.cover_i,
          title: doc.title,
          author: doc.author_name ? doc.author_name.join(", ") : "Unknown Author",
          first_publish_year: doc.first_publish_year || "Unknown Year",
          edition_key: doc.edition_key?.[0],
          ebook_access: doc.ebook_access
        }));

        if (isMounted) {
          setSearchResults(results);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch search results");
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchResults();
    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z-10 border-b-2 border-blue-100">
        <Suspense fallback={null}>
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
        </Suspense>
      </header>
      <main className="mt-24">
        <h1 className="text-4xl font-bold text-center mb-8">
          {searchTerm ? `Search Results for: ${searchTerm}` : 'Search Results'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchResults.map((result) => (
            <div key={result.id} className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              {result.cover_i ? (
                <div className="relative w-full h-64">
                  <Image
                    src={`https://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg`}
                    alt={result.title}
                    fill
                    className="object-cover rounded-t-lg"
                    priority={false}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                  <span className="text-gray-400">No cover available</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="mt-2 text-2xl font-bold text-gray-800">{result.title}</h2>
                <p className="text-gray-700 mt-1">by {result.author}</p>
                <p className="text-gray-600 mt-1">First published: {result.first_publish_year}</p>
                <p className="text-gray-600 mt-1">
                  Status: {result.ebook_access === "borrowable" ? "Available" : "Not Available"}
                </p>
                <button
                  onClick={() => router.push(`https://openlibrary.org${result.id}`)}
                  className="mt-4 w-full p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View on OpenLibrary
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}