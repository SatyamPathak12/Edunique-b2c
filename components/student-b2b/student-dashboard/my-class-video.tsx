'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { FiArrowLeft, FiChevronDown, FiVolume2, FiMaximize, FiLock } from 'react-icons/fi'

// --- Tab Button Component ---
const InfoTabButton = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`px-5 py-1.5 text-sm tracking-wide font-medium rounded-xl transition-colors ${
			isActive ? 'bg-[#3366FF] text-white  px-6 rounded-xl' : 'text-[#6B7280] hover:bg-gray-100'
		}`}>
		{label}
	</button>
)

// --- Playlist Item Component ---
interface PlaylistItemData {
	id: string
	title: string
	subtitle: string
	date: string
	duration?: string // e.g., "45 Mins"
	isLocked?: boolean
	isActive?: boolean // To highlight the current video
}
const PlaylistItem = ({ item, onClick }: { item: PlaylistItemData; onClick: () => void }) => (
	<button
		onClick={onClick}
		className={`w-full text-left py-3 px-4 border bg-[#F9FAFB] border-[#E5E7EB] rounded-2xl transition-colors flex justify-between items-center ${
			item.isActive ? 'bg-[#3366FF1A] border-transparent' : 'hover:bg-gray-100/70'
		}`}>
		<div>
			<h4 className={`text-lg ${item.isActive ? 'text-[#3366FF]' : 'text-black'}`}>{item.title}</h4>
			<p className={`text-sm font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>{item.subtitle}</p>
			<p className={`text-sm font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>{item.date}</p>
		</div>
		<div className="text-right flex-shrink-0 flex flex-col ml-2 gap-1 items-end mt-auto">
			{item.isLocked ? (
				<div className="bg-[#FF33661A] rounded-full p-3 h-fit w-fit">
					<FiLock className="w-4 h-4 text-[#FF3366]" strokeWidth={3} />
				</div>
			) : item.duration ? (
				''
			) : null}
			<span className={`text-md mt-auto font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>
				{item.duration}
			</span>
		</div>
	</button>
)

// --- Quiz Item Component (for Quiz and Result tabs) ---
interface QuizResultItemData {
	id: string
	name: string
	subtitleOrDate: string // "Subtitle" for upcoming, "Date" for results
	scorePercentage?: number // For result tab
	isLocked?: boolean
	date?: string
}
const QuizResultItem = ({ item }: { item: QuizResultItemData }) => (
	<div className="bg-[#F9FAFB] p-4 rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
		<div className="flex flex-col justify-between min-h-[60px]">
			{' '}
			{/* <-- Fix here */}
			<h4 className="text-md font-medium text-black">{item.name}</h4>
			<p className="text-xs font-light text-[#6B7280]">{item.subtitleOrDate}</p>
			{item.date && <p className="text-xs font-light text-[#6B7280]">23 / 5 / 2025</p>}
		</div>

		<div className="text-right flex-shrink-0 flex flex-col ml-2 self-start gap-1 items-end">
			{item.isLocked && (
				<div className="bg-[#FF33661A] rounded-full p-3 h-fit w-fit">
					<FiLock className="w-4 h-4 text-[#FF3366]" strokeWidth={3} />
				</div>
			)}
			{typeof item.scorePercentage === 'number' && !item.isLocked && (
				<div className="bg-[#99DEFF] text-black text-md px-6 py-7 rounded-2xl flex-shrink-0 ml-2">{item.scorePercentage}%</div>
			)}
		</div>
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
const playlistData: PlaylistItemData[] = [
	{
		id: 'v1',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isActive: true,
	},
	{
		id: 'v2',
		title: 'Quiz Name',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
	},
	{
		id: 'v3',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
	{
		id: 'v4',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
	{
		id: 'v5',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
	{
		id: 'v6',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
	{
		id: 'v7',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
	{
		id: 'v8',
		title: 'Title',
		subtitle: 'Subtitle',
		date: '23 / 5 / 25',
		duration: '45 Mins',
		isLocked: true,
	},
]
const upcomingQuizData: QuizResultItemData[] = [
	{
		id: 'q1',
		name: 'Quiz Name',
		subtitleOrDate: 'Subtitle',
		isLocked: false,
		date: '23/2/24',
	},
	{
		id: 'q2',
		name: 'Quiz Name',
		subtitleOrDate: 'Subtitle',
		isLocked: true,
		date: '23/2/24',
	},
	{
		id: 'q3',
		name: 'Quiz Name',
		subtitleOrDate: 'Subtitle',
		isLocked: true,
		date: '23/2/24',
	},
]
const resultData: QuizResultItemData[] = [
	{ id: 'r1', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
	{ id: 'r2', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
]

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

export default function CourseVideoPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0])
	const [activeInfoTab, setActiveInfoTab] = useState<'Overview' | 'Quiz' | 'Result'>('Result')
	const [currentVideoTime] = useState(30) // Example: 30% progress

	// Dummy user for Header
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	} // UPDATE PATH

	const loremIpsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros sapien, semper id velit quis, sollicitudin egestas sem. In ac bibendum lacus, at luctus nunc. Proin elementum ullamcorper luctus. Aenean nec nulla imperdiet, sodales lacus quis, tempus neque. Vestibulum id purus augue. Fusce vel lectus ac nibh auctor tristique. Aliquam a leo risus. Integer ut gravida risus. Aliquam lobortis tortor at tellus consequat egestas eget ac mi. Suspendisse id ligula accumsan, ullamcorper nibh non, semper felis. Integer efficitur luctus sem, varius vehicula tellus hendrerit nec. Vestibulum ut aliquet turpis. Suspendisse ac semper nisi. Donec tristique ligula a volutpat mollis. Duis vel ligula in mi cursus accumsan vel at quam. Nullam in metus nec turpis mattis ullamcorper sit amet at est. Aliquam fringilla sapien nec arcu faucibus luctus. Nullam elementum aliquam arcu, vitae lacinia erat aliquam nec. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac lorem vitae urna elementum bibendum sed sit amet neque. Nam quis sem ac augue porta tempor vel non tortor. Etiam sollicitudin odio ligula, vel eleifend nisl viverra quis. Sed sed nunc scelerisque, fringilla magna vitae, condimentum odio. Phasellus sed rutrum ligula, sed interdum lorem. Etiam massa nisi, eleifend ut sollicitudin accumsan, viverra vel ex. Pellentesque id enim tincidunt, consequat felis a, tempor nisi. Cras hendrerit lacinia tellus at sollicitudin. Nullam dolor enim, luctus id auctor ut, ultrices eget nulla. Cras vestibulum quam id sapien efficitur volutpat. Cras tempor magna elementum maximus faucibus.'

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
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

				{/* Upper Section: Video Player + Playlist (Flex Layout) */}
				<div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl">
					<div className="flex-1 overflow-hidden">
						{/* Video Header */}
						<div className="py-4 px-3 flex items-start gap-4">
							<button className="p-1.5 text-black cursor-pointer focus:outline-none">
								<FiArrowLeft className="w-5 h-5" strokeWidth={3} />
							</button>
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
								<div>
									<h2 className="text-2xl font-semibold text-[#3366FF]">Earth and Space Science</h2>
									<p className="text-lg font-light text-[#3366FF] mt-0.5">
										Solar system, weather patterns, and basic understanding of the Earth.
									</p>
								</div>
							</div>
						</div>

						{/* Video Player */}
						<div className="px-6 pb-6 h-full rounded-2xl overflow-hidden">
							<div className="relative aspect-video bg-black group mb-6 h-[85%] rounded-2xl overflow-hidden">
								<Image
									src="/images/video-image.png" // <-- UPDATE PATH to your video thumbnail
									alt="Video player placeholder"
									layout="fill"
									objectFit="cover"
									className="w-[90%]"
								/>
								{/* Custom Controls (Simplified) */}
								<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-full h-1.5 bg-[#3366FF99]/50 rounded-full mb-2 relative cursor-pointer">
										<div
											className="absolute top-0 left-0 h-full bg-[#FF3366] rounded-full"
											style={{ width: `${currentVideoTime}%` }}></div>
										<div
											className="absolute h-3.5 w-3.5 bg-white rounded-full -top-1 shadow border border-gray-300"
											style={{ left: `calc(${currentVideoTime}% - 7px)` }}></div>
									</div>
									<div className="flex justify-between items-center text-white">
										<div className="flex items-center gap-3">
											<FiVolume2 className="w-5 h-5 cursor-pointer" />
										</div>
										<FiMaximize className="w-5 h-5 cursor-pointer" />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Playlist Sidebar */}
					<div className="w-full lg:w-80 xl:w-96 bg-white rounded-2xl p-6 pl-3 md:h-[450px] xl:h-[700px] overflow-auto custom-scrollbar">
						<div className="relative z-10 h-full">
							<div className="space-y-2 h-full overflow-y-auto custom-scrollbar pr-2">
								{playlistData.map(item => (
									<PlaylistItem key={item.id} item={item} onClick={() => console.log('Play:', item.title)} />
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Lower Section: Info Tabs (Full Width) */}
				<div className="bg-white rounded-2xl shadow-xl p-6">
					{/* Info Tabs Navigation */}
					<div>
						<div className="flex items-center font-semibold gap-6 mb-6">
							<InfoTabButton
								label="Overview"
								isActive={activeInfoTab === 'Overview'}
								onClick={() => setActiveInfoTab('Overview')}
							/>
							<InfoTabButton label="Quiz" isActive={activeInfoTab === 'Quiz'} onClick={() => setActiveInfoTab('Quiz')} />
							<InfoTabButton label="Result" isActive={activeInfoTab === 'Result'} onClick={() => setActiveInfoTab('Result')} />
						</div>

						{activeInfoTab === 'Overview' && (
							<div className="text-sm text-gray-600 leading-relaxed space-y-3">
								<p>{loremIpsum.substring(0, 400)}</p>
								<p>{loremIpsum.substring(400, 800)}</p>
							</div>
						)}

						{activeInfoTab === 'Quiz' && (
							<div>
								<h3 className="text-lg font-semibold text-[#FF3366] mb-4">Upcoming Quiz</h3>
								<div className="space-y-3">
									{upcomingQuizData.map(quiz => (
										<QuizResultItem key={quiz.id} item={quiz} />
									))}
								</div>
							</div>
						)}

						{activeInfoTab === 'Result' && (
							<div>
								{/* No specific title for result list in image, direct items */}
								<div className="space-y-3">
									{resultData.map(result => (
										<QuizResultItem key={result.id} item={result} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
