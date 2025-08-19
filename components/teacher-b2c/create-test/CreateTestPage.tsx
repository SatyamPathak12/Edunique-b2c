"use client";

import React, { useState } from "react";
import {
	FiArrowLeft,
	FiCalendar,
	FiCheckCircle,
} from "react-icons/fi";
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import CreateBWTestContent from "@/components/teacher-b2c/create-test/CreateTestContent"; // We will create this next
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";

// --- Style Constants (Global for this file) ---
export const ACCENT_PINK = "#FF3366";
export const PRIMARY_BLUE = "#3366FF";
export const YELLOW_BUTTON_BG = "bg-[#FFCC00]";
export const YELLOW_BUTTON_TEXT = "text-black";
export const INPUT_BG = "bg-[#F9FAFB]";
export const INPUT_BORDER = "border-[#D5D5D5]";
export const SCROLLBAR_THUMB_ORANGE = "scrollbar-thumb-orange-400";
export const SCROLLBAR_TRACK_LIGHT = "scrollbar-track-orange-100";

// --- Data Interfaces (Global for this file) ---
export interface StepperStep {
	id: number;
	name: string;
}
export interface DropdownOption {
	value: string;
	label: string;
}
export interface UnitaryItemData {
	id: string;
	title: string;
	subtitle: string;
}

export interface TestDetailsData {
	testName: string;
	description: string;
	selectedClasses: string;
	selectedGroup: string;
	testDate: string;
	expiryDate: string;
	durationHours: string;
	durationMinutes: string;
	totalPoints: string;
	passPoints: string;
	selectedUnitaryId: string | null;
	studentAssignType: "all" | "selective";
	selectedStudentIds: string[];
}

export interface TestOption {
	id: string;
	text: string;
}
export interface TestQuestion {
	id: string;
	questionText: string;
	options: TestOption[];
	correctOptionId: string | null;
	points: string;
	numOptions: number;
}

// --- Sample Data (Global for this file) ---
export const AVATAR_PLACEHOLDER =
	"https://picsum.photos/seed/student/80/80?grayscale"; // Increased size for StudentSelectItemCard
export const sampleClassesData: DropdownOption[] = [
	{ value: "class10a", label: "Option 1" },
	{ value: "class9b", label: "Class 9 - Section B" },
];
export const sampleGroupsData: DropdownOption[] = [
	{ value: "groupAlpha", label: "Option 1" },
	{ value: "groupBeta", label: "Beta Group" },
];
export const sampleUnitaryItems: UnitaryItemData[] = [
	{ id: "u1", title: "Option Title", subtitle: "Option Subtitle" },
	{ id: "u2", title: "Option Title", subtitle: "Option Subtitle" },
	{ id: "u3", title: "Option Title", subtitle: "Option Subtitle" },
	{ id: "u4", title: "Option Title", subtitle: "Option Subtitle" },
	{ id: "u5", title: "Option Title", subtitle: "Option Subtitle" },
	{ id: "u6", title: "Option Title", subtitle: "Option Subtitle" },
];

interface StudentData {
	id: string;
	name: string;
	avatarSrc: string;
	details: string[]; // For subject, course, grade, etc.
}

const sampleStudents: StudentData[] = Array.from({ length: 6 }, (_, i) => ({
	id: `student-${i}`,
	name: `Student Name`,
	avatarSrc: `/admin/student.png`,
	details: ["Course Name", "Level / Grade", "Group"]
}));

export const sampleStandardsData: DropdownOption[] = [
	{ value: "1std", label: "1st STD" },
	{ value: "2std", label: "2nd STD" },
];

// --- UPDATED HELPER COMPONENTS ---

