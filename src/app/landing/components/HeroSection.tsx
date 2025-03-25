import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn, Debug, Grow Together
          </h1>
          <p className="text-white text-lg mb-8">
            Your coding journey made easier with community support. Join thousands of developers learning and helping each other.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard" className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Start Learning
            </Link>
            <Link href="/expert-connect" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-full transition duration-300">
              Connect with Experts
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="/images/code-diagram.png" 
            alt="Coding diagrams and mathematical formulas" 
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;