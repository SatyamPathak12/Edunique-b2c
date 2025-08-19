"use client";

import React, { useMemo, useState } from "react";
import {
    FiArrowLeft,
    FiCalendar,
    FiSearch,
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useRouter } from "next/navigation";
import Image from "next/image";
import AILoadingPopup from "@/app/b2c-teacher/new-pop-ups/popupComponent/AILoading";

// --- Style Constants (Global for this file) ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";
const INPUT_BG = "bg-[#F9FAFB]";
const INPUT_BORDER = "border-[#D5D5D5]";

// --- Data Interfaces (Global for this file) ---
interface StepperStep {
    id: number;
    name: string;
}
interface DropdownOption {
    value: string;
    label: string;
}
interface UnitaryItemData {
    id: string;
    title: string;
    subtitle: string;
}

interface TestDetailsData {
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

// --- Data Interfaces ---
interface SelectableItem {
    id: string;
    name: string;
    avatarSrc: string;
    details: string[]; // For subject, course, grade, etc.
}

const sampleStudents: SelectableItem[] = Array.from({ length: 9 }, (_, i) => ({
    id: `student-${i}`,
    name: `Student Name`,
    avatarSrc: `/admin/student.png`,
    details: ["Course Name", "Level / Grade", "Group"]
}));

const sampleClassesData: DropdownOption[] = [
    { value: "class10a", label: "Option 1" },
    { value: "class9b", label: "Class 9 - Section B" },
];
const sampleGroupsData: DropdownOption[] = [
    { value: "groupAlpha", label: "Option 1" },
    { value: "groupBeta", label: "Beta Group" },
];
const sampleUnitaryItems: UnitaryItemData[] = [
    { id: "u1", title: "Option Title", subtitle: "Option Subtitle" },
    { id: "u2", title: "Option Title", subtitle: "Option Subtitle" },
    { id: "u3", title: "Option Title", subtitle: "Option Subtitle" },
    { id: "u4", title: "Option Title", subtitle: "Option Subtitle" },
    { id: "u5", title: "Option Title", subtitle: "Option Subtitle" },
    { id: "u6", title: "Option Title", subtitle: "Option Subtitle" },
];

const StyledSelect: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
    // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);

const UnitaryItemCard: React.FC<{
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

const FormField: React.FC<{
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

const FormSelect: React.FC<{
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

const FormDateInput: React.FC<{
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

const DurationPointInput: React.FC<{ label: string; }> = ({ label }) => {
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

// Your SelectableItemCard, adapted to be generic for both students and teachers
const SelectableItemCard: React.FC<{
    item: SelectableItem;
    isSelected: boolean;
    onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`w-full flex flex-row items-center p-1 rounded-2xl border transition-all duration-150 gap-3 cursor-pointer
      ${isSelected ? `bg-blue-50 border-blue-500` : `border-[#B0B0B0] hover:bg-[#F9FAFB]`}`}
    >
        <Image
            src={item.avatarSrc}
            alt={item.name}
            width={208}
            height={160}
            className="w-18 h-18 rounded-2xl object-cover flex-shrink-0"
        />
        <div className="flex-grow text-left min-w-0">
            <h4 className={`font-semibold text-black truncate text-sm`}>{item.name}</h4>
            {item.details.map((detail, index) => (
                // The first detail is styled red like "Subject"
                <p key={index} className={` truncate text-[#6B7280] text-[10px]`}>
                    {detail}
                </p>
            ))}
        </div>
        <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-auto
        ${isSelected ? `border-[#3366FF] bg-[#3366FF]` : `border-gray-400`}`}
        >
            {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
        </div>
    </button>
);

const GoBack: React.FC<{
    label: string;
    toLink?: string;
}> = ({ label, toLink }) => {

    const Router = useRouter();
    const handleBackClick = () => {
        if (toLink) {
            Router.push(toLink);
        } else if (typeof window !== "undefined") {
            window.history.back();
        }
    };

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
                <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366] flex gap-2">
                    Create AI Generated {label}
                </h1>
            </div>
        </div>
    )
};

// --- Main Page Export ---
export function AIGeneratedPage({ testType }: { testType: string }) {

    const stepperSteps: StepperStep[] = [
        { id: 1, name: `${testType} Details` },
        { id: 2, name: 'Review' },
    ];

    const [testDetails, setTestDetails] = useState<TestDetailsData>({
        testName: '', description: '', selectedClasses: sampleClassesData[0]?.value || '', selectedGroup: sampleGroupsData[0]?.value || '',
        testDate: '', expiryDate: '', durationHours: '00', durationMinutes: '00', totalPoints: '00', passPoints: '00',
        selectedUnitaryId: null, studentAssignType: 'selective', selectedStudentIds: [],
    });

    const handleTestDetailsChange = <K extends keyof TestDetailsData>(
        name: K,
        value: TestDetailsData[K]
    ) => {
        setTestDetails((prev: TestDetailsData) => ({ ...prev, [name]: value }));
    };

    const [unitarySearch, setUnitarySearch] = useState('');
    const [studentSearch, setStudentSearch] = useState('');
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [selectionType, setSelectionType] = useState<'For all' | 'For Selective'>('For Selective');

    const handleItemSelect = (itemId: string) => {
        setSelectedItems(prev => {
            const newSelection = new Set(prev);
            newSelection.has(itemId) ? newSelection.delete(itemId) : newSelection.add(itemId);
            return newSelection;
        });
    };

    const filteredUnitaryItems = useMemo(
        () => sampleUnitaryItems.filter((item) => item.title.toLowerCase().includes(unitarySearch.toLowerCase())),
        [unitarySearch]
    );

    const filteredStudents = useMemo(
        () => sampleStudents.filter((student) => student.name.toLowerCase().includes(studentSearch.toLowerCase())),
        [studentSearch]
    );

    const Router = useRouter();
    const Redirect = () => Router.push(`/teacher-b2b/teacher-flow/create-${testType.toLowerCase()}?step=3`);
    
    const [isAiLoading, setIsAiLoading] = useState(false);

    const handleOpenAiLoading = () => {
        setIsAiLoading(true);
        setTimeout(() => {
            setIsAiLoading(false);
        }, 5000);
        Redirect();
    };
    
    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header />
            
            <AILoadingPopup
                isOpen={isAiLoading}
            />
            <div>

                <GoBack label={testType} />

                <main className="flex-grow max-w-screen-xl mx-auto px-2 py-6 sm:p-6 lg:p-8">
                    <div className="bg-white rounded-2xl p-4 md:px-6 lg:px-16">

                        <div className="flex mx-auto w-full px-2 sm:px-8 py-2 border border-gray-200 rounded-2xl sm:px-0 sm:py-0 sm:border-none  items-center justify-center  gap-4 sm:gap-0 sm:space-x-8 mb-6 sm:mb-10">
                            {stepperSteps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => {
                                        if (step.id === 2) {
                                            Redirect();
                                        }
                                    }}
                                    className={`flex items-center space-x-2 group focus:outline-none cursor-pointer`}
                                >
                                    <span
                                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border font-semibold 
                                            ${step.id === 1
                                                ? `text-[${ACCENT_PINK}] border-[${ACCENT_PINK}]`
                                                : `text-black border-black group-hover:text-black group-hover:border-black`
                                            }`}
                                    >
                                        {step.id}
                                    </span>
                                    <span
                                        className={`text-sm font-bold ${step.id === 1
                                            ? `text-[${ACCENT_PINK}]`
                                            : "text-black"
                                            }`}
                                    >
                                        {step.name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row max-w-screen-xl gap-6 md:gap-8 mx-auto justify-center">

                            <div className="w-full md:w-[45%] lg:w-[40%] space-y-4">
                                <FormField
                                    label={`${testType} Name`}
                                    name="testName"
                                />
                                <FormField
                                    label="Description"
                                    name="description"
                                    type="textarea"
                                />
                                <FormSelect
                                    label="Select Classes"
                                    defaultValue="all"
                                    placeholder="Nothing"
                                    items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Option 2" }]}
                                />
                                <FormSelect
                                    label="Select Group"
                                    defaultValue="all"
                                    placeholder="Nothing"
                                    items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Option 2" }]}
                                />
                                <FormDateInput
                                    label="Test Date"
                                    name="testDate"
                                />
                                <FormDateInput
                                    label="Expiry Date"
                                    name="expiryDate"
                                />
                                <div>
                                    <label className="block text-md text-black mb-2">
                                        Duration & Point
                                    </label>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                        <DurationPointInput label="Hours" />
                                        <DurationPointInput label="Minutes" />
                                        <DurationPointInput label="Total Points" />
                                        <DurationPointInput label="Pass Points" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Selections */}
                            <div className="w-full md:w-[55%] lg:w-[50%] space-y-6">
                                {/* Unitary Selection */}
                                <div className={`p-4 rounded-3xl border ${INPUT_BORDER} bg-[#F9FAFB]`}>
                                    <div className="relative mb-3">
                                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                                        <input
                                            type="text"
                                            placeholder="Unitary"
                                            value={unitarySearch}
                                            onChange={(e) => setUnitarySearch(e.target.value)}
                                            className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} border-[#6B7280] placeholder:text-black border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] outline-none text-sm`}
                                        />
                                    </div>
                                    <div className={`space-y-2 h-40 sm:h-48 overflow-y-auto pr-2 custom-scrollbar-thin`}>
                                        {filteredUnitaryItems.map((item) => (
                                            <UnitaryItemCard
                                                key={item.id}
                                                item={item}
                                                isSelected={testDetails.selectedUnitaryId === item.id}
                                                onSelect={() => handleTestDetailsChange("selectedUnitaryId", item.id)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* newStudent Selection */}
                                <div className="bg-[#F9FAFB] border border-[#B0B0B0] rounded-3xl p-4 space-y-3 flex flex-col">
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For all" checked={selectionType === 'For all'} onChange={() => setSelectionType('For all')} className="form-radio text-[#3366FF]" />For all</label>
                                        <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For Selective" checked={selectionType === 'For Selective'} onChange={() => setSelectionType('For Selective')} className="form-radio text-[#3366FF]" />For Selective Students</label>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                        <div className="relative flex-1 w-full">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black"><FiSearch className="h-4 w-4" /></span>
                                            <input
                                                type="text"
                                                value={studentSearch}
                                                onChange={(e) => setStudentSearch(e.target.value)}
                                                placeholder={`Search Student`}
                                                className="w-full rounded-full border-2 border-[#6b7280] py-2.5 pl-8 pr-3 items-center text-[#6B7280] leading-tight focus:bg-white focus:outline-none focus:border-black"
                                            />
                                        </div>
                                        <div className="relative w-full sm:w-auto">
                                            <StyledSelect
                                                defaultValue="all"
                                                placeholder="Filter"
                                                items={[{ value: "all", label: "1st STD" }, { value: "batch1", label: "Batch 1" }]}
                                            />
                                        </div>
                                    </div>
                                    {/* Scrollable list */}
                                    <div className="space-y-1.5 h-60 sm:h-86 lg:h-75 overflow-y-auto custom-scrollbar-thin pr-1">
                                        {filteredStudents.map(item => (
                                            <SelectableItemCard
                                                key={item.id}
                                                item={item}
                                                isSelected={selectedItems.has(item.id)}
                                                onSelect={() => handleItemSelect(item.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center items-center gap-2 sm:gap-4">
                            <button type="button" className="w-full sm:w-auto px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">
                                Cancel
                            </button>
                            <button onClick={handleOpenAiLoading} type="button" className={`w-full sm:w-auto px-5 py-2.5 sm:py-3 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
                                Create
                            </button>
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}