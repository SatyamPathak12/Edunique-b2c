"use client";

import { BaseModal, PopupProp } from "@/app/admin-b2c/pop-ups-2/page";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const RequestAssessmentModal : React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
  const [assessment, setAssessment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");

  return (
      <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white px-6 py-6   space-y-6  rounded-3xl shadow-lg w-[90%]">
        <h2 className="text-xl  font-semibold text-center mb-6">Request Assessment </h2>

        {/* Select Assessment */}
        <div className="my-4">
          <label className="block text-sm font-medium mb-1">Select Assessment</label>
          <div className="relative">
            <select
              value={assessment}
              onChange={(e) => setAssessment(e.target.value)}
              className="w-full text-[#6b7280] rounded-full px-4 py-2 appearance-none bg-[#F9FAFB]  border border-[#D5D5D5]"
            >
              <option value="Diagnostic Test1">Select Option</option>
              <option value="Assessment Test1">AssessmentTest1</option>
              <option value="Assessment Test2">Assessment Test2</option>
            </select>
            <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Deadline Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Deadline Date</label>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB]  border border-[#D5D5D5] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
            />
            <FiCalendar className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Deadline Time */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Deadline Time</label>
          <div className="relative">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB]  border border-[#D5D5D5] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
            />
            <AiOutlineClockCircle className="absolute  w-5 h-5 right-4 top-1/2 transform -translate-y-1/2 text-[#6b7280] pointer-events-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="flex-1 bg-[#3366ff] text-white py-2 rounded-full hover:bg-blue-700 transition">
            Request
          </button>
          <button className="flex-1 bg-[#b0b0b0]/20 text-[#6b7280] py-2 rounded-full hover:bg-gray-300 transition">
            Discard
          </button>
        </div>
      </div>
      </BaseModal>
  );
}

export default RequestAssessmentModal;