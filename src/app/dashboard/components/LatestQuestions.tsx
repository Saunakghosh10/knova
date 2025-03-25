import React from 'react';
import { Clock, MessageSquare, Bookmark, Filter, List, Grid, ChevronDown } from 'lucide-react';
import Image from 'next/image';

type QuestionCardProps = {
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  tags: string[];
  timeAgo: string;
  likes: number;
  replies: number;
};

const QuestionCard = ({ 
  author, 
  title, 
  description, 
  tags, 
  timeAgo, 
  likes, 
  replies 
}: QuestionCardProps) => {
  return (
    <div className="border-b border-gray-200 py-4 px-3 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full overflow-hidden mr-2 border border-gray-200">
          <Image 
            src={author.avatar} 
            alt={author.name} 
            width={24} 
            height={24} 
          />
        </div>
        <span className="text-sm font-medium">{author.name}</span>
        <div className="flex items-center ml-auto text-xs text-gray-500">
          <Clock size={12} className="mr-1" />
          <span>{timeAgo}</span>
        </div>
      </div>
      
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <span className="text-amber-500 mr-1 text-sm">👍</span>
            <span className="text-sm">{likes}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1 text-gray-500" />
            <span className="text-sm">{replies}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
};

const LatestQuestions = () => {
  const questions = [
    {
      author: {
        name: 'Alice Chen',
        avatar: '/images/avatar-alice.png',
      },
      title: 'How to implement authentication in Next.js 13 with JWT?',
      description: "I'm trying to implement authentication in my Next.js 13 application using JWT but...",
      tags: ['Next.js', 'Authentication', 'JWT'],
      timeAgo: '2h ago',
      likes: 50,
      replies: 3,
    },
    {
      author: {
        name: 'Mark Wilson',
        avatar: '/images/avatar-mark.png',
      },
      title: 'React Query optimistic updates not working as expected',
      description: "I'm implementing optimistic updates with React Query but the UI is not updating...",
      tags: ['React', 'React Query', 'TypeScript'],
      timeAgo: '3h ago',
      likes: 75,
      replies: 5,
    },
    {
      author: {
        name: 'Sarah Johnson',
        avatar: '/images/avatar-sarah.png',
      },
      title: 'Python Django REST framework serializer validation',
      description: "Need help with custom validation in Django REST framework serializers. The...",
      tags: ['Python', 'Django', 'REST API'],
      timeAgo: '4h ago',
      likes: 40,
      replies: 2,
    },
    {
      author: {
        name: 'David Kim',
        avatar: '/images/avatar-david.png',
      },
      title: 'Vue.js Composition API state management patterns',
      description: "Looking for best practices for state management in Vue 3 using Composition...",
      tags: ['Vue.js', 'JavaScript', 'State Management'],
      timeAgo: '5h ago',
      likes: 60,
      replies: 4,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white sticky top-0">
        <div className="flex items-center">
          <h2 className="text-base font-medium">Latest</h2>
          <div className="relative ml-2">
            <select className="appearance-none bg-transparent pr-6 pl-2 py-1 text-sm text-gray-500 focus:outline-none focus:ring-0 rounded-md">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <ChevronDown size={14} className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200">
            <Filter size={16} />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200">
            <Grid size={16} />
          </button>
          <button className="p-1.5 text-blue-500 bg-blue-50 rounded-md">
            <List size={16} />
          </button>
        </div>
      </div>
      
      <div>
        {questions.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </div>
    </div>
  );
};

export default LatestQuestions;