"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Contact() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (!mounted) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-[#030721] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d2e]/30 via-[#0a1445]/30 to-[#030721]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#1a3b8f] rounded-full filter blur-[120px]"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#0f2b7a] rounded-full filter blur-[120px]"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#030721]/80 border-b border-[#1a3b8f]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="https://raw.githubusercontent.com/Xer0bit/Superior-Univerity-Library-Ai/refs/heads/master/public/logo.png"
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

      {/* Main Content */}
      <main className="relative pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4f75ff] to-[#2b4db2] mb-4">
            Connect with Our AI Assistant
          </h1>
          <p className="text-[#8b9cd7] text-lg max-w-2xl mx-auto">
            Experience the future of library assistance. Our AI-powered system is ready to help you 24/7.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {!formSubmitted ? (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 backdrop-blur-xl bg-[#071033]/40 p-8 rounded-2xl border border-[#1a3b8f]/30 shadow-[0_0_40px_rgba(26,59,143,0.3)]"
              suppressHydrationWarning
            >
              {['name', 'email', 'subject'].map((field) => (
                <div key={`form-field-${field}`}>
                  <label htmlFor={field} className="block text-gray-300 font-medium mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="How can our AI assist you today?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,_85,_247,_0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div 
              className="text-center backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(8,_112,_184,_0.7)]"
              suppressHydrationWarning
            >
              <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">Message Received!</h2>
              <p className="text-gray-400 mb-6">Our AI is processing your request. We will respond shortly.</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,_85,_247,_0.4)]"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}