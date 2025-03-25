import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin } from 'lucide-react';

const FooterColumn = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => {
  return (
    <div>
      <h3 className="font-semibold text-black mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-800 hover:text-blue-500 transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const productLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'FAQ', href: '/faq' },
  ];

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ];

  const resourceLinks = [
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'API', href: '/api' },
    { label: 'Community', href: '/community' },
  ];

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-blue-500 text-lg mb-4">Knova</h3>
            <p className="text-black mb-4">
              Making coding education accessible and collaborative for everyone.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-gray-700 hover:text-blue-500">
                <Twitter size={20} />
              </Link>
              <Link href="https://github.com" className="text-gray-700 hover:text-gray-900">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-700 hover:text-blue-700">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>
        
        <div className="text-center text-gray-800 text-sm pt-8 border-t border-gray-100">
          © {new Date().getFullYear()} Knova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;