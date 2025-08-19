'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FiMessageSquare as FiChatIcon, FiVideo as FiVideoActivity, FiFileText as FiFileActivity } from 'react-icons/fi'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// --- Key Focus Area Pill ---
// Updated to match image: white background, gray border
const FocusPill = ({ label }: { label: string }) => (
	<button className="px-6 py-2.5 bg-[#F3F4F6] border-[#B0B0B2xl text-black text-sm tracking-wide rounded-full border hover:bg-gray-50 transition-colors">
		{label}
	</button>
)

// --- Learning Activity Item ---
interface Activity {
	id: number
	type: 'video' | 'document'
	category: string
	topic: string
	dateRange: string
	status: 'join' | 'not_started' | 'completed' // Added 'completed' for completeness
}
const ActivityItem = ({ activity }: { activity: Activity }) => {
	const Icon = activity.type === 'video' ? FiVideoActivity : FiFileActivity
	// Adjusted icon background colors to match image (pinkish-red and blue)
	const iconBgColor = activity.type === 'video' ? 'bg-[#FF3366]' : 'bg-[#3366FF]'
	const categoryTextColor = 'text-[#FF3366]'

	return (
		<div className="flex items-center justify-between p-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full  hover:shadow-md transition-shadow">
			<div className="flex items-center gap-4">
				<div className={`w-14 h-14 rounded-full ${iconBgColor} text-white flex items-center justify-center flex-shrink-0`}>
					<Icon className="w-7 h-7" />
				</div>
				<div>
					<p className={`text-xs font-medium ${categoryTextColor}`}>{activity.category}</p>
					<h4 className="text-base font-semibold text-black mt-0.5">{activity.topic}</h4>
					<p className="text-[9px] text-[#6B7280] mt-0.5">{activity.dateRange}</p>
				</div>
			</div>
			{activity.status === 'join' && (
				<div className="flex items-center gap-3">
					{/* Updated Join button style to match image (blue text, no border) */}
					<button className="text-blue-600 text-lg font-semibold hover:text-blue-700 transition-colors pr-2">Join</button>
				</div>
			)}
			{activity.status === 'not_started' && (
				// Updated "Not Started" style
				<span className="text-lg font-semibold text-gray-400 pr-2">Not Started</span>
			)}
			{activity.status === 'completed' && <span className="text-sm sm:text-lg font-medium sm:font-semibold bg-green-100 rounded-full px-2 sm:py-4 py-1.5 text-green-500">Completed</span>}
		</div>
	)
}

// --- Teacher Item ---
const TeacherItem = ({ avatarSrc, name, subject }: { avatarSrc: string; name: string; subject: string }) => (
	// Updated background to be lighter gray, more padding and rounded
	<div className="flex items-center justify-between p-2 bg-gray-100 rounded-full hover: transition-shadow">
		<div className="flex items-center gap-3">
			<Image src={avatarSrc} alt={name} width={40} height={40} className="rounded-full object-cover" />
			<div>
				<p className="text-sm font-medium text-black">{name}</p>
				{/* Subject text color updated to pink to match image */}
				<p className="text-xs text-[#FF3366]">{subject}</p>
			</div>
		</div>
		<button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
			<FiChatIcon className="w-5 h-5" />
		</button>
	</div>
)

// --- Notification Item ---
const NotificationItem = ({ title, message, date }: { title: string; message: string; date: string }) => (
	// Adjusted background and border to match image (yellowish)
	<div className="border-[#FFCC00] border bg-[#FEF9C3] rounded-lg p-2">
		<h5 className="text-sm font-semibold text-black mb-1">{title}</h5>
		<p className="text-xs text-[#6B7280] leading-relaxed mb-1.5 line-clamp-2">{message}</p>
		<p className="text-[10px] text-gray-500 text-right">{date}</p>
	</div>
)

