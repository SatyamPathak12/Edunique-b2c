"use client";

import React from "react";
import {
  FiArrowLeft,
  // FiClock,
  // FiChevronLeft,
  // FiChevronRight,
  FiSearch,
  FiPercent,
  FiAward,
  FiBarChart2,
  FiChevronDown,
  FiZap,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi"; // Add icons as needed
import Image from "next/image"; // For profile picture
import Header from "@/components/layout/Header";
import Footer from "../layout/Footer";
import ChartsReportTeacherB2C from "@/components/teacher-b2c/common-components/ChartB2CTeacher";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
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
const user = {
	avatarSrc: '/admin/usernav.jpg',
	name: 'Shlok Agheda',
	role: 'Student',
}

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
  // Dummy state for month/year filter for Overall Progress chart
  // const [currentMonth, setCurrentMonth] = useState("Month"); // Default text
  // const [currentYear, setCurrentYear] = useState("2025");

  const handleBackClick = () => {
	if (typeof window !== "undefined") {
	  window.history.back();
	}
  };

  const keyFocusAreas = [
	"Academics",
	"Personality Development",
	"Brain Development",
  ];

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
	  overallProgress: "4/5",
	  progressPercent: 80,
	  iconSet: [
		<FiSearch key="s" className="w-4 h-4" />,
		<FiPercent key="p" className="w-4 mt-4.5 h-4" />,
		<FiAward key="a" className="w-4 h-4" />,
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
	  overallProgress: "4/5",
	  progressPercent: 80,
	  iconSet: [
		<FiBarChart2 key="b" className="w-4 h-4" />,
		<FiAward key="a" className="w-4 mt-4.5 h-4" />,
		<FiZap key="z" className="w-4 h-4" />,
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
	overallProgress: "4/5",
	progressPercent: 80,
	iconSet: [
	  <FiAward key="a" className="w-4 mt-4.5 h-4" />,
	  <FiZap key="z" className="w-4 h-4" />,
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
	  resultColor: PALETTE.GREEN_DARK,
	},
	{
	  test: "Mathematics test",
	  date1: "04/01/2025",
	  date2: "04/07/2025 04:30 pm",
	  totalMarks: 100,
	  how: 60,
	  marks: "80/100",
	  result: "Failed",
	  resultColor: PALETTE.ACCENT_RED,
	},
	{
	  test: "Mathematics test",
	  date1: "04/01/2025",
	  date2: "04/07/2025 04:30 pm",
	  totalMarks: 100,
	  how: 60,
	  marks: "80/100",
	  result: "Pass",
	  resultColor: PALETTE.GREEN_DARK,
	},
	{
	  test: "Mathematics test",
	  date1: "04/01/2025",
	  date2: "04/07/2025 04:30 pm",
	  totalMarks: 100,
	  how: 60,
	  marks: "80/100",
	  result: "Failed",
	  resultColor: PALETTE.ACCENT_RED,
	},
	{
	  test: "Mathematics test",
	  date1: "04/01/2025",
	  date2: "04/07/2025 04:30 pm",
	  totalMarks: 100,
	  how: 60,
	  marks: "80/100",
	  result: "Pass",
	  resultColor: PALETTE.GREEN_DARK,
	},
	{
	  test: "Mathematics test",
	  date1: "04/01/2025",
	  date2: "04/07/2025 04:30 pm",
	  totalMarks: 100,
	  how: 60,
	  marks: "80/100",
	  result: "Failed",
	  resultColor: PALETTE.ACCENT_RED,
	},
  ];

  const headerUser = {
	name: "Educator Name",
	role: "Teacher",
	avatarSrc: "/teacher-b2b/profile.png",
  };

  return (
	<>
	 <Header activeState="Dashboard" />

	  <div className="bg-gray-100">
		{/* Header would go here - Assuming it's outside this component's direct render */}

		{/* Page Title Bar */}
		{/* Page Title Bar */}
		<div className="bg-white">
		  <div className="flex items-center gap-3 mx-auto max-w-[98rem]  px-4 sm:px-6 py-3.5 sticky top-0 z-40">
			<button
			  onClick={handleBackClick}
			  className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
			  aria-label="Go back"
			>
			  <FiArrowLeft className="w-5 h-5" />
			</button>
			<h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
			  Report
			</h1>
		  </div>
		</div>
	  <TeacherB2CWrapper>
				<div className="grid grid-cols-1 lg:grid-cols-3 pb-4 gap-6">
				{/* Student Info Card */}
	  
				<div
				  className="lg:col-span-3   p-4 rounded-2xl"
				  style={{
					borderColor: PALETTE.BORDER_GREY,
					backgroundImage: "url('/images/brandpatternreport.png')",
					backgroundSize: "cover",
				  }}
				>
				  <div className="bg-white px-2 py-1 rounded-2xl ">
					<div className="flex  items-start sm:items-center gap-4">
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
						<div className="flex flex-wrap items-center gap-1 mt-2">
						  <span
							className="text-xs font-medium px-2.5 py-1.5 rounded-l-full"
							style={{
							  backgroundColor: PALETTE.ACCENT_PINK,
							  color: PALETTE.WHITE_CARD,
							}}
						  >
							Class 8A
						  </span>
						  <span
							className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full"
							style={{
							  backgroundColor: PALETTE.ACCENT_PINK,
							  color: PALETTE.WHITE_CARD,
							}}
						  >
							Group A
						  </span>
						</div>
					  </div>
					  <div className="text-xs lg:pt-2 font-medium text-right sm:text-left space-y-0.5 text-black">
						<p> <span className="font-semibold">Gender:</span> Male</p>
						<p><span  className="font-semibold">DOB:</span>15 Jun 2015</p>
						<p><span  className="font-semibold">Email:</span> example@gm.com</p>
	  
						<p><span  className="font-semibold">City: </span>Mumbai</p>
						<p><span  className="font-semibold">State:</span> Maharashtra</p>
					  </div>
					</div>
					<div className="pt-4 ">
					  <p
						className="text-md font-semibold mb-3"
						style={{ color: PALETTE.TEXT_DARK }}
					  >
						Key Focus Area
					  </p>
					  <div className="flex flex-wrap gap-4">
						{keyFocusAreas.map((area) => (
						  <button
							key={area}
							className="text-sm px-2 py-2 text-black rounded-full border"
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
				  </div>
				</div>
			  </div>
			<ChartsReportTeacherB2C />
			</TeacherB2CWrapper>
	  </div>

	  <Footer />
	</>
  );
};

export default StudentReport;

// To use custom scrollbar styles with Tailwind:
// 1. npm install -D tailwind-scrollbar
// 2. Add to tailwind.config.js plugins: require('tailwind-scrollbar'),
// Then classes like scrollbar-thin, scrollbar-thumb-gray-400 etc. will work.
