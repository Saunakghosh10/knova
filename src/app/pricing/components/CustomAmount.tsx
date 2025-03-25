import React from 'react';

const CustomAmount = () => {
  return (
    <div className="py-8 max-w-md mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden p-6">
        <h3 className="text-xl font-bold text-center mb-6">Choose Your Custom Amount</h3>
        
        <div className="mb-6">
          <p className="text-center mb-2">
            <span className="text-lg font-bold">100 Tokens</span>
            <span className="text-gray-500 text-sm ml-2">$0.90 per token</span>
          </p>
          
          <input
            type="range"
            min="10"
            max="1000"
            defaultValue="100"
            step="10"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10</span>
            <span>500</span>
            <span>1000</span>
          </div>
        </div>
        
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg transition-transform hover:scale-[1.02]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CustomAmount;