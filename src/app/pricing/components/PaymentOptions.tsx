import React from 'react';
import Image from 'next/image';

type PaymentMethodProps = {
  name: string;
  icon: string;
};

const PaymentMethod = ({ name, icon }: PaymentMethodProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="w-10 h-10 mb-2">
        <Image 
          src={icon} 
          alt={name} 
          width={40} 
          height={40} 
        />
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
};

const PaymentOptions = () => {
  const paymentMethods = [
    { name: "Credit/Debit Card", icon: "/images/payment/card.svg" },
    { name: "UPI Payment", icon: "/images/payment/upi.svg" },
    { name: "PayPal", icon: "/images/payment/paypal.svg" },
    { name: "Cryptocurrency", icon: "/images/payment/crypto.svg" },
  ];

  return (
    <div className="py-8">
      <h3 className="text-xl font-bold text-center mb-6">Secure Payment Options</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paymentMethods.map((method, index) => (
          <PaymentMethod key={index} {...method} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
        <span className="text-xs text-gray-500">Secure Transaction</span>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2">100% Money-Back Guarantee</p>
    </div>
  );
};

export default PaymentOptions;