import React from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';
import { placeholderImages } from '../placeholder-images';

const ChatInterface = () => {
  // Sample messages
  const messages = [
    {
      id: 1,
      sender: 'expert',
      avatar: placeholderImages.expertAvatar,
      message: 'I can see the issue in your calculation. Let\'s fix the total computation.',
      time: '2:30 PM'
    },
    {
      id: 2,
      sender: 'user',
      avatar: placeholderImages.userAvatar,
      message: 'Thanks! I think the problem might be in the loop iteration.',
      time: '2:31 PM'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'expert' && (
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={msg.avatar} alt="Expert" className="w-full h-full object-cover" />
              </div>
            )}
            <div 
              className={`max-w-xs px-4 py-3 rounded-2xl mx-2 ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-white'
              }`}
            >
              {msg.message}
            </div>
            {msg.sender === 'user' && (
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={msg.avatar} alt="You" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="p-3">
        <div className="flex items-center rounded-full bg-gray-800 px-4 py-2">
          <button className="text-gray-400 hover:text-gray-300 mr-2 flex-shrink-0">
            <Smile className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-300 mr-2 flex-shrink-0">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
          />
          <button className="ml-2 text-blue-400 hover:text-blue-300 flex-shrink-0 bg-blue-500 bg-opacity-20 rounded-full p-1">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 