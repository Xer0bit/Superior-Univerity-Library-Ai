
"use client";

import { useRouter } from 'next/navigation';

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <nav className="flex space-x-6">
      <button 
        onClick={() => router.push("/")} 
        className="px-4 py-2 text-white font-semibold hover:bg-white/20 rounded-lg transition duration-300 ease-in-out"
      >
        Home
      </button>
      <button 
        onClick={() => router.push("/about")} 
        className="px-4 py-2 text-white font-semibold hover:bg-white/20 rounded-lg transition duration-300 ease-in-out"
      >
        About Us
      </button>
      <button 
        onClick={() => router.push("/contact")} 
        className="px-4 py-2 text-white font-semibold hover:bg-white/20 rounded-lg transition duration-300 ease-in-out"
      >
        Contact
      </button>
    </nav>
  );
}