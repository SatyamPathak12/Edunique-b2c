'use client'

import React, { useState } from 'react'
import {
	FiArrowLeft,
	FiSearch,
	FiPercent,
	FiAward,
	FiBarChart2,
	FiChevronDown,
	FiZap,
	FiArrowLeftCircle,
	FiArrowRightCircle,
} from 'react-icons/fi' // Add icons as needed
import Image from 'next/image' // For profile picture
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// import MaxWidthWrapper from '@/components/max-width-wrapper'

// --- COLOR PALETTE (as provided) ---
const PALETTE = {
	GREEN_LIGHT: '#8DD9B3', // Basic Academic Skills BG
	GREEN_DARK: '#4BC4B6', // Not explicitly used but similar to progress bar
	PURPLE_LIGHT: '#EEDAFE', // Critical Academic Skills BG
	PURPLE_DARK: '#A866DD', // Critical Academic Skills Progress
	PINK_LIGHT: '#FBD2D9', // Life Skill / Personal Dev BG
	PINK_DARK: '#893544', // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

	ACCENT_PINK: '#FF3366', // Tags, highlights
	ACCENT_BLUE: '#0DC6FD', // Line chart, progress
	ACCENT_PURPLE: '#AC50F5', // Line chart, progress
	ACCENT_RED: '#FF4A69', // Failed status

	BG_PAGE: '#F3F4F6', // Main page background
	BORDER_GREY: '#B0B0B0', // General borders for cards
	TEXT_DARK: '#1F2937', // For primary text
	TEXT_MEDIUM: '#6B7280', // For secondary text
	TEXT_LIGHT: '#9CA3AF', // For tertiary text
	WHITE_CARD: '#FFFFFF',
}

// --- Helper Components (Simplified for hardcoding) ---

type ProgressCircleProps = {
	percentageText: string // e.g. "3/4"
	color: string // hex or tailwind color
	skillName?: string
	details?: string
}

export const ProgressCircleItem: React.FC<ProgressCircleProps> = ({ percentageText, color, skillName, details }) => {
	const [numerator, denominator] = percentageText.split('/').map(Number)
	const percentage = (numerator / denominator) * 100

	const radius = 35
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (percentage / 100) * circumference

	return (
		<div className="flex items-center space-x-3">
			<div className="w-12 h-12 relative flex-shrink-0">
				<svg className="w-full h-full transform rotate-90 " viewBox="0 0 75 75">
					<circle cx="37.5" cy="37.5" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="4" />
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
					<span className="text-xs font-medium text-gray-600">{percentageText}</span>
				</div>
			</div>

			<div className="flex flex-col gap-1.5 ml-2">
				<p className="text-sm font-medium text-gray-800">{skillName}</p>
				<p className="text-xs text-gray-500">{details}</p>
			</div>
		</div>
	)
}

