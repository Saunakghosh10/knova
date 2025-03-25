import React from 'react';
import { MessageSquare, Rocket, Lightbulb } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-pink-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

const WhyChooseSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Why Choose Knova?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-black">
          <FeatureCard 
            icon={<MessageSquare size={32} />}
            title="Ask & Learn"
            description="Get your coding doubts solved by expert developers"
          />
          
          <FeatureCard 
            icon={<Rocket size={32} />}
            title="Expert Support"
            description="Connect with experienced mentors for guidance"
          />
          
          <FeatureCard 
            icon={<Lightbulb size={32} />}
            title="AI Solutions"
            description="Get instant help with our AI-powered solution engine"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;