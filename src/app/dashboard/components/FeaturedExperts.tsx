import React from 'react';
import Image from 'next/image';

type ExpertCardProps = {
  name: string;
  avatar: string;
  specialty: string;
  rating: number;
  successRate: string;
};

const ExpertCard = ({ name, avatar, specialty, rating, successRate }: ExpertCardProps) => {
  return (
    <div className="flex items-center py-2.5 px-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border border-gray-200">
        <Image 
          src={avatar} 
          alt={name} 
          width={32} 
          height={32} 
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-xs text-gray-600">{specialty}</p>
        <div className="flex items-center mt-1">
          <div className="flex items-center mr-2">
            <span className="text-yellow-500 mr-1 text-xs">⭐</span>
            <span className="text-xs font-medium">{rating}</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            <span className="text-xs text-green-600">{successRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedExperts = () => {
  const experts = [
    {
      name: 'Dr. Emily Parker',
      avatar: '/images/avatar-emily.png',
      specialty: 'Full Stack Development',
      rating: 4.9,
      successRate: '98%',
    },
    {
      name: 'Alex Thompson',
      avatar: '/images/avatar-alex.png',
      specialty: 'Cloud Architecture',
      rating: 4.8,
      successRate: '95%',
    },
    {
      name: 'Maria Garcia',
      avatar: '/images/avatar-maria.png',
      specialty: 'Mobile Development',
      rating: 4.7,
      successRate: '92%',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <h2 className="text-base font-medium p-3 border-b border-gray-200">Featured Experts</h2>
      <div className="p-2">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedExperts;