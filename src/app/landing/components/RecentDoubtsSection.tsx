import React from 'react';
import { ArrowUp, Clock, MessageSquare } from 'lucide-react';

type DoubtCardProps = {
  title: string;
  description: string;
  tags: string[];
  votes: number;
  hoursAgo: number;
  replies: number;
};

const DoubtCard = ({ title, description, tags, votes, hoursAgo, replies }: DoubtCardProps) => {
  return (
    <div className="border-b border-gray-200 py-6 px-4">
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <ArrowUp className="text-gray-500" size={16} />
          <span className="text-sm font-medium">{votes}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium mb-1 text-black">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>{hoursAgo} hours ago</span>
            <span className="mx-2">•</span>
            <MessageSquare size={14} className="mr-1" />
            <span>{replies} {replies === 1 ? 'reply' : 'replies'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentDoubtsSection = () => {
  const doubts = [
    {
      title: "How to implement WebSocket in React?",
      description: "I'm trying to create a real-time chat application...",
      tags: ["React", "WebSocket", "JavaScript"],
      votes: 12,
      hoursAgo: 2,
      replies: 5
    },
    {
      title: "Redux Toolkit Query vs React Query",
      description: "What are the main differences between RTK Query...",
      tags: ["Redux", "React Query", "State Management"],
      votes: 8,
      hoursAgo: 4,
      replies: 3
    },
    {
      title: "Best practices for React Native navigation",
      description: "I'm building a mobile app and wondering about...",
      tags: ["React Native", "Navigation", "Mobile"],
      votes: 15,
      hoursAgo: 5,
      replies: 7
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Recent Doubts</h2>
          <button className="text-blue-500 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md text-sm">
            Ask a Question
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {doubts.map((doubt, index) => (
            <DoubtCard key={index} {...doubt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentDoubtsSection;