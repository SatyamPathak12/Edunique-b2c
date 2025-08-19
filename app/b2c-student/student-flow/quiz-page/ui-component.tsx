// ui-components.tsx
"use client";

import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

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
        // Original desktop classes: flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap
        className={`flex items-center gap-1 px-3 py-2 text-xs rounded-xl 
                   sm:gap-1.5 sm:px-5 sm:py-2.5 sm:text-sm sm:font-semibold sm:rounded-3xl 
                   transition-colors whitespace-nowrap 
        ${ isActive
            ? "bg-[#FF3366] text-white"
            : "text-[#6B7280] hover:bg-[#ff33660f]"
        }`}
    >
        {label}
        {hasDropdown && (
            <FiChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />
        )}
    </button>
);

// --- Component 2: OptionButton (for quiz answers) ---
interface OptionButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}
export const OptionButton: React.FC<OptionButtonProps> = ({ text, isSelected, onClick }) => (
    <button
        onClick={onClick}
        // Original desktop classes: w-full text-left flex items-center py-3.5 px-4 rounded-full transition-all duration-150 focus:outline-none
        className={`w-full text-left flex items-center py-3 px-3.5 rounded-full transition-all duration-150 focus:outline-none
                   sm:py-3.5 sm:px-4 
        ${ isSelected
            ? "bg-blue-100 ring-1 ring-blue-500" // Retaining your ring style
            : "bg-white hover:bg-gray-100"
        }`}
        // Note: Your original didn't have a border on unselected, so I've kept it that way.
    >
        {/* Optional: Visual radio button if desired */}
        {/* <div className={`w-4 h-4 rounded-full border-2 mr-3 ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}></div> */}
        <span className={`text-xs font-semibold text-[#6B7280] sm:text-sm`}>{text}</span>
    </button>
);

// --- Component 3: ActionButton (for Submit) ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary'; // Only primary variant used in this page's submit button
    fullWidthOnMobile?: boolean; // To make it w-full on mobile if needed
}
export const ActionButton: React.FC<ActionButtonProps> = ({ children, className, variant = 'primary', fullWidthOnMobile = false, ...props }) => {
    // Original desktop submit button: px-12 py-3 bg-[#3366FF] text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md
    let baseStyle = "font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    // Mobile default sizes, desktop (sm+) sizes match original
    const sizeStyle = "px-10 py-2.5 text-xs sm:px-12 sm:py-3 sm:text-sm";

    if (variant === 'primary') {
        baseStyle += " bg-[#3366FF] text-white hover:bg-blue-700 focus:ring-blue-500";
    }
    if (fullWidthOnMobile) {
        baseStyle += " w-full sm:w-auto"; // Full width on mobile, auto on sm+
    }
    
    return (
        <button className={`${baseStyle} ${sizeStyle} ${className}`} {...props}>
            {children}
        </button>
    );
};

// --- Component 4: SimpleIconButton (for back arrows) ---
interface SimpleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    ariaLabel: string;
}
export const SimpleIconButton: React.FC<SimpleIconButtonProps> = ({ icon, className, ariaLabel, ...props }) => (
    // Original for this page: p-1.5 text-black cursor-pointer focus:outline-none
    <button
        aria-label={ariaLabel}
        className={`p-1 text-black cursor-pointer focus:outline-none hover:bg-gray-100 rounded-md 
                   sm:p-1.5 ${className}`} // sm+ for original padding
        {...props}
    >
        {icon}
    </button>
);