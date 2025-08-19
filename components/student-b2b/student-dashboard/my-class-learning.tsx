'use client'

import { useState } from 'react'
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

// --- Main Category Tab (Top horizontal bar) ---
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
		className={`flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap ${
			isActive ? 'bg-[#FF3366] text-white shadow-md' : 'text-[#6B7280] hover:bg-[#ff33660f]'
		}`}>
		{label}
		{hasDropdown && (
			<FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />
		)}
	</button>
)

// --- Sub Category Item (Vertical navigation on left) ---
const SubCategoryItem = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`w-full text-left px-5 py-3 text-sm font-medium rounded-2xl transition-colors ${
			isActive ? 'bg-[#3366FF] text-white shadow' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
		}`}>
		{label}
	</button>
)

// --- Content Tab (Learning, Assessments, etc.) ---
const ContentTab = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`px-4 py-2 text-sm font-medium whitespace-nowrap focus:outline-none border-b-2 transition-colors ${
			isActive ? 'border-[#3366FF] text-[#3366FF]' : 'border-transparent text-[#6B7280] hover:text-black hover:border-[#6B7280]'
		}`}>
		{label}
	</button>
)

// --- Learning Video Item (inside accordion) ---
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
	<div className="bg-[#F9FAFB] rounded-2xl shadow-sm overflow-hidden border border-[#E5E7EB]">
		<button
			onClick={onToggle}
			className="w-full flex justify-between items-center p-4 hover:bg-[#F3F4F6] focus:outline-none transition-colors">
			<div>
				<h3 className="text-md mb-3 font-semibold text-black">{week.title}</h3>
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
const academicSubCategories = ['Math', 'Science', 'English'] // For "Academics"
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet']
const learningWeeksData: LearningWeek[] = Array.from({ length: 5 }, (_, i) => ({
	id: `week${i + 1}`,
	title: `Learning Videos ( Week ${i + 1} )`,
	videoCount: i === 0 ? 4 : 3, // First one has 4 videos
	videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
		id: `v${j + 1}`,
		topic: `Topic ${j + 1}`,
	})),
}))

export default function YearlyPlanSubjectPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0])
	const [activeSubCategory, setActiveSubCategory] = useState(academicSubCategories[0])
	const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0])
	const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0].id) // Open first week
	const [currentMonth] = useState('June 2025')
	const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1')

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	} // UPDATE PATH

	const handleAccordionToggle = (weekId: string) => {
		setOpenAccordionId(prevId => (prevId === weekId ? null : weekId))
	}

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
				{/* Main Category Tabs (Horizontal Scroll) */}
				<div className="mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto">
					<div className="flex space-x-4 justify-center items-center relative">
						<button className="absolute left-0 p-1.5 text-black cursor-pointer focus:outline-none">
							<FiArrowLeft className="w-5 h-5" strokeWidth={2} />
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
					<div className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl shadow-lg p-4 space-y-2">
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

						{activeContentTab === 'Learning' && (
							<div className="space-y-3">
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
									<div>
										<h2 className="text-xl font-bold text-[#3366FF]">Earth and Space Science</h2>
										<p className="text-lg text-[#3366FF] mt-0.5">
											Solar system, weather patterns, and basic understanding of the Earth.
										</p>
									</div>
								</div>
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
						{activeContentTab === 'Assessments' && (
							<div className="text-center py-10 text-black">Assessments content goes here.</div>
						)}
						{activeContentTab === 'Mock Papers' && (
							<div className="text-center py-10 text-black">Mock Papers content goes here.</div>
						)}
						{activeContentTab === 'Work Sheet' && (
							<div className="text-center py-10 text-black">Work Sheet content goes here.</div>
						)}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
