'use client'
import Header from '@/components/layout/TeacherB2CHeader'
import React from 'react'
import Footer from '../layout/Footer'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { FaSearch } from 'react-icons/fa'
import { Star as StarIcon } from "lucide-react";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
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


const renderStars = (rating: number, size: number = 20) => {
	return Array.from({ length: 5 }, (_, i) =>
		i < rating ? (
			<StarIcon key={i} size={size} className="text-[#FFCC00] fill-[#FFCC00]" />
		) : (
			<StarIcon
				key={i}
				size={size}
				className="text-[#FFCC00]"
				fill="none"
				strokeWidth={1.5}
			/>
		)
	);
};


const studentData = [
	{
		name: 'Student 1',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: '-',
		total: '30/50',
	},
	{
		name: 'Student 2',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
	{
		name: 'Student 3',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
	{
		name: 'Student 4',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
	{
		name: 'Student 5',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
	{
		name: 'Student 6',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
	{
		name: 'Student 7',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '30/50',
	},
]

const timetableData = [
	// 9:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 10:00
	[null, null, null, null, null],
	// 11:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 12:00
	[
		null,
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '12:00 PM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		null,
	],
	// 13:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 14:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 15:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		null,
	],
	// 16:00
	[
		null,
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 17:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		null,
	],
	// 18:00
	[null, null, null, null, null],
]


interface ChapterAccordionItem {
	id: string;
	name: string;
	chapterId: string; // Link to ChapterSubTab
	// Potentially content for when expanded, but image doesn't show it
}
interface ChapterSubTab {
	id: string;
	name: string;
	categoryId: string; // Link to TopCategoryTab
}
const classesAllocated = ['AS Basic', 'Olyp M G1', 'Olyp M G3']
const sampleChapterSubTabs: ChapterSubTab[] = [
	{ id: "ch1", name: "Chapter 1", categoryId: "cat1" },
	{ id: "ch2", name: "Chapter 2", categoryId: "cat1" },
	{ id: "ch3", name: "Chapter 3", categoryId: "cat1" },
	{ id: "ch4", name: "Chapter Alpha", categoryId: "cat2" },
	{ id: "ch5", name: "Chapter Beta", categoryId: "cat2" },
];

const classSchedule = [
	{ time: '10:30 AM', title: 'Basic of C++', subTitle: ["Course Name", "Batch Name", "5 Students"] },
	{ time: '10:30 AM', title: 'Teacher’s Monthly Meeting', subTitle: ["Admin, 5 Teachers"] },
	{ time: '10:30 AM', title: 'Math Unit 4', subTitle: ["Course Name", "Batch Name", "1 Students"] },
	{ time: '10:30 AM', title: 'Fraction', subTitle: ["Course Name", "Batch Name", "5 Students"] },
]

const sampleChapterAccordions: ChapterAccordionItem[] = Array.from(
	{ length: 2 },
	(_, i) => ({
		id: `acc${i + 1}`,
		name: "Chapter Name", // This is repeated in the image, make dynamic if needed
		chapterId: sampleChapterSubTabs[0].id, // Default to first chapter for now
	})
);

const TeacherDashboard = () => {
	const [meeting, setMeeting] = useState(false)
	const [uploadImage, setUploadImage] = useState(false);
	const [meetingDetails, setMeetingDetails] = useState(false);
	const [progress] = useState(60)
	const enrolledCount = 20
	const averageScore = 75
	const [activeTab, setActiveTab] = useState('class-a');
	const [openAccordionId, setOpenAccordionId] = useState<string | null>("acc1");
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
	const handleAccordionToggle = (accordionId: string) => {
		console.log(accordionId);
		setOpenAccordionId((prevId) =>
			prevId === accordionId ? null : accordionId
		);
	};

	const [showLeaveModal, setShowLeaveModal] = useState(false);
	const [showScheduleModal, setShowScheduleModal] = useState(false);
	const handleToolClick = (label: string) => {
		if (label === "Apply for leave") {
			setShowLeaveModal(true);
		} 
	};
	const router = useRouter();
	return (
		<div className="bg-[#F9FAFB]">
			<Header activeState="Dashboard" />
			<TeacherB2CWrapper>
				<section className="bg-[#e3e3e3]">
					<main className="p-2">
						<div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-[4.5fr_3fr_2.5fr] gap-4">
							{/* Profile Card */}
							<div className="bg-white rounded-2xl p-4  space-y-4">
								<div className="flex flex-wrap items-start sm:items-center justify-between gap-4">
									<div className="flex gap-6 items-center">
										<Image src="/teacher-b2b/profile.png" alt="Profile" width={90} height={90} className="h-22 w-22 object-cover rounded-full" />
										<div>
											<h2 className="text-lg font-semibold whitespace-nowrap mb-1">Ronak Mathur</h2>
											<div className="text-sm text-[#6B7280] mb-1 flex">{renderStars(4)}</div>
											<div className='flex gap-2'>
												<span className="bg-[#FF3366] text-white px-2 py-2 text-xs rounded-full inline-block mt-1">Group A</span>
												<span className="bg-[#E5E7EB] text-black px-2 py-2 text-xs rounded-full inline-block mt-1">Part Time</span>
											</div>
										</div>
									</div>
									<div className="text-xs font-medium text-black space-y-1">
										<p><span className='font-bold'>Gender:</span> Male</p>
										<p><span className='font-bold'>DOB:</span> 5 Jun 2015</p>
										<p className="whitespace-nowrap"><span className='font-bold'>Email:</span> example@gmail.com</p>
										<p><span className='font-bold'>City:</span> Mumbai</p>
										<p><span className='font-bold'>State:</span> Maharashtra</p>
									</div>
								</div>

								<div>
									<h4 className="font-semibold text-sm mb-2">Classes Involved</h4>
									<div className="flex flex-wrap gap-3">
										{classesAllocated.map(cls => (
											<span key={cls} className="text-sm border border-[#B0B0B0] bg-[#F3F4F6] px-2 py-2 rounded-full">
												{cls}
											</span>
										))}
									</div>
								</div>

								<div className='flex flex-nowrap overflow-x-auto custom-scrollbar w-full gap-4 pr-[10%]'>
									<div className='shrink-0 space-y-2 bg-[#F9FAFB] rounded-2xl p-4 w-[90%]'>
										<h1 className="text-xl font-medium">AS Basic</h1>
										<div className="h-[200px] w-full overflow-hidden rounded-2xl">
											<Image src="/forest.avif" alt="Demo" width={400} height={200} className="w-full object-cover" />
										</div>
										<div className="flex justify-between items-center">
											<span className="text-m font-medium">Demo Video</span>
											<button
												onClick={() => setUploadImage(true)}
												className="text-sm font-medium py-1 px-4 rounded-full text-black"
												style={{ backgroundColor: PALETTE.GREEN_LIGHT }}>
												Edit
											</button>
										</div>
									</div>

									<div className='shrink-0 space-y-2 bg-[#F9FAFB] rounded-2xl p-4 w-[90%]'>
										<h1 className="text-xl font-medium">Olyp M G1</h1>
										<div className="h-[200px] w-full overflow-hidden rounded-2xl">
											<Image src="/forest.avif" alt="Demo" width={400} height={200} className="w-full object-cover" />
										</div>
										<div className="flex justify-between items-center">
											<span className="text-m font-medium">Demo Video</span>
											<button
											onClick={() => setUploadImage(true)}
												className="text-sm font-medium py-1 px-4 rounded-full text-black"
												style={{ backgroundColor: PALETTE.GREEN_LIGHT }}>
												Edit
											</button>
										</div>
									</div>
								</div>


							</div>

							{/* Classes List */}
							<div className="bg-white rounded-2xl p-4 ">
								<div className="flex justify-center items-center mb-4">
									<h2 className="font-medium text-base">Scheduled Classes</h2>
								</div>
								<div className="space-y-3">
									{classSchedule.map((cls, index) => (
										<div key={index} className="flex gap-2 justify-between items-center bg-[#F9FAFB] p-2 rounded-2xl">
											<div className="flex items-center h-full gap-2">
												<div>
													<p className="text-sm flex items-center justify-center flex-col rounded-2xl font-semibold bg-[#F3F4F6] p-4 leading-tight min-h-[80px] text-center">
														{cls.time.split(' ').map((part, i) => (
															<span key={i} className="block">
																{part}
															</span>
														))}
													</p>
												</div>
												<div className='space-y-1'>
													<p className="text-sm font-semibold">{cls.title}</p>
													{cls.subTitle.map((text, i) => {
														return (

															<p key={i} className="text-xs text-[#6B7280]">{text}</p>
														)
													})}
												</div>
											</div>
											<div className='flex flex-col gap-1'>
												<button onClick={() => setMeetingDetails(true)} className="text-black text-m px-4 py-1 rounded-full flex items-center justify-center bg-[#F3F4F6]">
													<svg
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01"
															stroke="#000"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>

												</button>
												<button className="text-white text-m px-5 py-3 rounded-full" style={{ backgroundColor: PALETTE.ACCENT_PINK }}>
													Start
												</button>
											</div>
										</div>


									))}
								</div>
								<div className="flex justify-end">
									<button onClick={() => {setShowScheduleModal(true)}}  className="mt-4 px-3 font-medium text-right bg-[#3366FF] text-white py-3 rounded-full">Schedule Meeting</button>
								</div>
							</div>

							{/* Teacher Toolkit */}
							<div className="bg-white rounded-2xl p-3  w-full max-w-sm mx-auto max-h-[568px] custom-scrollbar overflow-y-auto">
								<h2 className="font-semibold text-lg text-black mb-4">
									Teacher Toolkit
								</h2>
								<div className="space-y-3">
									{toolkitItems.map((tool) => {
										const Icon = tool.icon;
										const commonClasses =
											"flex items-center gap-4 text-black bg-gray-50 p-4 rounded-2xl border border-gray-200 font-medium cursor-pointer transition-all hover:bg-[#F9FAFB] hover:border-[#6B7280]";

										if (!tool.href) {
											return (
												<button
													key={tool.label}
													onClick={() => handleToolClick(tool.label)}
													className="flex w-full items-center gap-4 text-black bg-gray-50 p-4 rounded-2xl border border-gray-200 font-medium cursor-pointer transition-all hover:bg-[#F9FAFB] hover:border-[#6B7280]"
												>
													<Icon className="w-6 h-6 text-gray-600 flex-shrink-0" />
													<span className="text-base">{tool.label}</span>
												</button>
											);
										}

										return (
											<Link key={tool.href} href={tool.href} className={commonClasses}>
												<Icon className="w-6 h-6 text-gray-600 flex-shrink-0" />
												<span className="text-base">{tool.label}</span>
											</Link>
										);
									})}
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-2 md:gap-4 py-2">
							{/* First item - Full width on sm to md, 40% on lg */}
							<div className="rounded-2xl bg-white py-4 px-4 lg:px-8 space-y-6">
								{/* --- Custom Tab Navigation (The only part that is changed) --- */}
								<div className="flex items-center space-x-8">
									{/* Tab Button 1: AS Basic */}
									<button
										onClick={() => setActiveTab('class-a')}
										className={`relative px-1 pb-3 text-sm font-medium sm:text-base sm:font-semibold transition-colors duration-300 ${activeTab === 'class-a' ? 'text-[#3366FF]' : 'text-[#6B7280] hover:text-[#3366FF]'}`}
									>
										AS Basic
										{activeTab === 'class-a' && (
											<motion.div
												className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] bg-[#3366FF] rounded-full"
												layoutId="active-tab-underline"
												transition={{ type: 'spring', stiffness: 350, damping: 30 }}
											/>
										)}
									</button>

									{/* Tab Button 2: Olymp. M G1 */}
									<button
										onClick={() => setActiveTab('class-b')}
										className={`relative px-1 pb-3 text-sm font-medium sm:text-base sm:font-semibold transition-colors duration-300 ${activeTab === 'class-b' ? 'text-[#3366FF]' : 'text-[#6B7280] hover:text-[#3366FF]'}`}
									>
										Olymp. M G1
										{activeTab === 'class-b' && (
											<motion.div
												className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] bg-[#3366FF] rounded-full"
												layoutId="active-tab-underline"
												transition={{ type: 'spring', stiffness: 350, damping: 30 }}
											/>
										)}
									</button>

									{/* Tab Button 3: Olymp. M G2 */}
									<button
										onClick={() => setActiveTab('class-c')}
										className={`relative px-1 pb-3 text-sm font-medium sm:text-base sm:font-semibold transition-colors duration-300 ${activeTab === 'class-c' ? 'text-[#3366FF]' : 'text-[#6B7280] hover:text-[#3366FF]'}`}
									>
										Olymp. M G2
										{activeTab === 'class-c' && (
											<motion.div
												className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] bg-[#3366FF] rounded-full"
												layoutId="active-tab-underline"
												transition={{ type: 'spring', stiffness: 350, damping: 30 }}
											/>
										)}
									</button>
								</div>

								{/* --- Conditional Content Display (Your exact internal code is preserved) --- */}
								<div className="mt-4">
									{activeTab === 'class-a' && (
										<>
											{/* Progress Info Box - IDENTICAL TO YOUR ORIGINAL */}
											<div className="flex flex-col md:flex-row justify-between items-center gap-4 rounded-2xl bg-[#F9FAFB] p-4">
												<div className="w-full md:w-1/2 border-r-2 border-r-black pr-6">
													<p className="text-lg font-medium text-muted-foreground">Class Completion Progress</p>
													<p className="text-sm font-semibold">{progress} %</p>
													<Progress value={progress} className={`h-2 mt-2 rounded-full`} />
												</div>
												<div className="flex gap-10 text-sm md:text-base">
													<div>
														<p className="font-semibold text-center">{enrolledCount}</p>
														<p className="text-muted-foreground" style={{ color: PALETTE.GREEN_DARK }}>
															Students Enrolled
														</p>
													</div>
													<div>
														<p className="font-semibold text-center">{averageScore} % </p>
														<p className="text-muted-foreground" style={{ color: PALETTE.GREEN_DARK }}>
															Average Score
														</p>
													</div>
												</div>
											</div>

											{/* Students Table - IDENTICAL TO YOUR ORIGINAL */}
											<div className="mt-6">
												<h2 className="text-lg font-semibold mb-3">Students Enrolled</h2>
												<div className="overflow-x-auto rounded-xl">
													<table className="min-w-[500px] lg:min-w-full rounded-2xl overflow-x-auto custom-scrollbar">
														<thead>
															<tr className="text-left bg-[#3366FF33] text-sm font-semibold text-black">
																<th className="p-3">Student name</th>
																<th className="p-3">Date</th>
																<th className="p-3">Exam 1</th>
																<th className="p-3">Exam 2</th>
																<th className="p-3">Total</th>
															</tr>
														</thead>
														<tbody className="text-sm text-black">
															{studentData.map((student, index) => (
																<tr key={index} className="odd:bg-[#3366FF1A] even:bg-white">
																	<td className="flex items-center gap-2 px-2 py-1">
																		<Image src={student.image} alt={student.name} width={32} height={32} className="rounded-full" />
																		{student.name}
																	</td>
																	<td className="p-3">{student.date}</td>
																	<td className="p-3">{student.exam1}</td>
																	<td className="p-3">{student.exam2}</td>
																	<td className="p-3">{student.total}</td>
																</tr>
															))}
														</tbody>
													</table>
												</div>
											</div>
										</>
									)}

									{/* Placeholder content for other tabs */}
									{activeTab === 'class-b' && (
										<div className="py-16 text-center text-gray-500">Class B content here...</div>
									)}
									{activeTab === 'class-c' && (
										<div className="py-16 text-center text-gray-500">Class C content here...</div>
									)}
								</div>
							</div>

							{/* Second item - 50% width on md, 40% on lg */}
							<div className="bg-white rounded-2xl p-4">
								<div className="space-y-4">
									{/* Header */}
									<div>
										<h1 className="text-lg font-semibold">Pedagogy & Class Flows</h1>
									</div>

									{/* Top Bar */}
									<div className="flex items-center justify-between gap-2">
										<div className="relative w-full max-w-md">
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black z-1 ">
												<FaSearch />
											</span>
											<Input
												type="text"
												placeholder="Search"
												className="w-full pl-10 pr-4 py-2 border border-[#6B7280] rounded-full  focus:outline-none focus:ring-2 focus:ring-[#3366FF1A]0"
											/>
										</div>
										<button onClick={() => router.push('/b2c-teacher/teacher-flow/pedagogy')} className="rounded-full bg-[#3366FF1A] px-4 py-2 whitespace-nowrap font-medium text-[#3366FF]" >
											View All
										</button>
									</div>

									{/* Chapter Accordions */}
									<div
										className={`space-y-3 h-full overflow-y-auto pr-2 scrollbar-thin`}
									>
										{" "}
										{/* Adjust max-h */}
										{sampleChapterAccordions.map((acc) => (
											<ChapterAccordion
												key={acc.id}
												item={acc}
												isOpen={openAccordionId === acc.id}
												onToggle={() => handleAccordionToggle(acc.id)}
											/>
										))}
									</div>

								</div>
							</div>

							{/* Third item - 50% width on md, 20% on lg */}
							<div className="bg-white rounded-2xl p-4">
								<div className="overflow-x-auto">
									<div className="">
										<h2 className="text-lg font-semibold mb-4">Timetable</h2>

										{/* Days Header */}
										<div className="grid grid-cols-[80px_repeat(5,minmax(120px,1fr))] border-b text-sm text-[#6B7280] font-medium">
											<div></div>
											<div className="text-center py-2">
												14
												<br />
												Mon
											</div>
											<div className="text-center py-2">
												15
												<br />
												Tue
											</div>
											<div className="text-center py-2">
												16
												<br />
												Wed
											</div>
											<div className="text-center py-2">
												17
												<br />
												Thu
											</div>
											<div className="text-center py-2">
												18
												<br />
												Fri
											</div>
										</div>

										{/* Time Slots */}
										{['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time, rowIdx) => (
											<div key={time} className="grid grid-cols-[80px_repeat(5,minmax(120px,1fr))] border-b text-sm">
												{/* Time Label */}
												<div className="text-[#6B7280] py-4 px-4">{time}</div>

												{/* Time cells */}
												{[0, 1, 2, 3, 4].map(colIdx => {
													const slot = timetableData[rowIdx]?.[colIdx]
													return (
														<div key={colIdx} className="p-2">
															{slot ? (
																<div
																	onClick={() => setMeeting(true)}
																	className={`rounded-xl p-2 text-xs border ${slot.bg} ${slot.bor} flex cursor-pointer justify-between items-start`}>
																	<div className="flex flex-col justify-between items-start">
																		<div className="font-medium">{slot.title}</div>
																		<div className="text-black">{slot.subtitle}</div>
																	</div>
																	<div className="text-right text-[10px] text-black self-start">{slot.time}</div>
																</div>
															) : (
																<div className="h-auto"></div>
															)}
														</div>
													)
												})}
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="bg-white rounded-2xl p-4">
								<div className="space-y-4">
									{/* Top Bar */}
									<div className="flex items-center justify-between gap-2">
										<h1 className="text-lg font-semibold">Curriculum</h1>
										<button onClick={() => router.push('/b2c-teacher/teacher-flow/curriculum')} className="rounded-full bg-[#3366FF1A] px-4 py-2 whitespace-nowrap font-medium text-[#3366FF]" >
											View All
										</button>
									</div>


									<div className="space-y-2">
										{sessionData.map((item, index) => {
											const isOpen = activeIndex === index;

											return (
												<div
													key={index}
													className={`${isOpen ? "p-4" : "border border-[#E5E7EB]"
														} relative z-20 rounded-2xl overflow-hidden transition-all`}
												>
													{/* Filtered background image */}
													<div
														className="absolute inset-0 bg-cover rounded-3xl bg-repeat -z-10"
														style={{
															backgroundImage: 'url("/pattern.png")',
															filter: "brightness(0.7) grayscale(30%)",
														}}
													/>
													<button
														onClick={() => setActiveIndex(isOpen ? null : index)}
														className={`${isOpen ? "bg-white px-6 py-2" : ""
															} w-full bg-[#F9FAFB] rounded-2xl flex justify-between items-center px-4 py-3 font-medium focus:outline-none`}
													>
														<span className="text-lg">{isOpen ? item.title : "Session Name / Number"}</span>
														<div>
															{isOpen ? (
																<div className="flex gap-3 text-[#6B7280] text-xs items-center">
																	<p>Periods: 18</p>
																	<p>Marks: 20</p>
																	<svg
																		width={20}
																		height={20}
																		viewBox="0 0 24 25"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<rect
																			width={24}
																			height={24}
																			rx={12}
																			transform="matrix(1 0 0 -1 0 24.5)"
																			fill="black"
																			fillOpacity="0.3"
																		/>
																		<path
																			d="M6 15.5L12 9.5L18 15.5"
																			stroke="white"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																		/>
																	</svg>
																</div>
															) : (
																<IoIosArrowDown className="text-xl text-gray-600" />
															)}
														</div>
													</button>

													<AnimatePresence initial={false}>
														{isOpen && (
															<motion.div
																initial={{ height: 0, opacity: 0 }}
																animate={{ height: "auto", opacity: 1 }}
																exit={{ height: 0, opacity: 0 }}
																transition={{ duration: 0.3 }}
															>
																<div className="px-4 py-4 rounded-2xl mt-2 bg-white text-sm text-[#6B7280] whitespace-pre-line">
																	{item.content}
																</div>
															</motion.div>
														)}
													</AnimatePresence>
												</div>
											);
										})}
									</div>

								</div>
							</div>
						</div>
					</main>
				</section>
			</TeacherB2CWrapper>
			<Footer />
			<RescheduleMeetingStudent isOpen={meeting} onClose={() => setMeeting(false)} />
			<ScheduleMeeting isOpen={showScheduleModal} onClose={() => setShowScheduleModal(false)} />
			<EditDemoVideo isOpen={uploadImage} onClose={() => setUploadImage(false)} />
			<MeetingDetailStudent isOpen={meetingDetails} onClose={() => setMeetingDetails(false)} />
			<LeaveApplicationModal isOpen={showLeaveModal} onClose={() => setShowLeaveModal(false)}/>
		</div>
	)
}

export default TeacherDashboard

import Link from 'next/link';
import {
	FiCalendar,
	FiHelpCircle,
	FiFileText,
	FiAward,
	FiVideo,
	FiSun,
	FiClipboard,
	FiCheckSquare
} from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io'
import TeacherB2CWrapper from './common-components/TeacherB2CPageWrapper'
import { useRouter } from 'next/navigation'
import MeetingDetailStudent from '@/app/b2c-teacher/ct-pop-ups/popupComponent/MeetingDetailStudent'
import RescheduleMeetingStudent from '@/app/b2c-teacher/ct-pop-ups/popupComponent/RescheduleMeetingStudent'
import EditDemoVideo from '@/app/b2c-teacher/ct-pop-ups/popupComponent/EditVideoDemo'
import { PiSquaresFourLight } from 'react-icons/pi'
import LeaveApplicationModal from '@/app/b2c-teacher/ct-pop-ups/popupComponent/ApplyLeaveModal'
import { BsFilm } from 'react-icons/bs'
import ScheduleMeeting from '@/app/b2c-teacher/ct-pop-ups/popupComponent/ScheduleMeeting'

// A custom icon component for "Assessment" to match the design
const AssessmentIcon = () => (
	<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-current text-xs font-bold">
		A+
	</div>
);

type ToolkitItem = {
	label: string;
	icon: React.ElementType;
	href?: string;
};

const toolkitItems: ToolkitItem[] = [
	{ label: "BW test", icon: FiCalendar, href: "/b2c-teacher/teacher-flow/bi-weekly-test" },
	{ label: "Assessment", icon: AssessmentIcon, href: "/b2c-teacher/teacher-flow/assessment" },
	{ label: "Quiz", icon: FiHelpCircle, href: "/b2c-teacher/teacher-flow/quiz" },
	{ label: "Worksheet", icon: FiFileText, href: "/b2c-teacher/teacher-flow/worksheet" },
	{ label: "DMIT Results", icon: FiAward, href: "/b2c-teacher/teacher-flow/dmit-student-list" },
	{ label: "Videos", icon: BsFilm, href: "/b2c-teacher/teacher-flow/reference-video" },
	{ label: "Apply for leave", icon: FiSun }, // No href = button
	{ label: "Manage Course", icon: FiClipboard, href: "/b2c-teacher/teacher-flow/manage-course-teach" },
	{ label: "Daily Log", icon: FiCheckSquare, href: "/b2c-teacher/teacher-flow/daily-log-select-course" },
	{ label: "Manage Reports", icon: PiSquaresFourLight, href: "/b2c-teacher/teacher-flow/student-list-report" },
	{ label: "Manage Feedbacks", icon: HiOutlineArchiveBox, href: "/b2c-teacher/teacher-flow/manage-feedback" },
	{ label: "Advance Plan", icon: TfiMenuAlt }, // No href = button
];
const ChapterAccordion: React.FC<{
	item: ChapterAccordionItem;
	isOpen: boolean;
	onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
	return (
		<div
			className={`${isOpen ? "p-4 m-2" : "border border-[#E5E7EB]"
				} relative z-20 rounded-2xl overflow-hidden transition-all`}
		>
			{/* Background image overlay */}
			<div
				className="absolute inset-0 bg-cover rounded-3xl bg-repeat -z-10"
				style={{
					backgroundImage: 'url("/pattern-3.png")',
					filter: "brightness(0.7) grayscale(40%)",
				}}
			/>

			{/* Button to toggle accordion */}
			<button
				onClick={onToggle}
				className={`${isOpen ? "bg-white px-6 py-2" : ""
					} w-full bg-[#F9FAFB] rounded-2xl flex justify-between items-center px-4 py-3 font-medium focus:outline-none`}
			>
				<span className="text-lg">{item.name}</span>
				{isOpen ? (
					<div className="flex gap-4 text-[#6B7280] text-xs items-center">
						<p>Duration : 5 Hrs/Mins</p>
						<p>Topic Name: Name</p>
						<svg
							width={20}
							height={20}
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width={24}
								height={24}
								rx={12}
								transform="matrix(1 0 0 -1 0 24.5)"
								fill="black"
								fillOpacity="0.3"
							/>
							<path
								d="M6 15.5L12 9.5L18 15.5"
								stroke="white"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				) : (
					<IoIosArrowDown className="text-xl text-gray-600" />
				)}
			</button>

			{/* Optional expanded content (currently just placeholder) */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="px-4 py-4 rounded-2xl mt-2 bg-white text-xs text-[#6B7280] whitespace-pre-line">
							<h6 className="text-sm sm:text-sm text-black  mb-2">
								Before the class
							</h6>
							<div className="space-y-6 text-xs">
								<p>
									1. Study the Lesson Plan Prepare a list of students according
									to their groups. Keep the printouts of the next homework
									assignment ready and answers of the previous home assignment.
								</p>
								<p>
									1. Encourage the students to speak up and participate in the
									discussion. Getting the answer right is not the purpose,
									trying and thinking about the concept is more important. You
									can use statements like excellent, you are thinking in the
									right direction.
								</p>
								<p>1. Definition of nth root of a real number.</p>
								<p>
									1. Basically, before introducing today’s topic you first need
									to revise the addition and subtraction of proper and improper
									fractions, and mixed numbers.
								</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
const sessionData = Array.from({ length: 4 }, () => ({
	title: `Unit Name`,
	content: `1. REAL NUMBERS

1. Review of representation of natural numbers, integers, and
rational numbers on the number line. Rational numbers as
recurring/terminating decimals. Operations on real numbers.

2. Examples of non-recurring/non-terminating decimals.
Existence of non-rational numbers (irrational numbers) such as,
and their representation on the number line. Explaining that
every real number is represented by a unique point on the
number line and conversely, viz. every point on the number line
represents a unique real number.

3. Definition of nth root of a real number.
4. Rationalization (with precise meaning) of real numbers of the
type
`,
}));