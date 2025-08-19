'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ClassTab from './class-tab';


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
  image: '/student-avatar-1.png', // Use same image or add logic to vary if needed
}));

const teachers = Array.from({ length: 16 }, (_, i) => ({
  id: i + 17,
  name: 'Teacher Name',
  role: 'teacher' as const,
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...students, ...teachers];

const filters = ['Filter 1', 'Filter 2','Filter 3'];

const Management = () => {
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

        <div className="flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative w-full ">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        
          {/* Filters with dropdown icons */}
          {filters.map((filter, index) => (
            <div key={filter} className="relative overflow-x-auto custom-scrollbar">
              <select
                className=" border border-gray-300 text-sm px-3 py-2 rounded-xl pr-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={selectedFilters[index]}
                onChange={(e) => handleFilterChange(index, e.target.value)}
              >
                <option value="Option 1">{filter}</option>
                <option value="Option 2">{filter}</option>
                <option value="Option 3">{filter}</option>
              </select>
              <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs px-2" />
            </div>
          ))}
        </div>

            <ClassTab/>
        <div className="flex mb-4 space-x-4 text-sm font-medium">
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('teacher')}
          >
            Teachers
          </button>
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
        </div>
        {/* <ClassTab /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


          {/* Cards */}
          {filteredData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl px-2 py-1 shadow-sm">
              <div className={`${item.role === "teacher" ? "w-20 h-20" : "w-10 h-10"} rounded-xl relative overflow-hidden`}>
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-m">{item.name}</div>
                {item.role === 'teacher' && (
                  <>
                    <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.level}</div>
                    <div className="text-xs text-gray-500">{item.group}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
