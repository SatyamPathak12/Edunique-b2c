'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
	FiArrowLeft,
	FiChevronDown,
	FiChevronUp,
	FiPlayCircle,
	FiChevronRight,
	FiArrowLeftCircle,
	FiArrowRightCircle,
} from 'react-icons/fi'

// --- Main Category Tab Component ---
const MainCategoryTab = ({
	label,
	isActive,
	onClick,
	hasDropdown = false,
}: {
	label: string
	isActive: boolean
	onClick: () => void
	hasDropdown?: boolean
}) => (
	<button
		onClick={onClick}
		className={`flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-2xl transition-colors whitespace-nowrap ${
			isActive ? 'bg-[#FF3366] text-white shadow-md' : 'text-[#6B7280] hover:bg-[#ff33660f]'
		}`}>
		{label}
		{hasDropdown && (
			<FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />
		)}
	</button>
)

// --- Sub Category Item ---
const SubCategoryItem = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`w-full text-left px-5 py-3 text-sm rounded-xl transition-colors ${
			isActive ? 'bg-[#3366FF] text-white shadow' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
		}`}>
		{label}
	</button>
)

// --- Content Tab ---
const ContentTab = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`px-4 py-2 text-sm font-medium whitespace-nowrap focus:outline-none border-b-2 transition-colors ${
			isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
		}`}>
		{label}
	</button>
)

// --- Learning Video Item (for Learning tab accordion) ---
const VideoItem = ({ topic }: { topic: string }) => (
	<button className="w-full flex items-center justify-between p-3 text-left border border-[#E5E7EB] bg-[#F3F4F6] hover:bg-[#E5E7EB]/70 rounded-3xl transition-colors">
		<div className="flex items-center gap-3">
			<FiPlayCircle className="w-8 h-8 text-black" strokeWidth={1} />
			<span className="text-md text-black font-semibold">{topic}</span>
		</div>
		<FiChevronRight className="w-4 h-4 text-black" />
	</button>
)

// --- Accordion Item (for weekly learning videos) ---
interface LearningWeek {
	id: string // e.g., 'week1'
	title: string // e.g., 'Learning Videos (Week 1)'
	videoCount: number
	videos: { id: string; topic: string }[]
}
const LearningAccordion = ({ week, isOpen, onToggle }: { week: LearningWeek; isOpen: boolean; onToggle: () => void }) => (
	<div className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#E5E7EB]">
		<button
			onClick={onToggle}
			className={`w-full flex justify-between items-center px-4 py-3 focus:outline-none ${isOpen ? '' : 'hover:bg-[#F3F4F6]'}`}>
			<div>
				<h3 className="text-md mb-3 font-medium text-black">{week.title}</h3>
				<p className="text-sm text-start text-[#6B7280]">{week.videoCount} videos</p>
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

// --- Assessment Item Component ---
interface AssessmentItemData {
	id: string
	title: string
	resourcesCount: number
}

const AssessmentItem = ({ assessment }: { assessment: AssessmentItemData }) => (
	<button className="w-full flex justify-between items-center p-4 text-left bg-[#F9FAFB] hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB] transition-colors">
		<div>
			<h3 className="text-md font-semibold text-black mb-2">{assessment.title}</h3>
			<p className="text-xs text-[#6B7280]">{assessment.resourcesCount} Resources</p>
		</div>
		<FiChevronRight className="w-5 h-5 text-black" />
	</button>
)

// --- Mock Paper Item Component ---
interface MockPaperItemData {
	id: string
	title: string
}
const MockPaperItem = ({ item }: { item: MockPaperItemData }) => (
	<button className="w-full flex justify-between items-center p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB] shadow-sm transition-colors">
		<h3 className="tracking-wide text-black">{item.title}</h3>
		<FiChevronRight className="w-5 h-5 text-black" />
	</button>
)

// --- Work Sheet Item Component ---
interface WorkSheetItemData {
	id: string
	title: string
}
const WorkSheetItem = ({ item }: { item: WorkSheetItemData }) => (
	<button className="w-full flex justify-between items-center p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB] shadow-sm transition-colors">
		<h3 className="text-black">{item.title}</h3>
		<FiChevronRight className="w-5 h-5 text-black" />
	</button>
)

// --- Sample Data ---
const mainCategories = [
	'Academics',
	'Skill Development',
	'Brain Function',
	'Sports',
	'STEMnology',
	'Competition',
	'Extra curriculars',
]
const academicSubCategories = ['Math', 'Science', 'English']
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet']

const learningWeeksData: LearningWeek[] = Array.from({ length: 5 }, (_, i) => ({
	id: `week${i + 1}`,
	title: `Learning Videos ( Week ${i + 1} )`, // Title for accordion header
	videoCount: i === 0 ? 4 : 3, // For subtext in accordion header
	videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
		id: `v${j + 1}`,
		topic: `Topic ${j + 1}`,
	})), // Actual video items
}))

