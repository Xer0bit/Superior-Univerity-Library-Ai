import Image from 'next/image';
import NavigationButtons from './NavigationButtons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/20 z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Superior University Logo"
            width={50}
            height={50}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Superior University Open Library
          </h1>
        </div>
        <NavigationButtons />
      </div>
    </header>
  );
}