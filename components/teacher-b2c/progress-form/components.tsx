"use client";

import DropdownOptions5 from "@/components/common-components/Dropdown/DropdownOptions";
import DropdownOptionSearch from "@/components/common-components/Dropdown/DropdownOptionsSearch";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { FiCalendar, FiCheck } from "react-icons/fi";
const students = new Array(20).fill({
  name: "Student Name",
  course: "Course Name",
  grade: "Level / Grade",
  group: "Group",
  image: "/student-avatar-1.png",
});

export default function AttendanceForm() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(10).fill(false)
  );
   const [selected, setSelected] = useState<boolean[]>(
    Array(students.length).fill(true)
  );
  const [checkedUncovered, setCheckedUncovered] = useState<Record<string, boolean>>({});
 const toggleSelect = (index: number) => {
    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);
  };

  const toggleUncovered = (key: number | string) => {
    setCheckedUncovered((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCheckbox = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {/* Left Section – Form */}
      <div className="w-full lg:w-[40%] space-y-6">
        {/* Details Section */}
        <div>
          <h3 className="text-base font-bold text-black bg-[#E5E7EB]  rounded-2xl p-4 ">
            Details
          </h3>
          <div className="mt-2 space-y-4">
            {/* Date Picker */}
            <div>
              <label className="text-base text-black font-normal">Date</label>
              <div className="relative mt-1 w-full">
                <input
                  type="text"
                  className="w-full rounded-full bg-[#faf9fb] border border-[#d5d5d5] px-3 py-2 pr-10 text-gray-700 appearance-none"
                />
                <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Subject Dropdown */}
            <DropdownOptions5 label="Subject" options="Maths" />
            <DropdownOptions5 label="Topics Covered" options="Option 1" />

            

            {/* Subtopics Covered */}
            <div>
              <p className="text-base font-medium">Sub-topics Covered</p>
              <div className="flex flex-col  flex-wrap h-46 gap-2 mt-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => toggleCheckbox(i)}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full border-[3px] transition 
              ${checkedItems[i] ? "bg-[#3366ff] border-[#3366ff]" : "border-[#6b7280]"}`}
                    >
                      {checkedItems[i] && <FiCheck className="text-white text-sm" />}
                    </div>
                    <span className="text-md text-black">Subtopic {i + 1}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Topics Uncovered */}
            <div>
              <p className="text-base font-medium">Topics Uncovered</p>
              <div className="flex flex-wrap h-26 flex-col gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => toggleUncovered(i)}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full border-[3px] transition
                ${checkedUncovered[i] ? "bg-[#3366ff] border-[#3366ff]" : "border-[#6b7280]"}`}
                    >
                      {checkedUncovered[i] && <FiCheck className="text-white text-sm" />}
                    </div>
                    <span className="text-md text-black">Subtopic {i}</span>
                  </label>
                ))}

                {/* None Option */}
                <label
                  className="flex items-center gap-3 cursor-pointer select-none"
                  onClick={() => toggleUncovered("none")}
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center rounded-full border-[3px] transition
              ${checkedUncovered["none"] ? "bg-[#6b7280] border-[#6b7280]" : "border-[#6b7280]"}`}
                  >
                    {checkedUncovered["none"] && <FiCheck className="text-white text-sm" />}
                  </div>
                  <span className="text-sm text-black">None</span>
                </label>
              </div>
            </div>

            {/* Alert Box */}
            <div className="  flex items-center gap-3 p-4 rounded-2xl border border-[#e5e7eb] text-base text-black font-medium">
              <div>
                <FaCheckCircle className="w-6 h-6  text-[#ff3366]" />
              </div>
              An extra class will be required
            </div>

            {/* Note */}
            <div className="space-y-3">
              <label className="text-base font-medium">Note for Admin</label>
              <textarea
                className="mt-1 w-full  my-4 rounded-2xl bg-[#f9fafb] border border-[#D5D5D5] h-28 px-3 py-2"
                placeholder="Text"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div>
          <h3 className="text-md font-semibold rounded-2xl bg-[#E5E7EB] border border-[#e5e7eb] p-4 ">
            Activities Conducted
          </h3>
          <div className="mt-2 space-y-4">
            <DropdownOptionSearch label="Select Test" options="Math Test 1" />
            <DropdownOptionSearch label="Select Quiz" options="Quiz Name" />
            <DropdownOptionSearch label="Select Assessment" options="None" />

          </div>
        </div>
      </div>

      {/* Right Section – Attendance */}
      <div className="w-full lg:w-[40%] bg-[#F9FAFB] space-y-3 p-4 rounded-3xl">
        <h3 className="text-base font-semibold  rounded">Attendance</h3>
        {/* Search */}
        <div className="flex  items-center gap-2 border-[2px] border-[#6B7280] rounded-full px-3 py-2 bg-white">
          <FaSearch className="text-black " />
          <input
            type="text"
            placeholder="Search"
            className=" text-[#6B7280] text-base bg-transparent"
          />
        </div>
        {/* Student Cards */}
        <div className="space-y-3 max-h-[1200px] overflow-y-auto pr-2 custom-scrollbar-thin">
         {students.map((student, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-3xl bg-[#FAF9FB] border border-[#B0B0B0] px-2 py-2"
        >
          <div className="flex items-center">
            <Image
              src={student.image}
              alt="student"
              width={40}
              height={40}
              className="rounded-md w-20 h-20 object-cover"
            />

            <div className="text-sm ml-2">
              <p className="font-normal text-base">{student.name}</p>
              <p className="text-gray-500 text-xs">{student.course}</p>
              <p className="text-gray-500 text-xs">{student.grade}</p>
              <p className="text-gray-500 text-xs">{student.group}</p>
            </div>
          </div>

          {/* Select / Unselect Toggle */}
          <div
            onClick={() => toggleSelect(index)}
            className={`w-10 h-10 min-w-[1.5rem] min-h-[1.5rem] rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
              selected[index]
                ? "bg-[#8dd9b3] border-[#8dd9b3]" // green bg if selected
                : "border-gray-500 font-bold" // bolder gray border if unselected
            }`}
          >
            {selected[index] && <FiCheck className="text-white text-xs" strokeWidth={3} size={20} />}
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}
