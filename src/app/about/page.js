"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-50 shadow-lg z-10 border-b-2 border-blue-100">
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
      </header>
      <main className="mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Democratizing Education Worldwide
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're a passionate group of students from Superior University committed to breaking down barriers in education. Our mission is to make knowledge accessible to everyone, anywhere, with just an internet connection.
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4 text-blue-600">🎯</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To create a barrier-free digital library that enables anyone, regardless of their financial situation, to access quality educational resources and literature.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4 text-purple-600">💡</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where knowledge knows no boundaries, where every curious mind has the opportunity to learn, grow, and contribute to global progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4 text-pink-600">🤝</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Impact</h2>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of learners worldwide who are already part of our community, accessing resources and expanding their horizons without financial barriers.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Books Available</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-600">5000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Accessibility</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={() => router.push("/contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 ease-in-out hover:scale-105"
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}