"use client";

import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function RequestAssessmentModal() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold text-center mb-6">Schedule Demo</h2>

        {/* Static Assessment Button */}
        <div className="my-8">
          <label className="block text-sm  sm:text-lg font-medium mb-1">Demo Title</label>
          <div className="relative py-2">
            <button
              className="w-full text-left text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] flex items-center justify-between"
              disabled
            >
              Text
              
            </button>
          </div>
        </div>
         <div className="my-8">
          <label className="block text-sm sm:text-lg font-medium mb-1">Meeting URL</label>
          <div className="relative py-2">
            <button
              className="w-full text-left text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] flex items-center justify-between"
              disabled
            >
              Text
              
            </button>
          </div>
        </div>

        {/* Deadline Date */}
        <div className="my-8">
          <label className="block text-sm  sm:text-lg font-medium mb-1"> Date</label>
          <div className="relative py-2">
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="DD / MM/ YYYY"
              className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
            />
            <FiCalendar className="absolute right-5 w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Deadline Time */}
        <div className="my-8">
          <label className="block text-sm sm:text-lg font-medium mb-1"> Time</label>
          <div className="relative py-2">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
            />
            <AiOutlineClockCircle className="absolute w-5 h-6 right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="flex-1 bg-[#3366ff] text-white py-2 rounded-full hover:bg-blue-700 transition">
            Schedule
          </button>
          <button className="flex-1 bg-[#b0b0b0]/20 text-[#6b7280] py-2 rounded-full hover:bg-gray-300 transition">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
