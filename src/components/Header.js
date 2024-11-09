
"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NoSSR from './NoSSR';

export default function Header() {
  const router = useRouter();

  return (
    <NoSSR>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <Image
                src="/logo.png"
                alt="Superior University Logo"
                width={50}
                height={50}
                className="relative object-contain rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Superior AI Library
              </span>
            </h1>
          </div>
          <nav className="flex space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact" }
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => router.push(link.path)}
                className="relative px-4 py-2 group"
              >
                <span className="relative z-10 text-gray-700 font-medium group-hover:text-white transition duration-300">
                  {link.label}
                </span>
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
              </button>
            ))}
          </nav>
        </div>
      </header>
    </NoSSR>
  );
}