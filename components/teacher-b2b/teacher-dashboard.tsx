'use client'
import Header from '@/components/layout/Header'
import React from 'react'
import MaxWidthWrapper from '../admin/max-width-wrapper'
import Footer from '../layout/Footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { Star as StarIcon } from "lucide-react";

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
			<StarIcon key={i} size={size} className="text-yellow-400 fill-yellow-400" />
		) : (
			<StarIcon
				key={i}
				size={size}
				className="text-yellow-400"
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
		total: '50/50',
	},
	{
		name: 'Student 2',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
	{
		name: 'Student 3',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
	{
		name: 'Student 4',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
	{
		name: 'Student 5',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
	{
		name: 'Student 6',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
	{
		name: 'Student 7',
		image: '/teacher-b2b/profile2.png',
		date: '10 March 2025',
		exam1: 50,
		exam2: 50,
		total: '100/100',
	},
]

const timetableData = [
	// 9:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-blue-100' },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-green-100' },
	],
	// 10:00
	[null, null, null, null, null],
	// 11:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-purple-100' },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-green-100' },
	],
	// 12:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '12:00 PM', bg: 'bg-red-100' },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '12:00 PM', bg: 'bg-blue-100' },
		null,
	],
	// 13:00
	[null, null, null, null, null],
	// 14:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-yellow-100' },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-green-100' },
	],
	// 15:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-yellow-100' },
		null,
		null,
	],
	// 16:00
	[null, null, null, null, null],
	// 17:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-yellow-100' },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-yellow-100' },
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-green-100' },
	],
	// 18:00
	[null, null, null, null, null],
]

const contentItems = [
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	{
		title: 'Chapter Name',
		duration: '5 Hrs/Week',
		topic: 'Topic Name',
		points: [
			'1. Study the Lesson Plan. Prepare a list of students according to their groups. Keep the printouts of the next homework assignment ready and answers of the previous one.',
			'2. Encourage students to speak up and participate in the discussion. Getting the answer right is not the purpose, trying and thinking aloud is more important.',
			'3. Definition of nth root of a real number.',
			'4. Review the addition and subtraction of proper and improper fractions, and mixed numbers.',
		],
	},
	// repeat 3 more with different content if needed
]

const classesAllocated = ['Class A', 'Class B', 'Class C']

const classSchedule = [
	{ time: '10:30 AM', title: 'Basic of C++', className: 'Class 1' },
	{ time: '01:30 PM', title: 'Basic of C#', className: 'Class 2' },
	{ time: '02:30 PM', title: 'Advance of C#', className: 'Class 3' },
	{ time: '04:30 PM', title: 'Advance of C++', className: 'Class 4' },
]

const tools = ['BW test', 'Assessment', 'Quiz', 'Worksheet', 'DMIT Results', 'Videos']

