import React from 'react';
import { 
  Header, 
  Sidebar,
  PricingHero,
  PricingCards,
  CustomAmount,
  PaymentOptions,
  FAQ
} from './components/index';

const Pricing = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-5xl mx-auto">
            <PricingHero />
            <PricingCards />
            <CustomAmount />
            <PaymentOptions />
            <FAQ />
          </div>
        </main>
        <footer className="bg-white py-4 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            © 2024 Knova. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pricing;