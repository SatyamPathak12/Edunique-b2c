'use client';
import React, { useState } from "react";
import { BaseModal, PopupProp } from "../page";
import { IoTimeOutline } from "react-icons/io5";
import Image from "next/image";
import ClassTimetable from "./ClassTimeTable";
import { HiOutlineCalendar } from "react-icons/hi";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import { FaCheck } from "react-icons/fa";

const filter = [
  { id: "f1", label: "1st STD" }
]

const ReassignClassModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-8xl">
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar-thin mr-1">


        {/* Title */}
        <h2 className="text-left font-semibold text-base mb-4">Reassign Class</h2>

        {/* Date & Time Fields */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* Reassign Date */}
          <div className="relative">
            <label className="block text-sm font-medium text-black mb-1">Reassign Date</label>
            <input
              type="text"
              placeholder="DD / MM / YYYY"
              className="w-full border border-gray-200 rounded-full px-4 py-3 bg-[#f9fafb] text-sm focus:outline-none pr-12"
            />
            <div className="absolute inset-y-0 right-4 top-[40%] flex items-center justify-center pointer-events-none">
              <HiOutlineCalendar className="text-gray-500" size={22} />
            </div>
          </div>

          {/* Reassign Time */}
          <div className="relative">
            <label className="block text-sm font-medium text-black mb-1">Reassign Time</label>
            <input
              type="text"
              placeholder="Time"
              className="w-full border border-gray-200 rounded-full px-4 py-3 bg-[#f9fafb] text-sm focus:outline-none pr-12"
            />
            <div className="absolute inset-y-0 right-4 top-[40%] flex items-center justify-center pointer-events-none">
              <IoTimeOutline className="text-gray-500" size={22} />
            </div>
          </div>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
          {/* Teacher List Panel */}
          <div className="bg-[#f9fafb] border rounded-2xl lg:min-w-[420px]  p-4">

            <div className="relative w-full">
              <SearchFilter filters={filter} />
            </div>

            {/* Teachers */}
             <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar-thin pr-1">
      {[...Array(5)].map((_, i) => {
        const isSelected = selectedIndices.includes(i);

        return (
          <label
            key={i}
            onClick={() => handleSelect(i)}
            className={`flex items-center gap-4 py-2 px-3 rounded-2xl border cursor-pointer hover:shadow-sm transition
            `}
          >
            <Image
              src="/common-images/teacher.png"
              alt="Teacher"
              width={75}
              height={75}
              className="w-20 h-20"
            />

            <div className="flex-1">
              <p className="text-base font-semibold text-black">Name</p>
              <p className="text-sm text-[#ff3366]">Course</p>
              <p className="text-xs text-gray-500">Detail 1</p>
              <p className="text-xs text-gray-500">Detail 2</p>
            </div>

            {/* Custom toggle circle */}
            <div
              className={`w-6 h-6 rounded-full border-3 flex items-center justify-center
                ${isSelected ? 'bg-[#3366ff] border-[#3366ff]' : 'border-gray-500'}
              `}
            >
              {isSelected && <FaCheck className="text-white text-[10px]" />}
            </div>
          </label>
        );
      })}
    </div>
          </div>

          {/* Timetable Panel */}
          <ClassTimetable />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={onClose}
            className="rounded-full max-w-32 w-full px-6 py-2.5 cursor-pointer text-sm font-medium text-[#ff3366] bg-[#FF33661A] hover:bg-[#FF33662A]"
          >
            Cancel
          </button>
          <button
            className="rounded-full max-w-32 w-full cursor-pointer px-6 py-2.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            onClick={onClose}
          >
            Reassign
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ReassignClassModal;
