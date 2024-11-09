"use client";

import { useState, useEffect } from "react";

export default function Recommendations() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [genre, setGenre] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [language, setLanguage] = useState("");
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async () => {
    setIsLoading(true);
    // Simulate API call with 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Your recommendation logic here
    console.log("Name:", name, "Age:", age, "Genre:", genre, "Hobbies:", hobbies, "Language:", language, "Reason:", reason);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
          AI Book Recommendations
        </h1>
        <p className="text-lg text-blue-300 mt-4 opacity-80">Discover your next favorite book through our AI-powered recommendations</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex flex-col w-full max-w-md mb-8 backdrop-blur-sm bg-slate-900/70 p-8 rounded-2xl shadow-2xl border border-blue-900/50">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your favorite genre..."
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your hobbies..."
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your preferred language..."
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Enter your reason for reading books..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-800/30 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
            />
          </div>
          <button
            onClick={handleRecommend}
            disabled={isLoading}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden group"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </main>
    </div>
  );
}