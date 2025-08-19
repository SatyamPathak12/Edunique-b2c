"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiSearch, FiCalendar, FiClock, FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// --- Data Interfaces ---
interface SelectableItem {
    id: string;
    name: string;
    avatarSrc: string;
    details: string[]; // For subject, course, grade, etc.
}

interface StudentData extends SelectableItem { }
interface TeacherData extends SelectableItem { }


// --- Sample Data ---
const sampleStudents: StudentData[] = Array.from({ length: 9 }, (_, i) => ({
    id: `student-${i}`,
    name: `Student Name`,
    avatarSrc: `/admin/student.png`,
    details: ["Course Name", "Level / Grade", "Group"]
}));

const sampleTeachers: TeacherData[] = Array.from({ length: 9 }, (_, i) => ({
    id: `teacher-${i}`,
    name: `Name`,
    avatarSrc: `/admin/teacher.png`,
    details: ["Subject", "Course Assigned", "Batch Assigned"]
}));

const departmentCategories = ["Department 1", "Department 2", "Department 3", "Department 4", "Department 5"];
const studentCategories = ["Department 1", "Department 2", "Department 3", "Department 4", "Department 5"];

// --- Helper UI Components ---

// Top right toggle (For Students / For Teacher)
const TargetAudienceToggle: React.FC<{
    activeTarget: 'Students' | 'Teacher';
    onTargetChange: (target: 'Students' | 'Teacher') => void;
}> = ({ activeTarget, onTargetChange }) => (
    <div className="flex items-center gap-2 border border-[#E5E7EB] p-1 rounded-2xl">
        <button
            onClick={() => onTargetChange('Students')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-colors ${activeTarget === 'Students' ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-[#B0B0B0]'} cursor-pointer`}
        >
            With Students
        </button>
        <button
            onClick={() => onTargetChange('Teacher')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-colors ${activeTarget === 'Teacher' ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-[#B0B0B0]'} cursor-pointer`}
        >
            With Teacher
        </button>
    </div>
);

// Department/Category tabs
const CategoryTab: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-2 py-2 text-xs rounded-xl whitespace-nowrap  sm:text-sm transition-colors cursor-pointer
        ${isActive ? 'bg-[#FF99B7] text-white ' : 'text-[#6B7280] hover:bg-gray-100'}`}
    >
        {label}
    </button>
);


// Your SelectableItemCard, adapted to be generic for both students and teachers
const SelectableItemCard: React.FC<{
    item: SelectableItem;
    isSelected: boolean;
    onSelect: () => void;
    activeTarget: 'Students' | 'Teacher';
}> = ({ item, isSelected, onSelect, activeTarget }) => (
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
            <h4 className={`font-semibold text-black truncate ${activeTarget === "Teacher" ? "text-base" : "text-sm"}`}>{item.name}</h4>
            {item.details.map((detail, index) => (
                // The first detail is styled red like "Subject"
                <p key={index} className={` truncate text-[#6B7280] ${index === 0 ? (activeTarget === "Teacher" ? "text-[#FF3366] text-sm font-medium" : "text-[10px]") : "text-[10px]"}`}>
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


// --- Main Page Component ---
export default function ScheduleMeeting({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    // State to toggle between Student and Teacher views
    const [targetAudience, setTargetAudience] = useState<'Students' | 'Teacher'>('Teacher');
    const [activeCategory, setActiveCategory] = useState(studentCategories[0]);

    // State for the right-side selection list
    const [selectionType, setSelectionType] = useState<'For all' | 'For Selective'>('For Selective');
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

    const [leftHeight, setLeftHeight] = useState<number>(430);
    const leftRef = useRef<HTMLDivElement | null>(null);

    const Router = useRouter();

    useEffect(() => {
        setActiveCategory(targetAudience === 'Students' ? studentCategories[0] : departmentCategories[0]);
    }, [targetAudience])

    const updateHeight = () => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    };

    useLayoutEffect(() => {

        updateHeight();

        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        if (leftRef.current) {
            resizeObserver.observe(leftRef.current);
        }

        return () => {
            if (leftRef.current) {
                resizeObserver.unobserve(leftRef.current);
            }
            resizeObserver.disconnect();
        };
    }, [targetAudience])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            updateHeight();
        },200);

        return () => {
            clearTimeout(timer);
        }
    })

    const handleItemSelect = (itemId: string) => {
        setSelectedItems(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(itemId)) {
                newSelection.delete(itemId);
            } else {
                newSelection.add(itemId);
            }
            return newSelection;
        });
    };

    // Dynamically choose data based on the target audience
    const categories = targetAudience === 'Students' ? studentCategories : departmentCategories;
    const selectableList = targetAudience === 'Students' ? sampleStudents : sampleTeachers;

    return (
        <NewBaseModal isOpen={isOpen} onClose={onClose}>
            <div className="bg-white w-full max-w-5xl mx-auto rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="p-1 hover:bg-gray-100 rounded-md cursor-pointer"
                            onClick={() => {
                                // Router.push('admin-b2c/admin-panel/dashboard');
                                onClose();
                            }}>
                            <FiArrowLeft className="w-5 h-5 text-black" />
                        </button>
                        <h1 className="text-lg font-semibold text-[#FF3366]">Schedule Meeting</h1>
                    </div>
                    <TargetAudienceToggle activeTarget={targetAudience} onTargetChange={setTargetAudience} />
                </div>

                {/* Category Tabs */}
                <div className="border border-[#E5E7EB] px-2 py-1 rounded-2xl mb-4 flex items-center justify-center">
                    <div className="flex space-x-3 overflow-x-auto custom-scrollbar-thin ">
                        {categories.map(cat => (
                            <CategoryTab
                                key={cat}
                                label={cat}
                                isActive={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
                    {/* Left Column: Form Fields */}
                    <div ref={leftRef} className="space-y-4">

                        {/* Conditional Fields for "For Teacher" view */}
                        {targetAudience === 'Teacher' && (
                            <>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Meeting Title</label>
                                    <input type="text" placeholder="Text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Meeting URL</label>
                                    <input type="text" placeholder="Text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Date</label>
                                    <div className="relative">
                                        <input type="text" placeholder="DD / MM / YYYY" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                        <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Time</label>
                                    <div className="relative">
                                        <input type="text" placeholder="16:00" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                        <FiClock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Select Course</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 outline-none text-sm pr-8"><option>Option 1</option></select>
                                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F9FAFB]0" />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Conditional Fields for "For Students" view */}
                        {targetAudience === 'Students' && (
                            <>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Lecture Title</label>
                                    <input type="text" placeholder="Text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Meeting URL</label>
                                    <input type="text" placeholder="Text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Date</label>
                                    <div className="relative">
                                        <input type="text" placeholder="DD / MM / YYYY" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                        <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Time</label>
                                    <div className="relative">
                                        <input type="text" placeholder="16:00" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 outline-none text-sm" />
                                        <FiClock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Select Course</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 outline-none text-sm pr-8"><option>Option 1</option></select>
                                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F9FAFB]0" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm  text-black mb-1">Select Batch</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 outline-none text-sm pr-8"><option>Option 1</option></select>
                                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F9FAFB]0" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Column: Selection List */}
                    <div className="bg-[#F9FAFB] border border-[#B0B0B0] rounded-2xl p-4 space-y-3">
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For all" checked={selectionType === 'For all'} onChange={() => setSelectionType('For all')} className="form-radio text-[#3366FF]" />For all</label>
                            <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For Selective" checked={selectionType === 'For Selective'} onChange={() => setSelectionType('For Selective')} className="form-radio text-[#3366FF]" />For Selective {targetAudience}</label>
                        </div>
                        {/* Search and Filter */}
                        <div className="flex items-center space-x-2">
                            <div className="relative flex-1">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                    <FiSearch className="h-4 w-4" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search Student"
                                    className="w-full rounded-full border border-[#6b7280] py-2 pl-8 pr-3 items-center text-[#6B7280] leading-tight focus:bg-white focus:outline-none focus:border-black"
                                />
                            </div>
                            <div className="relative">
                                <StyledSelect
                                    defaultValue="all"
                                    placeholder="Filter"
                                    items={[{ value: "all", label: "Filter" }, { value: "batch1", label: "Batch 1" }]}
                                />
                            </div>
                        </div>
                        {/* Scrollable list */}
                        <div className="space-y-1.5 h-full overflow-y-auto custom-scrollbar-thin pr-1" style={{
                            height: leftHeight > 0 ? `${leftHeight - 124}px` : 'auto',
                        }}>
                            {selectableList.map(item => (
                                <SelectableItemCard
                                    key={item.id}
                                    item={item}
                                    isSelected={selectedItems.has(item.id)}
                                    onSelect={() => handleItemSelect(item.id)}
                                    activeTarget={targetAudience}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                    <button className="w-fit px-6 py-2.5 text-sm text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
                        onClick={onClose}>
                        Schedule
                    </button>
                </div>

            </div>
        </NewBaseModal>
    );
}

// --- Base Modal Component (for reuse and professional structure) ---
interface NewBaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const NewBaseModal: React.FC<NewBaseModalProps> = ({
    isOpen,
    onClose,
    children,
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='w-full max-h-screen overflow-auto p-8'
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// --- Component 2: StyledSelect (wrapper for Shadcn Select) ---
interface StyledSelectProps {
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
    // Add onChange handler if needed
}
export const StyledSelect: React.FC<StyledSelectProps> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);