const assessmentData: AssessmentItemData[] = Array.from({ length: 5 }, (_, i) => ({
	id: `assess${i + 1}`,
	title: `Title`,
	resourcesCount: 3,
}))

const mockPapersData: MockPaperItemData[] = [
	{ id: 'mp1', title: 'Addition Mock Test' },
	{ id: 'mp2', title: 'Subtraction Mock Test' },
	{ id: 'mp3', title: 'Multiplication Mock Test' },
	{ id: 'mp4', title: 'Subtraction Mock Test 2' },
	{ id: 'mp5', title: 'Division Mock Test' },
	{ id: 'mp6', title: 'Multiplication Mock Test 2' },
]

const workSheetData: WorkSheetItemData[] = [
	{ id: 'ws1', title: 'Understanding Unitary Method – Level 1' },
	{ id: 'ws2', title: 'Numbers in Action – Sheet 1' },
	{ id: 'ws3', title: 'Everyday Maths – Skill Builder 1' },
	{ id: 'ws4', title: 'Stepwise Solutions – Worksheet A' },
	{ id: 'ws5', title: 'Think & Solve – Level 1' },
	{ id: 'ws6', title: 'Learning Ladder – Level 1' },
]

export default function MyClassAssesmentPage({ tabId }: { tabId?: number }) {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0])
	const [activeSubCategory, setActiveSubCategory] = useState(academicSubCategories[0])
	const [activeContentTab, setActiveContentTab] = useState(contentTabsData[1]) // Default to Learning
	const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0].id) // Open first learning week by default
	const [currentMonth] = useState('June 2025')
	const [currentWeekFilter, setCurrentWeekFilter] = useState('Weekly')

	useEffect(() => {
		setActiveContentTab(contentTabsData[tabId ? tabId : 0])
	}, [])

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	} // UPDATE PATH

	const handleAccordionToggle = (weekId: string) => {
		setOpenAccordionId(prevId => (prevId === weekId ? null : weekId))
	}

	const getContentTitle = () => {
		if (activeContentTab === 'Learning') return `Earth and Space Science` // Specific for learning as per image
		if (activeContentTab === 'Assessments') return `Startup Math Part 1`
		if (activeContentTab === 'Mock Papers') return `${activeSubCategory} Mock Papers`
		if (activeContentTab === 'Work Sheet') return `${activeSubCategory} Work Sheet`
		return `${activeSubCategory} Content`
	}
	const getContentSubTitle = () => {
		if (activeContentTab === 'Learning') return `Solar system, weather patterns, and basic understanding of the Earth.`
		return null // No subtitle for other tabs in the images
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
				{/* Main Category Tabs (Horizontal Scroll) */}
				<div className="mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto">
					<div className="flex space-x-4 justify-center items-center relative">
						<button className="absolute left-0 p-1.5 text-black cursor-pointer focus:outline-none">
							<FiArrowLeft className="w-5 h-5" strokeWidth={3} />
						</button>
						{mainCategories.map(category => (
							<MainCategoryTab
								key={category}
								label={category}
								isActive={activeMainCategory === category}
								onClick={() => setActiveMainCategory(category)}
								hasDropdown={category === 'Sports'} // Example of a category with dropdown
							/>
						))}
					</div>
				</div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{/* Left Sidebar for Sub-categories */}
					<div className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl shadow-lg p-4 space-y-2 max-h-96">
						{academicSubCategories.map(subCat => (
							<SubCategoryItem
								key={subCat}
								label={subCat}
								isActive={activeSubCategory === subCat}
								onClick={() => setActiveSubCategory(subCat)}
							/>
						))}
					</div>

					{/* Right Content Area */}
					<div className="md:col-span-3 lg:col-span-4 bg-white rounded-2xl shadow-lg p-6">
						{/* Content Tabs (Learning, Assessments, etc.) */}
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
										<option value="Week 1">Weekly 1</option>
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

						{/* Dynamic Title, Subtitle and Filters */}
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
							<div>
								<h2 className="text-xl font-semibold text-[#3366FF]">{getContentTitle()}</h2>
								{getContentSubTitle() && <p className="text-sm text-[#3366FF] mt-1">{getContentSubTitle()}</p>}
							</div>
						</div>

						{/* Conditional Content Rendering */}
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

						{activeContentTab === 'Assessments' && (
							<div className="space-y-3">
								{assessmentData.map(assessment => (
									<AssessmentItem key={assessment.id} assessment={assessment} />
								))}
							</div>
						)}

						{activeContentTab === 'Mock Papers' && (
							<div className="space-y-3">
								{mockPapersData.map(item => (
									<MockPaperItem key={item.id} item={item} />
								))}
							</div>
						)}

						{activeContentTab === 'Work Sheet' && (
							<div className="space-y-3">
								{workSheetData.map(item => (
									<WorkSheetItem key={item.id} item={item} />
								))}
							</div>
						)}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
