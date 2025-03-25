import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ExpertCardProps = {
  name: string;
  role: string;
  avatar: string;
  price: number;
  skills: string[];
  rating: number;
  reviews: number;
};

const ExpertCard = ({ name, role, avatar, price, skills, rating, reviews }: ExpertCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-200 flex-shrink-0">
            <Image 
              src={avatar} 
              alt={name} 
              width={48} 
              height={48} 
            />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
          <div className="ml-auto">
            <p className="text-pink-500 font-bold">${price}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 my-3">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">({reviews} reviews)</span>
        </div>
      </div>
      
      <Link href="/debug-session" className="block w-full">
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 transition duration-200">
          Book a Session
        </button>
      </Link>
    </div>
  );
};

const CategoryFilter = ({ name, isActive = false }: { name: string, isActive?: boolean }) => {
  return (
    <button 
      className={`px-4 py-1.5 rounded-full text-sm ${
        isActive 
          ? 'bg-blue-500 text-white' 
          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
      }`}
    >
      {name}
    </button>
  );
};

const ExpertsList = () => {
  const experts = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      avatar: '/images/avatar-sarah.png',
      price: 150,
      skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX'],
      rating: 4.5,
      reviews: 127,
    },
    {
      name: 'Michael Chen',
      role: 'AI/ML Expert',
      avatar: '/images/avatar-michael.png',
      price: 180,
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision'],
      rating: 4.7,
      reviews: 93,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Blockchain Developer',
      avatar: '/images/avatar-emily.png',
      price: 160,
      skills: ['Solidity', 'Web3', 'Smart Contracts'],
      rating: 4.8,
      reviews: 84,
    },
    {
      name: 'David Kim',
      role: 'Backend Architect',
      avatar: '/images/avatar-david.png',
      price: 170,
      skills: ['Node.js', 'Python', 'Microservices'],
      rating: 4.6,
      reviews: 156,
    },
    {
      name: 'Lisa Wang',
      role: 'DevOps Engineer',
      avatar: '/images/avatar-lisa.png',
      price: 165,
      skills: ['AWS', 'Docker', 'Kubernetes'],
      rating: 4.5,
      reviews: 112,
    },
    {
      name: 'James Wilson',
      role: 'Mobile Developer',
      avatar: '/images/avatar-james.png',
      price: 145,
      skills: ['React Native', 'iOS', 'Android'],
      rating: 4.4,
      reviews: 78,
    },
  ];

  return (
    <div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search experts by name, skills, or expertise..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute left-3 top-2.5 text-gray-400">
          <Search size={18} />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mb-4 overflow-x-auto pb-2">
        <CategoryFilter name="All" isActive={true} />
        <CategoryFilter name="Frontend" />
        <CategoryFilter name="Backend" />
        <CategoryFilter name="AI/ML" />
        <CategoryFilter name="Blockchain" />
        <CategoryFilter name="DevOps" />
        <CategoryFilter name="Mobile" />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          Showing {experts.length} experts
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Highest Rated</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Most Reviews</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertsList;