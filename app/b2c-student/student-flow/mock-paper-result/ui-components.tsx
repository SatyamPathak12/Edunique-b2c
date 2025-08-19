// ui-components.tsx
"use client";

import React from 'react';
import Image from 'next/image'; // For icons in OptionReviewDisplay
import { FiSmile } from 'react-icons/fi';



// --- Component 2: OptionReviewDisplay (for QuestionReviewBlock) ---
interface OptionReviewUIData { // Renamed from OptionReview to avoid conflict if that's also a data type
	id: string; text: string; isUserSelected: boolean; isCorrect: boolean;
}
export const OptionReviewDisplay: React.FC<{ option: OptionReviewUIData }> = ({ option }) => {
    // Your exact logic and classes from QuestionReviewBlock's option mapping
    const optionStyle = 'bg-white hover:bg-gray-100'; // Base style
    let icon = null;
    let textColor = 'text-[#6B7280]'; // Default text color
    const selectedSpecificBg = ''; // For selected correct/incorrect options if needed beyond base

    if (option.isUserSelected) {
        if (option.isCorrect) {
            icon = <Image src="/student/home/tick2.svg" alt="Correct" width={24} height={24} quality={100} className="object-contain w-5 h-5 sm:w-6 sm:h-6" />; // Responsive icon size
            textColor = 'text-[#8DD9B3]'; // Green text for correct
            // selectedSpecificBg = 'bg-green-50'; // Optional: Light green background for selected correct
        } else {
            icon = <Image src="/student/home/cross.svg" alt="Incorrect" width={24} height={24} quality={100} className="object-contain w-5 h-5 sm:w-6 sm:h-6" />;
            textColor = 'text-red-600'; // Red text for incorrect (was text-red-700)
            // selectedSpecificBg = 'bg-red-50'; // Optional: Light red background for selected incorrect
        }
    } else if (option.isCorrect) {
        icon = <Image src="/student/home/tick2.svg" alt="Actual Correct" width={24} height={24} quality={100} className="object-contain w-5 h-5 sm:w-6 sm:h-6" />;
        textColor = 'text-[#8DD9B3]'; // Green text for actual correct if not selected by user
        // selectedSpecificBg = 'bg-green-50 border border-green-200'; // Optional: to highlight correct answer not chosen
    }

    return (
        // Original: w-full flex items-center p-3.5 rounded-full transition-all duration-150 ${optionStyle}
        <div className={`w-full flex items-center p-3 rounded-full transition-all duration-150 
                       sm:p-3.5 
                       ${selectedSpecificBg || optionStyle}`}> {/* Apply specific BG if set, else default */}
            {icon && <span className="mr-1.5 sm:mr-2">{icon}</span>}
            <span className={`text-xs sm:text-sm font-semibold ${textColor}`}>{option.text}</span>
        </div>
    );
};

// --- Component 3: SimpleIconButton ---
interface SimpleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode; ariaLabel: string;
}
export const SimpleIconButton: React.FC<SimpleIconButtonProps> = ({ icon, className, ariaLabel, ...props }) => (
    <button aria-label={ariaLabel} className={`p-1 text-black cursor-pointer focus:outline-none hover:bg-gray-100 rounded-md sm:p-1.5 ${className}`} {...props}>
        {icon}
    </button>
);

// --- Component 4: ScoreChart (Visual only, as per your original) ---
// No props needed for this hardcoded version
export const ScoreChartDisplay: React.FC = () => {
	const radius = 40; const stroke = 8; const normalizedRadius = radius - stroke / 2;
	const circumference = Math.PI * normalizedRadius * 2; // Full circumference for a full circle, then use path for semi
    const progress = 0.9; // Representing 90% for the progress part of the semi-circle
    // For a semi-circle, the "full" dasharray would be half the circumference
    const semiCircumference = circumference / 2;
	const offset = semiCircumference * (1 - progress);

	return (
        // Original: relative w-60 h-60 mx-auto
		<div className="relative w-48 h-48 mx-auto sm:w-60 sm:h-60"> {/* Made responsive */}
			<svg className="w-full h-full" viewBox="0 0 100 100">
				<path
					d="M 10 50 A 40 40 0 0 1 90 50" // Semi-circle path
					className="text-[#E9EDF0]" strokeWidth="8" stroke="currentColor"
					fill="transparent" strokeLinecap="round"
				/>
				<path
					d="M 10 50 A 40 40 0 0 1 90 50" // Semi-circle path
					className="text-[#3366FF]" strokeWidth="8"
					strokeDasharray={semiCircumference} // Use semi-circumference
					strokeDashoffset={offset}
					strokeLinecap="round" stroke="currentColor" fill="transparent"
					style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="bg-[#E9EDF0] p-1.5 rounded-full sm:p-2"> {/* Responsive padding */}
					<FiSmile className="w-16 h-16 text-[#3366FF] sm:w-20 sm:h-20" />
				</div>
			</div>
		</div>
	);
};