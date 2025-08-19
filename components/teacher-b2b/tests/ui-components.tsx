// ui-components.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

// --- Component 1: CustomTabButton (for Scheduled, Completed, Saved) ---
interface CustomTabButtonProps {
    label: string; isActive: boolean; onClick: () => void;
}
export const CustomTabButton: React.FC<CustomTabButtonProps> = ({ label, isActive, onClick }) => (
    <button
        key={label}
        onClick={onClick}
        className={`px-2 py-1 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap 
        ${isActive ? 'text-[#FF3366] border-b-2 border-[#FF3366]' : 'text-[#6B7280] hover:text-gray-900'}`}
    >
        {label}
    </button>
);


// --- Component 2: StyledSelect (wrapper for Shadcn Select) ---
interface StyledSelectProps {
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
    // Add onChange handler if needed
}
export const StyledSelect: React.FC<StyledSelectProps> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);


// --- Component 3: ActionButton (Primary button like Create BW Test) ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export const ActionButton: React.FC<ActionButtonProps> = ({ children, className, ...props }) => (
    <Button
        className={`bg-[#3366FF] hover:bg-blue-600 text-white rounded-full text-sm sm:text-base p-5 sm:p-6 w-full md:w-auto ${className}`}
        {...props}
    >
        {children}
    </Button>
);


// --- Component 4: DateNavigator (for the analytics card) ---
interface DateNavigatorProps {
    date: string; // e.g., "June 2025"
    onPrev?: () => void;
    onNext?: () => void;
}
export const DateNavigator: React.FC<DateNavigatorProps> = ({ date, onPrev, onNext }) => (
    <div className="flex items-center gap-2 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] w-fit px-2.5 py-1.5 rounded-xl
                   sm:gap-2.5 sm:text-base sm:px-3 sm:py-2">
        <button onClick={onPrev} disabled={!onPrev}><FiArrowLeftCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-black" /></button>
        <span className='whitespace-nowrap'>{date}</span>
        <button onClick={onNext} disabled={!onNext}><FiArrowRightCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-black" /></button>
    </div>
);