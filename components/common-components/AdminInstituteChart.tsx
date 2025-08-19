"use client";

import React, { useState } from "react";
import {
    FiSearch,
    FiPercent,
    FiAward,
    FiBarChart2,
    FiChevronDown,
    FiZap,
    FiArrowLeftCircle,
    FiArrowRightCircle,
} from "react-icons/fi";
import { LuOmega } from "react-icons/lu";
import { MdOutlineSuperscript, MdOutlineFunctions } from "react-icons/md";
import { TbMathFunction } from "react-icons/tb";// Add icons as needed
import { RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlineTheaterComedy } from "react-icons/md";
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

const AdminInstituteChart: React.FC = () => {
    // Dummy state for month/year filter for Overall Progress chart
    const [currentMonth] = useState("Month"); // Default text


    // Simplified data for the line chart (hardcoded points)
    const lineChartData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                color: PALETTE.ACCENT_BLUE,
                points: [20, 30, 30, 50, 50, 50, 70, 80, 70, 90, 90, 95],
            }, // Basic Academic
            {
                color: PALETTE.ACCENT_PURPLE,
                points: [15, 25, 25, 40, 40, 40, 60, 75, 65, 85, 85, 90],
            }, // Critical Academic
            {
                color: PALETTE.ACCENT_RED,
                points: [10, 20, 20, 30, 30, 30, 50, 65, 55, 70, 70, 80],
            }, // Personality Dev
        ],
    };
    const chartHeight = 160; // Max height of the chart area
    const chartWidth = 500; // Width of the chart area (approx)

    // Skill Card Data
    const paramenterYellow = [
        {
            title: "Parameter",
            bgColor: "#FFF8E1",
            progressColor: "#FFCC00",
            overallProgress: "4/5",
            progressPercent: 80,
            iconSet: [
                <MdOutlineFunctions key="b" className="w-4 h-4" />,
                < RiPsychotherapyLine key="a" className="w-4 mt-4.5 h-4" />,
                <TbMathFunction key="z" className="w-4 h-4" />,
            ],
            skills: [
                {
                    name: "Spoken English",
                    details: "Pedagogy and Plan",
                    progress: "3/4",
                },
                { name: "Vocabulary", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Hand Writing", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Olympiad", details: "Pedagogy and Plan", progress: "3/4" },
            ],
        },
    ]
    const skillCardData = [
        {
            title: "Parameter 1",
            bgColor: PALETTE.GREEN_LIGHT,
            progressColor: PALETTE.GREEN_DARK, // Assuming this is for progress bar
            overallProgress: "4/5",
            progressPercent: 80,
            iconSet: [
                <LuOmega key="s" className="w-4 h-4" />,
                <FiPercent key="p" className="w-4 mt-4.5 h-4" />,
                <MdOutlineSuperscript key="a" className="w-4 h-4" />,
            ],
            skills: Array(7).fill({
                name: "Subject 1",
                details: "Pedagogy and Plan",
                progress: "3/4",
            }),
        },
        {
            title: "Parameter 2",
            bgColor: PALETTE.PURPLE_LIGHT,
            progressColor: PALETTE.PURPLE_DARK,
            overallProgress: "4/5",
            progressPercent: 80,
            iconSet: [
                <MdOutlineFunctions key="b" className="w-4 h-4" />,
                < RiPsychotherapyLine key="a" className="w-4 mt-4.5 h-4" />,
                <TbMathFunction key="z" className="w-4 h-4" />,
            ],
            skills: [
                {
                    name: "Spoken English",
                    details: "Pedagogy and Plan",
                    progress: "3/4",
                },
                { name: "Vocabulary", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Hand Writing", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Olympiad", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Experiments", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Memory Games", details: "Pedagogy and Plan", progress: "3/4" },
                { name: "Memory Games", details: "Pedagogy and Plan", progress: "3/4" },
            ],
        },
    ];

    const lifeSkillsData = {
        title: "Parameter 1",
        bgColor: PALETTE.PINK_LIGHT,
        progressColor: PALETTE.PINK_DARK, // Using the darker pink for progress
        overallProgress: "4/5",
        progressPercent: 80,
        iconSet: [
            <MdOutlineTheaterComedy key="a" className="w-6 text-[#893544] mt-4.5 h-6" />,

        ], // Example icons
        skills: [
            {
                name: "Critical Thinking",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Visualization",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Accountability",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Like Challenges",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Social Skills",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Decision Making",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Focus",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Retention",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Adaptability",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Behavior",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Respect",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Emotional Skills",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
        ],
    };
    const personalDevData = {
        title: "Parameter 1",
        bgColor: PALETTE.PINK_LIGHT,
        skills: [
            {
                name: "Discipline",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Creativity",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Presentation",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Problem Solving",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Confidence",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
            {
                name: "Written",
                details: "Pedagogy and Plan",
                progress: "3/4",
                color: PALETTE.ACCENT_RED,
            },
        ],
    };
    return (
        <>
            <div className="bg-white rounded-3xl">


                <div className="grid w-full max-w-[90rem] mx-auto grid-cols-1 gap-4 p-2 sm:p-4  lg:grid-cols-[2fr_1fr]">
                    {/* ====== Overall Charts start ====== */}

                    <div
                        className="p-5 rounded-2xl"
                        style={{
                            backgroundColor: PALETTE.WHITE_CARD,
                        }}
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                            <h3
                                className="text-base font-semibold"
                                style={{ color: PALETTE.ACCENT_PINK }}
                            >
                                Performance Report
                            </h3>
                        </div>
                        <div className="flex items-start justify-between px-2">
                            <div className="flex flex-col flex-wrap gap-x-4 gap-y-1 mb-4 text-xs">
                                <div className="flex items-center">
                                    <div
                                        className="w-16 h-5 rounded-full mr-2"
                                        style={{ backgroundColor: PALETTE.ACCENT_BLUE }}
                                    ></div>
                                    <span style={{ color: PALETTE.TEXT_MEDIUM }}>
                                        Basic Academic Skills
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-16 h-5 rounded-full mr-2"
                                        style={{ backgroundColor: PALETTE.ACCENT_PURPLE }}
                                    ></div>
                                    <span style={{ color: PALETTE.TEXT_MEDIUM }}>
                                        Critical Academic Skills
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-16 h-5 rounded-full mr-2"
                                        style={{ backgroundColor: PALETTE.ACCENT_RED }}
                                    ></div>
                                    <span style={{ color: PALETTE.TEXT_MEDIUM }}>
                                        Personality Development
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
                                    <span>{currentMonth}</span>
                                    <FiChevronDown className="w-4 h-4 ml-1" />
                                </div>
                                <div className="flex items-center gap-4 sm:gap-6 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
                                    <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
                                    <span>2025</span>
                                    <FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
                                </div>
                            </div>
                        </div>
                        {/* Simplified SVG Line Chart */}
                        <div className="w-full overflow-x-auto">
                            <svg
                                viewBox={`0 0 ${chartWidth + 40} ${chartHeight + 30}`}
                                className="min-w-[500px]"
                            >
                                {/* Y-axis lines (simplified) */}
                                {[0, 25, 50, 75, 100].map((yVal) => (
                                    <line
                                        key={yVal}
                                        x1="30"
                                        y1={chartHeight - (yVal / 100) * chartHeight}
                                        x2={chartWidth + 30}
                                        y2={chartHeight - (yVal / 100) * chartHeight}
                                        stroke={PALETTE.BORDER_GREY}
                                        strokeWidth="0.5"
                                        strokeDasharray="2,2"
                                    />
                                ))}
                                {/* X-axis labels */}
                                {lineChartData.labels.map((label, i) => (
                                    <text
                                        key={label}
                                        x={
                                            35 +
                                            i * (chartWidth / (lineChartData.labels.length - 0.6))
                                        }
                                        y={chartHeight + 20}
                                        fontSize="8"
                                        fill={PALETTE.TEXT_MEDIUM}
                                        textAnchor="middle"
                                    >
                                        {label}
                                    </text>
                                ))}
                                {/* Data lines */}
                                {lineChartData.datasets.map((dataset) => (
                                    <polyline
                                        key={dataset.color}
                                        fill="none"
                                        stroke={dataset.color}
                                        strokeWidth="2"
                                        points={dataset.points
                                            .map(
                                                (p, i) =>
                                                    `${35 +
                                                    i * (chartWidth / (lineChartData.labels.length - 1))
                                                    },${chartHeight - (p / 100) * chartHeight}`
                                            )
                                            .join(" ")}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>
                    {/* ====== Overall Charts ends ====== */}

                    {/* Personal Development Card */}
                    <div
                        className="p-5 h-[500px] rounded-2xl relative"
                        style={{
                            backgroundColor: PALETTE.WHITE_CARD,
                        }}
                    >
                        <h3 className="text-base font-semibold mb-3 text-[#FF3366]">
                            {personalDevData.title}
                        </h3>
                        <div className="space-y-3 overflow-y-scroll custom-grey-scrollbar pr-3 max-h-[424px]">
                            {personalDevData.skills.map((skill, i) => (
                                <ProgressCircleItem
                                    key={i}
                                    percentageText={skill.progress}
                                    color={skill.color}
                                    skillName={skill.name}
                                    details={skill.details}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <main
                    className="grid h-full  max-w-[93rem] mx-auto   grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 px-4 "
                >

                    <div className="grid bg-white rounded-2xl h-full overflow-y-auto custom-scrollbar grid-cols-1 lg:grid-cols-2 p-4 gap-4 items-start">
                        {paramenterYellow.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className="py-4 px-2 col-span-2 rounded-2xl overflow-y-auto"
                            >
                                <div
                                    style={{
                                        backgroundColor: card.bgColor,
                                    }}
                                    className={` p-3 mb-2 pr-[50%] rounded-xl`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3
                                            className="text-base font-bold"
                                            style={{ color: PALETTE.TEXT_DARK }}
                                        >
                                            {card.title}
                                        </h3>
                                        <div
                                            className="flex space-x-1.5 text-xs"
                                            style={{ color: "#FFCC00" }}
                                        >
                                            {card.iconSet}
                                        </div>
                                    </div>
                                    <p
                                        className="text-xs mb-1"
                                        style={{ color: card.progressColor }}
                                    >
                                        Overall Progress
                                    </p>
                                    <div className="items-center mb-3">
                                        <span
                                            className="text-lg font-semibold mr-2"
                                            style={{ color: PALETTE.TEXT_DARK }}
                                        >
                                            {card.overallProgress}
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <div
                                                className="flex-grow h-1.5 rounded-full"
                                                style={{ backgroundColor: PALETTE.WHITE_CARD }}
                                            >
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${card.progressPercent}%`,
                                                        backgroundColor: card.progressColor,
                                                    }}
                                                ></div>
                                            </div>
                                            <span
                                                className="text-xs font-semibold ml-2"
                                                style={{ color: PALETTE.TEXT_DARK }}
                                            >
                                                5
                                            </span>
                                        </div>
                                        {/* Assuming max is 5 */}
                                    </div>
                                </div>
                                <div className="space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                                    {card.skills.map((skill, i) => (
                                        <ProgressCircleItem
                                            key={i}
                                            percentageText={skill.progress}
                                            color={card.progressColor}
                                            skillName={skill.name}
                                            details={skill.details}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                        {skillCardData.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className="py-4 px-2 rounded-2xl overflow-y-auto bg-gray-100"
                            >
                                <div
                                    style={{
                                        backgroundColor: card.bgColor,
                                    }}
                                    className={` p-3 mb-2 rounded-xl`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3
                                            className="text-base font-bold"
                                            style={{ color: PALETTE.TEXT_DARK }}
                                        >
                                            {card.title}
                                        </h3>
                                        <div
                                            className="flex space-x-1.5 text-xs"
                                            style={{ color: PALETTE.TEXT_MEDIUM }}
                                        >
                                            {card.iconSet}
                                        </div>
                                    </div>
                                    <p
                                        className="text-xs mb-1"
                                        style={{ color: card.progressColor }}
                                    >
                                        Overall Progress
                                    </p>
                                    <div className="items-center mb-3">
                                        <span
                                            className="text-lg font-semibold mr-2"
                                            style={{ color: PALETTE.TEXT_DARK }}
                                        >
                                            {card.overallProgress}
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <div
                                                className="flex-grow h-1.5 rounded-full"
                                                style={{ backgroundColor: PALETTE.WHITE_CARD }}
                                            >
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${card.progressPercent}%`,
                                                        backgroundColor: card.progressColor,
                                                    }}
                                                ></div>
                                            </div>
                                            <span
                                                className="text-xs font-semibold ml-2"
                                                style={{ color: PALETTE.TEXT_DARK }}
                                            >
                                                5
                                            </span>
                                        </div>
                                        {/* Assuming max is 5 */}
                                    </div>
                                </div>
                                <div className="space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                                    {card.skills.map((skill, i) => (
                                        <ProgressCircleItem
                                            key={i}
                                            percentageText={skill.progress}
                                            color={card.progressColor}
                                            skillName={skill.name}
                                            details={skill.details}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Life Skill Enhancements Card - similar structure to Personal Development */}
                    <div className="p-5 h-full custom-scrollbar overflow-y-auto rounded-2xl bg-white row-span-2">
                        <div
                            style={{
                                backgroundColor: lifeSkillsData.bgColor,
                            }}
                            className={` p-3 mb-2 rounded-xl`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3
                                    className="text-base font-bold"
                                    style={{ color: PALETTE.TEXT_DARK }}
                                >
                                    {lifeSkillsData.title}
                                </h3>
                                <div
                                    className="flex space-x-1.5 text-xs"
                                    style={{ color: PALETTE.TEXT_MEDIUM }}
                                >
                                    {lifeSkillsData.iconSet}
                                </div>
                            </div>
                            <p
                                className="text-xs mb-1"
                                style={{ color: lifeSkillsData.progressColor }}
                            >
                                Overall Progress
                            </p>
                            <div className=" mb-3">
                                <span
                                    className="text-lg font-medium mr-2"
                                    style={{ color: PALETTE.TEXT_DARK }}
                                >
                                    {lifeSkillsData.overallProgress}
                                </span>
                                <div className="flex gap-1 items-center">
                                    <div
                                        className="flex-grow h-1.5 rounded-full"
                                        style={{ backgroundColor: PALETTE.WHITE_CARD }}
                                    >
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${lifeSkillsData.progressPercent}%`,
                                                backgroundColor: lifeSkillsData.progressColor,
                                            }}
                                        ></div>
                                    </div>
                                    <span
                                        className="text-xs font-semibold ml-2"
                                        style={{ color: PALETTE.TEXT_DARK }}
                                    >
                                        5
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3  overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                            {lifeSkillsData.skills.map((skill, i) => (
                                <ProgressCircleItem
                                    key={i}
                                    percentageText={skill.progress}
                                    color={PALETTE.PINK_DARK}
                                    skillName={skill.name}
                                    details={skill.details}
                                />
                            ))}
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
};

export default AdminInstituteChart;