// --- Sample Data (Ensure avatar paths are correct) ---
const studentData = {
	name: 'Shlok Agheda',
	role: 'Student',
	class: 'Class 8A',
	group: 'Group A',
	avatar: '/placeholder-avatar-student.jpg', // UPDATE PATH
	avatarSrc: '/placeholder-avatar-student.jpg', // For Header prop
	gender: 'Male',
	dob: '15 Jun 2015',
	email: 'example@gm.com',
	contact: '+91 1234567890',
	city: 'Mumbai',
	state: 'Maharashtra',
	dmitScore: 50,
	assessmentReportDate: 'June 2025',
	objective:
		"The assessment provides a holistic understanding of the student's standing across three critical areas: academics, brain development, and personality growth. It helps in identifying strengths and gaps to guide personalized strategies and long-term development.",
	focusAreas: ['Academics', 'Personality Development', 'Brain Development'],
}

const classStats = {
	month: 'June 2025',
	complete: 2,
	total: 20,
	incomplete: 1,
	attendance: '15%',
	grade: '3.5',
	leaderBoardRank: 'Rank 5',
}

const teachersData = [
	{ id: 1, name: 'Anita Sharma', subject: 'Math', avatarSrc: '/teacher-avatar-1.jpg' }, // UPDATE PATHS
	{ id: 2, name: 'Pooja Menon', subject: 'Science', avatarSrc: '/teacher-avatar-2.jpg' },
	{ id: 3, name: 'Ritika Joshi', subject: 'English', avatarSrc: '/teacher-avatar-3.jpg' },
]

const learningActivitiesData: Activity[] = [
	{
		id: 1,
		type: 'video',
		category: 'Online Class: Science Topic',
		topic: 'Topic Name',
		dateRange: '28/4/2025 - 04/5/2025',
		status: 'join',
	},
	{
		id: 2,
		type: 'document',
		category: 'Online Class: Science Topic',
		topic: 'Topic Name',
		dateRange: '28/4/2025 - 04/5/2025',
		status: 'not_started',
	},
	{
		id: 3,
		type: 'video',
		category: 'Online Class: Science Topic',
		topic: 'Topic Name',
		dateRange: '28/4/2025 - 04/5/2025',
		status: 'join',
	},
	{
		id: 4,
		type: 'document',
		category: 'Online Class: Science Topic',
		topic: 'Topic Name',
		dateRange: '28/4/2025 - 04/5/2025',
		status: 'not_started',
	},
]

const notificationsData = [
	{
		id: 1,
		title: 'Notification Title',
		message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem',
		date: '20/5/25',
	},
	{
		id: 2,
		title: 'Notification Title',
		message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem',
		date: '20/5/25',
	},
	{
		id: 3,
		title: 'Notification Title',
		message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem',
		date: '20/5/25',
	},
]

