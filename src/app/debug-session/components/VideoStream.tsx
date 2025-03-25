import React from 'react';
import { Mic, Video, PhoneOff } from 'lucide-react';
import { placeholderImages } from '../placeholder-images';

const VideoStream = () => {
  return (
    <div className="relative h-full w-full bg-gray-900 flex items-center justify-center">
      {/* Main video display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gray-800">
          {/* Placeholder for the expert's video stream */}
          <img 
            src={placeholderImages.expertPlaceholder} 
            alt="Expert" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
      
      {/* Small user video preview in bottom-right */}
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500 rounded overflow-hidden border-2 border-gray-700">
        <img 
          src={placeholderImages.userPlaceholder} 
          alt="You" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Control buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center">
          <Mic className="h-5 w-5 text-white" />
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center">
          <Video className="h-5 w-5 text-white" />
        </button>
        <button className="bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">
          <PhoneOff className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoStream; 