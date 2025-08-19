// ui-components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
// Removed FiChevronLeft, FiChevronRight as they are part of DateNavigator in original
// If other generic icons are needed by other UI components, import them here.

// --- Component 1: FocusPill ---
interface FocusPillProps {
  label: string;
  onClick?: () => void;
}
export const FocusPill: React.FC<FocusPillProps> = ({ label, onClick }) => (
	<button
        onClick={onClick}
        // Preserving your exact desktop classes, adding mobile defaults
        className="px-4 py-2 bg-[#F3F4F6] border-[#B0B0B0] text-black text-xs tracking-wide rounded-full border hover:bg-gray-100 transition-colors
                   sm:px-6 sm:py-2.5 sm:text-sm" // Your desktop styles applied from sm upwards
    >
		{label}
	</button>
);

// --- Component 2: DateNavigator (for June 2025 like elements) ---
interface DateNavigatorProps {
    currentDate: string;
    onPrevious?: () => void;
    onNext?: () => void;
    // Using your exact image paths for arrows
    prevIconSrc?: string;
    nextIconSrc?: string;
}
export const DateNavigator: React.FC<DateNavigatorProps> = ({
    currentDate,
    onPrevious,
    onNext,
    prevIconSrc = '/bg-arrow.png', // Default as per your code
    nextIconSrc = '/fwd-arrow.png'  // Default as per your code
}) => (
    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-black bg-[#F9FAFB] border border-[#E5E7EB] px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl hover:bg-gray-50">
        <button onClick={onPrevious} className="p-0.5 hover:opacity-75 disabled:opacity-50" aria-label="Previous" disabled={!onPrevious}>
            <Image src={prevIconSrc} width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" alt="Previous" />
        </button>
        <span className="font-medium tracking-wide whitespace-nowrap">{currentDate}</span>
        <button onClick={onNext} className="p-0.5 hover:opacity-75 disabled:opacity-50" aria-label="Next" disabled={!onNext}>
            <Image src={nextIconSrc} width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" alt="Next" />
        </button>
    </div>
);

// --- Component 3: FilterTabButton (for Active/Completed) ---
interface FilterTabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}
export const FilterTabButton: React.FC<FilterTabButtonProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        // Preserving your exact desktop classes for active/inactive
        className={`px-4 py-1.5 text-xs rounded-full transition-colors
                   sm:px-5 sm:py-2 sm:text-sm 
        ${
            isActive
                ? 'bg-[#3366FF] text-white tracking-wide'
                : 'text-[#6B7280] hover:bg-gray-200 font-medium tracking-wide'
        }`}
    >
        {label}
    </button>
);

// --- Component 4: DualToggleButton (Weekly/Monthly) ---
interface DualToggleButtonProps {
    leftLabel: string;
    rightLabel: string;
    onLeftClick?: () => void;
    onRightClick?: () => void;
    activeSide?: 'left' | 'right'; // To indicate which side is active
}
export const DualToggleButton: React.FC<DualToggleButtonProps> = ({ leftLabel, rightLabel, onLeftClick, onRightClick, activeSide }) => (
    <div className="flex items-center text-sm"> {/* Base text size for mobile */}
        <button
            onClick={onLeftClick}
            className={`px-3 py-1  text-xs rounded-full rounded-r-none hover:opacity-90
                       sm:px-4 sm:py-1.5 sm:text-base 
                       ${activeSide === 'left' ? 'bg-[#FF3366] text-white' : 'bg-[#F9FAFB] text-black'}`}
        >
            {leftLabel}
        </button>
        <button // Changed from span to button for consistency if clickable
            onClick={onRightClick}
            // Your original desktop class for the right part: px-2 py-1.5 bg-[#F9FAFB] text-base rounded-full rounded-l-none
            className={`px-2 py-1 text-xs rounded-full rounded-l-none
                       sm:px-2 sm:py-1.5 sm:text-base 
                       ${activeSide === 'right' ? 'bg-[#FF3366] text-white' : 'bg-[#F9FAFB] text-black'}`}
        >
            {rightLabel}
        </button>
    </div>
);

// --- Component 5: OutlineButton (Yearly Plan Overview) ---
interface OutlineButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({ label, onClick, className = "" }) => (
    <button
        onClick={onClick}
        // Your original classes: px-2 py-1.5 text-sm text-black border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50 transition-colors
        className={`px-2 py-1 text-xs text-black border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50 transition-colors whitespace-nowrap
                   sm:px-2 sm:py-1.5 sm:text-sm ${className}`}
    >
        {label}
    </button>
);