const TeacherDashboard = () => {
	const [progress] = useState(60)
	const enrolledCount = studentData.length
	const averageScore = 75
	const headerUser = {
		name: 'Educator Name',
		role: 'Teacher',
		avatarSrc: '/teacher-b2b/profile.png',
	}
	return (
		<div className="bg-gray-100">
			<Header user={headerUser} />
			<MaxWidthWrapper>
				<section className="bg-gray-100 ">
					<main className="p-2">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.75fr_1.75fr_1.5fr] gap-4">
							{/* Profile Card */}
							<div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
								<div className="flex items-center justify-between gap-4">
									<div className="flex gap-6 items-center">
										<Image src="/teacher-b2b/profile.png" alt="Profile" width={90} height={90} className="h-21 w-21 object-cover rounded-full" />
										<div>
											<h2 className="text-lg font-semibold whitespace-nowrap mb-1">Ronak Mathur</h2>
											<div className="text-sm text-gray-500 mb-1 flex">{renderStars(4)}</div>
											<div className='flex gap-2'>
												<span className="bg-[#FF3366] text-white px-2 py-1.5 text-xs rounded-full inline-block mt-1">Group A</span>
											</div>
										</div>
									</div>
									<div className="text-xs font-medium text-black space-y-1">
										<p>Gender: Male</p>
										<p>DOB: 5 Jun 2015</p>
										<p className="whitespace-nowrap">Email: example@gmail.com</p>

										<p>City: Mumbai</p>
										<p>State: Maharashtra</p>
									</div>
								</div>

								<div className="h-[200px] w-full overflow-hidden rounded-2xl">
									<Image src="/teacher-b2b/forest.jpg" alt="Demo" width={400} height={200} className="w-full object-cover rounded-2xl" />
								</div>

								<div className="flex justify-between items-center">
									<span className="text-m font-medium">Demo Video</span>
									<button
										className="text-sm font-medium py-1 px-4 rounded-full "
										style={{ backgroundColor: PALETTE.GREEN_LIGHT, color: "black" }}>
										Edit
									</button>
								</div>

								<div>
									<h4 className="font-semibold text-sm mb-2">Classes Allocated</h4>
									<div className="flex flex-wrap gap-3">
										{classesAllocated.map(cls => (
											<span key={cls} className="text-sm border bg-[#f3f4f6] border-[#b0b0b0] px-2 py-2 rounded-full">
												{cls}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Classes List */}
							<div className="bg-white rounded-2xl p-4 shadow-sm">
								<div className="flex justify-between items-center mb-4">
									<h2 className="font-semibold text-lg">Classes</h2>
									<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
										<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
										<span>June 2025</span>
										<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
									</div>
								</div>
								<div className="space-y-3">
									{classSchedule.map((cls, index) => (
										<div key={index} className="flex justify-between items-center bg-[#f9fafb] p-2 rounded-2xl">
											<div>
												<p className="text-sm rounded-2xl font-semibold bg-[#f3f4f6] p-4 leading-tight text-center">
													{cls.time.split(' ').map((part, i) => (
														<span key={i} className="block tracking-wider">
															{part}
														</span>
													))}
												</p>
											</div>
											<div>
												<p className="text-m font-semibold">{cls.title}</p>
												<p className="text-sm text-gray-500">{cls.className}</p>
											</div>
											<button className="text-white text-m px-4 py-1 rounded-full" style={{ backgroundColor: PALETTE.ACCENT_PINK }}>
												Start
											</button>
										</div>
									))}
								</div>
								<div className="flex justify-end">
									<button className="mt-4 px-4 text-right bg-blue-600 text-white py-2 rounded-full">Schedule Class</button>
								</div>
							</div>

							{/* Teacher Toolkit */}
							<div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
								<h2 className="font-semibold text-lg">Teacher Toolkit</h2>
								{tools.map((tool, idx) => (
									<div key={idx} className="flex items-center gap-2 text-m bg-[#f9fafb] p-4 rounded-xl font-medium cursor-pointer">
										📄 {tool}
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-2 md:gap-4 py-2">
							{/* First item - Full width on sm to md, 40% on lg */}
							<div className="rounded-2xl bg-white py-4 px-8 shadow space-y-6">
								{/* Tabs */}
								<Tabs defaultValue="class-a">
									<TabsList className=" w-fit mb-2">
										<TabsTrigger value="class-a">Class A</TabsTrigger>
										<TabsTrigger value="class-b">Class B</TabsTrigger>
										<TabsTrigger value="class-c">Class C</TabsTrigger>
									</TabsList>

									<TabsContent value="class-a">
										{/* Progress Info Box */}
										<div className="flex flex-col md:flex-row justify-between items-center gap-4 rounded-xl bg-gray-100 p-4">
											<div className="w-full md:w-1/2 border-r border-r-zinc-700 pr-6">
												<p className="text-sm font-medium text-muted-foreground">Class Completion Progress</p>
												<p className="text-lg font-semibold">{progress} %</p>
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
													<p className="font-semibold text-center">{averageScore} %</p>
													<p className="text-muted-foreground" style={{ color: PALETTE.GREEN_DARK }}>
														Average Score
													</p>
												</div>
											</div>
										</div>

										{/* Students Table */}
										<div className="mt-6">
											<h2 className="text-lg font-semibold mb-3">Students Enrolled</h2>
											<div className="overflow-x-auto rounded-xl">
												<table className="min-w-full bg-blue-50 rounded-2xl overflow-hidden">
													<thead>
														<tr className="text-left bg-blue-100 text-sm font-medium text-gray-700">
															<th className="p-3">Student name</th>
															<th className="p-3">Date</th>
															<th className="p-3">Exam 1</th>
															<th className="p-3">Exam 2</th>
															<th className="p-3">Total</th>
														</tr>
													</thead>
													<tbody className="text-sm text-gray-800">
														{studentData.map((student, index) => (
															<tr key={index} className="odd:bg-blue-50 even:bg-white">
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
									</TabsContent>

									{/* Placeholder content for other tabs */}
									<TabsContent value="class-b">Class B content here...</TabsContent>
									<TabsContent value="class-c">Class C content here...</TabsContent>
								</Tabs>
							</div>

							{/* Second item - 50% width on md, 40% on lg */}
							<div className="bg-white rounded-2xl p-4">
								<div className="space-y-4">
									{/* Header */}
									<div>
										<h1 className="text-xl font-bold">Pedagogy & Class Flows</h1>
									</div>

									{/* Top Bar */}
									<div className="flex items-center justify-between gap-2">
										<div className="relative w-full max-w-md">
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 z-1 ">
												<FaSearch />
											</span>
											<Input
												type="text"
												placeholder="Search"
												className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
										<Button className="rounded-full bg-blue-100 font-medium text-blue-500" variant="outline">
											View All
										</Button>
									</div>

									{/* Accordions */}
									<Accordion type="single" defaultValue="item-0" collapsible className="space-y-2">
										{contentItems.map((item, index) => {
											return (
												<AccordionItem
													key={index}
													value={`item-${index}`}
													className={`relative rounded-2xl p-2 bg-[#F9FAFB]`}
													style={
														{
																backgroundImage: "url('/teacher/dashboard/pattern2.png')",
																backgroundSize: "cover",
																backgroundPosition: "center",
															}
													}
												>
													{/* Only show dark overlay on the first item */}
													<div className="absolute inset-0 bg-black/40 z-0 rounded-2xl"></div>

													<AccordionTrigger className="text-left z-10 rounded-2xl bg-white px-4 py-3">
														<div className="flex flex-col items-center space-x-4 justify-between sm:flex-row">
															<h2 className="text-base font-medium">{item.title}</h2>
															<div>
																<p className="text-sm text-gray-500">Duration: {item.duration}</p>
															</div>
															<div>
																<p className="text-sm text-gray-500">| Topic: {item.topic}</p>
															</div>
														</div>
													</AccordionTrigger>

													<AccordionContent className="max-h-[300px] relative z-10 overflow-y-auto custom-scrollbar p-4 space-y-4 text-sm text-[#6b7280] bg-white items-center rounded-2xl mt-2">
														<p className="font-semibold text-black">Before the class</p>
														<ul className="text-sm sm:text-md pl-4 space-y-4">
															{item.points.map((point, i) => (
																<li key={i}>{point}</li>
															))}
														</ul>
													</AccordionContent>
												</AccordionItem>
											);
										})}
									</Accordion>

								</div>
							</div>

							{/* Third item - 50% width on md, 20% on lg */}
							<div className="bg-white rounded-2xl p-4">
								<div className="overflow-x-auto">
									<div className="">
										<h2 className="text-lg font-semibold mb-4">Timetable</h2>

										{/* Days Header */}
										<div className="grid grid-cols-[80px_repeat(5,minmax(120px,1fr))] border-b text-sm text-gray-500 font-medium">
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
												<div className="text-gray-500 py-4 px-2">{time}</div>

												{/* Time cells */}
												{[0, 1, 2, 3, 4].map(colIdx => {
													const slot = timetableData[rowIdx]?.[colIdx]
													return (
														<div key={colIdx} className="p-2">
															{slot ? (
																<div className={`rounded-xl p-2 text-xs ${slot.bg}`}>
																	<div className="font-medium">{slot.title}</div>
																	<div className="flex justify-between items-center">
																		<div className="text-gray-600">{slot.subtitle}</div>
																		<div className="text-right text-[10px] text-gray-500 ">{slot.time}</div>
																	</div>
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
										<h1 className="text-xl font-bold">Curriculum</h1>
										<Button className="rounded-full bg-blue-100 font-medium text-blue-500" variant="outline">
											View All
										</Button>
									</div>

									{/* Accordions */}
									<Accordion type="single" defaultValue="item-0" collapsible className="space-y-2 pr-2 max-h-[80vh] overflow-y-scroll scrollbar">
										{contentItems.map((item, index) => {
											return (
												<AccordionItem
													key={index}
													value={`item-${index}`}
													className={`relative rounded-2xl p-2 bg-[#F9FAFB]`}
													style={{
																backgroundImage: "url('/teacher/dashboard/pattern2.png')",
																backgroundSize: "cover",
																backgroundPosition: "center",
														}
													}
												>
													<div className="absolute inset-0 bg-black/40 z-0 rounded-2xl"></div>

													<AccordionTrigger className="text-left z-10 rounded-2xl bg-white px-4 py-3">
														<div className="flex flex-col items-center space-x-4 justify-between sm:flex-row">
															<h2 className="text-base font-medium">{item.title}</h2>
															<div>
																<p className="text-sm text-gray-500">Duration: {item.duration}</p>
															</div>
															<div>
																<p className="text-sm text-gray-500">| Topic: {item.topic}</p>
															</div>
														</div>
													</AccordionTrigger>

													<AccordionContent className="max-h-[300px] relative z-10 overflow-y-auto custom-scrollbar p-4 space-y-4 text-sm text-[#6b7280] bg-white items-center rounded-2xl mt-2">
														<p className="font-semibold text-black">Before the class</p>
														<ul className="text-sm sm:text-md pl-4 space-y-4">
															{item.points.map((point, i) => (
																<li key={i}>{point}</li>
															))}
														</ul>
													</AccordionContent>
												</AccordionItem>
											);
										})}
									</Accordion>

								</div>
							</div>
						</div>
					</main>
				</section>
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}

export default TeacherDashboard
