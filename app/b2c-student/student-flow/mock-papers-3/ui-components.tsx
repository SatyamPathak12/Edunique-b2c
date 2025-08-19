// ui-components.tsx
"use client";

import React from 'react';
import { FiClock } from 'react-icons/fi';



// --- Component 2: OptionButton ---
interface OptionButtonProps { text: string; isSelected: boolean; onClick: () => void; }
export const OptionButton: React.FC<OptionButtonProps> = ({ text, isSelected, onClick }) => (
    <button onClick={onClick} className={`w-full text-left flex items-center py-3 px-3.5 rounded-full transition-all duration-150 focus:outline-none sm:py-3.5 sm:px-4 ${ isSelected ? "bg-blue-100 ring-1 ring-blue-500" : "bg-white hover:bg-gray-100" }`}>
        <span className={`text-xs font-medium text-[#6B7280] sm:text-sm sm:font-semibold`}>{text}</span> {/* Font medium for options as per original */}
    </button>
);

// --- Component 3: ActionButton ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary'; fullWidthOnMobile?: boolean; }
export const ActionButton: React.FC<ActionButtonProps> = ({ children, className, variant = 'primary', fullWidthOnMobile = false, ...props }) => {
    let baseStyle = "font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";
    const sizeStyle = "px-10 py-2.5 text-xs sm:px-12 sm:py-3 sm:text-sm";
    if (variant === 'primary') baseStyle += " bg-[#3366FF] text-white hover:bg-blue-700 focus:ring-blue-500";
    if (fullWidthOnMobile) baseStyle += " w-full sm:w-auto";
    return <button className={`${baseStyle} ${sizeStyle} ${className}`} {...props}>{children}</button>;
};

// --- Component 4: SimpleIconButton ---
interface SimpleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: React.ReactNode; ariaLabel: string; }
export const SimpleIconButton: React.FC<SimpleIconButtonProps> = ({ icon, className, ariaLabel, ...props }) => (
    <button aria-label={ariaLabel} className={`p-1 text-black cursor-pointer focus:outline-none hover:bg-gray-100 rounded-md sm:p-1.5 ${className}`} {...props}>
        {icon}
    </button>
);

// --- Component 5: TimerDisplay (New) ---
interface TimerDisplayProps {
    formattedTime: string;
}
export const TimerDisplay: React.FC<TimerDisplayProps> = ({ formattedTime }) => (
    // Original wrapper: absolute top-6 right-6 md:top-8 md:right-8 text-right
    // Positioning will be handled by the parent page for better context control.
    // This component just renders the timer's visual.
    <div className="text-right">
        <div className="flex items-center justify-end gap-1 sm:gap-1.5 text-[#FF3366]"> {/* justify-end for mobile stacking */}
            <FiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={3} />
            <span className="text-lg font-bold sm:text-xl">{formattedTime}</span>
        </div>
        <p className="text-[10px] font-bold text-[#FF99B7] sm:text-xs">Min Left</p>
    </div>
);