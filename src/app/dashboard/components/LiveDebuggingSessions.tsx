import React from 'react';
import { Users } from 'lucide-react';

type SessionCardProps = {
  title: string;
  host: string;
  watching: number;
};

const SessionCard = ({ title, host, watching }: SessionCardProps) => {
  return (
    <div className="py-2.5 px-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <h3 className="font-medium text-sm mb-1">{title}</h3>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-600">Hosted by {host}</p>
        <div className="flex items-center">
          <Users size={12} className="text-gray-500 mr-1" />
          <span className="text-xs text-gray-500 mr-2">{watching} watching</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

const LiveDebuggingSessions = () => {
  const sessions = [
    {
      title: 'React Performance Optimization',
      host: 'Alex Thompson',
      watching: 8,
    },
    {
      title: 'Django REST API Design',
      host: 'Maria Garcia',
      watching: 5,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <h2 className="text-base font-medium p-3 border-b border-gray-200">Live Debugging Sessions</h2>
      <div className="p-2">
        {sessions.map((session, index) => (
          <SessionCard key={index} {...session} />
        ))}
      </div>
    </div>
  );
};

export default LiveDebuggingSessions;