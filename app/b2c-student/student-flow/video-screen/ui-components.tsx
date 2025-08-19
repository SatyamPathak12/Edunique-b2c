// ui-components.tsx
"use client";

import React from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Only icons directly used by these UI primitives

// --- Component 1: MainCategoryTab ---
interface MainCategoryTabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    hasDropdown?: boolean;
}
export const MainCategoryTab: React.FC<MainCategoryTabProps> = ({ label, isActive, onClick, hasDropdown }) => (
	<button
		onClick={onClick}
		className={`flex items-center gap-1 sm:gap-1.5 px-3 py-2 text-xs rounded-xl 
                   sm:px-5 sm:py-2.5 sm:text-sm sm:rounded-2xl 
                   font-medium transition-colors whitespace-nowrap 
        ${ isActive
            ? 'bg-[#FF3366] text-white shadow-md'
            : 'text-[#6B7280] hover:bg-[#ff33660f]'
        }`}
    >
		{label}
		{hasDropdown && (
			<FiChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />
		)}
	</button>
);

// --- Component 2: InfoTabButton (for Overview, Quiz, Result) ---
interface InfoTabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}
export const InfoTabButton: React.FC<InfoTabButtonProps> = ({ label, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`px-4 py-1 text-xs rounded-lg
                   sm:px-5 sm:py-1.5 sm:text-sm sm:rounded-xl 
                   tracking-wide font-medium transition-colors 
        ${ isActive
            ? 'bg-[#3366FF] text-white' // Original: px-6 rounded-xl for active
            : 'text-[#6B7280] hover:bg-gray-100'
        }`}
    >
		{label}
	</button>
);

// --- Component 3: SimpleIconButton (for left arrows etc.) ---
interface SimpleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    ariaLabel: string;
}
export const SimpleIconButton: React.FC<SimpleIconButtonProps> = ({ icon, className, ariaLabel, ...props }) => (
    <button
        aria-label={ariaLabel}
        className={`p-1 sm:p-1.5 text-black cursor-pointer focus:outline-none hover:bg-gray-100 rounded-md ${className}`}
        {...props}
    >
        {icon}
    </button>
);