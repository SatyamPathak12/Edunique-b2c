// components/AssignmentForm.tsx

import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi"; // Example icons
import { FiCalendar } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";
interface Student {
  id: number;
  name: string;
  course: string;
  subject: string;
  batch: string;
  imageUrl: string;
  selected: boolean;
}

const generateDummyStudents = (count: number): Student[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Name `,
    subject: "Subject",
    course: "Course Assigned",
    batch: "Batch Assigned",
    imageUrl: "/images/placeholder.jpg",
    selected: false,
  }));
};

const TeacherForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState<string>("Option 1");
  const [selectedBatch, setSelectedBatch] = useState<string>("Option 1");
  const [studentSelectionType, setStudentSelectionType] = useState<
    "all" | "selective"
  >("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [students, setStudents] = useState<Student[]>(
    generateDummyStudents(20)
  );
  const [demoTitle, setDemoTitle] = useState("");
const [meetingUrl, setMeetingUrl] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("16:00");
  const courseOptions = ["Option 1", "Option 2", "Option 3"];
  const batchOptions = ["Option 1", "Option 2", "Option 3"];
  const categories = [1, 2, 3, 4, 5];

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
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-6 p-2 border border-[#E5E7EB] rounded-2xl my-4 pb-3 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-2 px-4 rounded-2xl text-sm sm:text-md md:text-lg font-medium transition-colors duration-200 ${
              selectedCategory === cat
                ? "bg-[#ff99b7] text-white"
                : "text-[#6b7280] hover:text-gray-800"
            }`}
          >
            Department {cat}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl w-full p-6 flex flex-col sm:flex-row justify-between max-w-screen-xl mx-auto">
        <div className="space-y-8  w-full sm:w-[40%]">
               <h2 className="text-xl font-semibold text-center mb-10">Schedule Demo</h2>
          {/* Demo Title */}
          <div>
            <label className="block text-sm  sm:text-lg font-medium mb-1">Demo Title</label>
            <div className="relative py-2">
              <input
                type="text"
                value={demoTitle}
                onChange={(e) => setDemoTitle(e.target.value)}
                placeholder="Text"
                className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] focus:outline-none"
              />
            </div>
          </div>

          {/* Meeting URL */}
          <div>
            <label className="block text-sm  sm:text-lg font-medium mb-1">
              Meeting URL
            </label>
            <div className="relative py-2">
              <input
                type="text"
                value={meetingUrl}
                onChange={(e) => setMeetingUrl(e.target.value)}
                placeholder="Text"
                className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] focus:outline-none"
              />
            </div>
          </div>

          {/* Deadline Date */}
          <div>
            <label className="block text-sm sm:text-lg font-medium mb-1">
             Date
            </label>
            <div className="relative py-2">
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="DD / MM/ YYYY"
                className="w-full text-[#6b7280] rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
              <FiCalendar className="absolute right-5 sm:w-6 sm:h-6 w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Deadline Time */}
          <div>
            <label className="block text-sm  sm:text-lg font-medium mb-1">
             Time
            </label>
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
        </div>

        <div className="space-y-6 w-full border-[#e5e7eb] rounded-2xl p-6 bg-[#F9FAFB] sm:w-[55%]">
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
              <span className="ml-2 text-black text-sm sm:text-lg font-medium">
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
                className="form-radio h-5 w-5 sm:h-6 sm:w-6 text-blue-600 border-[4px]  appearance-none rounded-full border-[#6b7280] focus:ring-blue-500"
              />
              <span className="ml-2 text-black text-sm sm:text-lg font-medium">
                For Selective Teachers
              </span>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                <FiSearch className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search  Teacher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border-[2px] border-[#6b7280] bg-white py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <select className="appearance-none flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-[#faf9fb] py-2 px-3 text-[#1e1e1e] leading-tight focus:outline-none text-sm md:text-md w-full pr-8">
                <option className="bg-[#faf9fb]" value="all">
                  Filter{" "}
                </option>
                <option className="bg-[#faf9fb]" value="all">
                  Option 1
                </option>
                <option className="bg-[#faf9fb]" value="passed">
                  Option 2
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#1e1e1e]">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-[#faf9fb] py-2 px-3 text-[#1e1e1e] leading-tight focus:outline-none text-sm md:text-md w-full pr-8">
                <option className="bg-[#faf9fb]" value="all">
                  Filter
                </option>
                <option className="bg-[#faf9fb]" value="all">
                  Option 1
                </option>
                <option className="bg-[#faf9fb]" value="passed">
                  Option 2
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#1e1e1e]">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto custom-peach-scrollbar pr-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className={`flex items-center p-2 rounded-2xl shadow-sm transition-all duration-200 ${
                  studentSelectionType === "selective" && student.selected
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-[#f9fafb] border border-[#b0b0b0]"
                }`}
              >
                <img
                  src={"/admin/teacher.png"}
                  alt={student.name}
                  className="w-24 h-24 rounded-2xl text-sm md:text-lg object-cover mr-4 border border-gray-200"
                />
                <div className="flex-1 text-sm md:text-lg">
                  <div className="font-bold text-black">{student.name}</div>
                  <div className="text-[#ff3366]">{student.subject}</div>
                  <div className="text-[#6b7280]">{student.course}</div>
                  <div className="text-[#6b7280]">{student.batch}</div>
                </div>
                <div className="flex items-center pl-4">
                  <input
                    type={
                      studentSelectionType === "selective"
                        ? "checkbox"
                        : "radio"
                    }
                    checked={
                      studentSelectionType === "selective"
                        ? student.selected
                        : false
                    }
                    onChange={() =>
                      studentSelectionType === "selective" &&
                      handleStudentSelect(student.id)
                    }
                    className={`form-${
                      studentSelectionType === "selective"
                        ? "checkbox"
                        : "radio"
                    } h-5 w-5 sm:h-6 sm:w-6 form-radio text-blue-600 border-[4px] appearance-none rounded-full border-[#6b7280] focus:ring-blue-500`}
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

      <div className="flex justify-center">
        <Link href="/admin-b2c/admin-panel/mentor-profile">
        <button
          onClick={handleAssignCourse}
          className="bg-[#3366ff] hover:bg-blue-700 text-white font-medium py-3 px-4 sm:px-6 md:px-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Schedule
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TeacherForm;
