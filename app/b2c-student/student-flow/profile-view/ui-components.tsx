"use client";

import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-xs sm:text-sm text-black mb-1.5 sm:mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full text-xs text-gray-700 placeholder-gray-400 
                 sm:py-3 sm:rounded-3xl sm:text-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white" // Restored focus:bg-white
    />
  </div>
);