'use client';
import React from "react";
import { BaseModal, PopupProp } from "../page";
import { IoTimeOutline } from "react-icons/io5";
import Image from "next/image";
import { HiOutlineCalendar } from "react-icons/hi";
import ScheduleTimetable from "./ScheduleTimetable";






const ScheduleInterview: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-8xl">
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar-thin mr-1">


        {/* Title */}
        <h2 className="text-left font-semibold text-base mb-4">Schedule Interview</h2>

        {/* Date & Time Fields */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* Reassign Date */}
          <div className="relative">
            <label className="block text-sm font-medium text-black mb-1">Date</label>
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
            <label className="block text-sm font-medium text-black mb-1">Time</label>
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
              
              <h2 className="font-medium text-gray-500">Please schedule an interview and complete handover formalities.</h2>

            {/* Teachers */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar-thin pr-1">
              {[...Array(1)].map((_, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 py-1 px-2 rounded-2xl border border-gray-200 cursor-pointer hover:shadow-sm"
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
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="teacher"
                      className="sr-only peer"
                    />
                    <div className="w-6 h-6 rounded-full border-3 border-gray-600 peer-checked:border-[4px] peer-checked:border-[#3366ff] transition" />
                  </label>


                </label>
              ))}
            </div>
          </div>

          {/* Timetable Panel */}
          <ScheduleTimetable />
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
            Schedule
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ScheduleInterview;
