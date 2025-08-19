// /app/select-type/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

// --- Color Palette ---
const COLORS = {
    primaryBlue: '#3366FF',
    textBlack: '#000000',
    textGray: '#777777',
};

// --- Data for the selection options ---
const selectionOptions = [
    {
        id: 'explore_courses',
        title: <h3 className="text-nowrap text-sm sm:text-base font-bold" style={{ color: COLORS.textBlack }}>Explore EdUnique Courses</h3>,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        iconSrc: '/select1.png'
    },
    {
        id: 'future_school',
        title: <h3 className="text-nowrap text-sm sm:text-base font-bold" style={{ color: COLORS.textBlack }}>Become a Future School</h3>,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        iconSrc: '/select2.png'
    },
    {
        id: 'membership_plans',
        title: <h3 className="text-nowrap text-sm sm:text-base font-bold" style={{ color: COLORS.textBlack }}>Membership Plans</h3>,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        iconSrc: '/select3.png'
    },
    {
        id: 'subscribe',
        title: <h3 className="text-nowrap text-sm sm:text-base font-bold space-x-2" style={{ color: COLORS.textBlack }}>Subscribe <span className="text-[#FF3366]">@199</span></h3>,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        iconSrc: '/select4.png'
    },
];


// --- Reusable SelectionCard Component ---
interface SelectionCardProps {
    option: typeof selectionOptions[0];
    isSelected: boolean;
    onSelect: () => void;
}
const SelectionCard: React.FC<SelectionCardProps> = ({ option, isSelected, onSelect }) => (
    <button onClick={onSelect} className="w-full max-w-xl mx-auto flex items-center gap-2 sm:gap-4 sm:p-3 rounded-full bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center ">
            <Image src={option.iconSrc} alt={option.id} width={90} height={90} className="w-full h-full object-contain" priority quality={100} />
        </div>
        <div className="flex-1 text-left">
            {option.title}
            <p className="text-[10px] xs:text-xs sm:text-sm mt-1 leading-snug" style={{ color: COLORS.textGray }}>{option.description}</p>
        </div>
        <div className="flex-shrink-0 h-12 w-12 sm:w-16 sm:h-16 flex items-center justify-center">
            {isSelected && (
                <div className="h-8 w-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primaryBlue }}>
                    <FiCheck className="w-5 h-5 text-white" strokeWidth={4} />
                </div>
            )}
        </div>
    </button>
);


// --- Main Static Page Component ---
export default function SelectTypePage() {
    const [selectedOptionId, setSelectedOptionId] = useState<string>(selectionOptions[0].id);

    return (
        <div className="bg-black">

            <div className="min-h-screen w-full flex items-center justify-center px-2 py-6 sm:p-8">

                <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundColor: 'white',
                            backgroundImage: "url(/pattern.png)",
                            backgroundRepeat: 'repeat',
                            backgroundSize: "1000px",
                            filter: "brightness(60%) grayscale(10%)"
                        }}
                    />
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backgroundColor: '#cccccc',
                            filter: "brightness(120%) opacity(70%)"
                        }}
                    />

                    <div className="relative z-20 px-6 py-8 sm:py-12">
                        <div className="space-y-4">
                            {selectionOptions.map((option) => (
                                <SelectionCard
                                    key={option.id}
                                    option={option}
                                    isSelected={selectedOptionId === option.id}
                                    onSelect={() => setSelectedOptionId(option.id)}
                                />
                            ))}
                        </div>

                        <Link href="/b2c-teacher/registration/login" className="w-full mt-4 flex justify-center">
                            <button
                                className="w-full max-w-32 sm:max-w-36 text-white py-2 sm:py-3 rounded-full transition-colors cursor-pointer duration-200 hover:opacity-90"
                                style={{ backgroundColor: COLORS.primaryBlue }}
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}