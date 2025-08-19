
import React from 'react';
import { FiCalendar, FiChevronDown, FiClock, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page';
import { FC } from 'react';

interface FilterOption {
    id: string;
    label: string;
}

// Filters component
interface FiltersProps {
    filters: FilterOption[];
}

const Filters: FC<FiltersProps> = ({ filters }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    className={`text-sm px-2 py-2 flex items-center gap-3 rounded-xl border bg-gray-100 border-gray-300 whitespace-nowrap hover:bg-gray-200`}
                >
                    {filter.label} <FiChevronDown />
                </button>
            ))}
        </div>
    );
};


const RescheduleMeetingStudent: React.FC<PopupProp> = ({ isOpen, onClose }) => {


    const students = Array.from({ length: 3 }).map((_, i) => ({
        name: 'Name',
        subject: 'Subject',
        course: 'Course Assigned',
        batch: 'Batch Assigned',
        image: '/common-images/student.png',
    }));
    const filter = [
        { id: "f1", label: "1st STD" },
    ];
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
            <div className="relative bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto custom-peach-scrollbar">


                <h2 className="text-lg font-semibold text-center mb-6">Edit Meeting</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Form */}

                    <div className="space-y-4 mt-2">
                        {/* Meeting Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Lecture Title</label>
                            <input
                                type="text"
                                placeholder="Text"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                            />
                        </div>

                        {/* Meeting URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting URL</label>
                            <input
                                type="text"
                                placeholder="Text"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="DD / MM / YYYY"
                                    className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                                />
                                <FiCalendar className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="16:00"
                                    className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                                />
                                <FiClock className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>

                        {/* Select Course */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                            <div className="relative">
                                <select className="w-full appearance-none border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Select Batch */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Batch</label>
                            <div className="relative">
                                <select className="w-full appearance-none border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Right List */}
                    <div className='bg-gray-100 px-3 pb-3 pt-4 rounded-2xl'>
                        <h3 className="text-sm font-semibold mb-3">Student List</h3>

                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 text-base font-medium ">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="all"
                                    className="form-radio "
                                />
                                For all
                            </label>
                            <label className="flex items-center gap-2 text-base font-medium ">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="selective"
                                    className="form-radio"
                                />
                                For Selective Students
                            </label>
                        </div>

                        <div className="w-full text-black flex flex-col sm:flex-row gap-4 items-center py-2 rounded-xl">
                            {/* Search Input */}
                            <div className="flex items-center w-full sm:w-auto flex-grow border-1 border-gray-600 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
                                <FiSearch size={20} className="text-black mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-transparent outline-none text-sm"
                                />
                            </div>

                            {/* Filters */}
                            <Filters filters={filter} />
                        </div>

                        <div className="space-y-3 overflow-y-auto custom-peach-scrollbar pr-2 max-h-[20rem]">
                            {students.map((student, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border rounded-2xl p-2 bg-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            width={75}
                                            height={75}
                                            className="rounded-2xl object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">{student.name}</p>
                                            <p className="text-xs text-[#FF3366]">{student.subject}</p>
                                            <p className="text-xs text-gray-500">{student.course}</p>
                                            <p className="text-xs text-gray-500">{student.batch}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center flex-wrap gap-3">
                    <button className="bg-[#3366ff] text-white px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium ">
                        Reschedule
                    </button>
                    <button className="bg-pink-100 text-[#ff3366] px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium ">
                        Cancel Meeting
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium"
                    >
                        Discard
                    </button>
                </div>
            </div>
        </BaseModal>
    );
};

export default RescheduleMeetingStudent;
