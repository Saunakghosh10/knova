import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  MessageSquare, 
  Users, 
  Terminal, 
  Coins, 
  User,
  FileCode,
  Code
} from 'lucide-react';

const SidebarItem = ({ icon, text, active = false, href = "#" }: { 
  icon: React.ReactNode, 
  text: string, 
  active?: boolean,
  href?: string
}) => {
  return (
    <Link 
      href={href} 
      className={`flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-gray-800 text-white font-medium' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span>{text}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="w-16 md:w-56 bg-black flex-shrink-0 border-r border-gray-800 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <Link href="/" className="text-xl font-bold text-pink-500 flex items-center">
          <span className="text-pink-500">&lt;/&gt;</span>
          <span className="ml-2 hidden md:inline">Knova</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <nav className="space-y-1">
          <SidebarItem icon={<Home size={18} />} text="Home" href="/dashboard" />
          <SidebarItem icon={<MessageSquare size={18} />} text="Post a Doubt" href="/dashboard" />
          <SidebarItem icon={<Users size={18} />} text="Experts" href="/expert-connect" />
          <SidebarItem icon={<Terminal size={18} />} text="Debugging" active={true} href="/debug-session" />
          <SidebarItem icon={<Coins size={18} />} text="Buy Tokens" href="/pricing" />
          <SidebarItem icon={<User size={18} />} text="Profile" href="/dashboard" />
        </nav>
        
        <div className="pt-4 pb-2 px-4 hidden md:block text-xs font-medium text-gray-500">
          ACTIVE FILES
        </div>
        
        <div className="space-y-1 hidden md:block">
          <SidebarItem icon={<FileCode size={16} />} text="main.js" active={true} href="#" />
          <SidebarItem icon={<Code size={16} />} text="index.html" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 