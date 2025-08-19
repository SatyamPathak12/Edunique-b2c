'use client'

import React, { useState, useMemo } from 'react'
import Header from '@/components/layout/Header' // Adjust path as needed
import Footer from '@/components/layout/Footer' // Adjust path as needed
import {
	FiSearch,
	FiChevronDown,
	FiCalendar,
	FiArrowLeft,
	FiArrowLeftCircle,
	FiArrowRightCircle, // For number inputs
} from 'react-icons/fi'

// --- Data Interfaces ---
interface StepperStep {
	id: number
	name: string
}

interface DropdownOption {
	value: string
	label: string
}

interface UnitaryItemData {
	id: string
	title: string
	subtitle: string
}

interface StudentData {
	id: string
	avatarUrl: string
	name: string
	courseName: string
	levelGrade: string
	group: string
}

// --- Sample Data ---
const AVATAR_PLACEHOLDER = '/teacher-b2b/list-profile.png' // Placeholder

const sampleSubjects: DropdownOption[] = [
	{ value: 'Option 1', label: 'Option 1' },
	{ value: 'Option 2', label: 'Option 2' },
	{ value: 'english', label: 'English' },
]

const sampleClasses: DropdownOption[] = [
	{ value: 'Option 1', label: 'Option 1' },
	{ value: 'class9b', label: 'Class 9 - Section B' },
]

const sampleGroups: DropdownOption[] = [
	{ value: 'Option 1', label: 'Option 1' },
	{ value: 'groupBeta', label: 'Beta Group' },
]

const sampleUnitaryItems: UnitaryItemData[] = [
	{ id: 'u1', title: 'Option Title', subtitle: 'Option Subtitle' },
	{ id: 'u2', title: 'Option Title', subtitle: 'Option Subtitle' },
	{ id: 'u3', title: 'Option Title', subtitle: 'Option Subtitle' },
	{ id: 'u4', title: 'Option Title', subtitle: 'Option Subtitle' },
]

const sampleStudents: StudentData[] = [
	{
		id: 's1',
		avatarUrl: AVATAR_PLACEHOLDER,
		name: 'Student Name',
		courseName: 'Course Name',
		levelGrade: 'Level / Grade',
		group: 'Group',
	},
	{
		id: 's2',
		avatarUrl: AVATAR_PLACEHOLDER,
		name: 'Student Name',
		courseName: 'Course Name',
		levelGrade: 'Level / Grade',
		group: 'Group',
	},
	{
		id: 's3',
		avatarUrl: AVATAR_PLACEHOLDER,
		name: 'Student Name',
		courseName: 'Course Name',
		levelGrade: 'Level / Grade',
		group: 'Group',
	},
]

const sampleStandards: DropdownOption[] = [
	{ value: '1std', label: '1st STD' },
	{ value: '2std', label: '2nd STD' },
	// ... more standards
]

// --- Style Constants ---
const ACCENT_PINK = '#FF3366'
const PRIMARY_BLUE = '#3366FF'
const INPUT_BG = 'bg-[#F9FAFB]' // Slightly off-white for inputs
const INPUT_BORDER = 'border-[#D5D5D5]'
const SCROLLBAR_THUMB_ORANGE = 'scrollbar-thumb-[#FFC79A]' // Custom class for scrollbar
const SCROLLBAR_TRACK_LIGHT = 'scrollbar-track-[#FFC79A]' // Custom class for scrollbar track

// --- Helper Components ---

const FormField: React.FC<{
	label: string
	name: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	type?: 'text' | 'textarea'
	placeholder?: string
	required?: boolean
}> = ({ label, name, value, onChange, type = 'text', placeholder, required }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-black mb-1">
			{label}
		</label>
		{type === 'textarea' ? (
			<textarea
				id={name}
				name={name}
				rows={3}
				value={value}
				onChange={onChange}
				placeholder={placeholder || 'Text'}
				required={required}
				className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}
			/>
		) : (
			<input
				type="text" // Changed from type to always be text for simplicity, date handled separately
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder || 'Text'}
				required={required}
				className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
			/>
		)}
	</div>
)

