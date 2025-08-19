'use client'
import { useEffect, useRef } from 'react'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
	FiArrowLeft,
	FiChevronDown,
	FiChevronUp,
	FiPlayCircle,
	FiFileText as FiFileIcon,
	FiDownload,
	FiChevronRight,
	FiArrowRightCircle,
	FiArrowLeftCircle,
} from 'react-icons/fi'

// --- Content Tab Component (Reused from Yearly Plan) ---
const ContentTab = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`px-4 py-2 text-sm font-medium whitespace-nowrap focus:outline-none border-b-2 transition-colors ${
			isActive
				? 'border-[#3366FF] text-[#3366FF]'
				: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-[#E5E7EB]-300'
		}`}>
		{label}
	</button>
)

// --- Learning Video Item (Reused from Yearly Plan) ---
const VideoItem = ({ topic }: { topic: string }) => (
	<button className="w-full flex items-center justify-between p-2 text-left border border-[#E5E7EB] bg-[#F3F4F6] hover:bg-[#E5E7EB]/70 rounded-3xl transition-colors">
		<div className="flex items-center gap-3">
			<FiPlayCircle className="w-8 h-8 text-black" strokeWidth={1} />
			<span className="text-md text-black">{topic}</span>
		</div>
		<FiChevronRight className="w-4 h-4 text-black" />
	</button>
)

// --- Learning Accordion (Reused from Yearly Plan) ---
interface LearningWeek {
	id: string
	title: string
	videoCount: number
	videos: { id: string; topic: string }[]
}
const LearningAccordion = ({ week, isOpen, onToggle }: { week: LearningWeek; isOpen: boolean; onToggle: () => void }) => (
	<div className="bg-[#F9FAFB] rounded-2xl shadow-sm overflow-hidden border border-[#E5E7EB]">
		<button
			onClick={onToggle}
			className="w-full flex justify-between items-center p-4 hover:bg-[#F3F4F6] focus:outline-none transition-colors">
			<div>
				<h3 className="text-md mb-1 font-medium text-black">{week.title}</h3>
				<p className="text-xs text-start mt-1.5 text-gray-500">{week.videoCount} videos</p>
			</div>
			{isOpen ? <FiChevronUp className="w-5 h-5 text-black" /> : <FiChevronDown className="w-5 h-5 text-black" />}
		</button>
		{isOpen && (
			<div className="p-4 bg-[#F9FAFB] space-y-2">
				{week.videos.map(video => (
					<VideoItem key={video.id} topic={video.topic} />
				))}
			</div>
		)}
	</div>
)

// --- Upcoming Class Item ---
interface UpcomingClass {
	id: number
	title: string
	teacher: string
	description: string
	time: string
	date: string
}
const UpcomingClassItem = ({ uClass }: { uClass: UpcomingClass }) => (
	<div className="bg-[#F9FAFB]/70 p-4 rounded-2xl border border-[#E5E7EB]/100 flex justify-between items-stretch">
		{/* Left Content */}
		<div>
			<h4 className="text-md font-bold text-black">{uClass.title}</h4>
			<p className="text-xs text-[#FFCC00] font-light tracking-wide mt-0.5">{uClass.teacher}</p>
			<p className="text-xs text-[#6B7280] font-light tracking-tight mt-1">{uClass.description}</p>
			<p className="text-xs text-[#6B7280] font-light tracking-tight mt-0.5">{uClass.time}</p>
		</div>

		{/* Right Content */}
		<div className="flex flex-col justify-between items-end text-right ml-4">
			<p className="text-xs text-gray-400">{uClass.date}</p>
			<button className="px-6 py-2 bg-[#3366FF] text-white text-sm font-semibold rounded-full hover:bg-[#3366FF] transition-colors mt-2">
				Join
			</button>
		</div>
	</div>
)

// --- Course Material Item ---
const CourseMaterialItem = ({ fileName, date }: { fileName: string; date: string }) => (
	<div className="bg-[#F9FAFB] p-4 rounded-2xl border border-[#E5E7EB] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
		{/* File Icon Section */}
		<div className="w-24 h-26 bg-[#8DD9B3] rounded-2xl flex items-center justify-center flex-shrink-0">
			<FiFileIcon className="w-12 h-12 text-black" />
		</div>

		{/* Content Section */}
		<div className="flex-1 min-w-0">
			{/* File Name */}
			<h4 className="text-lg font-semibold text-black mb-1 truncate">{fileName}</h4>

			{/* File Date */}
			<p className="text-xs text-[#6B7280] mb-3">{date}</p>

			{/* Download Button */}
			<button className="flex w-full text-center justify-center gap-2 px-4 py-2.5 bg-[#F3F4F6] text-[#6B7280] text-md font-medium rounded-full hover:bg-[#E5E7EB] transition-colors">
				<FiDownload className="w-4 h-4 self-center text-black" />
				Download
			</button>
		</div>
	</div>
)