export default function StudentDashboardPage() {
	const [learningActivityFilter, setLearningActivityFilter] = useState<'Active' | 'Completed'>('Active')

	const headerUser = {
		name: studentData.name,
		role: studentData.role,
		avatarSrc: studentData.avatarSrc,
	}

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			{' '}
			<Header user={headerUser} />
			<main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* === Left Column === */}
					<div className="lg:col-span-2 space-y-6">
						{/* --- Profile Info Card --- */}
						<div className="bg-white rounded-2xl  p-6">
							{/* Top section: Avatar, Name/Tags, Personal Details */}
							<div className="flex flex-row items-start gap-x-6">
								{/* Avatar */}
								<Image
									src={studentData.avatar}
									alt={studentData.name}
									width={112}
									height={112}
									className="rounded-full object-cover flex-shrink-0"
								/>

								{/* Right Content: Name/Tags and Personal Details laid out in a grid */}
								<div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-start gap-x-4 pt-1 md:pt-2">
									{/* Column 1: Name and Class/Group Tags */}
									<div>
										<h2 className="text-2xl font-bold text-gray-900 mb-2">{studentData.name}</h2>
										{/* This div is the direct flex container for the two tags */}
										<div className="flex items-center space-x-1">
											{/* Class Tag: Fully rounded left side */}
											<span className="px-4 py-1.5 bg-[#FF3366] text-white text-base font-semibold rounded-full rounded-r-none">
												{studentData.class}
											</span>

											{/* Group Tag: Fully rounded right side */}
											<span className="px-4 py-1.5 bg-[#FF3366] text-white text-base font-semibold rounded-full rounded-l-none">
												{studentData.group}
											</span>
										</div>
									</div>

									{/* Column 2: Personal Details */}
									<div className="text-xs space-y-1 mt-3 md:mt-0 md:justify-self-end">
										<p>
											<span className="font-medium text-black">Gender:</span>{' '}
											<span className="text-gray-600">{studentData.gender}</span>
										</p>
										<p>
											<span className="font-medium text-black">DOB:</span> <span className="text-gray-600">{studentData.dob}</span>
										</p>
										<p>
											<span className="font-medium text-black">Email:</span> <span className="text-gray-600">{studentData.email}</span>
										</p>
										<p>
											<span className="font-medium text-black">Contact:</span>{' '}
											<span className="text-gray-600">{studentData.contact}</span>
										</p>
										<p>
											<span className="font-medium text-black">City:</span> <span className="text-gray-600">{studentData.city}</span>
										</p>
										<p>
											<span className="font-medium text-black">State:</span> <span className="text-gray-600">{studentData.state}</span>
										</p>
									</div>
								</div>
							</div>

							{/* DMT & Skill Test and Assessment Report Boxes */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-8">
								<div className="bg-[#F3F4F6] p-4 rounded-xl text-center">
									<p className="text-sm font-semibold text-black">DMT & Skill Test</p>
									<p className="text-sm text-gray-600 mt-1">Score: {studentData.dmitScore}</p>
								</div>
								<div className="bg-[#F3F4F6] p-4 rounded-xl text-center">
									<p className="text-sm font-semibold text-black">Assessment Report</p>
									<p className="text-sm text-gray-600 mt-1">{studentData.assessmentReportDate}</p>
								</div>
							</div>

							{/* Objective of the Year (assuming this is correct from previous code) */}
							<div className="mt-6 bg-[#FEF9C3] border-l-4 border-yellow-400 p-4 rounded-l-xl">
								<h3 className="text-sm font-semibold text-yellow-800 mb-1">Objective of the Year</h3>
								<p className="text-xs text-yellow-700 leading-relaxed">{studentData.objective}</p>
							</div>

							{/* Key Focus Area (assuming this is correct from previous code and FocusPill component) */}
							<div className="mt-6">
								<h3 className="text-md font-semibold text-black mb-3">Key Focus Area</h3>
								<div className="flex flex-wrap gap-3">
									{studentData.focusAreas.map(area => (
										<FocusPill key={area} label={area} />
									))}
								</div>
							</div>
						</div>

						{/* --- Learning Activities Card --- */}
						<div className="bg-white rounded-2xl  p-6">
							<div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
								<h2 className="text-xl font-semibold text-black">Learning Activities</h2>
								<div className="flex items-center gap-1 bg-[#F9FAFB] p-2 rounded-full">
									{['Active', 'Completed'].map(filter => (
										<button
											key={filter}
											onClick={() => setLearningActivityFilter(filter as 'Active' | 'Completed')}
											className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
												learningActivityFilter === filter
													? 'bg-[#3366FF] text-white shadow-md tracking-wide'
													: 'text-[#6B7280] hover:bg-gray-200 font-medium tracking-wide'
											}`}>
											{filter}
										</button>
									))}
								</div>
							</div>
							<div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 flex-wrap">
								<div className="flex items-center gap-2 text-sm text-black bg-[#F9FAFB] border border-gray-300 px-3 py-1.5 rounded-xl hover:bg-gray-50">
									<Image src={'/bg-arrow.png'} width={20} height={20} className="w-4 h-4" alt="" />
									<span className="tracking-wide">June 2025</span>
									<Image src={'/fwd-arrow.png'} width={20} height={20} className="w-4 h-4" alt="" />
								</div>
								<div className="flex items-center gap-2">
									<button className="hover:cursor-pointer px-4 py-1.5 bg-[#FF3366] text-white text-base whitespace-nowrap rounded-full rounded-r-none">
										Weekly ( 10 )
									</button>

									{/* Group Tag: Fully rounded right side */}
									<span className="px-2 py-1.5 whitespace-nowrap bg-[#F9FAFB] text-base rounded-full rounded-l-none">Monthly ( 50 )</span>
								</div>
								<button className="hover:cursor-pointer px-2 py-1.5 text-sm text-black border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50 transition-colors">
									Yearly Plan Overview
								</button>
							</div>
							<div className="space-y-4">
								{learningActivitiesData
									.filter(activity =>
										learningActivityFilter === 'Active'
											? activity.status === 'join' || activity.status === 'not_started'
											: activity.status === 'completed'
									)
									.map(activity => (
										<ActivityItem key={activity.id} activity={activity} />
									))}
							</div>
						</div>
					</div>

					{/* === Right Column === */}
					<div className="lg:col-span-1 space-y-6 overflow-hidden rounded-b-2xl">
						{/* --- Classes Card --- */}
						<div className="bg-white rounded-2xl  p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-lg font-semibold text-black">Classes</h2>
								<div className="flex items-center gap-2 text-sm text-black bg-[#F9FAFB] border border-gray-300 px-3 py-1.5 rounded-xl hover:bg-gray-50">
									<Image src={'/bg-arrow.png'} width={20} height={20} className="w-4 h-4" alt="" />
									<span>June 2025</span>
									<Image src={'/fwd-arrow.png'} width={20} height={20} className="w-4 h-4" alt="" />
								</div>
							</div>
							<div className="flex justify-between items-baseline mb-4">
								<div>
									<p className="text-xs text-gray-500">Complete</p>
									<p className="text-2xl font-bold text-black">
										{classStats.complete}
										<span className="text-sm font-normal text-gray-500"> / {classStats.total}</span>
									</p>
								</div>
								<div className="text-right">
									<p className="text-xs text-[#6B7280]">Incomplete</p>
									{/* Incomplete count styled red/pink */}
									<p className="text-sm text-center font-bold mt-2 text-[#FF3366]">{classStats.incomplete}</p>
								</div>
							</div>
							<div className="space-y-1 text-sm">
								{['Attendance', 'Grade', 'Leader Board'].map((label, index, array) => (
									<React.Fragment key={label}>
										<div className="flex justify-between items-center pt-1">
											<span className="text-[#6B7280]">{label}</span>
											<span className=" text-[#3366FF]">
												{label === 'Attendance'
													? classStats.attendance
													: label === 'Grade'
													? classStats.grade
													: classStats.leaderBoardRank}
											</span>
										</div>
										{index < array.length - 1 && <div className="w-full border-b border-[#B0B0B0] h-1" />}
									</React.Fragment>
								))}
							</div>
						</div>

						{/* --- Your Teachers Card --- */}
						<div className="bg-white rounded-2xl  p-6">
							<h2 className="text-lg font-semibold text-black mb-4">Your teachers</h2>
							<div className="space-y-3">
								{teachersData.map(teacher => (
									<TeacherItem key={teacher.id} {...teacher} />
								))}
							</div>
						</div>

						{/* --- Notification Card --- */}
						<div className="bg-white rounded-2xl  p-6 h-full">
							<h2 className="text-lg font-semibold text-black mb-4">Notification</h2>
							{/* Scrollable notifications area */}
							<div className="space-y-3 max-h-full overflow-y-auto">
								{notificationsData.map(notif => (
									<NotificationItem key={notif.id} {...notif} />
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
