"use client";

import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import BackButton from "@/components/common-components/BackButton";
import { useState, type FC } from "react";
import { FiPercent } from "react-icons/fi";
import { LuOmega } from "react-icons/lu";
import { MdOutlineSuperscript, MdOutlineFunctions } from "react-icons/md";
import { TbMathFunction } from "react-icons/tb"; // Add icons as needed
import { RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlineTheaterComedy } from "react-icons/md";
import {
  Smile,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";

export default function page() {
  return (
    <div>
      <BackButton Heading="Worksheet Report" />
      <MaxWidthWrapper>
        <main className="flex-grow w-full max-w-[90rem] mx-auto p-4 ">
          <div className="space-y-2">
            <ResultsSection />
            <ChartsReport />
          </div>
        </main>
      </MaxWidthWrapper>
    </div>
  );
}

const ResultsSection = () => {
  const individualScores = [
    { name: "Academic Skills", percentage: 40, color: "#3366FF" },
    { name: "Brain Development", percentage: 60, color: "#FFCC00" },
    { name: "Personality Development", percentage: 50, color: "#FF99B7" },
    { name: "Emotional Intelligence", percentage: 20, color: "#8DD9B3" },
    { name: "Pedagogy learning", percentage: 40, color: "#FFC79A" },
  ];

  const stats = [
    { label: "Total Marks", value: "50", color: "#000000" },
    { label: "Total Questions", value: "50", color: "#000000" },
    { label: "Attempted", value: "40", color: "#000000" },
    { label: "Correct", value: "30", color: "#3366FF" },
    { label: "Incorrect", value: "10", color: "#FF3366" },
  ];

  const aiSuggestions = [
    {
      heading: "Heading of AI Suggestion",
      points: [
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
      ],
    },
    {
      heading: "Heading of AI Suggestion",
      points: [
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
      ],
    },
    {
      heading: "Heading of AI Suggestion",
      points: [
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
        "Pointers suggested by AI after analyzing test results",
      ],
    },
  ];

  interface SemiCircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    backgroundColor?: string;
    showIcon?: boolean;
    className?: string;
  }

  function SemiCircularProgress({
    percentage = 40,
    size = 200,
    strokeWidth = 11,
    color = "#3366FF", // blue-500
    backgroundColor = "#E9EDF0", // gray-200
    showIcon = true,
    className = "",
  }: SemiCircularProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = Math.PI * radius; // Half circle circumference
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div
          className="relative"
          style={{ width: size, height: size / 2 + 40 }}
        >
          {/* Semi-circular progress bar */}
          <svg
            width={size}
            height={size / 2 + 20}
            className="transform"
            style={{ overflow: "visible" }}
          >
            {/* Background arc */}
            <path
              d={`M ${strokeWidth / 2} ${
                size / 2
              } A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${
                size / 2
              }`}
              fill="none"
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            {/* Progress arc */}
            <path
              d={`M ${strokeWidth / 2} ${
                size / 2
              } A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${
                size / 2
              }`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Center icon */}
          {showIcon && (
            <div
              className="absolute flex items-center justify-center bg-[#E9EDF0] rounded-full"
              style={{
                width: 48,
                height: 48,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Smile className="w-8 h-8 stroke-[#3366FF]" />
            </div>
          )}
        </div>

        {/* Percentage text */}
        <div className="-translate-y-[16px]">
          <span className="text-2xl font-bold text-[#8DD9B3]">
            {percentage}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-5">
        {/* Left Section */}
        <div className="bg-white p-6 pr-0 rounded-3xl flex flex-col justify-between items-center gap-4">
          {/* Results Header */}
          <div className="flex items-center gap-2 mb-6 w-full">
            <Star className="stroke-[#FFCC00] stroke-2 w-6 h-6" />
            <h2 className="text-2xl font-semibold">Results</h2>
          </div>

          <div className="lg:grid lg:grid-cols-[0.5fr_1fr] lg:gap-10 w-full">
            {/* Circular Progress */}
            <div className="mb-6 border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl flex flex-col justify-center items-center gap-10 p-4">
              <SemiCircularProgress
                percentage={40}
                size={200}
                strokeWidth={12}
                color="#3B82F6"
                backgroundColor="#E5E7EB"
                showIcon={true}
              />
              <p className="text-center font-medium max-w-xs mx-auto lg:w-[75%]">
                Great effort! A little more focus will take you to the top
              </p>
            </div>

            {/* Individual Scores */}
            <div className="mb-6 border border-[#E5E7EB] bg-[#F9FAFB] rounded-l-3xl p-4 pr-0">
              <h3 className="text-2xl font-semibold mb-6">Individual Scores</h3>
              <div className="space-y-5">
                {individualScores.map((score, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium min-w-0 flex-1 mr-4 text-right">
                      {score.name}
                    </span>
                    <div className="flex items-center gap-3 flex-1 max-w-xs">
                      <div className="flex-1 bg-white rounded-l-full p-1 flex justify-start items-center">
                        <div
                          className="h-3 rounded-full transition-all duration-300 relative"
                          style={{
                            width: `${score.percentage}%`,
                            backgroundColor: score.color,
                          }}
                        >
                          <span className="text-[#B0B0B0] text-xs font-medium w-fit absolute right-0 top-1/2 translate-x-[calc(100%_+_8px)] -translate-y-1/2">
                            {score.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="pr-6 mb-6 w-full">
            <div className="flex justify-center items-center gap-10 mx-auto bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-2 px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg text-[#6B7280] font-semibold mb-1">
                    {stat.label}
                  </p>
                  <p
                    className="text-lg font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-12 py-3 rounded-full transition-colors">
              Next
            </button>
          </div>
        </div>

        {/* Right Section - AI Suggestions */}
        <div className="bg-white p-4 rounded-3xl">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-[#FF3366]">
              AI Suggestions
            </h2>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-[#2E2E2E] mb-3">
                  {suggestion.heading}
                </h3>
                <ul className="space-y-2 pl-2">
                  {suggestion.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span className="text-[#2E2E2ECC] text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PALETTE = {
  GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
  GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
  GREEN_EXTRADARK: "#1D5851",
  PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
  PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
  PURPLE_EXTRADARK: "#37085C",
  PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
  PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)
  PINK_EXTRADARK: "#893544",

  ACCENT_PINK: "#FF3366", // Tags, highlights
  ACCENT_BLUE: "#0DC6FD", // Line chart, progress
  ACCENT_PURPLE: "#AC50F5", // Line chart, progress
  ACCENT_RED: "#FF4A69", // Failed status

  BG_PAGE: "#F3F4F6", // Main page background
  BORDER_GREY: "#B0B0B0", // General borders for cards
  TEXT_DARK: "#1F2937", // For primary text
  TEXT_MEDIUM: "#626262", // For secondary text
  TEXT_LIGHT: "#9CA3AF", // For tertiary text
  WHITE_CARD: "#FFFFFF",

  PASS: "#8DD9B3",
  FAILED: "#FF3366",
};

type ProgressCircleProps = {
  percentageText: string;
  color: string;
  skillName?: string;
  details?: string;
};

const ProgressCircleItem: FC<ProgressCircleProps> = ({
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
          <span className="text-[10px] font-medium text-[#626262]">
            {percentageText}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 ml-2">
        <p className="text-sm font-medium text-[#626262]">{skillName}</p>
        <p className="text-xs text-gray-500 font-light">{details}</p>
      </div>
    </div>
  );
};

const ChartsReport: FC = () => {
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
  const skillCardData = [
    {
      title: "Basic Academic Skills",
      bgColor: PALETTE.GREEN_LIGHT,
      progressColor: PALETTE.GREEN_DARK, // Assuming this is for progress bar
      subTitleColor: PALETTE.GREEN_EXTRADARK,
      overallProgress: "4/5",
      progressPercent: 80,
      iconSet: [
        <LuOmega key="s" className="w-5 h-5" />,
        <FiPercent key="p" className="w-5 mt-4.5 h-5" />,
        <MdOutlineSuperscript key="a" className="w-5 h-5" />,
      ],
      skills: Array(7).fill({
        name: "Subject 1",
        details: "Pedagogy and Plan",
        progress: "3/4",
      }),
    },
    {
      title: "Critical Academic Skills",
      bgColor: PALETTE.PURPLE_LIGHT,
      progressColor: PALETTE.PURPLE_DARK,
      subTitleColor: PALETTE.PURPLE_EXTRADARK,
      overallProgress: "4/5",
      progressPercent: 80,
      iconSet: [
        <MdOutlineFunctions key="b" className="w-5 h-5" />,
        <RiPsychotherapyLine key="a" className="w-5 mt-4.5 h-5" />,
        <TbMathFunction key="z" className="w-5 h-5" />,
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
    title: "Life skill Enhancements",
    bgColor: PALETTE.PINK_LIGHT,
    progressColor: PALETTE.PINK_DARK, // Using the darker pink for progress
    subTitleColor: PALETTE.PINK_EXTRADARK,
    overallProgress: "4/5",
    progressPercent: 80,
    iconSet: [
      <MdOutlineTheaterComedy key="a" className="w-8 h-8 text-[#893544]" />,
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
    // Copied structure from Life Skills for Personal Development
    title: "Personal Development",
    bgColor: PALETTE.PINK_LIGHT, // Re-using for consistency with right column
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

  const testResultsData = [
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Pass",
      resultColor: PALETTE.PASS,
    },
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Failed",
      resultColor: PALETTE.FAILED,
    },
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Pass",
      resultColor: PALETTE.PASS,
    },
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Failed",
      resultColor: PALETTE.FAILED,
    },
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Pass",
      resultColor: PALETTE.PASS,
    },
    {
      test: "Mathematics test",
      date1: "04/01/2025",
      date2: "04/07/2025 04:30 pm",
      totalMarks: 100,
      how: 60,
      marks: "80/100",
      result: "Failed",
      resultColor: PALETTE.FAILED,
    },
  ];

  return (
    <>
      <div className="">
        <div className="grid w-full max-w-[90rem] grid-cols-1 gap-4 p-2 sm:p-4 lg:grid-cols-[2fr_1fr] lg:gap-5">
          {/* ====== Overall Charts start ====== */}
          <div
            className="p-5 rounded-2xl"
            style={{
              backgroundColor: PALETTE.WHITE_CARD,
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
              <h3
                className="font-medium text-lg"
                style={{ color: PALETTE.ACCENT_PINK }}
              >
                Overall Progress
              </h3>
            </div>
            <div className="flex items-start justify-between px-2">
              <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 mb-10 text-xs">
                <div className="flex items-center">
                  <div
                    className="w-16 h-5 rounded-full mr-2"
                    style={{ backgroundColor: PALETTE.ACCENT_BLUE }}
                  ></div>
                  <span
                    className="text-sm"
                    style={{ color: PALETTE.TEXT_MEDIUM }}
                  >
                    Basic Academic Skills
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-16 h-5 rounded-full mr-2"
                    style={{ backgroundColor: PALETTE.ACCENT_PURPLE }}
                  ></div>
                  <span
                    className="text-sm"
                    style={{ color: PALETTE.TEXT_MEDIUM }}
                  >
                    Critical Academic Skills
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-16 h-5 rounded-full mr-2"
                    style={{ backgroundColor: PALETTE.ACCENT_RED }}
                  ></div>
                  <span
                    className="text-sm"
                    style={{ color: PALETTE.TEXT_MEDIUM }}
                  >
                    Personality Development
                  </span>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-0">
                <DateSelector />
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
                          `${
                            35 +
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
            className="p-5 rounded-2xl relative"
            style={{
              backgroundColor: PALETTE.WHITE_CARD,
            }}
          >
            <h3 className="font-medium text-lg mb-10 text-[#FF3366]">
              {personalDevData.title}
            </h3>
            <div className="space-y-3 overflow-y-scroll custom-scrollbar-thin-grey pr-3 max-h-[424px]">
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
        <main className="grid h-full max-w-[93rem] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-5 p-4 pt-2">
          <div className="grid bg-white rounded-2xl h-full overflow-y-auto custom-scrollbar grid-cols-1 lg:grid-cols-2 p-4 gap-4 items-start">
            {skillCardData.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="py-4 px-2 rounded-2xl overflow-y-auto bg-[#F9FAFB]"
              >
                <div
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                  className={` p-3 mb-4 rounded-2xl`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3
                      className="text-base font-bold "
                      style={{ color: card.subTitleColor }}
                    >
                      {card.title}
                    </h3>
                    <div
                      className="flex translate-y-2 text-xs opacity-[40%]"
                      style={{ color: card.subTitleColor }}
                    >
                      {card.iconSet}
                    </div>
                  </div>
                  <p
                    className="text-xs mb-2"
                    style={{ color: card.subTitleColor }}
                  >
                    Overall Progress
                  </p>
                  <div className="items-center mb-3">
                    <span
                      className="text-sm font-bold mr-2"
                      style={{ color: card.subTitleColor }}
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
            {/* Life Skill Enhancements Card - similar structure to Personal Development */}
          </div>
          <div className="p-5 h-full custom-scrollbar overflow-y-auto rounded-2xl bg-white row-span-2">
            <div
              style={{
                backgroundColor: lifeSkillsData.bgColor,
              }}
              className={`py-3 px-7 mb-6 rounded-2xl`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3
                  className="text-base font-bold"
                  style={{ color: PALETTE.PINK_EXTRADARK }}
                >
                  {lifeSkillsData.title}
                </h3>
                <div
                  className="flex text-xs opacity-[40%] translate-y-2"
                  style={{ color: lifeSkillsData.subTitleColor }}
                >
                  {lifeSkillsData.iconSet}
                </div>
              </div>
              <p
                className="text-xs mb-2"
                style={{ color: PALETTE.PINK_EXTRADARK }}
              >
                Overall Progress
              </p>
              <div className="mb-3">
                <span
                  className="text-sm font-bold mr-2"
                  style={{ color: lifeSkillsData.subTitleColor }}
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
            <div className="space-y-[18px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-full">
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
          {/* ===== Table started ===== */}

          <div
            className="rounded-2xl h-full custom-scrollbar overflow-y-auto"
            style={{
              backgroundColor: PALETTE.WHITE_CARD,
              borderColor: PALETTE.BORDER_GREY,
            }}
          >
            <table className="w-full text-sm">
              <thead className="bg-[#E5ECFF]">
                <tr>
                  {[
                    "Test",
                    "Date",
                    "Date",
                    "Total Marks",
                    "How",
                    "Marks",
                    "Results",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className={`${
                        index === 0 ? "p-3 pl-6" : "p-3"
                      } text-left font-medium`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {testResultsData.map((row, i) => (
                  <tr
                    key={i}
                    className="odd:bg-[#E5ECFF4D] p-4 even:bg-white text-[#777777] font-medium"
                    style={{ borderColor: PALETTE.BORDER_GREY }}
                  >
                    <td className="p-3 pl-6">{row.test}</td>
                    <td className="p-3">{row.date1}</td>
                    <td className="p-3">{row.date2}</td>
                    <td className="p-3">{row.totalMarks}</td>
                    <td className="p-3">{row.how}</td>
                    <td className="p-3 font-medium text-black">{row.marks}</td>
                    <td
                      className="p-3 font-medium"
                      style={{ color: row.resultColor }}
                    >
                      {row.result}
                    </td>
                  </tr>
                ))}
                <tr
                  className="p-4 bg-white text-[#777777] font-medium"
                  style={{ borderColor: PALETTE.BORDER_GREY }}
                >
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3 font-medium text-black"></td>
                  <td className="p-3 font-medium"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

interface DateSelectorProps {
  className?: string;
}

function DateSelector({ className = "" }: DateSelectorProps) {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState(2025);

  const months = [
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
  ];

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setIsMonthOpen(false);
  };

  const handlePreviousYear = () => {
    setSelectedYear((prev) => prev - 1);
  };

  const handleNextYear = () => {
    setSelectedYear((prev) => prev + 1);
  };

  const getDisplayText = () => {
    if (selectedMonth === "Month") {
      return selectedYear.toString();
    }
    return `${selectedMonth} ${selectedYear}`;
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Month Dropdown */}
      <div className="relative">
        <div
          className="flex items-center gap-2 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setIsMonthOpen(!isMonthOpen)}
        >
          <span className="whitespace-nowrap">{selectedMonth}</span>
          {isMonthOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>

        {isMonthOpen && (
          <div className="absolute left-0 top-full w-full min-w-fit bg-[#f9fafb] border-x border-b border-[#E5E7EB] rounded-b-xl z-10 box-border shadow-lg max-h-48 overflow-y-auto custom-scrollbar-thin-grey p-2 overflow-x-hidden">
            {months.map((month) => (
              <button
                key={month}
                className="whitespace-nowrap justify-center text-sm py-2 w-full flex items-center text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleMonthSelect(month)}
              >
                {month}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Year Navigation */}
      <div className="flex items-center gap-4 sm:gap-6 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
        <ArrowLeftCircle
          className="w-4 h-4 cursor-pointer hover:text-black transition-colors text-gray-500"
          onClick={handlePreviousYear}
        />
        <span className="min-w-[60px] text-center">{getDisplayText()}</span>
        <ArrowRightCircle
          className="w-4 h-4 cursor-pointer hover:text-black transition-colors text-gray-500"
          onClick={handleNextYear}
        />
      </div>
    </div>
  );
}
