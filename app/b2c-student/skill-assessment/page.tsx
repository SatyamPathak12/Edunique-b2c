// /app/skill-test-intro/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FiHelpCircle, FiTarget, FiClock, FiCalendar, FiAlertTriangle } from 'react-icons/fi';

// --- Data for the UI components ---
const infoPillsData = [
    { text: "100 Questions", icon: FiHelpCircle, bgColor: "#FFC79A" },
    { text: "100 Marks", icon: FiTarget, bgColor: "#99DEFF" },
    { text: "30 minutes", icon: FiClock, bgColor: "#8DD9B3" },
];

// --- Sub-Components for a Clean Structure ---

const InfoPill: React.FC<typeof infoPillsData[0]> = ({ text, icon: Icon, bgColor }) => (
    <div
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm"
        style={{ backgroundColor: bgColor }}
    >
        <Icon className="w-4 h-4 text-black" />
        <span className="text-black">{text}</span>
    </div>
);

// --- Main Page Component ---

export default function SkillTestIntroPage() {
    return (
        <>
            <div
                className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6"
                style={{
                    backgroundImage: "url(/pattern.png)",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '1400px',
                }}
            >
                {/* Main Content Card - Contained and Centered */}
                <div className="relative w-full max-w-screen-xl bg-white rounded-3xl p-6 md:p-12 lg:p-16">

                    {/* --- Decorative Absolute Images --- */}
                    <Image src="/b2c-student/skill/topLeft.png" alt="puzzle piece decoration" width={189} height={189} className="absolute top-20 left-20 -translate-x-1/4 -translate-y-1/4 w-40 h-auto hidden lg:block" priority />
                    <Image src="/b2c-student/skill/topRight.png" alt="star decoration" width={102} height={102} className="absolute top-35 right-30 translate-x-1/4 -translate-y-1/4 w-16 h-auto hidden lg:block" priority />
                    <Image src="/b2c-student/skill/bottomLeft.png" alt="boy with books" width={264} height={264} className="absolute bottom-20 left-25 -translate-x-1/4 translate-y-1/4 w-32 md:w-48 h-auto hidden md:block" priority />
                    <Image src="/b2c-student/skill/bottomRight.png" alt="girl with stethoscope" width={301} height={301} className="absolute bottom-25 right-25 translate-x-1/4 translate-y-1/4 w-32 md:w-56 h-auto hidden md:block" priority />
                    <Image src="/b2c-student/skill/leftPlane.png" alt="paper plane" width={208} height={208} className="absolute top-[60%] left-[27%] -translate-x-full w-40 h-auto hidden lg:block" priority />
                    <Image src="/b2c-student/skill/rightPlane.png" alt="paper plane" width={208} height={208} className="absolute top-[60%] right-[30%] translate-x-full w-40 h-auto hidden lg:block" priority />

                    {/* --- Central Image --- */}
                    <div className="flex justify-center">
                        <Image src="/b2c-student/skill/main.png" alt="main graphic of skills" width={700} height={250} className="w-full max-w-2xl h-auto" />
                    </div>

                    {/* --- Text Content Section --- */}
                    <div className="text-center mt-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
                            5 level Scientific & Brain Mapping Skill Test
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-black">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        </p>
                    </div>

                    {/* --- Info Pills Section --- */}
                    <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
                        {infoPillsData.map(pill => <InfoPill key={pill.text} {...pill} />)}
                    </div>

                    {/* --- Test Window & Action --- */}
                    <div className="mt-8 max-w-lg mx-auto flex flex-col items-center gap-6">
                        <div className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl p-4 space-y-3 text-center sm:text-left">
                            <p className="font-bold text-gray-800 text-center">Test Window</p>
                            <div className="flex items-center justify-center sm:justify-start gap-3 text-sm text-gray-700">
                                <FiCalendar className="w-5 h-5 text-gray-500" />
                                <span>10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-3 text-sm text-gray-700">
                                <FiAlertTriangle className="w-5 h-5 text-gray-500" />
                                <span>Complete the test within 48 hours or it will reset.</span>
                            </div>
                        </div>

                        <button className="w-full max-w-xs bg-[#3366FF] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen w-screen bg-white flex items-center justify-center p-4 sm:p-6">

                <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 sm:mb-4">
                        DMIT Test Rules and Regulations
                    </h1>

                    <ul className="list-disc list-inside space-y-1 ml-2 text-base text-[#6B7280]">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nam pharetra tortor quis dolor facilisis vestibulum.</li>
                        <li>Vestibulum dictum nunc nec est mattis pharetra.</li>
                        <li>Duis facilisis erat eget luctus porttitor.</li>
                        <li>Nullam in neque quis risus tempor commodo ac eget enim.</li>
                        <li>Donec sed nisl sit amet est rhoncus pretium eget et nisi.</li>
                        <li>Pellentesque a ex ornare, dictum metus eu, sodales nibh.</li>
                        <li>Phasellus feugiat mi sit amet lacinia rhoncus.</li>
                        <li>Cras in dui vitae odio varius egestas placerat nec ipsum.</li>
                        <li>Praesent quis tellus volutpat, luctus quam non, ullamcorper augue.</li>
                        <li>Vestibulum quis tortor vestibulum, consectetur tellus nec, sollicitudin eros.</li>
                        <li>Donec malesuada est porttitor ex tristique placerat.</li>
                        <li>Sed maximus nibh eget elit varius, a tempus risus rutrum</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nam pharetra tortor quis dolor facilisis vestibulum.</li>
                        <li>Vestibulum dictum nunc nec est mattis pharetra.</li>
                        <li>Duis facilisis erat eget luctus porttitor.</li>
                        <li>Nullam in neque quis risus tempor commodo ac eget enim.</li>
                        <li>Donec sed nisl sit amet est rhoncus pretium eget et nisi.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vestibulum dictum nunc nec est mattis pharetra.</li>
                        <li>Duis facilisis erat eget luctus porttitor.</li>
                    </ul>

                    <div className="mt-6 flex justify-center">
                        <button
                            className="bg-[#3366FF] text-white font-semibold text-lg px-12 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Start
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}