// components/AssignmentForm.tsx

import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi"; // Example icons
import Link from 'next/link'; 

interface Student {
  id: number;
  name: string;
  course: string;
  level: string;
  group: string;
  imageUrl: string;
  selected: boolean;
}

const generateDummyStudents = (count: number): Student[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Student Name`,
    course: `Course `,
    level: `  level/grade `,
    group: `Group `,
    imageUrl: "/images/placeholder.jpg",
    selected: false,
  }));
};

const AssignmentForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState<string>("Option 1");
  const [selectedBatch, setSelectedBatch] = useState<string>("Option 1");
  const [studentSelectionType, setStudentSelectionType] = useState<
    "all" | "selective"
  >("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [students, setStudents] = useState<Student[]>(generateDummyStudents(20)); // State for student list

  // You would typically fetch course/batch options and student data here
  const courseOptions = ["Option 1", "Option 2", "Option 3"];
  const batchOptions = ["Option 1", "Option 2", "Option 3"];
  const categories = [1, 2, 3, 4, 5]; // Category numbers

  const handleStudentSelect = (id: number) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, selected: !student.selected }
          : student
      )
    );
  };

  const handleAssignCourse = () => {
    console.log("Assign Course Button Clicked");
    console.log("Selected Course:", selectedCourse);
    console.log("Selected Batch:", selectedBatch);
    console.log("Student Selection Type:", studentSelectionType);
    if (studentSelectionType === "selective") {
      const selectedStudentIds = students
        .filter((s) => s.selected)
        .map((s) => s.id);
      console.log("Selected Student IDs:", selectedStudentIds);
    } else {
      console.log("Assigning to all students.");
    }
    // Add logic here to submit the assignment
  };

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex  justify-center space-x-4 mb-6 p-2  border border-[#E5E7EB] rounded-2xl  my-4 pb-3 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-2 px-4 rounded-2xl text-sm  sm:text-md md:text-lg font-medium transition-colors duration-200 ${
              selectedCategory === cat
                ? "bg-[#ff99b7] text-white"
                : "text-[#6b7280] hover:text-gray-800"
            }`}
          >
            Category {cat}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl   w-full p-6 flex flex-col sm:flex-row justify-between max-w-screen-xl mx-auto">
        {/* Left Panel - Select Course/Batch */}
        <div className="space-y-6  w-full sm:w-[40%]">
          <div>
            <label
              htmlFor="select-course"
              className="block text-black text-sm md:text-lg font-medium mb-2"
            >
              Select Course
            </label>
            <div className="relative">
              <select
                id="select-course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="block w-full appearance-none rounded-full border border-[#d5d5d5] bg-[#F9FAFB] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 pr-8"
              >
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="select-batch"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Batch
            </label>
            <div className="relative">
              <select
                id="select-batch"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="block w-full appearance-none rounded-full border border-[#d5d5d5] bg-[#F9FAFB] py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500 pr-8"
              >
                {batchOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Student Selection */}
        <div className="space-y-6  w-full border-[#e5e7eb] rounded-2xl p-6 bg-[#F9FAFB] sm:w-[55%]">
          {/* Radio Buttons */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="studentSelection"
                value="all"
                checked={studentSelectionType === "all"}
                onChange={() => setStudentSelectionType("all")}
                className="form-radio h-5 w-5 sm:h-6 sm:w-6 text-blue-600 border-[4px] appearance-none rounded-full border-[#6b7280] focus:ring-blue-500"
              />
              <span className="ml-2 text-black  text-sm sm:text-lg font-medium">
                For all
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="studentSelection"
                value="selective"
                checked={studentSelectionType === "selective"}
                onChange={() => setStudentSelectionType("selective")}
                className="form-radio h-5 w-5 sm:h-6 sm:w-6 text-blue-600 border-[4px] appearance-none  rounded-full border-[#6b7280] focus:ring-blue-500"
              />

              <span className="ml-2 text-black  text-sm sm:text-lg font-medium">
                For Selective Students
              </span>
            </label>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                <FiSearch className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search Student"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border-[2px] border-[#6b7280] bg-white py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
                
              <select className="appearance-none flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-[#faf9fb] py-2 px-3 text-[#1e1e1e] leading-tight focus:outline-none text-sm md:text-md w-full pr-8">
                <option  className="bg-[#faf9fb] "value="all">Filter</option>
                <option  className="bg-[#faf9fb] "value="all">Option 1</option>
                <option className="bg-[#faf9fb] " value="passed">Option 2</option>
              
              </select>

              {/* Custom Chevron Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#1e1e1e]">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Student List */}
          <div className="space-y-4 max-h-96 overflow-y-auto custom-peach-scrollbar pr-2">
            {" "}
            {/* Added max-h and overflow-y-auto */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className={`flex items-center p-2 rounded-2xl shadow-sm transition-all duration-200 ${
                  studentSelectionType === "selective" && student.selected
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-[#f9fafb] border border-[#b0b0b0]  "
                }`}
              >
                <img
                  src={"/admin/student.png"} // Use /images/placeholder.jpg or a real path
                  alt={student.name}
                  className="w-24 h-24 rounded-2xl  text-sm md:text-lg object-cover mr-4 border border-gray-200"
                />
                <div className="flex-1 text-sm md:text-lg ">
                  <div className="font-bold text-black">{student.name}</div>
                  <div className="text-[#6b7280]">{student.course}</div>
                  <div className="text-[#6b7280]">{student.level}</div>
                  <div className="text-[#6b7280]">{student.group}</div>
                </div>
                <div className="flex items-center pl-4">
                  {/* Use a custom checkbox or radio based on design */}
                  {/* The image shows a circular checkbox/radio. Let's use a custom one or restyle default */}
                  <input
                    type={
                      studentSelectionType === "selective"
                        ? "checkbox"
                        : "radio"
                    } // Use checkbox for selective, radio for all (though logic for 'all' radio needs more thought)
                    checked={
                      studentSelectionType === "selective"
                        ? student.selected
                        : false
                    } // Only allow selection in 'selective' mode
                    onChange={() =>
                      studentSelectionType === "selective" &&
                      handleStudentSelect(student.id)
                    } // Only allow clicking in 'selective' mode
                    className={`form-${
                      studentSelectionType === "selective"
                        ? "checkbox"
                        : "radio"
                    } h-5 w-5 sm:h-6 sm:w-6 form-radio  text-blue-600 border-[4px] appearance-none rounded-full border-[#6b7280] focus:ring-blue-500" ${
                      studentSelectionType !== "selective"
                    }`}
                    disabled={studentSelectionType !== "selective"}
                  />
                </div>
              </div>
            ))}
            {filteredStudents.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No students found.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <Link href="/admin-b2c/admin-panel/mentor-profile">
        <button
          onClick={handleAssignCourse}
          className="bg-[#3366ff] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Assign Course
        </button>
        </Link>
      </div>

      {/* Assign Course Button */}
    </div>
  );
};

export default AssignmentForm;