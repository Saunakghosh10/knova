import React from 'react';

type AvailabilityItemProps = {
  status: 'online' | 'busy' | 'offline';
  count: number;
};

const AvailabilityItem = ({ status, count }: AvailabilityItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'online': return 'Available Now';
      case 'busy': return 'Busy';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  };

  return (
    <div className="flex items-center py-1.5">
      <span className={`inline-block w-2.5 h-2.5 ${getStatusColor()} rounded-full mr-2`}></span>
      <span className="text-sm">{getStatusText()}</span>
      <span className="ml-auto text-sm text-gray-500">({count})</span>
    </div>
  );
};

const LiveAvailability = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <h2 className="text-base font-medium p-3 border-b border-gray-200">Live Availability</h2>
      <div className="p-3">
        <div className="mb-2">
          <p className="text-sm mb-1">Online Experts</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        
        <div className="space-y-1 mt-3">
          <AvailabilityItem status="online" count={8} />
          <AvailabilityItem status="busy" count={4} />
          <AvailabilityItem status="offline" count={16} />
        </div>
      </div>
    </div>
  );
};

export default LiveAvailability;