import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500 mr-10">
            Knova
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-black hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-black hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/expert-connect" className="text-black hover:text-gray-900">
              Expert Connect
            </Link>
            <Link href="/pricing" className="text-black hover:text-gray-900">
              Pricing
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-700">
              <Search size={16} />
            </div>
          </div>
          
          <Link href="/dashboard" className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;