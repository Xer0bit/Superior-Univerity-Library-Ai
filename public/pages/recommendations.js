
"use client";

import { useState } from "react";

export default function Recommendations() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleRecommend = () => {
    // Perform recommendation logic here
    console.log("Name:", name, "Age:", age);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-green-100 to-yellow-100" cz-shortcut-listen="true">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Book Recommendations</h1>
        <p className="text-lg text-gray-700 mt-2">Tell us about yourself to get personalized book recommendations</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex flex-col w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 mb-4 border rounded w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Enter your age..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-3 mb-4 border rounded w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleRecommend}
            className="p-3 bg-green-500 text-white rounded shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get Recommendations
          </button>
        </div>
      </main>
    </div>
  );
}