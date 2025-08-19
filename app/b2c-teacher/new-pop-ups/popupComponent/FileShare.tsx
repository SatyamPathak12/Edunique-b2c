// /popupComponent/FileShare.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch, } from 'react-icons/fi';
import { PopupPropB2CTeacher, TeacherB2CBaseModal, } from '../page'; // Assuming page.tsx is in the parent directory
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn Select
import CreateGroupPopup from '../../ct-pop-ups/popupComponent/CreateGroup';

// --- Data Interfaces ---
interface SelectableItem {
    id: string;
    name: string;
    avatarSrc: string;
    details: string[];
}

// --- Sample Data (using your provided data) ---
const categories = ["Category 1", "Category 2", "Category 2"];
const sampleStudents: SelectableItem[] = Array.from({ length: 9 }, (_, i) => ({
    id: `student-${i}`,
    name: `Student Name`,
    avatarSrc: `/admin/student.png`, // Using your specified path
    details: ["Course Name", "Level / Grade", "Group"]
}));


// --- UI Sub-Components for this modal ---
const CategoryTab: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 sm:px-6 text-sm font-semibold rounded-full transition-colors whitespace-nowrap
        ${isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
    >
        {label}
    </button>
);

// Your SelectableItemCard component, as provided
const SelectableItemCard: React.FC<{
    item: SelectableItem;
    isSelected: boolean;
    onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`w-full flex flex-row items-center p-1 pr-2 rounded-2xl border transition-all duration-150 gap-3 cursor-pointer
      ${isSelected ? `bg-blue-50 border-blue-500` : `border-[#B0B0B0] hover:bg-[#F9FAFB]`}`}
    >
        <Image
            src={item.avatarSrc}
            alt={item.name}
            width={72} // w-18 is 72px
            height={72} // h-18 is 72px
            className="w-18 h-18 rounded-2xl object-cover flex-shrink-0"
        />
        <div className="flex-grow text-left min-w-0">
            <h4 className={`font-semibold text-black truncate text-sm`}>{item.name}</h4>
            {item.details.map((detail, index) => (
                <p key={index} className={`truncate text-[#6B7280] text-[10px]`}>
                    {detail}
                </p>
            ))}
        </div>
        <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-auto
        ${isSelected ? `border-[#3366FF] bg-[#3366FF]` : `bg-white border-gray-400`}`}
        >
            {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
        </div>
    </button>
);

// StyledSelect (for the 1st STD filter)
const StyledSelect: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
}> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="bg-transparent w-full sm:w-auto rounded-xl py-3.5 sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);

const StyledSelect2: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
    // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
    <div className="w-full">
        <label className="block text-xs sm:text-sm font-medium text-black mb-1">{placeholder}</label>
        <div className="relative">
            <Select defaultValue={defaultValue}>
                <SelectTrigger className={`bg-transparent w-full py-3 sm:py-5 border-[#D5D5D5] border rounded-full appearance-none outline-none text-xs sm:text-sm`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>
    </div>
);

// --- Main File Sharing Modal Component ---
const FileShare: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    const [selectionType, setSelectionType] = useState<'For all' | 'For selective Students' | null>(null);
    const [selectedStudents, setSelectedStudents] = useState<Set<string>>(new Set());
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [studentSearch, setStudentSearch] = useState(''); // State for search input

    const handleSelectStudent = (studentId: string) => {
        setSelectedStudents(prev => {
            const newSelection = new Set(prev);
            newSelection.has(studentId) ? newSelection.delete(studentId) : newSelection.add(studentId);
            return newSelection;
        });
    };

    const filteredStudents = sampleStudents.filter(student =>
        student.name.toLowerCase().includes(studentSearch.toLowerCase())
    );

    return (
        <div className='relative'>

            <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
                <div className="p-4 bg-[#F9FAFB]">
                    <h1 className="text-lg sm:text-xl font-medium text-black mb-2">
                        File Sharing
                    </h1>

                    <div className="flex flex-wrap gap-4 justify-between items-center mb-2 sm:mb-4">
                        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                            {(['For all', 'For selective Students'] as const).map((option) => {
                                const isSelected = selectionType === option;
                                return (
                                    <label
                                        key={option}
                                        className="flex items-center gap-2 cursor-pointer md:text-base text-sm"
                                        onClick={() => setSelectionType(option)}
                                    >
                                        <div className="relative">
                                            <div
                                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0
                                            ${isSelected ? 'border-[#3366FF] bg-[#3366FF]' : 'bg-white border-gray-400'}`}
                                            >
                                                {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <input
                                                type="radio"
                                                name="shareType"
                                                value={option}
                                                checked={isSelected}
                                                onChange={() => setSelectionType(option)}
                                                className="absolute opacity-0 w-0 h-0" // Visually hidden
                                            />
                                        </div>
                                        {option}
                                    </label>
                                );
                            })}
                        </div>
                        <button onClick={() => setOpenModal("createGroup")} className="px-2 py-3 text-sm text-white bg-[#FF3366] rounded-full hover:bg-pink-600 transition-colors">
                            Create new group
                        </button>
                    </div>

                    {/* Filters with Labels */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-2 sm:mb-4">
                        <StyledSelect2
                            defaultValue="all"
                            placeholder="Class"
                            items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Batch 1" }]}
                        />
                        <StyledSelect2
                            defaultValue="all"
                            placeholder="Batch"
                            items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Batch 1" }]}
                        />
                        <StyledSelect2
                            defaultValue="all"
                            placeholder="Group"
                            items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Batch 1" }]}
                        />
                    </div>

                    {/* Search & Student List - Using your provided structure */}
                    <div className="rounded-2xl space-y-3 flex flex-col">
                        <div className="flex flex-wrap items-center gap-2 justify-center">
                            <div className="relative flex-1 w-auto">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black"><FiSearch className="h-4 w-4" /></span>
                                <input
                                    type="text"
                                    value={studentSearch}
                                    onChange={(e) => setStudentSearch(e.target.value)}
                                    placeholder={`Search Student`}
                                    className="w-full rounded-full border-2 border-[#6b7280] py-1.5 sm:py-2.5 pl-8 pr-3 items-center text-[#6B7280] leading-tight focus:bg-white focus:outline-none focus:border-black"
                                />
                            </div>
                            <div className="relative w-auto">
                                <StyledSelect
                                    defaultValue="all"
                                    placeholder="Filter"
                                    items={[{ value: "all", label: "1st STD" }, { value: "batch1", label: "Batch 1" }]}
                                />
                            </div>
                        </div>
                        {/* Scrollable list */}
                        <div className="space-y-1.5 h-65 overflow-y-auto custom-scrollbar-thin pr-1">
                            {filteredStudents.map(item => (
                                <SelectableItemCard
                                    key={item.id}
                                    item={item}
                                    isSelected={selectedStudents.has(item.id)}
                                    onSelect={() => handleSelectStudent(item.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <div className="mt-2 flex justify-center">
                        <button
                        onClick={onClose}
                        className="w-full max-w-33 px-4 py-2.5 text-base text-white bg-[#3366ff] rounded-full ">
                            Share
                        </button>
                    </div>
                </div>
                <CreateGroupPopup
                    isOpen={openModal === "createGroup"}
                    onClose={() => setOpenModal(null)}
                />
            </TeacherB2CBaseModal>
        </div>
    );
};

export default FileShare;