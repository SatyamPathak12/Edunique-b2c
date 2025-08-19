'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiBell, FiClock } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

// --- Simplified Header for In-Test View ---
// You might use your full Header component or a simplified one for focus.
const TestHeader = () => (
	<header className="bg-[#3366FF] text-white sticky top-0 z-50">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
			{/* Logo */}
			<div className="flex items-center">
				{/* Replace with your actual logo */}
				<Image src="/page3/student_b2b/Clip path group.svg" alt="Edunique Logo" width={150} height={40} />
				{/* <Image src="/logo-white.png" alt="Edunique Logo" width={150} height={40} /> */}
			</div>

			{/* User Info & Notification */}
			<div className="flex items-center space-x-4">
				<button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
					<FiBell className="w-5 h-5" />
				</button>
				<div className="flex items-center space-x-2">
					<Image
						src="/images/person.jpg" // Replace with actual avatar path
						alt="Shlok Agheda"
						width={32}
						height={32}
						className="rounded-full"
					/>
					<div>
						<p className="text-sm font-medium">Shlok Agheda</p>
						<p className="text-xs opacity-80">Student</p>
					</div>
				</div>
			</div>
		</div>
	</header>
)



// --- Sample Data ---
interface EssayQuestionData {
	id: number
	text: string
}

const essayQuestion: EssayQuestionData = {
	id: 1,
	text: 'Describe a good friend. What makes someone a good friend?',
}

const TOTAL_QUESTIONS_IN_SET = 10 // Total questions in this particular DMIT set
const TIME_LIMIT_MINUTES_DMIT = 20 // Time limit for this set
const tabCategoriesData = ['Academic Skills', 'Brain Development', 'Personality Development', 'Emotional Intelligence']

export default function DmittTest_7_Page() {
	const [activeCategory, setActiveCategory] = useState(tabCategoriesData[2]) // Default to "Personality Development"
	const [currentQuestionNumber] = useState(2) // For "1 / 10" display
	const [answerText] = useState('')
	const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES_DMIT * 60) // Time in seconds

	// User data for header
	const router = useRouter();

	// Timer useEffect
	useEffect(() => {
		if (timeLeft <= 0) {
			console.log("Time's up!")
			// Handle time up (e.g., auto-submit)
			return
		}
		const timer = setInterval(() => {
			setTimeLeft(prevTime => prevTime - 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [timeLeft])

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
	}



	return (
		<div className="min-h-screen bg-white flex flex-col">
			<TestHeader />

			<main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-[53rem] mx-auto bg-white rounded-xl md:p-8">
					{/* Test Title */}
					<h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
						DMIT (Dermatoglyphics Multiple Intelligence Test) and skill assessment
					</h1>

					{/* Category Tabs */}
					<div className="mb-8 overflow-x-auto pb-2">
						<div className="flex justify-between space-x-2 overflow-x-auto custom-scrollbar border-b bg-[#f9fafb] border-gray-200 rounded-full border overflow-hidden p-2">
							{tabCategoriesData.map(category => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`p-2 px-3 text-sm font-medium whitespace-nowrap focus:outline-none transition-colors duration-150 rounded-full ${activeCategory === category ? 'bg-[#FF3366] text-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
										}`}>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* Test Info: Questions, Time Limit, Progress, Timer */}
					<div className="flex flex-row justify-between items-center mb-8 gap-4">
						<div className="text-left">
							<p className="text-md font-semibold text-[#6B7280]">Questions : {TOTAL_QUESTIONS_IN_SET}</p>
							<p className="text-xs text-gray-500">Time Limit: {TIME_LIMIT_MINUTES_DMIT} Minutes</p>
							<div className="mt-2 inline-flex items-center justify-center px-3 bg-[#8DD9B3] text-[#1E2A32] py-2 rounded-full">
								{currentQuestionNumber} / {TOTAL_QUESTIONS_IN_SET}
							</div>
						</div>
						<div className="text-right">
							<div className="flex items-center gap-1.5 text-[#FF3366]">
								<FiClock className="w-5 h-5" />
								<span className="text-lg font-bold">{formatTime(timeLeft)}</span>
							</div>
							<p className="text-md font-medium text-[#FF99B7]">Min Left</p>
						</div>
					</div>

					{/* Current Essay Question */}
					<div className="bg-gray-50 p-6 rounded-2xl">
						<p className="text-xs text-gray-500 mb-1">Question {currentQuestionNumber}</p>
						<h2 className="text-md font-semibold tracking-wide text-gray-800 mb-0 text-lg pr-8">{essayQuestion.text}</h2>
					</div>
					<div className="bg-gray-50 p-6 rounded-2xl mt-3 border h-[80px]"></div>

					{/* Navigation */}
					<div className="mt-10 flex justify-center">
						{' '}
						{/* Centered Next button */}
						<button

							onClick={() => router.push("/b2c-phase-3/test-question/result")}
							className="px-10 py-3 bg-[#3366FF] text-white font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:cursor-pointer">
							{currentQuestionNumber === TOTAL_QUESTIONS_IN_SET ? 'Submit' : 'Next'}
						</button>
					</div>
				</div>
			</main>
			{/* Footer component is omitted as it's not in the image for this specific test view */}
		</div>
	)
}
