'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

type CardData = {
    id: number;
    name: string;
    role: 'student' | 'teacher';
    course: string;
    level: string;
    group: string;
    image: string;
};

const students = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: 'Student Name',
    role: 'student' as const,
    course: 'Course Name',
    level: 'Level / Grade',
    group: 'Group',
    image: '/principal/student-avatar-1.png', // Use same image or add logic to vary if needed
}));

const teachers = Array.from({ length: 16 }, (_, i) => ({
    id: i + 17,
    name: 'Name',
    role: 'teacher' as const,
    course: 'Subject',
    level: 'Class Assigned',
    group: 'Batch Assigned',
    image: '/principal/manage.jpg', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...students, ...teachers];

const filters = ['Filter 1', 'Filter 2', 'Filter 3'];

const ManageApprovalsPage = () => {
    const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('teacher');

    const filteredData = sampleData.filter((item) => item.role === activeTab);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

    const handleFilterChange = (index: number, value: string) => {
        const updated = [...selectedFilters];
        updated[index] = value;
        setSelectedFilters(updated);
    };
    return (
        <div className="p-4 ">
            {/* Tabs */}
            <div className="bg-white rounded-2xl p-4">

                <div className="flex items-center mb-4 gap-2">
                    {/* Search Input */}
                    <div className="relative w-full ">
                        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm md:text-md" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border-2 border-[#6b7280] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>

                    {/* Filters with dropdown icons */}
                    {filters.map((filter, index) => (
                        <div key={filter} className="relative">
                            <select
                                className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-4 bg-[#f9fafb] focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={selectedFilters[index]}
                                onChange={(e) => handleFilterChange(index, e.target.value)}
                            >
                                <option value="">{filter}</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs" />
                        </div>
                    ))}
                </div>
                <div className="flex mb-4 space-x-4 text-sm font-medium">
                    <button
                        className={`pb-2 text-m cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
                        onClick={() => setActiveTab('teacher')}
                    >
                        Teachers
                    </button>
                    <button
                        className={`pb-2 text-m cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
                        onClick={() => setActiveTab('student')}
                    >
                        Students
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-2 max-h-[80vh] overflow-y-scroll custom-scrollbar-thin">


                    {/* Cards */}
                    {filteredData.map((item) => (
                        <div key={item.id} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2 shadow-sm">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden relative">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">{item.name}</div>
                                <div className={`text-sm ${item.role == "teacher" ? "text-[#ff3366]" : "text-gray-500"}`}>{item.course}</div>
                         
                                <div className="text-sm text-gray-500">{item.level}</div>
                                <div className="text-sm text-gray-500">{item.group}</div>
                            </div>
                            <div className="flex gap-2 flex-col md:flex-row">
                                <button className="bg-[#3366ff] text-white px-3 py-1.5 text-sm rounded-full hover:bg-blue-700">
                                    Approve
                                </button>
                                <button className="bg-[#ff336619] text-[#ff3366] px-3 py-1.5 text-sm rounded-full hover:bg-pink-200">
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageApprovalsPage;
