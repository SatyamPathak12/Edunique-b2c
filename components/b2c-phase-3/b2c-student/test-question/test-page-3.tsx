'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiBell, FiClock } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

// --- DATA & TYPES (Unchanged) ---
interface QuestionOption {
	id: string
	text: string
}

interface Question {
	id: number
	text: string
	options: QuestionOption[]
	correctOptionId?: string
}

const sampleQuestions: Question[] = [
	{ id: 1, text: 'शब्द को उसके चित्र से मिलाओ', options: [{ id: 'a', text: 'Roots' }, { id: 'b', text: 'Leaves' }, { id: 'c', text: 'Stem' }, { id: 'd', text: 'Flower' }], correctOptionId: 'b' },
	{ id: 2, text: 'शब्द को उसके चित्र से मिलाओ', options: [{ id: 'a', text: 'Roots' }, { id: 'b', text: 'Leaves' }, { id: 'c', text: 'Stem' }, { id: 'd', text: 'Flower' }], correctOptionId: 'b' },
	{ id: 3, text: 'शब्द को उसके चित्र से मिलाओ', options: [{ id: 'a', text: 'Option' }, { id: 'b', text: 'Option' }, { id: 'c', text: 'Option' }, { id: 'd', text: 'Option' }], correctOptionId: 'b' },
	{ id: 4, text: 'शब्द को उसके चित्र से मिलाओ', options: [{ id: 'a', text: 'Option' }, { id: 'b', text: 'Option' }, { id: 'c', text: 'Option' }, { id: 'd', text: 'Option' }], correctOptionId: 'b' },
	{ id: 5, text: 'शब्द को उसके चित्र से मिलाओ', options: [{ id: 'a', text: 'Option' }, { id: 'b', text: 'Option' }, { id: 'c', text: 'Option' }, { id: 'd', text: 'Option' }], correctOptionId: 'c' },
]

const TOTAL_QUESTIONS = 20
const TIME_LIMIT_MINUTES = 20
const tabCategories = ['Academic Skills', 'Brain Development', 'Personality Development', 'Emotional Intelligence']

// --- UI SUB-COMPONENTS (For cleaner structure) ---

const TestHeader = () => (
	<header className="bg-[#3366FF] text-white sticky top-0 z-50">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
			<div className="flex items-center">
				<Image src="/page3/student_b2b/Clip path group.svg" alt="Edunique Logo" width={150} height={40} />
			</div>
			<div className="flex items-center space-x-4">
				<button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
					<FiBell className="w-5 h-5" />
				</button>
				<div className="flex items-center space-x-2">
					<Image src="/images/person.jpg" alt="Shlok Agheda" width={32} height={32} className="rounded-full" />
					<div>
						<p className="text-sm font-medium">Shlok Agheda</p>
						<p className="text-xs opacity-80">Student</p>
					</div>
				</div>
			</div>
		</div>
	</header>
)

interface QuestionPanelProps {
	activeCategory: string;
	setActiveCategory: (category: string) => void;
	currentQuestionIndex: number;
	timeLeft: number;
	currentQuestion: Question | undefined;
	handleNextQuestion: () => void;
}