// --- Sample Data ---
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet']
const learningWeeksData: LearningWeek[] = Array.from({ length: 5 }, (_, i) => ({
	id: `week${i + 1}`,
	title: `Learning Videos ( Week ${i + 1} )`,
	videoCount: i === 0 ? 4 : 3,
	videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
		id: `v${j + 1}`,
		topic: `Topic ${j + 1}`,
	})),
}))

const upcomingClassesData: UpcomingClass[] = Array.from({ length: 8 }, (_, i) => ({
	id: i + 1,
	title: 'Title',
	teacher: "Teacher's Name",
	description: 'Description',
	time: '16:30',
	date: '16/5/25',
}))

const courseMaterialData = [
	{ id: 1, fileName: 'File Name', date: '23rd June 2025' },
	{ id: 2, fileName: 'File Name', date: '23rd June 2025' },
	{ id: 3, fileName: 'File Name', date: '23rd June 2025' },
	{ id: 4, fileName: 'File Name', date: '23rd June 2025' },
]

const attendanceData = { total: 20, attended: 17, missed: 3, percentage: 85 }

export default function CourseDetailPage() {
	const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0])

	const leftColumnRef = useRef<HTMLDivElement>(null)
	const rightColumnRef = useRef<HTMLDivElement>(null)

	const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0].id)
	const [currentMonth] = useState('June 2025')
	const [currentWeekFilter, setCurrentWeekFilter] = useState('Date') // Or date filter for upcoming classes

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	} // UPDATE PATH

	const handleAccordionToggle = (weekId: string) => {
		setOpenAccordionId(prevId => (prevId === weekId ? null : weekId))
	}

	// Function to sync heights
	const syncHeights = () => {
		if (leftColumnRef.current && rightColumnRef.current) {
			// Reset right column height to auto to get natural height
			rightColumnRef.current.style.height = 'auto'

			// Force a reflow to ensure we get the correct height
			void leftColumnRef.current.offsetHeight;


			// Get the height of the left column
			const leftHeight = leftColumnRef.current.offsetHeight

			// Apply the left column's height to the right column
			rightColumnRef.current.style.height = `${leftHeight}px`

			console.log(`Synced height: ${leftHeight}px`)
		}
	}

	// Sync heights on initial render and when content changes
	useEffect(() => {
		// Use setTimeout to ensure DOM has updated
		const timer = setTimeout(syncHeights, 100) // Increased timeout for better reliability
		return () => clearTimeout(timer)
	}, [activeContentTab, openAccordionId, currentWeekFilter])

	// Sync heights on window resize
	useEffect(() => {
		const handleResize = () => {
			syncHeights()
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Use ResizeObserver for more precise height tracking
	useEffect(() => {
		if (!leftColumnRef.current) return

		const observer = new ResizeObserver(() => {
			// Add a small delay to ensure the resize has completed
			setTimeout(syncHeights, 10)
		})

		observer.observe(leftColumnRef.current)

		return () => observer.disconnect()
	}, [])

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			{/* Back Button and Page Title */}
			<div className="flex items-center gap-2 bg-white px-6 py-4">
				<button className="p-1.5 text-black hover:text-[#3366FF] focus:outline-none">
					<FiArrowLeft className="w-5 h-5 font-extrabold" />
				</button>
				<h1 className="text-xl font-bold text-[#FF3366]">Course Name</h1> {/* Or dynamic course name */}
			</div>

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
					{/* Left Column (Learning Content & Course Material) - FIXED: Ref moved here */}
					<div ref={leftColumnRef} className="lg:col-span-2 space-y-8">
						{/* Learning Content Card */}
						<div className="bg-white rounded-2xl shadow-lg p-6">
							<div className="mb-6 flex justify-between items-center">
								<nav className="-mb-px flex space-x-2 overflow-x-auto" aria-label="Content Tabs">
									{contentTabsData.map(tab => (
										<ContentTab key={tab} label={tab} isActive={activeContentTab === tab} onClick={() => setActiveContentTab(tab)} />
									))}
									<div className="flex items-center gap-3 flex-shrink-0"></div>
								</nav>

								<div className="flex gap-3">
									<div className="relative">
										<select
											value={currentWeekFilter}
											onChange={e => setCurrentWeekFilter(e.target.value)}
											className="appearance-none border border-[#E5E7EB] text-sm text-black bg-[#F9FAFB] px-4 py-2 rounded-xl pr-8 focus:outline-none focus:ring-1 focus:ring-[#3366FF]">
											<option value="Week 1">Week 1</option>
											<option value="Week 2">Week 2</option>
										</select>
										<FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
									</div>
									<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
										<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
										<span>{currentMonth}</span>
										<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
								<div>
									<h2 className="text-xl font-bold text-[#3366FF]">Earth and Space Science</h2>
									<p className="text-lg text-[#3366FF] mt-0.5">
										Solar system, weather patterns, and basic understanding of the Earth.
									</p>
								</div>
							</div>

							{activeContentTab === 'Learning' && (
								<div className="space-y-3">
									{learningWeeksData.map(week => (
										<LearningAccordion
											key={week.id}
											week={week}
											isOpen={openAccordionId === week.id}
											onToggle={() => handleAccordionToggle(week.id)}
										/>
									))}
								</div>
							)}
							{activeContentTab !== 'Learning' && (
								<div className="text-center py-10 text-gray-500">{activeContentTab} content goes here.</div>
							)}
						</div>
					</div>

					<div ref={rightColumnRef} className="lg:col-span-1 space-y-6">
						{/* Upcoming Classes Card - FIXED: Added flex layout */}
						<div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
							<div className="flex justify-between items-center mb-4">
								<h3 className="text-xl font-bold text-[#FF3366]">Upcoming Classes</h3>
							</div>
							<div className="flex justify-center">
								<div className="flex gap-3 mb-4">
									<div className="relative">
										<select
											value={currentWeekFilter}
											onChange={e => setCurrentWeekFilter(e.target.value)}
											className="appearance-none border border-[#E5E7EB] text-sm text-black bg-[#F9FAFB] px-4 py-2 rounded-xl pr-8 focus:outline-none focus:ring-1 focus:ring-[#3366FF]">
											<option value="Week 1">Week 1</option>
											<option value="Week 2">Week 2</option>
										</select>
										<FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
									</div>
									<div className="flex items-center gap-2.5 text-sm font-medium border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
										<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
										<span>{currentMonth}</span>
										<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
									</div>
								</div>
							</div>
							{/* FIXED: Added flex-1 and min-h-0 for proper scrolling */}
							<div className="flex-1 min-h-0">
								<div className="space-y-3 h-full overflow-y-auto pr-2 custom-scrollbar">
									{upcomingClassesData.map(uClass => (
										<UpcomingClassItem key={uClass.id} uClass={uClass} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Lower */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
					{/* Left Column (Learning Content & Course Material) */}
					<div className="lg:col-span-2 space-y-8">
						{/* Course Material Card */}
						<div className="bg-white rounded-2xl shadow-lg p-6">
							<h2 className="text-xl font-bold text-[#FF3366] mb-6">Course Material</h2>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								{courseMaterialData.map(material => (
									<CourseMaterialItem key={material.id} {...material} />
								))}
							</div>
						</div>
					</div>

					{/* Right Column (Upcoming Classes, Attendance, Certificate) */}
					<div className="lg:col-span-1 space-y-6">
						{/* Attendance Card */}
						<div className="bg-white rounded-2xl shadow-lg p-6">
							<h3 className="text-lg font-semibold text-black mb-2">Attendance</h3>
							<p className="text-xs text-black mb-3">
								Total : {attendanceData.total}   Attended : {attendanceData.attended}   Missed : {attendanceData.missed}
							</p>
							<div className="w-full flex rounded-full h-3">
								<div className="bg-[#3366FF] relative h-3 rounded-full" style={{ width: `${attendanceData.percentage}%` }}>
									<p className="absolute right-0 bottom-0 self-center translate-x-[115%] translate-y-[2px] text-sm text-[#B0B0B0] font-medium text-right mt-1">
										{attendanceData.percentage}%
									</p>
								</div>
							</div>
						</div>

						{/* Download Certificate Card */}
						<div className="bg-white rounded-2xl shadow-lg p-4 text-start">
							<h3 className="font-medium text-black mb-4">Download Certificate</h3>
							<button className="w-full mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-[#F3F4F6] text-[#B0B0B0] font-medium rounded-full hover:bg-[#E5E7EB] transition-colors">
								<FiDownload className="w-4 h-4" />
								Download
							</button>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
