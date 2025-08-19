// ui-components.tsx
"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

import {
    FiChevronDown, FiPlayCircle, FiChevronRight,
    FiArrowLeftCircle, FiArrowRightCircle
} from 'react-icons/fi';

export const ActionButton: React.FC<{
  variant: "primary" | "secondary";
  size: "sm" | "md";
  children: React.ReactNode;
  className?: string;
  onClick?:()=>void;
}> = ({ variant, size, children, className, onClick }) => (
  <button
  onClick={onClick}
    className={`font-semibold rounded-full transition-colors ${variant === "primary"
      ? "bg-[#3366FF] text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } ${size === "sm"
        ? "px-4 py-2 text-xs sm:text-sm"
        : "px-6 py-3 text-sm sm:text-base"
      } ${className}`}
  >
    {children}
  </button>
);



// --- Component 2: SubCategoryItem ---
interface SubCategoryItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}
export const SubCategoryItem: React.FC<SubCategoryItemProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full  px-3 py-2 text-xs text-center rounded-lg sm:px-5 sm:py-3 sm:text-sm sm:rounded-xl transition-colors
        ${ isActive
            ? 'bg-[#3366FF] text-white shadow'
            : 'text-[#6B7280] hover:bg-[#F9FAFB]'
        }`}
    >
        {label}
    </button>
);

// --- Component 3: ContentTab (for Learning, Assessments etc.) ---
interface ContentUITabProps { // Renamed to avoid conflict if ContentTab is also a major component
    label: string;
    isActive: boolean;
    onClick: () => void;
}
export const ContentUITab: React.FC<ContentUITabProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1.5 text-xs whitespace-nowrap focus:outline-none border-b-2 transition-colors
                   sm:px-4 sm:py-2 sm:text-sm 
        ${ isActive
            ? 'border-blue-600 text-blue-600 font-medium' // Retained font-medium
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
    >
        {label}
    </button>
);

// --- Component 4: VideoItem (for Learning Accordion) ---
interface VideoItemProps {
    topic: string;
    onClick?: () => void;
}
export const VideoItem: React.FC<VideoItemProps> = ({ topic, onClick }) => {
    const Router = useRouter();
    return(  
    <button
        onClick={()=>Router.push("/b2c-student/student-flow/video-screen")}
        className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left border border-[#E5E7EB] bg-[#F3F4F6] hover:bg-[#E5E7EB]/70 rounded-2xl sm:rounded-3xl transition-colors"
    >
        <div className="flex items-center gap-2 sm:gap-3">
            <FiPlayCircle className="w-7 h-7 sm:w-8 sm:h-8 text-black" strokeWidth={1} />
            <span className="text-sm sm:text-md text-black font-semibold">{topic}</span>
        </div>
        <FiChevronRight className="w-4 h-4 text-black" />
    </button>
);}

// --- Component 6: FilterDropdown (from previous) ---
interface FilterDropdownProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    className?: string;
}
export const FilterDropdown: React.FC<FilterDropdownProps> = ({ value, onChange, options, className = "" }) => (
    <div className={`relative ${className}`}>
        <select
            value={value}
            onChange={onChange}
            className="appearance-none border border-[#E5E7EB] text-xs text-black bg-[#F9FAFB]  px-2 sm:px-3 py-1.5 rounded-lg sm:pr-7 focus:outline-none focus:ring-1 focus:ring-[#3366FF]
                       sm:text-sm  sm:py-2 sm:rounded-xl "
        >
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <FiChevronDown className="absolute sm:right-2 right-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-black pointer-events-none" />
    </div>
);