const QuestionPanel = ({
	activeCategory,
	setActiveCategory,
	currentQuestionIndex,
	timeLeft,
	currentQuestion,
	handleNextQuestion,
}: QuestionPanelProps) => {
	const router = useRouter();
	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
	}

	return (
		<div className="w-full lg:w-[75%] bg-white rounded-xl md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
			<h1 className="text-lg md:text-xl leading-loose font-medium text-gray-800 mb-6">
				DMIT (Dermatoglyphics Multiple Intelligence Test) and skill assessment
			</h1>
			<div className="mb-8 flex justify-center pb-2">
				<div className="inline-flex w-auto overflow-x-auto mx-auto space-x-1 border bg-[#f9fafb] border-gray-200 rounded-full p-2">
					{tabCategories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-150 rounded-full ${activeCategory === category
								? "bg-[#FF3366] text-white"
								: "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
								}`}
						>
							{category}
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-row justify-between items-center mb-8 gap-4">
				<div className="text-left">
					<p className="text-lg font-semibold text-[#6B7280]">Questions : {TOTAL_QUESTIONS}</p>
					<p className="text-xs mt-2 text-gray-500">Time Limit: {TIME_LIMIT_MINUTES} Minutes</p>
					<div className="mt-2 inline-flex items-center justify-center px-3 bg-[#8DD9B3] text-[#1E2A32] py-2 rounded-full">
						{currentQuestionIndex + 1} / {TOTAL_QUESTIONS}
					</div>
				</div>
				<div className="text-right">
					<div className="flex justify-end items-center gap-1.5 text-[#FF3366]">
						<FiClock className="w-5 h-5" />
						<span className="text-lg font-extrabold">{formatTime(timeLeft)}</span>
					</div>
					<p className="text-md font-medium text-[#FF99B7]">Min Left</p>
					<p className="text-sm mt-2 hidden md:block space-x-1 p-2 rounded-xl border border-[#FF3366] flex">
						<Image src="/images/Tip.svg" alt="Ask me bot" className="w-[40px]" width={10} height={10} />
						<span>Draw the lines to match the following</span>
					</p>
				</div>
			</div>
				<p className="text-sm mt-2 space-x-1 p-2 md:hidden rounded-xl border border-[#FF3366] flex">
						<Image src="/images/Tip.svg" alt="Ask me bot" className="w-[40px]" width={10} height={10} />
						<span>Draw the lines to match the following</span>
					</p>
			{currentQuestion && (
				<div className="bg-gray-50 p-6 rounded-2xl">
					<p className="text-sm mb-2 text-gray-500">Question {currentQuestionIndex + 1}</p>
					<h2 className="text-lg font-semibold text-gray-800 mb-0">{currentQuestion.text}</h2>
				</div>
			)}
			<div className="mt-10 flex justify-center rounded-full">
				<button
					onClick={() => router.push("/b2c-phase-3/b2c-student/test/test-page-11")} className="px-10 py-3 bg-[#3366FF] text-white font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:cursor-pointer">
					{currentQuestionIndex === TOTAL_QUESTIONS - 1 || currentQuestionIndex === sampleQuestions.length - 1 ? 'Submit' : 'Next'}
				</button>
			</div>
		</div>
	);
}

const DrawingPanel = () => (
	<div className="w-full lg:w-2/5 flex items-center justify-center">
		<div className="flex item-center flex-col w-full h-full">
			<div className="p-5 bg-[#F9FAFB] rounded-2xl flex items-center justify-between flex-1">
				<ul className="flex flex-col gap-6 justify-center h-full">
					<Image src={"/images/animals.png"} alt='animals' priority height={474} width={99} className='h-[310px] w-auto object-cover' />
				</ul>
				<ul className="flex flex-col gap-6 justify-center h-full">
					<li className="pb-3 font-semibold text-xl">फूल</li>
					<li className="pb-3 font-semibold text-xl">भालू</li>
					<li className="pb-3 font-semibold text-xl">आलू</li>
					<li className="pb-3 font-semibold text-xl">झूला</li>
					<li className="pb-3 font-semibold text-xl">सूरज</li>
				</ul>
			</div>
			<div className="flex items-center justify-center">
				<div className="bg-gray-50 rounded-4xl flex items-center p-3 mt-4">
					<Image src="/images/Vector@2x.png" alt="Tool 1" className="mx-1 w-[20px]" width={20} height={20} />
					<Image src="/images/undo.png" alt="Undo" className="w-[20px] mx-1" width={20} height={20} />
					<Image src="/images/redo.png" alt="Redo" className="w-[20px] mx-1" width={20} height={20} />
					<Image src="/images/Group.png" alt="Tool 4" className="w-[20px] mx-1" width={20} height={20} />
				</div>
			</div>
		</div>
	</div>
);

// --- MAIN PAGE COMPONENT ---
export default function DmittTest_3_Page() {
	const [activeCategory, setActiveCategory] = useState(tabCategories[0])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1) // Start from index 0
	const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
	const [answers, setAnswers] = useState<(string | null)[]>(Array(TOTAL_QUESTIONS).fill(null))
	const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES * 60)

	// Timer Logic (Unchanged)
	useEffect(() => {
		if (timeLeft <= 0) {
			console.log("Time's up!")
			return
		}
		const timer = setInterval(() => {
			setTimeLeft(prevTime => prevTime - 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [timeLeft])

	const currentQuestion = sampleQuestions[currentQuestionIndex]

	const handleNextQuestion = () => {
		const newAnswers = [...answers]
		newAnswers[currentQuestionIndex] = selectedOptionId
		setAnswers(newAnswers)

		setSelectedOptionId(null)

		if (currentQuestionIndex < TOTAL_QUESTIONS - 1 && currentQuestionIndex < sampleQuestions.length - 1) {
			setCurrentQuestionIndex(prevIndex => prevIndex + 1)
		} else {
			console.log('Test Finished. Answers:', newAnswers)
		}
	}

	return (
		<div className="min-h-screen bg-white flex flex-col">
			<TestHeader />

			{/* This container defines the fixed height area below the header */}
			<div className="flex-1 flex lg:h-[calc(100dvh-64px)] p-4 sm:p-6 lg:p-8">
				<main className="w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-8">
					<QuestionPanel
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
						currentQuestionIndex={currentQuestionIndex}
						timeLeft={timeLeft}
						currentQuestion={currentQuestion}
						handleNextQuestion={handleNextQuestion}
					/>
					<DrawingPanel />
				</main>
			</div>
		</div>
	)
}