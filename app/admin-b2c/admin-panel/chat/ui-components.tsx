// ui-components.tsx
"use client";

import React from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';

// --- Component 1: ChatInput ---
interface ChatInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: (e: React.FormEvent) => void;
    placeholder?: string;
    isSending?: boolean; // To disable send button during submission
    // No onAttach in your original component, so removed for now
}
export const ChatInput: React.FC<ChatInputProps> = ({
    value, onChange, onSend, placeholder = "Message"
}) => (
    // Original desktop: flex items-center justify-center bg-[#F9FAFB] border-[#D5D5D5] border rounded-full
    <form onSubmit={onSend} className="flex items-center bg-[#F9FAFB] border-[#D5D5D5] border rounded-full p-0.5 sm:p-0"> {/* Slightly adjust padding for mobile */}
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            // Original desktop: flex-grow bg-transparent px-3 py-2 text-sm text-[#6B7280] focus:outline-none placeholder-gray-400
            className="flex-grow bg-transparent px-2.5 py-1.5 text-xs text-[#6B7280] focus:outline-none placeholder-gray-400
                       sm:px-3 sm:py-2 sm:text-sm"
        />
        <button type="button" className="p-1.5 text-[#6B7280] cursor-pointer hover:text-blue-600 focus:outline-none sm:p-2">
            <FiPaperclip className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
            type="submit"
            className="p-2 text-[#FF3366] rounded-full cursor-pointer focus:outline-none disabled:opacity-50
                       sm:p-2.5 sm:mr-2"
            aria-label="Send message"
        >
            <FiSend className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-45" />
        </button>
    </form>
);

// If SimpleIconButton or MainCategoryTab were used, they would be here,
// but this page doesn't use them in its primary content area.