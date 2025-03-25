import React from 'react';
import { Clock, Settings } from 'lucide-react';
import { placeholderImages } from '../placeholder-images';

const SessionHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
      <div className="flex items-center">
        <div className="text-lg font-bold mr-2">
          <span className="text-pink-500">&lt;/&gt;</span> Debug Session
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Session timer */}
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-gray-300">02:34:15</span>
        </div>

        {/* Token counter */}
        <div className="flex items-center">
          <span className="text-pink-500 mr-1">&lt;/&gt;</span>
          <span className="text-gray-300">234/500 tokens</span>
        </div>

        {/* User avatar */}
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
          <img src={placeholderImages.userAvatar} alt="User" className="h-full w-full object-cover" />
        </div>

        {/* Settings button */}
        <button className="text-gray-400 hover:text-white">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SessionHeader; 