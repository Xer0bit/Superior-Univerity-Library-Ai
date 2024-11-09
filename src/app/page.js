"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import Header from './components/Header';
import PageTransition from './components/PageTransition';

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      color: ['rgba(147,197,253,0.4)', 'rgba(167,139,250,0.4)', 'rgba(196,181,253,0.4)'][
        Math.floor(Math.random() * 3)
      ],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setOrbs(newOrbs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [keySequence, setKeySequence] = useState("");
  const router = useRouter();

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      handleSearch();
    }
  }, [searchTerm]);

  useEffect(() => {
    setIsClient(true); // Set to true after initial render
  }, []);

  useEffect(() => {
    if (isClient) {
      document.addEventListener('keypress', handleKeyPress);
      return () => document.removeEventListener('keypress', handleKeyPress);
    }
  }, [handleKeyPress, isClient]);

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

  // Add key sequence detection
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeySequence(prev => (prev + e.key).slice(-5));
    };

    if (isClient) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isClient]);

  // Check for easter egg sequence
  useEffect(() => {
    if (keySequence === "books") {
      setEasterEggActive(true);
      setTimeout(() => setEasterEggActive(false), 3000);
    }
  }, [keySequence]);

  return (
    <>
      <Head>
        <title>Superior Digital Library - AI-Powered Book Discovery</title>
        <meta name="description" content="Discover your next favorite book using our AI-powered book recommendation system." />
        <meta property="og:title" content="Superior Digital Library" />
        <meta property="og:description" content="AI-Powered Book Discovery Platform" />
        <meta name="theme-color" content="#1e3a8a" />
      </Head>
      <PageTransition isActive={isTransitioning} />
      
      {isClient && (
        <>
          {easterEggActive && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="text-4xl text-white animate-bounce">
                🎉 You found the secret! 📚
              </div>
            </div>
          )}
          <FloatingOrbs />
        </>
      )}

      <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-[#0c1220] relative z-10">
        <Header />
        <header className="mb-12 text-center mt-24 relative">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 tracking-tight animate-gradient-x">
            Superior Digital Library
          </h1>
          <div className="mt-6 space-y-2">
            <p className="text-2xl text-blue-300 font-light tracking-wide">
              AI-Powered Book Discovery
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <p className="text-md text-blue-300/80 font-light">
                Explore our free AI-curated collection
              </p>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center">
          {isClient && (
            <>
              <div className="flex w-full max-w-xl mb-10 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <input
                  type="text"
                  placeholder="What would you like to read today?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-4 border-0 rounded-l-lg w-full bg-[#162032]/80 backdrop-blur-md text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 bg-blue-600/80 backdrop-blur-md text-white rounded-r-lg hover:bg-blue-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  Search
                </button>
              </div>
              <button
                onClick={handleMagicButtonClick}
                className="group relative px-8 py-4 bg-transparent border border-purple-400/30 text-white rounded-lg overflow-hidden transition-all duration-300
                  hover:border-purple-400/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <span className="relative z-10 font-medium">AI Magic Search</span>
              </button>
            </>
          )}
        </main>
      </div>
    </>
  );
}
