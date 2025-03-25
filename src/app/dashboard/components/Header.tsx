import React from 'react';
import { Search, Bell, Moon } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white py-3 px-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-10">
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search for doubts..."
          className="w-full pl-9 pr-4 py-1.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
        />
        <div className="absolute left-3 top-2 text-gray-400">
          <Search size={16} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-all duration-200">
          <Bell size={18} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-all duration-200">
          <Moon size={18} />
        </button>
        <div className="flex items-center bg-gray-50 py-1 px-2 rounded-full">
          <div className="w-7 h-7 rounded-full overflow-hidden mr-2 border-2 border-blue-100">
            <Image 
              src="/images/avatar.png" 
              alt="John Doe" 
              width={28} 
              height={28} 
            />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;