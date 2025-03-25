import React from 'react';
import { Users, MessageSquare, Code, Award } from 'lucide-react';

type StatItemProps = {
  icon: React.ReactNode;
  count: string;
  label: string;
  color: string;
};

const StatItem = ({ icon, count, label, color }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`text-${color}-500 mb-2`}>
        {icon}
      </div>
      <div className={`text-${color}-500 text-2xl font-bold`}>{count}</div>
      <div className="text-black text-sm">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem 
            icon={<Users size={28} />}
            count="10K+"
            label="Active Users"
            color="blue"
          />
          <StatItem 
            icon={<MessageSquare size={28} />}
            count="50K+"
            label="Questions Solved"
            color="pink"
          />
          <StatItem 
            icon={<Award size={28} />}
            count="500+"
            label="Expert Mentors"
            color="pink"
          />
          <StatItem 
            icon={<Code size={28} />}
            count="1M+"
            label="Lines of Code"
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;