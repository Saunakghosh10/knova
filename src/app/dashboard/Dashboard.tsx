import React from 'react';
import { 
  Sidebar, 
  Header, 
  LatestQuestions, 
  FeaturedExperts,
  LiveDebuggingSessions,
  RecentActivity
} from './components';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-3">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="lg:col-span-3">
              <LatestQuestions />
            </div>
            <div className="space-y-3">
              <FeaturedExperts />
              <LiveDebuggingSessions />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;