export const Stepper: React.FC<{
	steps: StepperStep[];
	currentStep: number;
	setCurrentStep: (step: number) => void;
	isClickable?: boolean;
}> = (
	{ steps, currentStep, setCurrentStep, isClickable = true } // Added isClickable, default true
) => (
		<div className="flex mx-auto w-fit sm:w-full px-8 py-2 border border-gray-200 rounded-2xl sm:px-0 sm:py-0 sm:border-none flex-wrap items-start sm:items-center justify-center flex-col sm:flex-row gap-2 sm:gap-0 sm:space-x-8 mb-6 sm:mb-10">
			{steps.map((step) => (
				<button
					key={step.id}
					onClick={() => isClickable && setCurrentStep(step.id)}
					disabled={!isClickable}
					className={`flex items-center space-x-2 group focus:outline-none ${isClickable ? "cursor-pointer" : "cursor-default"
						}`}
				>
					<span // Updated logic for checkmark and active state
						className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border font-semibold 
							${currentStep === step.id
								? `text-[${ACCENT_PINK}] border-[${ACCENT_PINK}]` // Active step
								: `text-black border-black group-hover:text-black group-hover:border-black` // Future step
							}`}
					>
						{step.id}
					</span>
					<span // Updated logic for text color
						className={`text-sm font-bold ${currentStep == step.id // Active or completed
							? `text-[${ACCENT_PINK}]`
							: "text-black"
							}`}
					>
						{step.name}
					</span>
				</button>
			))}
		</div>
	);

export const UnitaryItemCard: React.FC<{
	item: UnitaryItemData;
	isSelected: boolean;
	onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
	<button
		onClick={onSelect}
		className={`w-full text-left p-3 rounded-full transition-all px-4 duration-150 ${isSelected
			? `bg-orange-100 border border-orange-400 shadow-sm`
			: `bg-white hover:bg-gray-100 border border-transparent hover:border-gray-200`
			}`}
	>
		<h4 className="text-xs font-medium text-black">{item.title}</h4>
		<p className="text-xs text-[#6B7280]">{item.subtitle}</p>
	</button>
);

export const FormField: React.FC<{
	label: string;
	name: string;
	type?: "text" | "textarea";
	placeholder?: string;
	required?: boolean;
}> = ({
	label,
	name,
	type = "text",
	placeholder,
	required,
}) => (
		<div>
			<label
				htmlFor={name}
				className="block text-sm sm:text-md text-black mb-1.5"
			>
				{label}
			</label>{" "}
			{/* Changed mb-1 to mb-1.5 */}
			{type === "textarea" ? (
				<textarea
					id={name}
					name={name}
					rows={3}
					placeholder={placeholder || "Text"}
					required={required}
					className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER}  h-40 border rounded-2xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}
				/>
			) : (
				<input
					type="text"
					id={name}
					name={name}
					placeholder={placeholder || "Text"}
					required={required}
					className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
				/>
			)}
		</div>
	);

export const FormSelect: React.FC<{
	label: string;
	defaultValue?: string;
	placeholder: string;
	items: { value: string; label: string }[];
}> = ({ label, items, defaultValue, placeholder }) => (
	<div>
		<label
			className="block text-sm text-black mb-1.5"
		>
			{label}
		</label>{" "}
		<Select defaultValue={defaultValue}>
			<SelectTrigger className={`w-full sm:py-5 ${INPUT_BG} ${INPUT_BORDER} border rounded-full appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
			</SelectContent>
		</Select>
	</div>
);

export const FormDateInput: React.FC<{
	label: string;
	name: string;
	required?: boolean;
}> = ({ label, name, required }) => (
	<div>
		<label
			htmlFor={name}
			className="block text-sm  text-black mb-1.5"
		>
			{label}
		</label>{" "}
		{/* Changed mb-1 to mb-1.5 */}
		<div className="relative">
			<input
				type="text"
				id={name}
				name={name}
				placeholder="Text"
				required={required}
				className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-10`}
			/>
			<FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
		</div>
	</div>
);

export const DurationPointInput: React.FC<{ label: string; }> = ({ label }) => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(prev => (prev < 99 ? prev + 1 : 99));
	const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
	return (
		<div className="text-center flex flex-col items-center lg:items-start">
			<label className="block text-[10px] self-start font-medium text-[#6B7280] mb-1">
				{label}
			</label>
			<div className="relative inline-flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-full w-[75px] xl:w-[90px] h-[42px]">
				<span className="text-lg text-black font-sans">
					{String(count).padStart(2, '0')}
				</span>

				{/* Buttons Container */}
				<div className="absolute right-3 flex flex-col h-full">
					{/* Up Button */}
					<button onClick={increment} className="flex-grow flex items-end pb-0.5 text-[#6B7280] hover:text-black">
						<svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 0.5L11.1962 6.5H0.803848L6 0.5Z" />
						</svg>
					</button>
					{/* Down Button */}
					<button onClick={decrement} className="flex-grow flex items-start pt-0.5 text-[#6B7280] hover:text-black">
						<svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6.5L0.803847 0.5L11.1962 0.5L6 6.5Z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

// Additional helper components from original needed for questionnaire step
export const QuestionPointsInput: React.FC = () => (
	<div className="flex items-center space-x-1.5">
		<span className="text-xs text-gray-600 font-medium">Points</span>
		<DurationPointInput label="" />
	</div>
);

export const NumOptionsInput: React.FC<{
	value: number;
	onChange: (value: number) => void;
}> = ({ value, onChange }) => {
	const handleIncDec = (increment: boolean) => {
		let newVal = increment ? value + 1 : value - 1;
		newVal = Math.max(2, Math.min(6, newVal)); // Clamp between 2 and 6
		onChange(newVal);
	};
	return (
		<div className="flex items-center">
			<input
				type="text"
				value={value}
				readOnly
				className={`w-10 px-2 py-1 ${INPUT_BG} ${INPUT_BORDER} border rounded-l-md text-sm text-center focus:ring-0 focus:border-[${INPUT_BORDER}] outline-none`}
			/>
			<div
				className={`flex flex-col border-t border-b border-r ${INPUT_BORDER} rounded-r-md`}
			>
				<button
					type="button"
					onClick={() => handleIncDec(true)}
					className={`px-1.5 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px] rounded-tr-md border-b ${INPUT_BORDER}`}
				>
					▲
				</button>
				<button
					type="button"
					onClick={() => handleIncDec(false)}
					className={`px-1.5 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px] rounded-br-md`}
				>
					▼
				</button>
			</div>
		</div>
	);
};

const SavedNotification: React.FC<{
	isVisible: boolean;
	message?: string;
}> = ({
	isVisible,
	message = "Saved !"
}) => {
		return (
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 50, scale: 0.9 }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
						className="fixed top-20 md:top-30 left-1/2 -translate-x-1/2 z-50"
					>
						<div
							className="flex w-50 sm:w-xs items-center gap-2 bg-[#00B060] text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
						>
							<FaRegCircleCheck className="w-5 h-5" strokeWidth={2.5} />
							<span className="text-base">{message}</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		);
	};

// --- Main Page Export ---
export function CreateTestPage({ testType, currentTestStep = 1 }: { testType: string, currentTestStep?: number }) {

	const [currentStep, setCurrentStep] = useState<number>(currentTestStep);
	const [showSavedNotification, setShowSavedNotification] = useState(false);

	const handleSaveClick = () => {
		setShowSavedNotification(true);
		setTimeout(() => {
			setShowSavedNotification(false);
		}, 3000);
	}

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header />
			<div className="bg-gray-100">

				<GoBack label={testType} currentStep={currentStep} />

				<SavedNotification isVisible={showSavedNotification} />

				<main className="flex-grow max-w-screen-xl mx-auto p-6 lg:p-8">
					<CreateBWTestContent currentStep={currentStep} setCurrentStep={setCurrentStep} testType={testType} handleSaveClick={handleSaveClick} />
				</main>
			</div>

			<Footer />
		</div>
	);
}

const GoBack: React.FC<{
	label: string;
	toLink?: string;
	currentStep: number
}> = ({ label, toLink, currentStep }) => {
	const Router = useRouter();
	const handleBackClick = () => {
		if (toLink) {
			Router.push(toLink);
		} else if (typeof window !== "undefined") {
			window.history.back();
		}
	};
	const PRIMARY_BLUE = "#3366FF";

	return (
		<div className='bg-white flex flex-col sm:flex-row sm:justify-between items-center mx-auto max-w-[98rem] px-4 sm:px-6 py-3 gap-3 sm:gap-0'>
			<div className="flex items-center gap-3 self-start w-full sm:w-auto"> {/* self-start for mobile alignment */}
				<button
					onClick={handleBackClick}
					className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md cursor-pointer"
					aria-label="Go back"
				>
					<FiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
				</button>
				{currentStep === 1 && <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366] flex gap-2">
					Create {label === "Test" ? "BW Test" : label}
				</h1>}
			</div>

			{currentStep === 1 && <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
				<button
					onClick={() => Router.push(`/b2c-teacher/teacher-flow/upload-from-existing${label === "Test" ? "" : `-${label.toLocaleLowerCase()}`}`)}
					className={`w-full sm:w-auto justify-center flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-white hover:opacity-90 rounded-full transition-opacity whitespace-nowrap`}
					style={{ backgroundColor: PRIMARY_BLUE }}
				>
					Choose From Existing {label}
					<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
						<g clipPath="url(#clip0_405_26717)"><path d="M17.9982 10H16.7382C16.364 8.551 15.591 7.23599 14.5068 6.2044C13.4226 5.1728 12.0709 4.46599 10.6051 4.16428C9.13928 3.86256 7.61825 3.97804 6.21481 4.49759C4.81137 5.01714 3.5818 5.91993 2.66581 7.10338C1.74982 8.28683 1.18415 9.70348 1.03306 11.1924C0.881982 12.6812 1.15155 14.1826 1.81113 15.526C2.47072 16.8693 3.49387 18.0007 4.76434 18.7916C6.0348 19.5824 7.50164 20.0011 8.99816 20H17.9982C19.3242 20 20.596 19.4732 21.5337 18.5355C22.4714 17.5979 22.9982 16.3261 22.9982 15C22.9982 13.6739 22.4714 12.4021 21.5337 11.4645C20.596 10.5268 19.3242 10 17.9982 10Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></g>
						<defs><clipPath id="clip0_405_26717"><rect width={24} height={24} fill="white" /></clipPath></defs>
					</svg>
				</button>
				<button
					onClick={() => Router.push(`/b2c-teacher/teacher-flow/create-ai-generate-${label.toLocaleLowerCase()}`)}
					className={`w-full sm:w-auto justify-center flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-white hover:opacity-90 rounded-full transition-opacity whitespace-nowrap`}
					style={{ backgroundColor: PRIMARY_BLUE }}
				>
					AI Generated {label}
					<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
						<path d="M12.235 7.08789C12.1845 8.44658 12.4148 9.80109 12.9117 11.0667C13.4086 12.3323 14.1612 13.4817 15.1226 14.4431C16.0841 15.4045 17.2335 16.1572 18.4991 16.6541C19.7647 17.1509 21.1192 17.3813 22.4779 17.3308C21.1192 17.2802 19.7647 17.5106 18.4991 18.0074C17.2335 18.5043 16.0841 19.257 15.1227 20.2184C14.1613 21.1798 13.4086 22.3292 12.9117 23.5948C12.4149 24.8604 12.1845 26.2149 12.235 27.5736C12.2856 26.2149 12.0552 24.8604 11.5584 23.5948C11.0615 22.3292 10.3088 21.1798 9.34743 20.2184C8.38602 19.257 7.23658 18.5043 5.97098 18.0074C4.70539 17.5106 3.35089 17.2802 1.9922 17.3308C3.35089 17.3813 4.7054 17.1509 5.97099 16.6541C7.23658 16.1572 8.38603 15.4045 9.34744 14.4431C10.3088 13.4817 11.0615 12.3323 11.5584 11.0667C12.0552 9.80109 12.2856 8.44658 12.235 7.08789ZM12.235 5.96289C12.0873 5.96289 11.941 5.99199 11.8045 6.04853C11.668 6.10506 11.544 6.18793 11.4395 6.2924C11.3351 6.39686 11.2522 6.52088 11.1957 6.65737C11.1391 6.79386 11.11 6.94015 11.11 7.08789C11.1662 8.30017 10.9688 9.51083 10.5304 10.6425C10.0921 11.7741 9.42241 12.8019 8.56428 13.66C7.70615 14.5181 6.67842 15.1878 5.54677 15.6261C4.41513 16.0645 3.20447 16.2619 1.99219 16.2057C1.69382 16.2057 1.40767 16.3243 1.19669 16.5352C0.985714 16.7462 0.867188 17.0324 0.867188 17.3307C0.867188 17.6291 0.985714 17.9153 1.19669 18.1262C1.40767 18.3372 1.69382 18.4557 1.99219 18.4557C3.20447 18.3996 4.41512 18.597 5.54677 19.0354C6.67842 19.4737 7.70615 20.1434 8.56428 21.0015C9.42241 21.8596 10.0921 22.8873 10.5304 24.019C10.9688 25.1506 11.1662 26.3613 11.11 27.5736C11.11 27.8719 11.2286 28.1581 11.4395 28.3691C11.6505 28.58 11.9367 28.6986 12.235 28.6986C12.5334 28.6986 12.8196 28.58 13.0305 28.3691C13.2415 28.1581 13.36 27.8719 13.36 27.5736C13.3039 26.3613 13.5013 25.1506 13.9397 24.019C14.378 22.8873 15.0477 21.8596 15.9058 21.0015C16.7639 20.1434 17.7917 19.4737 18.9233 19.0354C20.055 18.597 21.2656 18.3996 22.4779 18.4557C22.7763 18.4557 23.0624 18.3372 23.2734 18.1262C23.4844 17.9153 23.6029 17.6291 23.6029 17.3307C23.6029 17.0324 23.4844 16.7462 23.2734 16.5352C23.0624 16.3243 22.7763 16.2057 22.4779 16.2057C21.2656 16.2619 20.055 16.0645 18.9233 15.6261C17.7917 15.1878 16.7639 14.5181 15.9058 13.66C15.0477 12.8019 14.378 11.7741 13.9397 10.6425C13.5013 9.51083 13.3039 8.30017 13.36 7.08789C13.36 6.78952 13.2415 6.50337 13.0305 6.2924C12.8196 6.08142 12.5334 5.96289 12.235 5.96289Z" fill="white" /><path d="M22.6442 2.42578C22.6177 3.13716 22.7383 3.84635 22.9985 4.50899C23.2586 5.17163 23.6527 5.77345 24.1561 6.27682C24.6594 6.78019 25.2613 7.17428 25.9239 7.43442C26.5866 7.69457 27.2957 7.81518 28.0071 7.78871C27.2957 7.76224 26.5866 7.88286 25.9239 8.143C25.2613 8.40315 24.6594 8.79723 24.1561 9.3006C23.6527 9.80397 23.2586 10.4058 22.9985 11.0684C22.7383 11.7311 22.6177 12.4403 22.6442 13.1516C22.6707 12.4403 22.55 11.7311 22.2899 11.0684C22.0297 10.4058 21.6357 9.80397 21.1323 9.3006C20.6289 8.79723 20.0271 8.40315 19.3645 8.143C18.7018 7.88286 17.9926 7.76224 17.2812 7.78871C17.9926 7.81518 18.7018 7.69457 19.3645 7.43442C20.0271 7.17427 20.6289 6.78019 21.1323 6.27682C21.6357 5.77345 22.0297 5.17162 22.2899 4.50899C22.55 3.84635 22.6706 3.13716 22.6442 2.42578ZM22.6442 1.30078C22.3458 1.30078 22.0597 1.41931 21.8487 1.63029C21.6377 1.84126 21.5192 2.12741 21.5192 2.42578C21.5453 2.98924 21.4535 3.55195 21.2498 4.07793C21.046 4.60391 20.7348 5.0816 20.3359 5.48045C19.9371 5.8793 19.4594 6.19055 18.9334 6.39429C18.4074 6.59803 17.8447 6.68979 17.2812 6.66369C16.9829 6.66369 16.6967 6.78222 16.4858 6.9932C16.2748 7.20418 16.1562 7.49033 16.1562 7.78869C16.1562 8.08706 16.2748 8.37321 16.4858 8.58419C16.6967 8.79517 16.9829 8.91369 17.2812 8.91369C17.8447 8.8876 18.4074 8.97936 18.9334 9.1831C19.4594 9.38685 19.9371 9.69809 20.3359 10.0969C20.7348 10.4958 21.046 10.9735 21.2498 11.4995C21.4535 12.0255 21.5453 12.5882 21.5192 13.1516C21.5192 13.45 21.6377 13.7361 21.8487 13.9471C22.0596 14.1581 22.3458 14.2766 22.6442 14.2766C22.9425 14.2766 23.2287 14.1581 23.4397 13.9471C23.6506 13.7361 23.7692 13.45 23.7692 13.1516C23.7431 12.5882 23.8348 12.0254 24.0386 11.4995C24.2423 10.9735 24.5536 10.4958 24.9524 10.0969C25.3513 9.69808 25.829 9.38683 26.355 9.18309C26.8809 8.97935 27.4436 8.8876 28.0071 8.91369C28.3055 8.91369 28.5916 8.79517 28.8026 8.58419C29.0136 8.37321 29.1321 8.08706 29.1321 7.78869C29.1321 7.49033 29.0136 7.20418 28.8026 6.9932C28.5916 6.78222 28.3055 6.66369 28.0071 6.66369C27.4437 6.68979 26.8809 6.59804 26.355 6.3943C25.829 6.19056 25.3513 5.87931 24.9524 5.48046C24.5536 5.08161 24.2423 4.60392 24.0386 4.07794C23.8348 3.55195 23.7431 2.98924 23.7692 2.42578C23.7692 2.12741 23.6506 1.84126 23.4397 1.63029C23.2287 1.41931 22.9426 1.30078 22.6442 1.30078Z"
							fill="white"
						/>
					</svg>
				</button>
			</div>}
		</div>
	)
};