const FormSelect: React.FC<{
	label: string
	name: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	options: DropdownOption[]
	required?: boolean
}> = ({ label, name, value, onChange, options, required }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-black mb-1">
			{label}
		</label>
		<div className="relative">
			<select
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				className={`w-full px-3 py-2.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-full appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-8`}>
				{options.map(opt => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			<FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
		</div>
	</div>
)

const FormDateInput: React.FC<{
	label: string
	name: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
}> = ({ label, name, value, onChange, required }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-black mb-1">
			{label}
		</label>
		<div className="relative">
			<input
				type="text" // Use text to allow placeholder and custom icon handling; use a date picker library for actual date selection
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder="Text"
				required={required}
				className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-10`}
			/>
			<FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
		</div>
	</div>
)

const DurationPointInput: React.FC<{
	label: string
	value: string
	onChange: (newValue: string) => void
	name: string
}> = ({ label, value, onChange, name }) => {
	const handleIncrement = () => {
		const numValue = parseInt(value) || 0
		onChange(String(numValue + 1).padStart(2, '0'))
	}
	const handleDecrement = () => {
		const numValue = parseInt(value) || 0
		onChange(String(Math.max(0, numValue - 1)).padStart(2, '0'))
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value
		const num = parseInt(rawValue)
		if (!isNaN(num) && num >= 0 && num <= 99) {
			// Assuming max 99 for HH/MM/Points
			onChange(String(num).padStart(2, '0'))
		} else if (rawValue === '') {
			onChange('00')
		}
	}

	return (
		<div className="text-center flex flex-col ">
			<label className="block text-[10px] self-start font-medium text-[#6B7280] mb-1">{label}</label>
			<div
				className={`relative inline-flex items-center justify-between px-2 py-1.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-full  w-20 h-9`}>
				<input
					type="text" // text to control formatting
					name={name}
					value={value}
					onChange={handleChange}
					className="w-full text-center bg-transparent outline-none text-sm font-medium text-black appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					maxLength={2}
				/>
				<div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center">
					<button
						type="button"
						onClick={handleIncrement}
						className="text-black hover:text-black  text-[10px]">
						▲
					</button>
					<button
						type="button"
						onClick={handleDecrement}
						className="text-black hover:text-black   text-[10px]">
						▼
					</button>
				</div>
			</div>
		</div>
	)
}

const Stepper: React.FC<{
	steps: StepperStep[]
	currentStep: number
	setCurrentStep: (step: number) => void
}> = ({ steps, currentStep, setCurrentStep }) => (
	<div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-6 sm:mb-10">
		{steps.map(step => (
			<button
				key={step.id}
				onClick={() => setCurrentStep(step.id)}
				className="flex items-center space-x-2 group focus:outline-none">
				<span
					className={`w-6 h-6 rounded-full flex items-center justify-center text-xs  border
          ${
											currentStep === step.id
												? `text-[${ACCENT_PINK}] border-[${ACCENT_PINK}]`
												: `text-black border-black group-hover:text-black group-hover:border-black`
										}`}>
					{step.id}
				</span>
				<span
					className={`text-sm font-bold ${
						currentStep === step.id ? `text-[${ACCENT_PINK}]` : 'text-black group-hover:text-black'
					}`}>
					{step.name}
				</span>
			</button>
		))}
	</div>
)

const UnitaryItemCard: React.FC<{
	item: UnitaryItemData
	isSelected: boolean
	onSelect: () => void
}> = ({ item, isSelected, onSelect }) => (
	<button
		onClick={onSelect}
		className={`w-full text-left p-3 rounded-full transition-all px-4 duration-150
      ${isSelected ? `bg-orange-100 border-orange-400 shadow-md` : `bg-white hover:bg-gray-200 `}`}>
		<h4 className="text-sm font-semibold text-black">{item.title}</h4>
		<p className="text-xs text-[#6B7280]">{item.subtitle}</p>
	</button>
)

const StudentSelectItemCard: React.FC<{
	student: StudentData
	isSelected: boolean
	onSelect: () => void
}> = ({ student, isSelected, onSelect }) => (
	<button
		onClick={onSelect}
		className={`w-full flex items-center p-1.5 rounded-2xl border transition-all duration-150 gap-3
      ${isSelected ? `bg-blue-50 border-[${PRIMARY_BLUE}]` : ` ${INPUT_BORDER} hover:bg-gray-50 hover:border-black`}`}>
		<img src={student.avatarUrl} alt={student.name} className="w-17 h-17 rounded-xl object-cover flex-shrink-0" />
		<div className="flex-grow text-left min-w-0">
			<h4 className="text-sm font-semibold text-black truncate">{student.name}</h4>
			<p className="text-[10px] text-black truncate">{student.courseName}</p>
			<p className="text-[10px] text-black truncate">{student.levelGrade}</p>
			<p className="text-[10px] text-black truncate">Group</p>
		</div>
		<div
			className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
				isSelected ? `border-[${PRIMARY_BLUE}] bg-[${PRIMARY_BLUE}]` : `border-[#6B7280]`
			}`}>
			{isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
		</div>
	</button>
)

// --- Main Content Component ---
const CreateAIAssessmentContent: React.FC = () => {
	const stepperSteps: StepperStep[] = [
		{ id: 1, name: 'Test Details' },
		{ id: 2, name: 'Review' },
	]
	const [currentStep, setCurrentStep] = useState(1)

	// Form State (Left Column)
	const [formData, setFormData] = useState({
		assessmentName: '',
		description: '',
		subject: '',
		class: '',
		group: '',
		testDate: '',
		expiryDate: '',
		durationHours: '00',
		durationMinutes: '00',
		totalPoints: '00',
		passPoints: '00',
	})

	// Right Column State
	const [unitarySearch, setUnitarySearch] = useState('')
	const [selectedUnitaryId, setSelectedUnitaryId] = useState<string | null>(null)

	const [studentAssignType, setStudentAssignType] = useState<'all' | 'selective'>('selective')
	const [studentSearch, setStudentSearch] = useState('')
	// const [studentDateFilter, setStudentDateFilter] = useState('June 2025') // Example
	const [studentStandardFilter, setStudentStandardFilter] = useState(sampleStandards[0]?.value || '')
	const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([])

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	const handleDurationPointChange = (name: string, value: string) => {
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const filteredUnitaryItems = useMemo(
		() => sampleUnitaryItems.filter(item => item.title.toLowerCase().includes(unitarySearch.toLowerCase())),
		[unitarySearch]
	)

	const filteredStudents = useMemo(
		() => sampleStudents.filter(student => student.name.toLowerCase().includes(studentSearch.toLowerCase())),
		[studentSearch] // Add date/standard filters here later
	)

	const toggleStudentSelection = (studentId: string) => {
		setSelectedStudentIds(prev => (prev.includes(studentId) ? prev.filter(id => id !== studentId) : [...prev, studentId]))
	}

	const handleCreate = () => {
		console.log('Form Data:', formData)
		console.log('Selected Unitary:', selectedUnitaryId)
		console.log('Student Assignment:', studentAssignType, 'Selected Students:', selectedStudentIds)
		alert('Assessment creation initiated! Check console for data.')
		// Navigate to next step or submit
		if (currentStep === 1) setCurrentStep(2)
		// else actual submission
	}

	return (
		<div className="bg-white rounded-2xl p-4 px-4 md:px-16 ">
			<Stepper steps={stepperSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

			{currentStep === 1 && (
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
					{/* Left Column: Assessment Details Form */}
					<div className="space-y-6">
						<FormField label="Test Name" name="assessmentName" value={formData.assessmentName} onChange={handleFormChange} />
						<FormField
							label="Description"
							name="description"
							value={formData.description}
							onChange={handleFormChange}
							type="textarea"
						/>
						<FormSelect
							label="Select Subject"
							name="subject"
							value={formData.subject}
							onChange={handleFormChange}
							options={sampleSubjects}
						/>
						<FormSelect
							label="Select Classes"
							name="class"
							value={formData.class}
							onChange={handleFormChange}
							options={sampleClasses}
						/>
						<FormSelect
							label="Select Group"
							name="group"
							value={formData.group}
							onChange={handleFormChange}
							options={sampleGroups}
						/>
						<FormDateInput label="Test Date" name="testDate" value={formData.testDate} onChange={handleFormChange} />
						<FormDateInput label="Expiry Date" name="expiryDate" value={formData.expiryDate} onChange={handleFormChange} />

						<div>
							<label className="block text-sm font-medium text-black mb-2">Duration & Point</label>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
								<DurationPointInput
									label="Hours"
									name="durationHours"
									value={formData.durationHours}
									onChange={val => handleDurationPointChange('durationHours', val)}
								/>
								<DurationPointInput
									label="Minutes"
									name="durationMinutes"
									value={formData.durationMinutes}
									onChange={val => handleDurationPointChange('durationMinutes', val)}
								/>
								<DurationPointInput
									label="Total Points"
									name="totalPoints"
									value={formData.totalPoints}
									onChange={val => handleDurationPointChange('totalPoints', val)}
								/>
								<DurationPointInput
									label="Pass Points"
									name="passPoints"
									value={formData.passPoints}
									onChange={val => handleDurationPointChange('passPoints', val)}
								/>
							</div>
						</div>
					</div>

					{/* Right Column: Unitary & Student Selection */}
					<div className="space-y-6 flex flex-col h-full">
						{/* Unitary Selection */}
						<div className={`p-4 rounded-2xl border  border-[${INPUT_BORDER}] bg-[#F9FAFB]`}>
							<div className="relative mb-3">
								<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
								<input
									type="text"
									placeholder="Unitary"
									value={unitarySearch}
									onChange={e => setUnitarySearch(e.target.value)}
									className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
								/>
							</div>
							<div
								className={`space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
								{filteredUnitaryItems.map(item => (
									<UnitaryItemCard
										key={item.id}
										item={item}
										isSelected={selectedUnitaryId === item.id}
										onSelect={() => setSelectedUnitaryId(item.id)}
									/>
								))}
							</div>
						</div>

						{/* Student Selection */}
						<div className={`p-4 rounded-2xl border ${INPUT_BORDER} flex-grow bg-[#F9FAFB]`}>
							<div className="flex items-center space-x-4 mb-3">
								<label className="flex items-center space-x-1.5 cursor-pointer">
									<input
										type="radio"
										name="studentAssignType"
										value="all"
										checked={studentAssignType === 'all'}
										onChange={() => setStudentAssignType('all')}
										className="form-radio appearance-none w-5 h-5 rounded-full border-[4px]  text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}]"
									/>
									<span className="text-md text-black">For all</span>
								</label>
								<label className="flex items-center space-x-1.5 cursor-pointer">
									<input
										type="radio"
										name="studentAssignType"
										value="selective"
										checked={studentAssignType === 'selective'}
										onChange={() => setStudentAssignType('selective')}
										className="form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}]"
									/>
									<span className="text-md text-black">For selective Students</span>
								</label>
							</div>

							{studentAssignType === 'selective' && (
								<>
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 items-stretch justify-between ">
										<div className="relative flex-grow ">
											<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
											<input
												type="text"
												placeholder="Search Student"
												value={studentSearch}
												onChange={e => setStudentSearch(e.target.value)}
												className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} border-[#6B7280] border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}
											/>
										</div>
										<div className="relative ">
											<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
												<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
												<span>June 2025</span>
												<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
											</div>
										</div>
										<div className="relative ">
											<select
												value={studentStandardFilter}
												onChange={e => setStudentStandardFilter(e.target.value)}
												className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg appearance-none text-sm pr-8 focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}>
												{sampleStandards.map(opt => (
													<option key={opt.value} value={opt.value}>
														{opt.label}
													</option>
												))}
											</select>
											<FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
										</div>
									</div>
									<div
										className={`space-y-2 max-h-96 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
										{filteredStudents.map(student => (
											<StudentSelectItemCard
												key={student.id}
												student={student}
												isSelected={selectedStudentIds.includes(student.id)}
												onSelect={() => toggleStudentSelection(student.id)}
											/>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			)}

			{currentStep === 2 && (
				<div className="text-center py-12 text-black">
					<h3 className="text-xl font-semibold mb-2">Review Step</h3>
					<p>Content for the review step will go here.</p>
				</div>
			)}

			{/* Action Buttons */}
			<div className="mt-8 flex justify-center space-x-3">
				<button
					type="button"
					onClick={() => alert('Cancel clicked')}
					className="px-4 py-2.5 text-md font-medium text-black border border-[Card/Border]  hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
					Cancel
				</button>
				<button
					type="button"
					onClick={handleCreate}
					className={`px-4 py-2.5 text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_BLUE}]`}>
					{currentStep === 1 ? 'Create' : 'Create Assessment'}
				</button>
			</div>
		</div>
	)
}

export default function CreateAIAssessmentPage() {
	const headerUser = {
		name: 'Educator Name', // Example, should be dynamic
		role: 'Teacher', // Example role
		avatarSrc: '/teacher-b2b/list-profile.png', // UPDATE THIS PATH
	}

	const handleBackClick = () => {
		if (typeof window !== 'undefined') {
			window.history.back()
		}
	}

	// Define colors for use in Tailwind JIT if not already in config
	const ACCENT_PINK_STYLE = '#FF3366'

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			{/* Page Title Bar */}
			<div className='bg-white'>
				<div className="flex items-center mx-auto max-w-[96rem] gap-3  px-4 sm:px-6 py-3.5 sticky top-0 z-40">
				<button
					onClick={handleBackClick}
					className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
					aria-label="Go back">
					<FiArrowLeft className="w-5 h-5" />
				</button>
				<h1 className="text-lg sm:text-xl font-semibold" style={{ color: ACCENT_PINK_STYLE }}>
					Create AI Generated Test
				</h1>
			</div>
			</div>

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
				<CreateAIAssessmentContent />
			</main>

			<Footer />
		</div>
	)
}
