import React from 'react';
import Image from 'next/image';

type FeaturedExpertProps = {
  name: string;
  role: string;
  avatar: string;
  isOnline?: boolean;
};

const FeaturedExpert = ({ name, role, avatar, isOnline = false }: FeaturedExpertProps) => {
  return (
    <div className="flex items-center py-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
          <Image 
            src={avatar} 
            alt={name} 
            width={40} 
            height={40} 
          />
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-3 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>
      <div>
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-xs text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const FeaturedExperts = () => {
  const experts = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      avatar: '/images/avatar-sarah.png',
      isOnline: true,
    },
    {
      name: 'Michael Chen',
      role: 'AI/ML Expert',
      avatar: '/images/avatar-michael.png',
      isOnline: true,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Blockchain Developer',
      avatar: '/images/avatar-emily.png',
      isOnline: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <h2 className="text-base font-medium p-3 border-b border-gray-200">Featured Experts</h2>
      <div className="p-3">
        {experts.map((expert, index) => (
          <FeaturedExpert key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedExperts;