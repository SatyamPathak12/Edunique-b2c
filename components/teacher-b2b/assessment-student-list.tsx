"use client";
import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiArrowLeft, FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

export default function StudentListPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png",
  }; // UPDATE PATH

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Back Button and Page Title */}
     <div className="bg-white   ">
       <div className="flex items-center  max-w-[96rem] mx-auto px-6 py-4 gap-2 ">
        <button className="p-1.5 text-black hover:text-[#3366FF] focus:outline-none">
          <FiArrowLeft className="w-5 h-5 font-extrabold cursor-pointer" />
        </button>
        <h1 className="text-xl font-bold text-[#FF3366]">Assessment Name</h1>{" "}
        {/* Or dynamic course name */}
      </div>
     </div>

      <main className="flex-grow  p-4 sm:p-6 lg:p-8 space-y-8">
        <StudentPerformancePage />
      </main>

      <Footer />
    </div>
  );
}

interface Student {
  id: string;
  avatarUrl: string;
  name: string;
  courseName: string;
  levelGrade: string;
  group: string;
  score: number;
  status: "Passed" | "Failed";
}

// Placeholder avatar URL (same image for all students, B&W as in screenshot)
const AVATAR_URL = "/teacher-b2b/list-profile.png";

// Sample Data: Mimics the structure and repetition seen in the image
const dummyStudents: Student[] = [
  {
    id: "1",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "2",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Failed",
  },
  {
    id: "3",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "4",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "5",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "6",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "7",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
  {
    id: "8",
    avatarUrl: AVATAR_URL,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
    score: 40,
    status: "Passed",
  },
];

// StudentCard Component
const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <div className="bg-[#F9FAFB] border border-[#B0B0B0] rounded-2xl p-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:space-x-4 hover:shadow-md transition-shadow duration-200">
      {/* Avatar */}
      <img
        src={student.avatarUrl}
        alt={`${student.name}'s avatar`}
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl object-cover flex-shrink-0"
      />

      {/* Student Info */}
      <div className="flex-grow min-w-0">
        {" "}
        {/* min-w-0 prevents text overflow issues */}
        <h3 className="text-base sm:text-lg font-semibold text-black">
          {student.name}
        </h3>
        <p className="text-xs  text-[#6B7280] mt-0.5">
          {student.courseName}
        </p>
        <p className="text-xs  text-[#6B7280] mt-0.5">
          {student.levelGrade}
        </p>
        <p className="text-xs  text-[#6B7280] mt-0.5">
          {student.group}
        </p>
      </div>

      {/* Score and Status */}
      <div className="flex gap-2 flex-shrink-0 sm:mt-0 self-start sm:self-center mr-2">
        <div className="bg-[#F3F4F6] rounded-xl px-3 py-1.5 sm:px-4 sm:py-3 text-center min-w-[75px] sm:min-w-[140px]">
          <p className="text-md text-[#6B7280] mb-0.5">Score</p>
          <p className="text-sm font-bold text-[#3366FF]">
            {student.score}
          </p>
        </div>
        <div className="bg-[#F3F4F6] rounded-xl px-3 py-1.5 sm:px-4 sm:py-3 text-center min-w-[75px] sm:min-w-[140px]">
          <p className="text-md text-[#6B7280] mb-0.5">Status</p>
          <p
            className={`text-md  font-semibold ${
              student.status === "Passed" ? "text-[#4BC4B6]" : "text-[#FF3366CC]"
            }`}
          >
            {student.status}
          </p>
        </div>
      </div>
    </div>
  );
};
interface GeneralFilterOption {
  id: string;
  label: string;
}
const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
];
const GeneralFilterButton: React.FC<{
  filter: GeneralFilterOption;
  onClick: () => void;
}> = ({ filter, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-gray-300 bg-[#F9FAFB] text-black rounded-xl text-md  whitespace-nowrap  hover:bg-gray-100 flex-shrink-0 transition-colors`}
  >
    <span>{filter.label}</span>
    <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
  </button>
);

// Main Page Component
const StudentPerformancePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // In a real app, student data would likely come from props or a global state/API call
  const [students] = useState<Student[]>(dummyStudents);

  // Add states for filters if/when their logic is defined
  // const [activeFilters, setActiveFilters] = useState({});

  const filteredStudents = useMemo(() => {
    const S = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.group.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Add further filtering logic here based on activeFilters
    return S;
  }, [students, searchTerm /*, activeFilters */]);

  return (
    <main className=" max-w-[96rem] p-4 mx-auto space-y-6 bg-white rounded-2xl">
      {/* Header: Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, course, group..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm am:text-md appearance-none"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => alert("Main filter icon clicked.")}
            className={`p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors`}
            aria-label="Open main filters"
          >
            <FiFilter className="w-6 h-6 " strokeWidth={2} />
          </button>
          {sampleGeneralFilters.map((filter) => (
            <GeneralFilterButton
              key={filter.id}
              filter={filter}
              onClick={() => alert(`${filter.label} clicked.`)}
            />
          ))}
        </div>
      </div>

      {/* Student List */}
      {filteredStudents.length > 0 ? (
        <div className="space-y-3">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-[#6B7280] bg-white rounded-xl shadow-sm border border-[#B0B0B0]">
          <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </main>
  );
};
