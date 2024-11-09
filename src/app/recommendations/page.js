"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Recommendations() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z-10 border-b-2 border-blue-100">
        {/* Same header as main page */}
      </header>
      <main className="mt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Recommended Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add book recommendations */}
        </div>
      </main>
    </div>
  );
}