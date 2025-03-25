"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Can I transfer my tokens?",
      answer: "Yes, you can transfer tokens to other Knova users. Go to your account settings and select the 'Transfer Tokens' option."
    },
    {
      question: "Do tokens expire?",
      answer: "Tokens have different validity periods based on the package you purchase. Basic packages have 30-day validity, while premium packages can have up to 90-day validity."
    },
    {
      question: "How do I use my tokens?",
      answer: "You can use tokens to book expert sessions, get priority debugging help, access premium content, and more. Tokens are automatically deducted when you use these services."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, PayPal, UPI payments, and various cryptocurrencies including Bitcoin and Ethereum."
    }
  ];

  return (
    <div className="py-8">
      <h3 className="text-xl font-bold text-center mb-6">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;