const StudentReport: React.FC = () => {
	// Dummy state for month/year filter for Overall Progress chart
	const [currentMonth] = useState('Month') // Default text

	const handleBackClick = () => {
		if (typeof window !== 'undefined') {
			window.history.back()
		}
	}

	const keyFocusAreas = ['Academics', 'Personality Development', 'Brain Development']

	// Simplified data for the line chart (hardcoded points)
	const lineChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
	}
	const chartHeight = 160 // Max height of the chart area
	const chartWidth = 500 // Width of the chart area (approx)

	// Skill Card Data
	const skillCardData = [
		{
			title: 'Basic Academic Skills',
			bgColor: PALETTE.GREEN_LIGHT,
			progressColor: PALETTE.GREEN_DARK, // Assuming this is for progress bar
			overallProgress: '4/5',
			progressPercent: 80,
			iconSet: [
				<FiSearch key="s" className="w-4 h-4" />,
				<FiPercent key="p" className="w-4 mt-4.5 h-4" />,
				<FiAward key="a" className="w-4 h-4" />,
			],
			skills: Array(7).fill({
				name: 'Subject 1',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			}),
		},
		{
			title: 'Critical Academic Skills',
			bgColor: PALETTE.PURPLE_LIGHT,
			progressColor: PALETTE.PURPLE_DARK,
			overallProgress: '4/5',
			progressPercent: 80,
			iconSet: [
				<FiBarChart2 key="b" className="w-4 h-4" />,
				<FiAward key="a" className="w-4 mt-4.5 h-4" />,
				<FiZap key="z" className="w-4 h-4" />,
			],
			skills: [
				{
					name: 'Spoken English',
					details: 'Pedagogy and Plan',
					progress: '3/4',
				},
				{ name: 'Vocabulary', details: 'Pedagogy and Plan', progress: '3/4' },
				{ name: 'Hand Writing', details: 'Pedagogy and Plan', progress: '3/4' },
				{ name: 'Olympiad', details: 'Pedagogy and Plan', progress: '3/4' },
				{ name: 'Experiments', details: 'Pedagogy and Plan', progress: '3/4' },
				{ name: 'Memory Games', details: 'Pedagogy and Plan', progress: '3/4' },
				{ name: 'Memory Games', details: 'Pedagogy and Plan', progress: '3/4' },
			],
		},
	]

	const lifeSkillsData = {
		title: 'Life skill Enhancements',
		bgColor: PALETTE.PINK_LIGHT,
		progressColor: PALETTE.PINK_DARK, // Using the darker pink for progress
		overallProgress: '4/5',
		progressPercent: 80,
		iconSet: [<FiAward key="a" className="w-4 mt-4.5 h-4" />, <FiZap key="z" className="w-4 h-4" />], // Example icons
		skills: [
			{
				name: 'Critical Thinking',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Visualization',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Accountability',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Like Challenges',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Social Skills',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Decision Making',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Focus',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Retention',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Adaptability',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Behavior',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Respect',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Emotional Skills',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
		],
	}
	const personalDevData = {
		// Copied structure from Life Skills for Personal Development
		title: 'Personal Development',
		bgColor: PALETTE.PINK_LIGHT, // Re-using for consistency with right column
		skills: [
			{
				name: 'Discipline',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Confidence',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Presentation',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Written',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Creativity',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
			{
				name: 'Problem Solving',
				details: 'Pedagogy and Plan',
				progress: '3/4',
				color: PALETTE.ACCENT_RED,
			},
		],
	}

	const testResultsData = [
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
			resultColor: PALETTE.GREEN_DARK,
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
			resultColor: PALETTE.ACCENT_RED,
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
			resultColor: PALETTE.GREEN_DARK,
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
			resultColor: PALETTE.ACCENT_RED,
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
			resultColor: PALETTE.GREEN_DARK,
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
			resultColor: PALETTE.ACCENT_RED,
		},
	]

	const headerUser = {
		name: 'Educator Name',
		role: 'Teacher',
		avatarSrc: '/teacher-b2b/profile.png',
	}

	return (
		<>
			<div className="bg-gray-100">
				{/* Header would go here - Assuming it's outside this component's direct render */}
				<Header user={headerUser} />

				{/* Page Title Bar */}
				{/* Page Title Bar */}

				<div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
					<button
						onClick={handleBackClick}
						className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
						aria-label="Go back">
						<FiArrowLeft className="w-5 h-5" />
					</button>
					<h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">Report</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-5 gap-6">
					{/* Student Info Card */}
					<div
						className="lg:col-span-3 bg-white p-5 rounded-2xl"
						style={{
							borderColor: PALETTE.BORDER_GREY,
						}}>
						<div className="flex  items-start sm:items-center gap-4">
							<Image
								src="/teacher-b2b/profile2.png"
								alt="Shlok Agheda"
								width={72}
								height={72}
								className="rounded-full h-24 w-24 flex-shrink-0"
							/>
							<div className="flex-grow">
								<h2 className="text-xl font-semibold" style={{ color: PALETTE.TEXT_DARK }}>
									Shlok Agheda
								</h2>
								<div className="flex flex-wrap items-center gap-1 mt-2">
									<span
										className="text-xs font-medium px-2.5 py-1.5 rounded-l-full"
										style={{
											backgroundColor: PALETTE.ACCENT_PINK,
											color: PALETTE.WHITE_CARD,
										}}>
										Class 8A
									</span>
									<span
										className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full"
										style={{
											backgroundColor: PALETTE.ACCENT_PINK,
											color: PALETTE.WHITE_CARD,
										}}>
										Group A
									</span>
								</div>
							</div>
							<div className="text-[11px] font-medium text-right sm:text-left space-y-0.5 text-black">
								<p>Gender: Male</p>
								<p>DOB: 15 Jun 2015</p>
								<p>Email: example@gm.com</p>
								
								<p>City: Mumbai</p>
								<p>State: Maharashtra</p>
							</div>
						</div>
						<div className="pt-4 ">
							<p className="text-sm font-bold mb-3" style={{ color: PALETTE.TEXT_DARK }}>
								Key Focus Area
							</p>
							<div className="flex flex-wrap gap-4">
								{keyFocusAreas.map(area => (
									<button
										key={area}
										className="text-xs px-2 py-2 text-black rounded-full border"
										style={{
											backgroundColor: '#F3F4F6',
											borderColor: PALETTE.BORDER_GREY,
										}}>
										{area}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] p-2 md:p-5 md:grid-cols-[2fr_1fr] gap-4">
					{/* ====== Overall Charts start ====== */}

					<div
						className="p-5 rounded-2xl"
						style={{
							backgroundColor: PALETTE.WHITE_CARD,
						}}>
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
							<h3 className="text-base font-semibold" style={{ color: PALETTE.ACCENT_PINK }}>
								Overall Progress
							</h3>
						</div>
						<div className="flex items-start justify-between px-2">
							<div className="flex flex-col flex-wrap gap-x-4 gap-y-1 mb-4 text-xs">
								<div className="flex items-center">
									<div className="w-16 h-5 rounded-full mr-2" style={{ backgroundColor: PALETTE.ACCENT_BLUE }}></div>
									<span style={{ color: PALETTE.TEXT_MEDIUM }}>Basic Academic Skills</span>
								</div>
								<div className="flex items-center">
									<div className="w-16 h-5 rounded-full mr-2" style={{ backgroundColor: PALETTE.ACCENT_PURPLE }}></div>
									<span style={{ color: PALETTE.TEXT_MEDIUM }}>Critical Academic Skills</span>
								</div>
								<div className="flex items-center">
									<div className="w-16 h-5 rounded-full mr-2" style={{ backgroundColor: PALETTE.ACCENT_RED }}></div>
									<span style={{ color: PALETTE.TEXT_MEDIUM }}>Personality Development</span>
								</div>
							</div>
							<div className="flex items-center gap-2 mt-2 sm:mt-0">
								<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
									<span>{currentMonth}</span>
									<FiChevronDown className="w-4 h-4 ml-1" />
								</div>
								<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
									<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
									<span>2025</span>
									<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
								</div>
							</div>
						</div>
						{/* Simplified SVG Line Chart */}
						<div className="w-full overflow-x-auto">
							<svg viewBox={`0 0 ${chartWidth + 40} ${chartHeight + 30}`} className="min-w-[500px]">
								{/* Y-axis lines (simplified) */}
								{[0, 25, 50, 75, 100].map(yVal => (
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
										x={35 + i * (chartWidth / (lineChartData.labels.length - 0.6))}
										y={chartHeight + 20}
										fontSize="12"
										fill={PALETTE.TEXT_MEDIUM}
										textAnchor="middle">
										{label}
									</text>
								))}
								{/* Data lines */}
								{lineChartData.datasets.map(dataset => (
									<polyline
										key={dataset.color}
										fill="none"
										stroke={dataset.color}
										strokeWidth="2"
										points={dataset.points
											.map(
												(p, i) => `${35 + i * (chartWidth / (lineChartData.labels.length - 1))},${chartHeight - (p / 100) * chartHeight}`
											)
											.join(' ')}
									/>
								))}
							</svg>
						</div>
					</div>
					{/* ====== Overall Charts ends ====== */}

					{/* Personal Development Card */}
					<div
						className="p-5 h-full rounded-2xl relative"
						style={{
							backgroundColor: PALETTE.WHITE_CARD,
						}}>
						<h3 className="text-base font-semibold mb-3 text-[#FF3366]">{personalDevData.title}</h3>
						<div className="space-y-3  custom-scrollbar overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
							{' '}
							{/* Custom scrollbar */}
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
						{/* The thin scrollbar visual element from the image - hard to replicate exactly without custom overlay */}
						<div className="absolute right-1 top-16 bottom-5 w-1 bg-gray-300 rounded-full opacity-50 hidden sm:block"></div>
					</div>
				</div>
				<main
					className="grid h-full 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-[2fr_1fr] 
    gap-4 
    p-4 
    bg-gray-100">
					{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl p-3 ">
                    <div className="bg-gray-200 rounded-2xl p-4">
                        <div className="p-5 bg-blue-500 rounded-xl">Basic acadmics</div>
                        <div className="mt-2">
                            {skillCardData.map((card, index) => (
                                <div className="flex gap-4" key={index}>
                                    <ProgressCircleItem
                                percentageText={card.overallProgress}
                                color={card.progressColor}
                            />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-red-200 rounded-2xl px-2 py-4"></div>
                </div> */}
					<div className="grid bg-white rounded-2xl h-full overflow-y-auto custom-scrollbar grid-cols-1 lg:grid-cols-2 p-4 gap-6 items-start">
						{skillCardData.map((card, cardIndex) => (
							<div key={cardIndex} className="p-4 rounded-2xl overflow-y-auto bg-gray-100">
								<div
									style={{
										backgroundColor: card.bgColor,
									}}
									className={` p-3 mb-2 rounded-xl`}>
									<div className="flex justify-between items-center mb-2">
										<h3 className="text-base font-bold" style={{ color: PALETTE.TEXT_DARK }}>
											{card.title}
										</h3>
										<div className="flex space-x-1.5 text-xs" style={{ color: PALETTE.TEXT_MEDIUM }}>
											{card.iconSet}
										</div>
									</div>
									<p className="text-xs mb-1" style={{ color: card.progressColor }}>
										Overall Progress
									</p>
									<div className="items-center mb-3">
										<span className="text-lg font-semibold mr-2" style={{ color: PALETTE.TEXT_DARK }}>
											{card.overallProgress}
										</span>
										<div className="flex gap-2 items-center">
											<div className="flex-grow h-1.5 rounded-full" style={{ backgroundColor: PALETTE.WHITE_CARD }}>
												<div
													className="h-full rounded-full"
													style={{
														width: `${card.progressPercent}%`,
														backgroundColor: card.progressColor,
													}}></div>
											</div>
											<span className="text-xs font-semibold ml-2" style={{ color: PALETTE.TEXT_DARK }}>
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
					<div className="p-5 h-full custom-scrollbar rounded-2xl overflow-y-auto shadow-sm bg-white row-span-2">
						<div
							style={{
								backgroundColor: lifeSkillsData.bgColor,
							}}
							className={` p-3 mb-2 rounded-xl`}>
							<div className="flex justify-between items-center mb-2">
								<h3 className="text-base font-bold" style={{ color: PALETTE.TEXT_DARK }}>
									{lifeSkillsData.title}
								</h3>
								<div className="flex space-x-1.5 text-xs" style={{ color: PALETTE.TEXT_MEDIUM }}>
									{lifeSkillsData.iconSet}
								</div>
							</div>
							<p className="text-xs mb-1" style={{ color: lifeSkillsData.progressColor }}>
								Overall Progress
							</p>
							<div className=" mb-3">
								<span className="text-lg font-medium mr-2" style={{ color: PALETTE.TEXT_DARK }}>
									{lifeSkillsData.overallProgress}
								</span>
								<div className="flex gap-1 items-center">
									<div className="flex-grow h-1.5 rounded-full" style={{ backgroundColor: PALETTE.WHITE_CARD }}>
										<div
											className="h-full rounded-full"
											style={{
												width: `${lifeSkillsData.progressPercent}%`,
												backgroundColor: lifeSkillsData.progressColor,
											}}></div>
									</div>
									<span className="text-xs font-semibold ml-2" style={{ color: PALETTE.TEXT_DARK }}>
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
					{/* ===== Table started ===== */}

					<div
						className="rounded-2xl h-full custom-scrollbar overflow-y-auto shadow-sm "
						style={{
							backgroundColor: PALETTE.WHITE_CARD,
							borderColor: PALETTE.BORDER_GREY,
						}}>
						<table className="w-full text-xs ">
							<thead className="bg-gray-200">
								<tr>
									{['Test', 'Date', 'Date', 'Total Marks', 'How', 'Marks', 'Results'].map((header, index) => (
										<th key={index} className="p-2.5 text-left font-semibold">
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{testResultsData.map((row, i) => (
									<tr key={i} className="odd:bg-white even:bg-gray-100" style={{ borderColor: PALETTE.BORDER_GREY }}>
										<td className="p-2.5" style={{ color: PALETTE.TEXT_DARK }}>
											{row.test}
										</td>
										<td className="p-2.5" style={{ color: PALETTE.TEXT_MEDIUM }}>
											{row.date1}
										</td>
										<td className="p-2.5" style={{ color: PALETTE.TEXT_MEDIUM }}>
											{row.date2}
										</td>
										<td className="p-2.5" style={{ color: PALETTE.TEXT_MEDIUM }}>
											{row.totalMarks}
										</td>
										<td className="p-2.5" style={{ color: PALETTE.TEXT_MEDIUM }}>
											{row.how}
										</td>
										<td className="p-2.5 font-semibold" style={{ color: PALETTE.TEXT_DARK }}>
											{row.marks}
										</td>
										<td className="p-2.5 font-semibold" style={{ color: row.resultColor }}>
											{row.result}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</main>

				<Footer />
			</div>
		</>
	)
}

export default StudentReport
