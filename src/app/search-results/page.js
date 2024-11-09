"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from 'next/image';

// Add this at the top for particles effect
const ParticlesBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_0%,rgba(0,0,0,0)_100%)]" />
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="particle absolute bg-blue-400/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          animation: `float ${Math.random() * 10 + 5}s linear infinite`
        }}
      />
    ))}
  </div>
);

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c1d]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0c0c1d] text-white">
      <ParticlesBackground />
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/20 z-10 border-b border-white/10">
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
      <main className="mt-24 relative z-1">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {searchTerm ? `AI-Powered Search Results for: "${searchTerm}"` : 'Search Results'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
          {searchResults.map((result) => (
            <div 
              key={result.id} 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {result.cover_i ? (
                <div className="relative w-full h-72">
                  <Image
                    src={`https://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg`}
                    alt={result.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={false}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              ) : (
                <div className="w-full h-72 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                  <span className="text-white/60">No cover available</span>
                </div>
              )}
              <div className="p-6 relative">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {result.title}
                </h2>
                <p className="text-white/80 mt-2">by {result.author}</p>
                <p className="text-white/60 mt-1">First published: {result.first_publish_year}</p>
                <p className="text-white/60 mt-1">
                  Status: {' '}
                  <span className={`${result.ebook_access === "borrowable" ? "text-green-400" : "text-red-400"}`}>
                    {result.ebook_access === "borrowable" ? "Available" : "Not Available"}
                  </span>
                </p>
                <button
                  onClick={() => window.open(`https://openlibrary.org/works/${result.id.split('/works/')[1]}`, '_blank')}
                  className="mt-4 w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium 
                           hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
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