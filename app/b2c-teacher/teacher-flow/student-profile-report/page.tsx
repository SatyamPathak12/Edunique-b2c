'use client'

import React, { useState } from 'react'

import { FaInfoCircle, FaCalendarAlt } from 'react-icons/fa'

import Image from 'next/image' // For profile picture
import Header from '@/components/layout/TeacherB2CHeader'
import Footer from '@/components/layout/Footer'
import ChartsReportTeacherB2C from '@/components/teacher-b2c/common-components/ChartB2CTeacher'
import BackButton from '@/components/common-components/BackButton'
import TeacherB2CWrapper from '@/components/teacher-b2c/common-components/TeacherB2CPageWrapper'
import Link from 'next/link'
import MonthEndReportModal from '../../ct-pop-ups/popupComponent/MonthEndReport'
import { FiCalendar, FiInfo } from 'react-icons/fi'
// import MaxWidthWrapper from "../max-width-wrapper";

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

const ClassesCard = () => {
	const [month, setMonth] = useState(false);
	return (
		<div className="flex flex-col gap-4 p-4  rounded-2xl bg-white">
			{/* Card 1 - Student Journey Report */}
			<Link href="/b2c-teacher/teacher-flow/student-progress-report-topics" className="bg-white rounded-2xl border p-3">
				<div className="flex justify-between items-center mb-1">
					<h3 className="sm:text-[24px] text-[20px] w-[15ch]  font-bold text-[#FFCC00]">Student Journey Report</h3>
					<Image src="/teacher/b2c/map.png" alt="Shlok Agheda" width={72} height={72} className="" />
				</div>
				<div className="flex items-center gap-2 text-gray-600 text-sm">
					<FiInfo size={17}/>
					<span>Next Update Due: October 16 2025</span>
				</div>
			</Link>

			{/* Card 2 - Month End Report */}
			<button onClick={() => setMonth(true)} className="bg-white rounded-2xl  p-3 border">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-[24px] font-bold w-[10ch] text-left text-[#3366FF]">Month End Report</h3>
					<Image src="/teacher/b2c/calender.png" alt="Shlok Agheda" width={52} height={52} className="" />
				</div>
				<div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
					<FiInfo size={17}/>
					<span>Month: June</span>
				</div>
				<div className="flex items-center gap-2 text-gray-600 text-sm">
					<FiCalendar size={17}/>
					<span>Deadline 16 / 10 / 25</span>
				</div>
			</button>
			<MonthEndReportModal isOpen={month} onClose={() => setMonth(false)} />
		</div>
	)
}

type ProgressCircleProps = {
	percentageText: string
	color: string
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


	const keyFocusAreas = ['Academics', 'Personality Development', 'Brain Development']

	return (
		<>
				{/* Header would go here - Assuming it's outside this component's direct render */}
				<Header activeState="Students" />

				<BackButton Heading='Student Profile' />

				<TeacherB2CWrapper>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
						{/* Student Info Card */}
						<div
							className="lg:col-span-2 h-fit  p-2 sm:p-3 rounded-2xl"
							style={{
								borderColor: PALETTE.BORDER_GREY,
								backgroundImage: "url('/images/brandpatternreport.png')",
								backgroundSize: '100% 100%',
								backgroundRepeat: 'no-repeat',
							}}>
							<div className="bg-white  rounded-2xl px-4 py-2 ">
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
											<h2 className="text-xl font-semibold" style={{ color: PALETTE.TEXT_DARK }}>
												Shlok Agheda
											</h2>
											<div className="flex items-center gap-1 mt-2">
												<span
													className="text-xs whitespace-nowrap font-medium px-2.5 py-1.5 rounded-l-full"
													style={{
														backgroundColor: PALETTE.ACCENT_PINK,
														color: PALETTE.WHITE_CARD,
													}}>
													Class 8A
												</span>
												<span
													className="text-xs whitespace-nowrap font-meduim px-2.5 py-1.5 rounded-r-full"
													style={{
														backgroundColor: PALETTE.ACCENT_PINK,
														color: PALETTE.WHITE_CARD,
													}}>
													Group A
												</span>
											</div>
										</div>
									</div>
									<div className="text-xs font-medium text-right sm:text-left space-y-0.5 text-black">
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
								<div className="pt-8 ">
									<p className="text-sm font-bold mb-3" style={{ color: PALETTE.TEXT_DARK }}>
										Parent Control
									</p>
									<div className="flex flex-wrap gap-4">
										<button
											className="text-xs px-2 py-2 text-black rounded-full border"
											style={{
												backgroundColor: '#F3F4F6',
												borderColor: PALETTE.BORDER_GREY,
											}}>
											+91 0000000000
										</button>
										<button
											className="text-xs px-2 py-2 text-black rounded-full border"
											style={{
												backgroundColor: '#F3F4F6',
												borderColor: PALETTE.BORDER_GREY,
											}}>
											example@gm.com
										</button>
									</div>
								</div>
							</div>
						</div>
						<ClassesCard />
					</div>

					<div className="  rounded-2xl my-4 bg-[#f9fafb] p-3 border border-[#e5e7eb]">Progress Report</div>
					<ChartsReportTeacherB2C />
				</TeacherB2CWrapper>
				<Footer />
		</>
	)
}

export default StudentReport

// To use custom scrollbar styles with Tailwind:
// 1. npm install -D tailwind-scrollbar
// 2. Add to tailwind.config.js plugins: require('tailwind-scrollbar'),
// Then classes like scrollbar-thin, scrollbar-thumb-gray-400 etc. will work.
