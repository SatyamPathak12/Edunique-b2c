"use client";

import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import {
    FiArrowLeft,
} from "react-icons/fi"; // Add icons as needed
import Image from "next/image"; // For profile picture
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import ChartsReport from "@/components/b2c-admin/charts";
import BackButton from "@/components/common-components/BackButton";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import MonthTab from "@/components/common-components/MonthTab/MonthTab";
import ChartsReportTeacherB2C from "@/components/teacher-b2c/common-components/ChartB2CTeacher";
// import MaxWidthWrapper from "../max-width-wrapper";

// --- COLOR PALETTE (as provided) ---
const PALETTE = {
    GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
    GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
    PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
    PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
    PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
    PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

    ACCENT_PINK: "#FF3366", // Tags, highlights
    ACCENT_BLUE: "#0DC6FD", // Line chart, progress
    ACCENT_PURPLE: "#AC50F5", // Line chart, progress
    ACCENT_RED: "#FF4A69", // Failed status

    BG_PAGE: "#F3F4F6", // Main page background
    BORDER_GREY: "#B0B0B0", // General borders for cards
    TEXT_DARK: "#1F2937", // For primary text
    TEXT_MEDIUM: "#6B7280", // For secondary text
    TEXT_LIGHT: "#9CA3AF", // For tertiary text
    WHITE_CARD: "#FFFFFF",
};

// --- Helper Components (Simplified for hardcoding) ---


const ClassesCard = () => {

    return (
        <div className="rounded-2xl  bg-white p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Classes</h2>
                <MonthTab />
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1 px-2">
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500 ">Complete</span>
                    <span className="font-medium text-black">2 / 20 </span>
                </div>
                <div className="text-red-500 text-sm text-center"><span className="text-sm text-gray-500">Incomplete</span><br />1</div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-400">
                    <span className="text-gray-500">Attendance</span>
                    <span className="text-blue-500">15%</span>
                </div>
                <div className="flex justify-between border-b border-gray-400">
                    <span className="text-gray-500">Grade</span>
                    <span className="text-blue-500">3.5</span>
                </div>
                <div className="flex justify-between border-b border-gray-400">
                    <span className="text-gray-500">Leader Board</span>
                    <span className="text-blue-500">Rank 5</span>
                </div>
            </div>
        </div>
    );
};

type ProgressCircleProps = {
    percentageText: string; // e.g. "3/4"
    color: string; // hex or tailwind color
    skillName?: string;
    details?: string;
};

export const ProgressCircleItem: React.FC<ProgressCircleProps> = ({
    percentageText,
    color,
    skillName,
    details,
}) => {
    const [numerator, denominator] = percentageText.split("/").map(Number);
    const percentage = (numerator / denominator) * 100;

    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative flex-shrink-0">
                <svg className="w-full h-full transform rotate-90 " viewBox="0 0 75 75">
                    <circle
                        cx="37.5"
                        cy="37.5"
                        r={radius}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="4"
                    />
                    <circle
                        cx="37.5"
                        cy="37.5"
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                        {percentageText}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1.5 ml-2">
                <p className="text-sm font-medium text-gray-800">{skillName}</p>
                <p className="text-xs text-gray-500">{details}</p>
            </div>
        </div>
    );
};

const StudentReport: React.FC = () => {



    const keyFocusAreas = [
        "Academics",
        "Personality Development",
        "Brain Development",
    ];

    return (
        <>
            <div className="bg-gray-100">
                {/* Header would go here - Assuming it's outside this component's direct render */}
                <Header activeState="Students" />

                <BackButton Heading="Student List"/>
                {/* main div */}
                <TeacherB2CWrapper>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-2 gap-4">
                        {/* Student Info Card */}

                        <div
                            className="lg:col-span-2  p-4 rounded-2xl"
                            style={{
                                borderColor: PALETTE.BORDER_GREY,
                                backgroundImage: "url('/images/brandpatternreport.png')",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="bg-white p-4 rounded-2xl">
                                <div className="flex items-start justify-between sm:items-center gap-4">
                                    <div className="flex flex-col sm:items-center sm:flex-row gap-4">
                                        <Image
                                            src="/teacher-b2b/profile2.png"
                                            alt="Shlok Agheda"
                                            width={72}
                                            height={72}
                                            className="rounded-full h-24 w-24 flex-shrink-0"
                                        />
                                        <div className="flex-grow">
                                            <h2
                                                className="text-xl font-semibold"
                                                style={{ color: PALETTE.TEXT_DARK }}
                                            >
                                                Shlok Agheda
                                            </h2>
                                            <div className="flex items-center gap-1 mt-2">
                                                <span
                                                    className="text-xs whitespace-nowrap font-medium px-2.5 py-1.5 rounded-l-full"
                                                    style={{
                                                        backgroundColor: PALETTE.ACCENT_PINK,
                                                        color: PALETTE.WHITE_CARD,
                                                    }}
                                                >
                                                    Class 8A
                                                </span>
                                                <span
                                                    className="text-xs whitespace-nowrap  font-meduim px-2.5 py-1.5 rounded-r-full"
                                                    style={{
                                                        backgroundColor: PALETTE.ACCENT_PINK,
                                                        color: PALETTE.WHITE_CARD,
                                                    }}
                                                >
                                                    Group A
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[12px] font-medium text-right sm:text-left space-y-0.5 text-black">
                                        <p>Gender: Male</p>
                                        <p>DOB: 15 Jun 2015</p>
                                        <p>Email: example@gm.com</p>

                                        <p>City: Mumbai</p>
                                        <p>State: Maharashtra</p>
                                    </div>
                                </div>
                                <div className="pt-4 ">
                                    <p
                                        className="text-sm font-bold mb-3"
                                        style={{ color: PALETTE.TEXT_DARK }}
                                    >
                                        Key Focus Area
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {keyFocusAreas.map((area) => (
                                            <button
                                                key={area}
                                                className="text-xs px-2 py-2 text-black rounded-full border"
                                                style={{
                                                    backgroundColor: "#F3F4F6",
                                                    borderColor: PALETTE.BORDER_GREY,
                                                }}
                                            >
                                                {area}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 ">
                                    <p
                                        className="text-sm font-bold mb-3"
                                        style={{ color: PALETTE.TEXT_DARK }}
                                    >
                                        Parent Control
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            className="text-xs px-2 py-2 text-black rounded-full border"
                                            style={{
                                                backgroundColor: "#F3F4F6",
                                                borderColor: PALETTE.BORDER_GREY,
                                            }}
                                        >
                                            +91 0000000000
                                        </button>
                                        <button
                                            className="text-xs px-2 py-2 text-black rounded-full border"
                                            style={{
                                                backgroundColor: "#F3F4F6",
                                                borderColor: PALETTE.BORDER_GREY,
                                            }}
                                        >
                                            example@gm.com
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ClassesCard />
                    </div>
                   <ChartsReportTeacherB2C />
                </TeacherB2CWrapper>
                <Footer />
            </div>
        </>
    );
};

export default StudentReport;

