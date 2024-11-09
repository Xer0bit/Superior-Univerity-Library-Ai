"use client";

import { useState, useEffect } from "react";

export default function Recommendations() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [genre, setGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async () => {
    setIsLoading(true);
    // Simulate API call with 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Your recommendation logic here
    console.log("Name:", name, "Age:", age, "Genre:", genre);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient-x">
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          AI Book Recommendations
        </h1>
        <p className="text-xl text-blue-200 mt-4 opacity-80">Discover your next favorite book through our AI-powered recommendations</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex flex-col w-full max-w-md mb-8 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 bg-transparent border-2 border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 outline-none"
            />
            <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="relative mb-6">
            <input
              type="number"
              placeholder="Enter your age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-6 py-4 bg-transparent border-2 border-purple-400/30 rounded-xl text-white placeholder-blue-200/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 outline-none"
            />
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Enter your favorite genre..."
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full px-6 py-4 bg-transparent border-2 border-pink-400/30 rounded-xl text-white placeholder-blue-200/50 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all duration-300 outline-none"
            />
          </div>

          <button
            onClick={handleRecommend}
            disabled={isLoading}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 overflow-hidden group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Finding perfect books for you...
              </div>
            ) : (
              <span className="relative z-10">Get AI Recommendations</span>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </main>
    </div>
  );
}