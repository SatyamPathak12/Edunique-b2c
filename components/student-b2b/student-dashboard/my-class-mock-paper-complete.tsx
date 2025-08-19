'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FiArrowLeft, FiChevronDown,  FiSmile } from 'react-icons/fi'
import Image from 'next/image'

// --- Main Category Tab Component (Reused) ---
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
		className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-2xl transition-colors whitespace-nowrap ${
			isActive ? 'bg-[#FF3366] text-white shadow-md' : 'text-[#6B7280] hover:bg-[#ff33660f]'
		}`}>
		{label}
		{hasDropdown && (
			<FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />
		)}
	</button>
)

// --- Question Review Block Component ---
interface OptionReview {
	id: string
	text: string
	isUserSelected: boolean
	isCorrect: boolean
}
interface QuestionReviewData {
	id: number
	text: string // Placeholder as question text is not visible
	options: OptionReview[]
}
const QuestionReviewBlock = ({ question, questionNumber }: { question: QuestionReviewData; questionNumber: number }) => (
	<div className="mb-8 p-6 bg-[#F9FAFB] rounded-2xl">
		<h3 className="text-md font-medium text-black mb-4">
			{questionNumber}) <span className="ml-1">Question</span>
		</h3>
		<div className="space-y-3">
			{question.options.map(option => {
				const optionStyle = 'bg-white hover:bg-gray-100'
				let icon = null
				let textColor = 'text-[#6B7280]'

				if (option.isUserSelected) {
					if (option.isCorrect) {
						icon = (
							<Image src="/student/home/tick2.svg" alt="tick2" width={30} height={30} quality={100} className="object-contain" />
						)
						textColor = 'text-[#8DD9B3]'
					} else {
						icon = (
							<Image src="/student/home/cross.svg" alt="tick2" width={30} height={30} quality={100} className="object-contain" />
						)
						textColor = 'text-red-700'
					}
				} else if (option.isCorrect) {
					// Show correct answer if user didn't select it or selected wrong
					icon = (
						<Image src="/student/home/tick2.svg" alt="tick2" width={30} height={30} quality={100} className="object-contain" />
					)
					textColor = 'text-[#8DD9B3]'
				}

				return (
					<div
						key={option.id}
						className={`w-full flex items-center p-3.5 rounded-full transition-all duration-150 ${optionStyle}`}>
						{icon && <span className="mr-2">{icon}</span>}
						<span className={`text-sm font-medium ${textColor}`}>{option.text}</span>
					</div>
				)
			})}
		</div>
	</div>
)

// --- Radial Progress/Score Chart Component ---
const ScoreChart = () => {
	const radius = 40
	const stroke = 8
	const normalizedRadius = radius - stroke / 2
	const circumference = Math.PI * normalizedRadius
	const progress = 0.3 // 30% progress
	const offset = circumference * (1 - progress)

	return (
		<div className="relative w-60 h-60 mx-auto">
			<svg className="w-full h-full" viewBox="0 0 100 100">
				<path
					d="M 10 50 A 40 40 0 0 1 90 50"
					className="text-[#E9EDF0]"
					strokeWidth="7"
					stroke="currentColor"
					fill="transparent"
					strokeLinecap="round"
				/>
				{/* Progress semi-circle */}
				<path
					d="M 10 50 A 40 40 0 0 1 90 50"
					className="text-[#3366FF]"
					strokeWidth="7"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					stroke="currentColor"
					fill="transparent"
					style={{
						transition: 'stroke-dashoffset 0.5s ease-in-out',
					}}
				/>
			</svg>

			{/* Smiley icon in the center */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="bg-[#E9EDF0] h-fit w-fit p-2 rounded-full">
					<FiSmile className="w-18 h-18 text-[#3366FF]" />
				</div>
			</div>
		</div>
	)
}

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
const reviewQuestions: QuestionReviewData[] = [
	{
		id: 1,
		text: 'Question 1 Text',
		options: [
			{ id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: true },
			{ id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false },
			{ id: 'c', text: 'Option 3', isUserSelected: false, isCorrect: false },
			{ id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
		],
	},
	{
		id: 2,
		text: 'Question 2 Text',
		options: [
			{ id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: false }, // User selected wrong
			{ id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: true }, // Actual correct
			{ id: 'c', text: 'Option 3', isUserSelected: false, isCorrect: false },
			{ id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
		],
	},
	{
		id: 3,
		text: 'Question 3 Text',
		options: [
			{ id: 'a', text: 'Option 1', isUserSelected: false, isCorrect: false },
			{ id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false },
			{ id: 'c', text: 'Option 3', isUserSelected: true, isCorrect: true },
			{ id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
		],
	},
]

// const scorePercentage = Math.round((correctAnswersCount / totalQuestionsInTest) * 100)

export default function MockTestReviewPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0])
	// No timer needed for review page

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	} // UPDATE PATH

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
				{/* Main Category Tabs (Horizontal Scroll) */}
				<div className="mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto">
					<div className="flex space-x-2 justify-center items-center relative">
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

				{/* Main Content: Two Columns - Questions & Score */}
				<div className="bg-white px-3 py-6 rounded-2xl shadow-lg">
					<div className="mb-8 flex items-start gap-3">
						<button className="p-1.5 text-black cursor-pointer focus:outline-none">
							<FiArrowLeft className="w-5 h-5" strokeWidth={3} />
						</button>
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
							<div>
								<h2 className="text-xl font-medium text-[#FF3366]">Addition Mock Test </h2>
								<p className="text-sm text-black mt-0.5 font-light">Assessment </p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
						{/* Left Column: Questions Review */}
						<div className="lg:col-span-2 ">
							{reviewQuestions.map((question, index) => (
								<QuestionReviewBlock key={question.id} question={question} questionNumber={index + 1} />
							))}
							{/* No Submit button on review page */}
						</div>

						{/* Right Column: Score Chart */}
						<div className="lg:col-span-1 flex flex-col gap-6 items-center justify-center lg:sticky lg:top-24">
							{' '}
							{/* Sticky for score */}
							<div className="bg-[#F9FAFB] min-h-[450px] flex flex-col justify-between rounded-2xl p-6 md:p-8 w-full">
								<ScoreChart  />
								<div className="text-center">
									<p className="text-6xl font-bold text-[#8DD9B3]">90%</p>
									<p className="text-lg text-[#6B7280] mt-6">
										You got {2} correct out of {3} !
									</p>
								</div>
							</div>
							<div className="border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full">
								<EvaluationResults />
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}

function EvaluationResults() {
  return (
    <div className="bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-6">
        Evaluation Results
      </h1>

      {/* Table */}
      <div className="border-2 border-black">
        {/* Header Row */}
        <div className="bg-black text-white flex">
          <div className="flex-1 p-4 font-semibold border-r border-white">
            Section
          </div>
          <div className="flex-1 p-4 font-semibold">
            Scores (in stars out of 5)
          </div>
        </div>

        {/* Data Rows */}
        <div className="bg-white">
          <div className="flex border-b border-black">
            <div className="flex-1 p-4 font-medium border-r border-black">
              Concept
            </div>
            <div className="flex-1 p-4">
              {/* Empty space for stars */}
            </div>
          </div>

          <div className="flex border-b border-black">
            <div className="flex-1 p-4 font-medium border-r border-black">
              Sentence Formation
            </div>
            <div className="flex-1 p-4">
              {/* Empty space for stars */}
            </div>
          </div>

          <div className="flex border-b border-black">
            <div className="flex-1 p-4 font-medium border-r border-black">
              Definitions
            </div>
            <div className="flex-1 p-4">
              {/* Empty space for stars */}
            </div>
          </div>

          <div className="flex border-b border-black">
            <div className="flex-1 p-4 font-medium border-r border-black">
              Retention
            </div>
            <div className="flex-1 p-4">
              {/* Empty space for stars */}
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 p-4 font-medium border-r border-black">
              Choice of Words
            </div>
            <div className="flex-1 p-4">
              {/* Empty space for stars */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <h2 className="text-2xl font-bold text-black mt-6">
        Skills a child will develop:
      </h2>
    </div>
  );
}