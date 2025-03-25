import React from 'react';

type PricingCardProps = {
  tokens: number;
  price: number;
  features: string[];
  color: string;
  isPopular?: boolean;
};

const PricingCard = ({ tokens, price, features, color, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${isPopular ? 'transform scale-105 shadow-md' : ''}`}>
      <div className={`p-6 ${color} text-white text-center`}>
        <h3 className="text-xl font-bold mb-1">{tokens} Tokens</h3>
        <p className="text-2xl font-bold">$ {price.toFixed(2)}</p>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full mt-6 py-2 rounded-full font-medium transition-colors duration-200 ${color} text-white hover:opacity-90`}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

const PricingCards = () => {
  const pricingOptions = [
    {
      tokens: 50,
      price: 49.99,
      features: [
        "24/7 Expert Access",
        "Basic Support",
        "30-day validity"
      ],
      color: "bg-pink-500",
      isPopular: false
    },
    {
      tokens: 100,
      price: 89.99,
      features: [
        "24/7 Expert Access",
        "Priority Support",
        "Frequent Updates",
        "60-day validity"
      ],
      color: "bg-blue-500",
      isPopular: true
    },
    {
      tokens: 500,
      price: 399.99,
      features: [
        "24/7 Expert Access",
        "VIP Support",
        "Unlimited Updates",
        "90-day validity",
        "Exclusive Content"
      ],
      color: "bg-cyan-400",
      isPopular: false
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;