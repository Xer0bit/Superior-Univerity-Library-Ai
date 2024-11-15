"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-[#0c1220]">
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#162032]/80 shadow-lg z-10 border-b border-blue-500/10">
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

      <main className="mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Education for Everyone
            </h1>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge AI technology to revolutionize digital learning. Our platform uses advanced algorithms to personalize your learning experience and make knowledge discovery seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#162032]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/10">
              <div className="text-5xl mb-4">🤖</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-100">AI-Powered Search</h2>
              <p className="text-blue-100/70 leading-relaxed">
                Our advanced AI algorithms understand context and intent, helping you find exactly what you are looking for with natural language processing.
              </p>
            </div>

            <div className="bg-[#162032]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/10">
              <div className="text-5xl mb-4">🧠</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-100">Smart Learning</h2>
              <p className="text-blue-100/70 leading-relaxed">
                Personalized recommendations and adaptive learning paths that evolve with your interests and progress.
              </p>
            </div>

            <div className="bg-[#162032]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/10">
              <div className="text-5xl mb-4">📚</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-100">Digital Innovation</h2>
              <p className="text-blue-100/70 leading-relaxed">
                Combining traditional library services with cutting-edge technology for an enhanced learning experience.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
              <div className="group relative">
                <div className="bg-[#162032] backdrop-blur-lg p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-500/20">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                    <Image
                      src="https://raw.githubusercontent.com/Xer0bit/Superior-Univerity-Library-Ai/refs/heads/master/public/Sameer.jpg"
                      alt="Team Member"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-blue-100">Muhammad Sameer Akram</h3>
                  <p className="text-blue-400 text-center mb-2">Project Lead & Full Stack Developer</p>
                  <p className="text-blue-100/70 text-center">Managing the entire project development and implementation with expertise in AI integration and system architecture.</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a 
                      href="https://www.upwork.com/freelancers/~010a791f35b413d1b6" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-[#6fda44] text-white rounded-lg hover:bg-[#5cb536] transition duration-300 text-sm font-semibold"
                    >
                      Hire on Upwork
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sameer-samiullah/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005885] transition duration-300 text-sm font-semibold"
                    >
                      Visit LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-[#162032] backdrop-blur-lg p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-500/20">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                    <Image
                      src="https://avatars.githubusercontent.com/u/149118173?v=4"
                      alt="Abdul Rahman"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-blue-100">Abdul Rahman</h3>
                  <p className="text-blue-400 text-center mb-2">Backend Developer</p>
                  <p className="text-blue-100/70 text-center">Specializing in backend architecture and database management with focus on system optimization.</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a 
                      href="https://github.com/abdulrahmanJAlabbed" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-[#24292e] transition duration-300 text-sm font-semibold"
                    >
                      GitHub Profile
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005885] transition duration-300 text-sm font-semibold"
                    >
                      Visit LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-400">28 Million+</div>
              <div className="text-blue-100/70">Books Available</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-blue-100/70">Countries Reached</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-400">5000+</div>
              <div className="text-blue-100/70">Active Users</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-indigo-400">24/7</div>
              <div className="text-blue-100/70">Accessibility</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => router.push("/contact")}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 backdrop-blur-lg"
            >
              Join Our AI Revolution
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}