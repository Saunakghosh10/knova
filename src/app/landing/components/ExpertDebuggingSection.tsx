import React from 'react';
import { Circle, Send } from 'lucide-react';
import Image from 'next/image';

const ExpertDebuggingSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Expert Debugging Arena</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-black mb-6">
              Connect with expert developers in real-time for pair programming and debugging sessions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Circle className="text-red-500 fill-red-500 mr-3" size={20} />
                <span className="text-black">Live code collaboration</span>
              </div>
              <div className="flex items-center">
                <Circle className="text-red-500 fill-red-500 mr-3" size={20} />
                <span className="text-black">Real-time video chat</span>
              </div>
              <div className="flex items-center">
                <Circle className="text-red-500 fill-red-500 mr-3" size={20} />
                <span className="text-black">Screen sharing</span>
              </div>
              <div className="flex items-center">
                <Circle className="text-red-500 fill-red-500 mr-3" size={20} />
                <span className="text-black">Interactive debugging</span>
              </div>
            </div>
            
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Join as Expert
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="bg-white rounded-lg p-4 mb-4 text-sm font-mono">
              <p>function example() {'{'}</p>
              <p className="pl-4">const data = fetchData();</p>
              <p className="pl-4">if (isValid(data)) {'{'}</p>
              <p className="pl-8">return process();</p>
              <p className="pl-4">{'}'} else {'{'}</p>
              <p className="pl-8">throw Error(&apos;Invalid data&apos;);</p>
              <p className="pl-4">{'}'}</p>
              <p>{'}'}</p>
            </div>
            
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                <Image 
                  src="/images/avatar.png" 
                  alt="User avatar" 
                  width={32} 
                  height={32} 
                />
              </div>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDebuggingSection;