"use client";

import React, { useState } from 'react';
import { FiPlus, FiCalendar, FiClock, FiChevronDown, FiX, FiCheck } from 'react-icons/fi';

// --- Helper UI Components (defined within this file for self-containment) ---

// Custom Radio Button for "Now" and "Schedule for later"
const CustomRadio: React.FC<{ label: string; isSelected: boolean; onSelect: () => void; }> = ({ label, isSelected, onSelect }) => (
    <div onClick={onSelect} className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-5 h-5 border-3 rounded-full  flex items-center justify-center transition-all duration-150
            ${isSelected ? 'border-[#3366FF] bg-[#3366FF]' : 'border-[#6B7280] group-hover:border-blue-500'}`}
        >
            {isSelected && <FiCheck className="w-3 h-3 text-white" strokeWidth={6} />}
        </div>
        <span className="text-sm sm:text-base text-gray-800">{label}</span>
    </div>
);

// Day Selector Button
const DayButton: React.FC<{ dayIndex: number, day: string; isSelected: boolean; onSelect: (day: number) => void; }> = ({ dayIndex, day, isSelected, onSelect }) => (
    <button
        onClick={() => onSelect(dayIndex)}
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-semibold text-sm transition-colors cursor-pointer
        ${isSelected ? 'bg-[#3366FF] text-white' : 'bg-transparent text-[#6B7280] hover:bg-gray-100'}`}
    >
        {day}
    </button>
);

// Form Input with optional Icon
const FormInputWithIcon: React.FC<{ placeholder: string; icon: React.ReactNode; }> = ({ placeholder, icon }) => (
    <div className="relative w-fit">
        <input
            type="text"
            placeholder={placeholder}
            className="w-full max-w-60 px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">{icon}</div>
    </div>
);

// Form Dropdown with optional Icon
const FormDropdown: React.FC<{ options: string[]; icon?: React.ReactNode; className?: string }> = ({ options, icon, className }) => (
    <div className="relative w-full">
        <select className={`w-full py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm appearance-none ${icon ? 'pl-10' : 'pl-4'} pr-8 ${className}`}>
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
    </div>
);


// --- Main Edit Working Hours Popup Component ---
const EditWorkingHoursPopup: React.FC = () => {
    // State for the form
    const [applyTime, setApplyTime] = useState<'now' | 'later'>('now');
    const [showEndDate, setShowEndDate] = useState(false);
    const [selectedDays, setSelectedDays] = useState<Set<number>>(new Set([1]));

    // Hardcoded data
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const toggleDay = (day: number) => {
        setSelectedDays(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(day)) {
                newSelection.delete(day);
            } else {
                newSelection.add(day);
            }
            return newSelection;
        });
    };

    return (
        <div className="bg-black min-h-screen w-full flex items-center justify-center p-4 font-sans">

            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl font-semibold text-black">Edit Working Hours</h1>
                    <p className="text-base text-[#777777] mt-1">Editing the teacher's working hours</p>
                </div>

                {/* Form Content */}
                <div className="space-y-3">
                    {/* When to apply changes */}
                    <div>
                        <p className="text-sm font-medium text-[#6B7280] mb-2">When do you want to apply changes?</p>
                        <div className="space-y-2">
                            <CustomRadio label="Now" isSelected={applyTime === 'now'} onSelect={() => setApplyTime('now')} />
                            <div className="flex items-center gap-4 sm:gap-6">
                                <CustomRadio label="Schedule for later" isSelected={applyTime === 'later'} onSelect={() => setApplyTime('later')} />
                                <div className="flex-grow">
                                    <FormInputWithIcon placeholder="DD / MM / YYYY" icon={<FiCalendar className="w-4 h-4" />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Date Section (Conditional) */}
                    {!showEndDate ? (
                        <button onClick={() => setShowEndDate(true)} className="flex items-center gap-2 text-sm font-medium text-[#3366FF] hover:text-blue-700 cursor-pointer">
                            <FiPlus className="w-4 h-4" /> Set End Date
                        </button>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-[#6B7280] mb-2">End Date</label>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <FormInputWithIcon placeholder="DD / MM / YYYY" icon={<FiCalendar className="w-4 h-4" />} />
                                <button onClick={() => setShowEndDate(false)} className="p-1 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:text-gray-600 cursor-pointer">
                                    <FiX className="w-3 h-3" strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Repeats & Days */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                        <div>
                            <label className="block text-sm font-medium text-[#6B7280] mb-2">Repeats</label>
                            <FormDropdown options={["Weakly", "Daily", "Monthly"]} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#6B7280] mb-2">Days</label>
                            <div className="flex items-center justify-between">
                                {daysOfWeek.map((day, index) => (
                                    <DayButton
                                        key={index}
                                        dayIndex={index}
                                        day={day}
                                        isSelected={selectedDays.has(index)}
                                        onSelect={toggleDay}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Time & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#6B7280] mb-2">Time</label>
                            <div className="flex items-center">
                                <FormDropdown options={["11.30 AM", "12.00 PM"]} className='rounded-r-none min-w-32' />
                                <FormDropdown options={["1.30 PM", "2.00 PM"]} className='rounded-l-none min-w-32' />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#6B7280] mb-2">Location</label>
                            <FormDropdown options={["All Locations", "Online", "Mumbai Branch"]} />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 mt-8">
                    <button className="w-full max-w-36 text-center py-3 text-[#6B7280] font-semibold bg-[#E5E7EB] rounded-full hover:bg-gray-300 transition-colors cursor-pointer">
                        Cancel
                    </button>
                    <button className="w-full max-w-36 text-center py-3 text-white font-semibold bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditWorkingHoursPopup;