// ui-components.tsx
"use client";

import React from 'react';
import {
    FiChevronDown, FiPlayCircle, FiChevronRight,
    FiArrowRightCircle, FiArrowLeftCircle
} from 'react-icons/fi';

// --- Component 1: ContentTab ---
interface ContentTabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}
export const ContentTab: React.FC<ContentTabProps> = ({ label, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`px-3 py-2 text-xs whitespace-nowrap focus:outline-none border-b-2 transition-colors 
                   sm:px-4 sm:text-sm 
        ${ isActive
            ? 'border-[#3366FF] text-[#3366FF] font-medium sm:font-medium' // Retained font-medium from original context
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // hover:border-[#E5E7EB]-300 was invalid, changed to gray-300
        }`}
    >
		{label}
	</button>
);

// --- Component 2: VideoItem ---
interface VideoItemProps {
    topic: string;
    onClick?: () => void; // Added onClick for potential future use
}
export const VideoItem: React.FC<VideoItemProps> = ({ topic, onClick }) => (
	<button
        onClick={onClick}
        className="w-full flex items-center justify-between p-2.5 text-left border border-[#E5E7EB] bg-[#F3F4F6] hover:bg-[#E5E7EB]/70 rounded-2xl sm:rounded-3xl transition-colors" // rounded-2xl for mobile
    >
		<div className="flex items-center gap-2 sm:gap-3">
			<FiPlayCircle className="w-7 h-7 sm:w-8 sm:h-8 text-black" strokeWidth={1} />
			<span className="text-sm sm:text-md text-black font-medium sm:font-normal">{topic}</span> 
            {/* Original had no font-medium, but text looks bolder */}
		</div>
		<FiChevronRight className="w-4 h-4 text-black" />
	</button>
);

// --- Component 3: DateNavigatorWithArrows ---
interface DateNavigatorProps {
    currentDate: string;
    onPrevious?: () => void;
    onNext?: () => void;
}
export const DateNavigatorWithArrows: React.FC<DateNavigatorProps> = ({ currentDate, onPrevious, onNext }) => (
    <div className="flex items-center gap-2 text-xs border border-[#E5E7EB] text-black bg-[#F9FAFB] px-2.5 py-1.5 rounded-lg sm:text-sm sm:gap-2.5 sm:px-3 sm:py-2 sm:rounded-xl">
        <button onClick={onPrevious} aria-label="Previous month">
            <FiArrowLeftCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
        </button>
        <span className="text-nowrap">{currentDate}</span>
        <button onClick={onNext} aria-label="Next month">
            <FiArrowRightCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
        </button>
    </div>
);

// --- Component 4: FilterDropdown ---
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
            className="appearance-none border border-[#E5E7EB] text-xs text-black bg-[#F9FAFB] px-3 rounded-lg pr-7 focus:outline-none focus:ring-1 focus:ring-[#3366FF]
                       sm:text-sm sm:px-4 py-2 sm:rounded-xl sm:pr-8"
        >
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <FiChevronDown className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-black pointer-events-none" />
    </div>
);

// --- Component 5: ActionButton (for Join, Download) ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'; // Primary: blue, Secondary: gray, Ghost: text-only
    size?: 'sm' | 'md';
}
export const ActionButton: React.FC<ActionButtonProps> = ({ children, className, variant = 'primary', size = 'md', ...props }) => {
    let baseStyle = "font-semibold rounded-full transition-colors focus:outline-none";
    let sizeStyle = size === 'sm' ? "px-5 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-sm" : "px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base"; // Example sizes

    if (variant === 'primary') {
        baseStyle += " bg-[#3366FF] text-white hover:bg-blue-700";
    } else if (variant === 'secondary') {
        baseStyle += " bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]";
    } else if (variant === 'ghost') {
        baseStyle += " text-blue-600 hover:text-blue-700"; // Example for Join button
        sizeStyle = size === 'sm' ? "text-md sm:text-lg" : "text-lg sm:text-xl"; // Adjust ghost size
    }
    
    return (
        <button className={`${baseStyle} ${sizeStyle} ${className}`} {...props}>
            {children}
        </button>
    );
};