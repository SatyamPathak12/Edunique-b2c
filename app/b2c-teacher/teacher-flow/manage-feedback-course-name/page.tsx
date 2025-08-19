// /app/feedback/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiSearch, FiFilter, FiChevronDown, FiStar, FiSmile } from 'react-icons/fi';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/TeacherB2CHeader';
import BackButton from '@/components/common-components/BackButton';
import TeacherB2CWrapper from '@/components/teacher-b2c/common-components/TeacherB2CPageWrapper';
import SearchFilterIcon from '@/components/common-components/SearchFilterIcon';

// --- COLOR & STYLE CONSTANTS ---
const PINK_COLOR = "#FF3366";
const LIGHT_PINK_BG = "#FF33661A";
const LIGHT_GREEN = "#8DD9B3";
const CHART_BAR_COLORS = ["#3366FF", "#FFCC00", "#FF99B7", "#8DD9B3"];

// --- DATA ---
const feedbackData = Array.from({ length: 18 }, (_, i) => ({
    id: `fb${i}`,
    name: "Customer Name",
    role: "Student / Parent",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin lectus et leo.",
    date: "Date",
}));

const barChartData = [
    { label: "Punctuality", value: 40, color: CHART_BAR_COLORS[0] },
    { label: "Doubt Solving", value: 60, color: CHART_BAR_COLORS[1] },
    { label: "Friendliness", value: 50, color: CHART_BAR_COLORS[2] },
    { label: "Clarity", value: 20, color: CHART_BAR_COLORS[3] },
];


// --- REUSABLE UI SUB-COMPONENTS ---

const GeneralFilterButton: React.FC<{ filter: { label: string }, onClick: () => void }> = ({ filter, onClick }) => (
    <button onClick={onClick} className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-200 flex-shrink-0 transition-colors`}>
        <span>{filter.label}</span>
        <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
    </button>
);

const ScoreChartDisplay: React.FC = () => {
    // --- SVG & Animation Calculations ---
    const radius = 40;
    const stroke = 7;
    const normalizedRadius = radius - stroke / 2;
    const semiCircumference = Math.PI * normalizedRadius; // Circumference for a semi-circle

    // The progress value (e.g., 0.4 represents 40%)
    const progress = 0.4;
    const offset = semiCircumference * (1 - progress);

    return (
        // FIXED: Reduced the overall size for a more compact look.
        // Desktop size is now w-48/h-48, and mobile is w-28/h-28.
        <div className="w-48 h-48 mx-auto sm:w-66 sm:h-66 absolute top-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background track for the semi-circle */}
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    className="text-[#E9EDF0]" // A light gray color for the track
                    strokeWidth={stroke}
                    stroke="currentColor"
                    fill="transparent"
                    strokeLinecap="round"
                />
                {/* Progress arc for the semi-circle */}
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    className="text-[#3366FF]" // The main blue progress color
                    strokeWidth={stroke}
                    strokeDasharray={semiCircumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center h-[85%]">
                <div className="bg-[#E9EDF0] w-fit h-fit p-1.5 rounded-full sm:p-2">
                    {/* FIXED: Icon size is proportionally reduced to match the new container size. */}
                    <FiSmile className="w-12 h-12 text-[#3366FF] " strokeWidth={3} />
                </div>
            </div>
        </div>
    );
};

const FeedbackCard: React.FC<typeof feedbackData[0]> = ({ name, role,  review, date }) => (
    <div className="bg-[#F3F4F6] px-3 py-4 rounded-2xl flex flex-col h-full">
        <div className="flex items-center mb-3">
            <Image src="/images/profile2.jpg" alt={name} width={70} height={70} className="w-15 h-15 rounded-full object-cover mr-4" />
            <div>
                <h4 className="font-medium text-lg text-black mb-1">{name}</h4>
                <p className="text-xs text-[#6B7280] mb-1">{role}</p>
                <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, i) => <FiStar key={i} className={`w-4 h-4 text-[#FFCC00] fill-current `} />)}
                </div>
            </div>
        </div>
        <p className="text-xs text-[#6B7280] leading-tight flex-grow mb-1 ">{review}</p>
        <span className="text-xs text-[#6B7280] font-medium mt-1">{date}</span>
        <div className="flex justify-end items-center">
            <button className="px-5 py-1.5 text-sm font-medium rounded-full" style={{ backgroundColor: LIGHT_PINK_BG, color: PINK_COLOR }}>Hide</button>
        </div>
    </div>
);

const PositiveFeedbackChart = () => (
    <div className="bg-[#F9FAFB] px-6 py-6 min-h-60 rounded-2xl border border-[#E5E7EB] text-center relative flex flex-col items-center justify-end">
        <ScoreChartDisplay />
        <p className="font-bold text-2xl" style={{ color: LIGHT_GREEN }}>40% Positive Feedbacks</p>
    </div>
);


const BarChartAnalytics = () => (
    <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E5E7EB]">
        <div className="flex justify-between items-end h-108 gap-4">
            {barChartData.map(bar => (
                <div key={bar.label} className='flex-1 flex flex-col h-full'>
                    <div className="bg-white p-1 rounded-3xl flex flex-col items-center justify-end flex-1 w-full">
                        <span className="text-xs text-[#B0B0B0] font-medium">{bar.value}%</span>
                        <div
                            className="w-full rounded-3xl mt-1" 
                            style={{ height: `${bar.value}%`, backgroundColor: bar.color }}
                        ></div>
                    </div>
                    <p className="text-xs text-nowrap font-semibold mt-2 text-center">{bar.label}</p>
                </div>
            ))}
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
export default function FeedbackDashboardPage() {
const filterOptions = [{ id: 'f1', label: 'Filter 1' }, { id: 'f2', label: 'Filter 2' }, { id: 'f3', label: 'Filter 3' }];
    return (
        <>
            <Header activeState="Dashboard" />
            <BackButton Heading='Course Name' />
            <TeacherB2CWrapper>
               
                    <div className="bg-white p-2 rounded-3xl max-w-screen mx-auto">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            {/* Left Column: Feedback Cards */}
                            <div className='lg:col-span-2'>
                                <SearchFilterIcon filters={filterOptions}/>
                                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1.5 pr-2 max-h-170 overflow-y-auto custom-scrollbar-thin">
                                    {feedbackData.map(item => <FeedbackCard key={item.id} {...item} />)}
                                </div>
                            </div>
                            {/* Right Column: Analytics */}
                            <div className="lg:col-span-1 space-y-4">
                                <PositiveFeedbackChart />
                                <BarChartAnalytics />
                            </div>
                        </div>
                    </div>
            </TeacherB2CWrapper>
            <Footer />
        </>
    );
}