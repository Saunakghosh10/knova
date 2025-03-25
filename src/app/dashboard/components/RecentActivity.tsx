import React from 'react';

type ActivityItemProps = {
  user: string;
  action: string;
  subject: string;
  timeAgo: string;
};

const ActivityItem = ({ user, action, subject, timeAgo }: ActivityItemProps) => {
  return (
    <div className="py-2.5 px-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex items-start">
        <div className="mt-1.5 mr-2">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
        </div>
        <div>
          <p className="text-sm">
            <span className="font-medium">{user}</span> {action} <span className="text-blue-600">{subject}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">{timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  const activities = [
    {
      user: 'Emily Parker',
      action: 'solved a doubt about',
      subject: 'React Query',
      timeAgo: '10m ago',
    },
    {
      user: 'Mark Wilson',
      action: 'received 50 tokens for helping with',
      subject: 'Next.js auth',
      timeAgo: '24m ago',
    },
    {
      user: 'Alex Thompson',
      action: 'started a debugging session on',
      subject: 'Vue.js',
      timeAgo: '1h ago',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <h2 className="text-base font-medium p-3 border-b border-gray-200">Recent Activity</h2>
      <div className="p-2">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;