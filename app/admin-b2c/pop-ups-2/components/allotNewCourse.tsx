"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

// --- Helper UI Components ---

// Category Tab Button
const CategoryTab: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2.5 text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap cursor-pointer
        ${isActive ? 'bg-[#FF99B7] text-white' : 'text-[#6B7280] hover:bg-gray-100'}`}
    >
        {label}
    </button>
);

// Filter Dropdown Button
const FilterDropdown: React.FC<{ label: string; }> = ({ label }) => (
    <div className="relative">
        <select className="appearance-none w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>{label}</option>
            <option>Option A</option>
            <option>Option B</option>
        </select>
        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
    </div>
);

// --- Main Allot New Course Popup Component ---
const AllotCoursePopup: React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({ isOpen, onClose }) => {
    const categories = ["Category 1", "Category 2", "Category 3"]; // As per image
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('Option 1');

    const handleConfirm = () => {
        console.log({
            category: activeCategory,
            search: searchTerm,
            course: selectedCourse
        });
        // alert("Course Allotment Confirmed! (Check console for data)");
        onClose();
    };

    return (
        // The dark background for the entire page
        <NewBaseModal isOpen={isOpen} onClose={onClose}>

            {/* The main popup card */}
            <div className="bg-[#F9FAFB] w-full mx-auto max-w-lg rounded-3xl shadow-2xl p-6">

                {/* Title */}
                <h1 className="text-xl font-semibold text-black mb-3">
                    Allot New Course to Student
                </h1>

                {/* Category Tabs Section */}
                <div className="mb-4 p-2 bg-white border border-[#E5E7EB] rounded-2xl">
                    <div className="flex items-center justify-between space-x-1 sm:space-x-2">
                        {categories.map((cat, index) => (
                            <CategoryTab
                                key={`${cat}-${index}`}
                                label={cat}
                                isActive={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
                    <div className="relative w-full sm:flex-grow">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                        <input
                            type="text"
                            placeholder="Search Files"
                            className="w-full pl-10 pr-4 py-2.5 border-2 border-[#6B7280] rounded-full text-sm focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-2 flex-shrink-0">
                        <FilterDropdown label="Filter 1" />
                        <FilterDropdown label="Filter 2" />
                    </div>
                </div>

                {/* Course Selection */}
                <div className="mb-4">
                    <label htmlFor="courseSelect" className="block text-base font-medium text-black mb-2">
                        Select Course
                    </label>
                    <div className="relative">
                        <select
                            id="courseSelect"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-full appearance-none border border-[#D5D5D5] rounded-full px-5 py-3.5 text-base pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                    </div>
                </div>

                {/* Confirm Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleConfirm}
                        className="w-fit px-8 py-3 text-base font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>

            </div>
        </NewBaseModal>
    );
};

export default AllotCoursePopup;


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
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='w-full'
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};