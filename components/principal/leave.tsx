'use client';
import React, { useState } from "react";
import Image from 'next/image';

const filters = ['Filter 1', 'Filter 2', 'Filter 3'];
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineDateRange } from "react-icons/md";
import ReassignClassModal from "@/app/principal/pop-ups/components/Reassign";

type leavecards = {
  id: number,
  image: string,
  name: string,
  course: string,
  level: string,
  group: string,
  reason: string,
  email: string
};

const teachers = Array.from({ length: 8 }, (_, i) => ({
  id: i + 5,
  name: 'Name',
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: "/teacher-avatar-4.png", // Use same image or add logic to vary if needed,
  reason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci. ',
  email: "Email ID"
}));

export const sampleData: leavecards[] = [...teachers];

const Leave = () => {
  // const [activeTab, setActiveTab] = useState<'teacher'>('teacher');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));
  const [showReassignPopup, setShowReassignPopup] = useState<boolean>(false)

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  return (
    <>


      <div className="p-4 ">
        <ReassignClassModal isOpen={showReassignPopup} onClose={() => setShowReassignPopup(false)} />
        {/* Tabs */}
        <div className="bg-white rounded-2xl p-4">

          <div className="flex items-center mb-4 gap-5">
            {/* Search Input */}
            <div className="relative ml-4 w-full ">
              <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="w-full pl-8 pr-4 py-2 border border-[#6b7280] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
          </div >



          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-y-scroll custom-scrollbar-thin">
            {teachers.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2 mr-2 mb-4 shadow-sm relative">
                <div className="flex">
                  <div className="rounded-xl relative overflow-hidden">
                    <Image src={item.image} alt={item.name} width={110} height={110} className="object-cover" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="font-semibold text-m mb-1">{item.name}</div>
                    <div className="text-sm font-semibold text-[#FF3366] mb-1">{item.course}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.level}</div>
                    <div className="text-xs text-gray-500 mb-1"> {item.group} </div>
                    <div className="text-xs text-gray-500 mb-1"> {item.email} </div>
                    <div className="text-xs lg:absolute text-gray-500 lg:top-5 lg:right-5 flex items-center"><MdOutlineDateRange size={20} />From 6/8/25 to 6/6/25</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 p-4 bg-[#F3F4F6] rounded-2xl max-w-2xl m-3  ">
                  <p className="text-center text-black font-bold text-lg">Reason</p>
                  <p className="text-center  text-black-600 text-base">
                    {item.reason}</p>
                </div>
                <div className="flex w-full justify-center gap-4 mt-4">
                  <button className="px-6 py-2 bg-red-100 text-red-500 rounded-3xl">
                    Reject
                  </button>
                  <button onClick={() => setShowReassignPopup(true)} className="px-6 py-2 bg-[#3366FF] text-white rounded-3xl">
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
export default Leave;