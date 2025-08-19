'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import ClassTab from './class-tab';

import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


type CardData = {
  id: number;
  name: string;
  level: string;
  group: string;
  image: string;
};

const students = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: 'Student Name',
  level: 'Level / Grade',
  group: 'Group',
  image: '/student-avatar-1.png', // Use same image or add logic to vary if needed
}));


export const sampleData: CardData[] = [...students];
interface GeneralFilterOption {
  id: string;
  label: string;
}

const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
  { id: "filter4", label: "Filter 4" },
];


// const filters = ['Filter 1', 'Filter 2','Filter 3'];

const StudentDashboard = () => {


  
  const [searchTerm, setSearchTerm] = useState('');
   const GeneralFilterButton: React.FC<{
      filter: GeneralFilterOption;
      onClick: () => void;
    }> = ({ filter, onClick }) => (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-gray-300 bg-gray-50 text-black rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors"
      >
        <span>{filter.label}</span>
        <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
      </button>
    );
  
  return (
    <div className="bg-[#eeeeee] py-6 sm:py-8 lg:py-10 min-h-screen">
        <main className="p-2 max-w-[90rem] sm:p-6 mb-32 sm:mb-[320px]   mx-auto bg-white my-6 rounded-3xl">
          {/* Search & Filter Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
              <input
                type="text"
                placeholder="Search "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm bg-white border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 1
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 2nd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 2
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 3rd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 3
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 4th */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 4
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14 px-0">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

           
          <ClassTab/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


          {/* Cards */}
          {sampleData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl px-2 py-1 shadow-sm">
              <div className= "w-20 h-20 rounded-xl relative  overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
               <div className="flex-1">
                <div className="font-semibold text-m">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.level}</div>
                    <div className="text-sm text-gray-500">{item.group}</div>
              </div>
              </div>
          ))}
        </div>
         </main>
      
      </div>
     
  
  );
};

export default StudentDashboard;

