
import React from 'react';
import { cn } from "@/lib/utils";
import SearchBar from './SearchBar';

interface UserHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const UserHeader = ({ title, subtitle, className }: UserHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-4">
        <SearchBar className="w-64" />
        
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
        </button>
        
        <div className="flex items-center">
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/40?img=11" 
              alt="User" 
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="ml-2">
            <span className="block text-sm font-medium">Robert Allen</span>
            <span className="block text-xs text-gray-500">Teacher</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4 ml-2 text-gray-500"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
