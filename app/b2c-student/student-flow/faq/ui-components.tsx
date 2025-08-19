// ui-components.tsx
"use client";

import React from 'react';

// --- Component 1: PageTitleBar (for the "FAQs" header with back arrow) ---
interface PageTitleBarProps {
    title: string;
    onBackClick?: () => void;
}
export const PageTitleBar: React.FC<PageTitleBarProps> = ({ title, onBackClick }) => (
    // Original: bg-white w-full
    <div className="bg-white w-full border-b border-gray-200"> {/* Added border for separation */}
        {/* Original: container py-4 sm:px-6 lg:px-8 w-full-bg-white px-4 text-[#FF3366] flex justify-start items-center text-xl gap-2 mx-auto */}
        <div className="container mx-auto flex items-center gap-1.5 px-3 py-3 text-[#FF3366] 
                       sm:gap-2 sm:px-4 sm:py-4 md:px-6 lg:px-8">
            {onBackClick && (
                <button onClick={onBackClick} className="p-1 hover:bg-gray-100 rounded-md" aria-label="Go back">
                    {/* Your original SVG for back arrow */}
                    <svg width="20" height="21" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="w-5 h-5 text-black sm:w-6 sm:h-6"> {/* Text black for the arrow */}
                        <path d="M23.75 15.5H6.25" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /> {/* strokeWidth was 4 */}
                        <path d="M15 6.75L6.25 15.5L15 24.25" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
            <h1 className="font-semibold text-lg sm:text-xl">{title}</h1>
        </div>
    </div>
);