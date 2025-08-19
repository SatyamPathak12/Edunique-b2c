"use client";
import React, { useState } from "react";
import { Calendar, Plus, X } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { BaseModal, PopupProp } from "@/app/admin-b2c/pop-ups-2/page";
const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

const AddWorkingHours: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDateEnabled, setEndDateEnabled] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [repeat, setRepeat] = useState("Weekly");
  const [startTime, setStartTime] = useState("11.30 AM");
  const [endTime, setEndTime] = useState("1.30 PM");
  const [selectedDay, setSelectedDay] = useState("M");
  const [location, setLocation] = useState("All Locations");

 const handleDayClick = (day: string) => {
  setSelectedDay(day);
};

  return (
    <BaseModal onClose={onClose} isOpen={isOpen} maxWidth="max-w-xl">
    <div className=" mx-auto px-6 py-6 bg-white overflow-y-scroll no-scrollbar   rounded-2xl shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-1">
          Add Working Hours
        </h2>
        <p className="text-sm text-gray-500">
          Set when and when the teacher is working
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="flex  flex-col sm:flex-row md:gap-14 ">
        {/* Left Column */}
        <div className="w-full  flex flex-col md:w-[40%] space-y-6">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">
              Start Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="DD / MM / YYYY"
                className="w-full px-3 py-2 border border-[#d5d5d5] rounded-xl bg-[#faf9fb] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Repeats */}
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">
              Repeats
            </label>
            <select
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              className="w-full px-3 py-2 border border-[#d5d5d5]  bg-[#faf9fb] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">
              Time
            </label>
            <div className="flex">
              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="flex-1 px-3 py-2 border border-[#d5d5d5]  bg-[#faf9fb] rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="11.30 AM">11.30 AM</option>
                <option value="12.00 PM">12.00 PM</option>
                <option value="1.00 PM">1.00 PM</option>
                <option value="2.00 PM">2.00 PM</option>
              </select>

              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="flex-1 px-3 py-2 border border-[#d5d5d5]  bg-[#faf9fb]  rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1.30 PM">1.30 PM</option>
                <option value="2.30 PM">2.30 PM</option>
                <option value="3.00 PM">3.00 PM</option>
                <option value="4.00 PM">4.00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full  flex-col flex   md:w-[55%] space-y-8">
          {/* End Date */}
          <div>
            {endDateEnabled ? (
              <div className="flex gap-3">
                <div className="relative  w-[80%]">
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="DD / MM / YYYY"
                    className="w-full px-3 py-2 border border-[#d5d5d5]  bg-[#faf9fb] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-10 h-4 w-4 text-[#6b7280]" />
                </div>
                <button
                  onClick={() => {
                    setEndDateEnabled(false);
                    setEndDate("");
                  }}
                  className="mt-[2.5rem]  px-1 w-5 h-5 rounded-full border border-[#e5e7eb] text-[#6b7280]"
                >
                  <IoClose className="w-2 h-3" />
                </button>
              </div>
            ) : (
              <button
                className="text-blue-600 mt-10 text-sm font-medium flex items-center hover:text-blue-700"
                onClick={() => setEndDateEnabled(true)}
              >
                <Plus className="mr-1 h-4 w-4" /> Set End Date
              </button>
            )}
          </div>

          {/* Days */}
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">
              Days
            </label>
            <div className="flex space-x-2">
              {weekdays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDayClick(day)}
                  className={`w-8 h-8 text-xs font-medium rounded-lg transition-colors ${
                    selectedDay === day
                      ? "bg-[#3366ff] text-white"
                      : "text-black"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-[80%] px-3 py-2 border border-[#d5d5d5]  bg-[#faf9fb] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Locations</option>
              <option>Location A</option>
              <option>Location B</option>
            </select>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex  mt-4 gap-3 justify-start">
        <button className="px-6 py-2 text-sm font-medium text-[#6b7280] bg-[#e5e7eb] rounded-full transition-colors" onClick={onClose}>
          Cancel
        </button>
        <button
          onClick={onClose}
          className="px-6 sm:px-8 py-2 text-sm font-medium text-white bg-[#3366ff] rounded-full hover:bg-blue-700 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
    </BaseModal>
  );
};

export default AddWorkingHours;
