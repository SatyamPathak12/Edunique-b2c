// ui-components.tsx
"use client";

import React from 'react';
import { FiUploadCloud, FiChevronDown } from 'react-icons/fi';

// --- StepperTabButton ---
interface StepperTabButtonProps { label: string; isActive: boolean; onClick: () => void; }
export const StepperTabButton: React.FC<StepperTabButtonProps> = ({ label, isActive, onClick }) => (
    <button onClick={onClick} className={`px-4 py-2 text-xs rounded-xl whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-sm sm:font-medium sm:rounded-2xl transition-colors cursor-pointer ${isActive ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-gray-100'}`}>
        {label}
    </button>
);

// --- FormInput ---
interface FormInputProps {
    label: string; id: string; placeholder: string; value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextArea?: boolean; icon?: React.ReactNode;
}
export const FormInput: React.FC<FormInputProps> = ({ label, id, placeholder, value, onChange, isTextArea = false, icon }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm text-black mb-1.5 sm:mb-2">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
            {isTextArea ? (
                <textarea id={id} name={id} value={value} onChange={onChange} placeholder={placeholder} rows={4}
                    className={`w-full px-4 py-3 h-40 bg-[#F9FAFB] border border-[#D5D5D5] rounded-2xl text-sm placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${icon ? 'pl-10' : ''}`}
                />
            ) : (
                <input type="text" id={id} name={id} value={value} onChange={onChange} placeholder={placeholder}
                    className={`w-full px-4 py-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full text-sm placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-blue-500 ${icon ? 'pl-10' : ''}`}
                />
            )}
        </div>
    </div>
);

// --- FileUploadInput ---
interface FileUploadInputProps { label: string; id: string; placeholder?: string; }
export const FileUploadInput: React.FC<FileUploadInputProps> = ({ label, id, placeholder = "Upload Image" }) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm text-black mb-1.5 sm:mb-2">{label}</label>
            <label htmlFor={id} className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full text-sm text-[#6B7280] flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                <div className='p-1 rounded-full bg-[#FF33661A]'><FiUploadCloud className="text-[#FF3366] h-4 w-4 "/></div>
                {placeholder}
            </label>
            <input type="file" id={id} name={id} className="hidden" />
        </div>
    );
};

// --- DropdownSelect ---
interface DropdownSelectProps {
    label: string; id: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}
export const DropdownSelect: React.FC<DropdownSelectProps> = ({ label, id, value, onChange, options }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm text-black mb-1.5 sm:mb-2">{label}</label>
        <div className="relative">
            <select id={id} name={id} value={value} onChange={onChange} className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full text-sm text-[#6B7280] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"/>
        </div>
    </div>
);

// --- RadioButtonGroup ---
interface RadioButtonGroupProps { label: string; name: string; options: string[]; selectedValue: string; onSelect: (value: string) => void; }
export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, name, options, selectedValue, onSelect }) => (
    <div>
        <h3 className="text-sm text-black mb-2 sm:mb-3">{label}</h3>
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
            {options.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer text-nowrap text-sm text-gray-700">
                    <input type="radio" name={name} value={option} checked={selectedValue === option} onChange={() => onSelect(option)}
                        className="w-4 h-4 text-[#3366FF] bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    {option}
                </label>
            ))}
        </div>
    </div>
);

// --- ActionButton ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'outline'; }
export const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyle = "font-semibold py-3 text-sm transition-colors duration-150 cursor-pointer";
    let variantStyle = '';
    switch (variant) {
        case 'secondary': variantStyle = "bg-white w-full  text-black border border-[#D5D5D5] hover:bg-gray-100 rounded-2xl"; break;
        case 'outline': variantStyle = "bg-[#F9FAFB] w-full  text-black border border-[#D5D5D5] hover:bg-gray-50 rounded-2xl"; break;
        case 'primary': default: variantStyle = "bg-[#3366FF] px-8 w-fit text-white hover:bg-blue-700 rounded-full";
    }
    return <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>{children}</button>;
};