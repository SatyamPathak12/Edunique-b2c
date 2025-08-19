'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { useRouter } from 'next/navigation';
type CardData = {
  id: number;
  name: string;
  address: string;
  role: 'student' | 'teacher' | 'branch';
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  image: string;
};

const branch = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: 'School Name',
  address: "Address",
  role: 'branch' as const,
  detail1: "Detail 1",
  detail2: "Detail 2",
  detail3: "Detail 3",
  detail4: "Detail 4",
  image: '/principal/school-login-banner.png',
}));

export const sampleData: CardData[] = [...branch];

const filters = ['Filter 1', 'Filter 2', 'Filter 3'];

const SchoolSecurity = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher' | 'branch'>('branch');

  const filteredData = sampleData.filter((item) => item.role === activeTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

  const router = useRouter();

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  return (
    <div className="px-2 py-4 md:px-8 ">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">

        <div className="flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative w-full ">
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-8 pr-4 py-2 border-2 border-[#6b7280] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
            className={`pb-2 text-m font-semibold cursor-pointer ${activeTab === 'branch' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280'}`}
            onClick={() => setActiveTab('branch')}
          >
            Branch
          </button>
          <button
            className={`pb-2 text-m font-semibold cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
            onClick={() => setActiveTab('teacher')}
          >
            Teachers
          </button>
          <button
            className={`pb-2 text-m font-semibold cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


          {/* Cards */}
          {filteredData.map((item) => (
            <div onClick={() => router.push("/principal/school-login-activity")} key={item.id} className="flex flex-col sm:flex-row border border-[#e5e7eb] gap-4 cursor-pointer bg-[#faf9fb] rounded-2xl p-3">
              <div className={`w-full sm:w-56 h-42 rounded-2xl relative overflow-hidden`}>
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-m">{item.name}</div>
                
                
                    <div className="text-sm text-gray-500 mb-1">{item.address}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.detail1}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.detail2}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.detail3}</div>
                    <div className="text-xs text-gray-500">{item.detail4}</div>
                  
                 
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolSecurity;
