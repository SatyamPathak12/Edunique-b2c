'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FiArrowLeft, FiArrowLeftCircle, FiArrowRightCircle, FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

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
			<FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''}`} />
		)}
	</button>
)

const mainCategories = [
	'Academics',
	'Skill Development',
	'Brain Function',
	'Sports',
	'STEMnology',
	'Competition',
	'Extra curriculars',
]

// --- Assessment Item Component ---
interface AssessmentItemData {
	id: string
	title: string
	resourcesCount: number
}

const AssessmentItem = ({ assessment }: { assessment: AssessmentItemData }) => (
	<button className="w-full flex justify-between items-center p-4 text-left bg-[#F9FAFB] hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB]">
		<div>
			<h3 className="text-md text-black font-medium mb-2">{assessment.title}</h3>
			<p className="text-xs text-[#6B7280]">{assessment.resourcesCount} Resources</p>
		</div>
		<svg className="h-6 w-6" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 24L20 16L12 8" stroke="black" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	</button>
)

// --- Worksheet Page Component ---
export default function WorksheetViewPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0])
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 5

	const assessmentData = useMemo(
		() => [
			{ id: `1`, title: `Number 1 to 100`, resourcesCount: 2 },
			{ id: `2`, title: `Number 200 to 300`, resourcesCount: 3 },
			{ id: `3`, title: `Addition`, resourcesCount: 3 },
			{ id: `4`, title: `Subtraction`, resourcesCount: 3 },
		],
		[]
	)

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	}

	const goToPreviousPage = () => {
		setCurrentPage(prev => Math.max(1, prev - 1))
	}

	const goToNextPage = () => {
		setCurrentPage(prev => Math.min(totalPages, prev + 1))
	}

	// const [currentWeekFilter, setCurrentWeekFilter] = useState('Weekly')

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
				{/* Main Category Tabs */}
				<div className="mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto">
					<div className="flex space-x-4 justify-start items-center relative">
						<button className=" p-1.5 text-black cursor-pointer focus:outline-none">
							<FiArrowLeft className="w-5 h-5" strokeWidth={3} />
						</button>
						{mainCategories.map(category => (
							<MainCategoryTab
								key={category}
								label={category}
								isActive={activeMainCategory === category}
								onClick={() => setActiveMainCategory(category)}
								hasDropdown={category === 'Sports'}
							/>
						))}
					</div>
				</div>

				{/* Worksheet Content */}
				<div className="bg-white max-w-7xl rounded-2xl shadow-xl relative mx-auto p-2">
					<div className="flex flex-col lg:flex-row">
						{/* Left Part */}
						<div className="bg-white flex-1 rounded-2xl px-3 py-6 relative min-w-0">
							<div className="absolute top-6 right-6 md:top-8 md:right-8 text-right">
								<div className="flex gap-3">
									<div className="flex items-center gap-3 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
										<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" onClick={goToPreviousPage} />
										<span>Page {currentPage}</span>
										<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" onClick={goToNextPage} />
									</div>
								</div>
							</div>

							<div className="flex items-start gap-1 mb-4">
								<button className="p-1.5 text-black cursor-pointer focus:outline-none">
									<FiArrowLeft className="w-5 h-5" strokeWidth={3} />
								</button>
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
									<div>
										<h2 className="text-xl font-semibold text-[#FF3366]">Startup Maths Part 1 </h2>
										<p className="text-sm font-light text-black mt-1">Learning </p>
									</div>
								</div>
							</div>

							{/* Worksheet Image */}
							<div className="w-full relative mx-auto prose prose-sm sm:prose-base lg:prose-lg prose-h2:text-xl prose-h2:font-bold prose-h2:text-bla prose-p:mb-4 prose-strong:text-[#3366FF] max-w-none">
								<div className="px-12 pb-6">
									<h2 className="text-sm font-medium mb-4 h-16 flex items-end pb-6 bg-white w-full">Let&apos;s Revise</h2>
									<Image
										src={'/images/startup-math.png'}
										alt="worksheet"
										height={3510}
										width={2482}
										priority
										className="w-full h-auto object-cover object-bottom"
									/>
								</div>
							</div>
						</div>

						{/* Right Part */}
						<div className="bg-white w-full lg:w-72 xl:w-96 rounded-2xl px-3 py-6 relative flex-shrink-0">
							<div className="space-y-3">
								{assessmentData.map(assessment => (
									<AssessmentItem key={assessment.id} assessment={assessment} />
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
