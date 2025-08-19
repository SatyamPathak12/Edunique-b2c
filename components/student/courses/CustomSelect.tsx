"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options?: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function CustomSelect({
  options = [
    { value: "academic", label: "Academic" },
    { value: "professional", label: "Professional" },
    { value: "personal", label: "Personal" },
    { value: "technical", label: "Technical" },
    { value: "creative", label: "Creative" },
  ],
  defaultValue = "academic",
  placeholder = "Select option",
  onValueChange,
  className = "",
}: CustomSelectProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onValueChange?.(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`
            inline-flex items-center justify-between
            bg-[#FF3366] hover:bg-[#FF3366]/90
            text-white font-medium
            px-4 py-2.5
            rounded-full
            min-w-[120px]
            transition-colors duration-200
            focus:outline-none
            ${className}
          `}
        >
          <span>{selectedOption?.label || placeholder}</span>
          {selectedValue === "Academic" && (
            <ChevronDown className="w-4 h-4 ml-10 text-white" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[120px] bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleValueChange(option.value)}
            className={`
              px-4 py-2 text-sm cursor-pointer
              hover:bg-[#FF3366]/10 hover:text-[#FF3366]
              transition-colors duration-150
              ${
                selectedValue === option.value
                  ? "bg-[#FF3366]/20 text-[#FF3366] font-medium"
                  : "text-gray-700"
              }
            `}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
