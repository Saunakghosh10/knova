import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  MessageSquare, 
  Users, 
  Terminal, 
  Coins, 
  User,
  ChevronDown,
  FileCode,
  Code,
  Coffee,
  Box
} from 'lucide-react';

const SidebarItem = ({ icon, text, active = false, count = null, href = "#" }: { 
  icon: React.ReactNode, 
  text: string, 
  active?: boolean,
  count?: number | null,
  href?: string
}) => {
  return (
    <Link 
      href={href} 
      className={`flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-blue-50 text-blue-600 font-medium' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span>{text}</span>
      {count !== null && (
        <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
};

const CategoryItem = ({ text, count, icon }: { text: string, count: number, icon: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 rounded-lg transition-all duration-200">
      <div className="flex items-center">
        <span className="mr-3 text-gray-500">{icon}</span>
        <span className="text-gray-700">{text}</span>
      </div>
      <span className="text-gray-500 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">{count}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-56 border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="text-xl font-bold text-blue-600 flex items-center">
          Knova
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <nav className="space-y-1">
          <SidebarItem icon={<Home size={18} />} text="Home" active={true} href="/dashboard" />
          <SidebarItem icon={<MessageSquare size={18} />} text="Post a Doubt" href="/dashboard" />
          <SidebarItem icon={<Users size={18} />} text="Experts" href="/expert-connect" />
          <SidebarItem icon={<Terminal size={18} />} text="Debugging Room" href="/debug-session" />
          <SidebarItem icon={<Coins size={18} />} text="Buy Tokens" href="/pricing" />
          <SidebarItem icon={<User size={18} />} text="Profile" href="/dashboard" />
        </nav>
        
        <div className="pt-4 pb-2 px-4 flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Categories</span>
          <ChevronDown size={14} className="text-gray-500" />
        </div>
        
        <div className="space-y-1">
          <CategoryItem icon={<FileCode size={16} />} text="JavaScript" count={128} />
          <CategoryItem icon={<Code size={16} />} text="Python" count={85} />
          <CategoryItem icon={<Coffee size={16} />} text="Java" count={64} />
          <CategoryItem icon={<Box size={16} />} text="React" count={42} />
          <CategoryItem icon={<Box size={16} />} text="Vue.js" count={36} />
          <CategoryItem icon={<Box size={16} />} text="Angular" count={29} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;