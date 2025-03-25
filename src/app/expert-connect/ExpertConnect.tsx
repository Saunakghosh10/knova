import React from 'react';
import { 
  Sidebar,
  ExpertsList,
  FeaturedExperts,
  LiveAvailability
} from './components/index';

const ExpertConnect = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white py-3 px-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-pink-500">ExpertConnect</h1>
        </div>
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <ExpertsList />
            </div>
            <div className="space-y-4">
              <FeaturedExperts />
              <LiveAvailability />
            </div>
          </div>
        </main>
        <footer className="bg-white py-8 border-t border-gray-200 mt-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-3">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>How it works</li>
                <li>Success stories</li>
                <li>Press & Media</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">For Experts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Join as Expert</li>
                <li>Expert Guidelines</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Connect</h3>
              <div className="flex space-x-3 mt-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
            © 2024 ExpertConnect. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExpertConnect;