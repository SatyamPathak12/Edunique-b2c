"use client";

import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiMinusCircle, // For the remove icon
  // FiRepeat, // For the sort/transfer icon (can be FiShuffle or FiArrowRightLeft)
  // FiArrowLeft, // Assuming a back arrow might be part of the header or global nav
} from "react-icons/fi";
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
// import { ArrowRightLeft } from 'lucide-react'
import Image from "next/image";
import SearchFilterIcon from "../common-components/SearchFilterIcon";
import ShiftStudentModal from "@/app/b2c-teacher/ct-pop-ups/popupComponent/ShiftStudent";
import RemoveStudentModal from "@/app/b2c-teacher/ct-pop-ups/popupComponent/ConfirmStudentRemove";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Style Constants ---
const ACCENT_PINK = "#FF3366"; // For active Class/Batch/Group tabs and remove icon
const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
const INPUT_BG_SEARCH = "bg-white";
const INPUT_BG_FILTERS = "bg-gray-50"; // Background for filter dropdowns
const STUDENT_ITEM_BG = "bg-[#F9FAFB]";
const ICON_BUTTON_BG_LIGHT_PINK = "bg-[#F3F4F6]";
const ICON_BUTTON_TEXT_PINK = `text-[${ACCENT_PINK}]`;
const ICON_BUTTON_BG_LIGHT_GRAY = "bg-gray-100";
// const ICON_BUTTON_TEXT_GRAY = 'text-gray-600'

// --- Data Interfaces ---
interface ClassBatchGroupTab {
  id: string;
  name: string; // e.g., "Class 10A / Batch X / Alpha Group"
}

interface StudentListItem {
  id: string;
  name: string;
  avatarUrl: string;
  classBatchGroupId?: string; // Link to ClassBatchGroupTab
}

interface GeneralFilterOption {
  id: string;
  label: string;
}

// --- Sample Data ---
// const AVATAR_PLACEHOLDER = 'https://picsum.photos/seed/studentlist/40/40?grayscale'

const sampleClassBatchGroupTabs: ClassBatchGroupTab[] = [
  { id: "cbg1", name: "Class / Batch / Group" },
  { id: "cbg2", name: "Class / Batch / Group" },
  { id: "cbg3", name: "Class / Batch / Group" },
  { id: "cbg4", name: "Class / Batch / Group" },
  { id: "cbg5", name: "Class / Batch / Group" },
];

const sampleStudents: StudentListItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: `s${i + 1}`,
  name: "Student Name", // Repeated name as per image
  avatarUrl: "/teacher-b2b/student-avatar.png",
  classBatchGroupId: sampleClassBatchGroupTabs[0].id, // Default to first tab for all initially
}));
// To test filtering, you can assign different classBatchGroupId to some students
sampleStudents[3].classBatchGroupId = sampleClassBatchGroupTabs[1].id;
sampleStudents[6].classBatchGroupId = sampleClassBatchGroupTabs[2].id;

const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
];

// --- Helper Components ---

const ClassBatchGroupTabButton: React.FC<{
  tab: ClassBatchGroupTab;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
      ${isActive
        ? `bg-[${ACCENT_PINK}] text-white `
        : "text-[#6B7280] hover:bg-gray-200"
      }`}
  >
    {tab.name}
  </button>
);

const StudentItemRow: React.FC<{
  student: StudentListItem;
}> = ({ student }) => {
  const router = useRouter();
  const [shift, setShift] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleCardClick = () => {
    router.push('/teacher-b2b/teacher-flow/student-profile');
  };

  return (
    <div
      onClick={handleCardClick}
      className={`${STUDENT_ITEM_BG} border border-[#B0B0B0] rounded-2xl p-2 duration-200 flex items-center justify-between gap-3 cursor-pointer`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Image
          width={100}
          height={100}
          src="/teacher-b2b/student-avatar.png"
          alt={student.name}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover"
        />
        <span className="font-light text-gray-800 truncate self-start">
          {student.name}
        </span>
      </div>

      <div className="flex items-center space-x-2 flex-shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setRemove(true);
          }}
          className={`p-1.5 sm:p-2 rounded-full ${ICON_BUTTON_BG_LIGHT_PINK} hover:bg-pink-200`}
          aria-label="Remove student"
        >
          <FiMinusCircle className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${ICON_BUTTON_TEXT_PINK}`} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShift(true);
          }}
          className={`p-1.5 sm:p-2 rounded-full ${ICON_BUTTON_BG_LIGHT_GRAY} hover:bg-gray-200`}
          aria-label="Transfer student"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-black"
          >
            <path
              d="M15.9241 6.38297C15.9998 6.20019 16.0196 5.99907 15.981 5.80505C15.9424 5.61102 15.847 5.43281 15.7071 5.29297L10.7071 0.292969L9.29312 1.70697L12.5861 4.99997H0.000115853V6.99997H15.0001C15.1979 7.00002 15.3912 6.94143 15.5557 6.8316C15.7202 6.72178 15.8484 6.56565 15.9241 6.38297ZM0.0761161 9.61697C0.000411265 9.79974 -0.0193799 10.0009 0.019247 10.1949C0.057874 10.3889 0.153183 10.5671 0.293116 10.707L5.29312 15.707L6.70712 14.293L3.41412 11H16.0001V8.99997H1.00012C0.80232 8.99979 0.608922 9.05832 0.444428 9.16817C0.279935 9.27801 0.15175 9.4342 0.0761161 9.61697Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <ShiftStudentModal isOpen={shift} onClose={() => setShift(false)} />
      <RemoveStudentModal isOpen={remove} onClose={() => setRemove(false)} />
    </div>
  );
};

// --- StudentListViewContent Component ---
const StudentListViewContent: React.FC = () => {
  const filter = [{ id: 'f1', label: 'Filter 1' }, { id: 'f2', label: 'Filter 2' }, { id: 'f3', label: 'Filter 3' }];
  const [activeClassBatchGroupId, setActiveClassBatchGroupId] =
    useState<string>(sampleClassBatchGroupTabs[0]?.id || "");
  const [searchTerm, setSearchTerm] = useState("");
  // Add states for general filters if their logic becomes more complex
  // const [activeGeneralFilters, setActiveGeneralFilters] = useState({});

  const [studentsList, setStudentsList] =
    useState<StudentListItem[]>(sampleStudents); // Manage students for removal

  const filteredStudentsByTab = useMemo(() => {
    return studentsList.filter(
      (student) => student.classBatchGroupId === activeClassBatchGroupId
    );
  }, [activeClassBatchGroupId, studentsList]);

  const searchedAndFilteredStudents = useMemo(() => {
    let students = filteredStudentsByTab;
    if (searchTerm) {
      students = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Add logic for general filters here
    return students;
  }, [filteredStudentsByTab, searchTerm /*, activeGeneralFilters */]);

  return (
    <div className="bg-white rounded-2xl  p-4 sm:p-6 space-y-5 sm:space-y-6">
      {/* Top Section: Class/Batch/Group Tabs */}
      <div className="p-1 rounded-2xl border border-gray-200">
        <nav className="flex space-x-1.5 sm:space-x-4  p-1 overflow-x-auto custom-scrollbar-thin pb-1">
          {sampleClassBatchGroupTabs.map((tab) => (
            <ClassBatchGroupTabButton
              key={tab.id}
              tab={tab}
              isActive={activeClassBatchGroupId === tab.id}
              onClick={() => setActiveClassBatchGroupId(tab.id)}
            />
          ))}
        </nav>
      </div>

      <SearchFilterIcon filters={filter} />

      {/* Bottom Section: Student List */}
      {searchedAndFilteredStudents.length > 0 ? (
        <div className="space-y-2 sm:space-y-2.5 pr-1 custom-scrollbar pb-6">
          {" "}
          {/* Adjust max-h */}
          {[1, 2, 3, 4, 5].map((i) => (
            <StudentItemRow
              key={i}
              student={{
                id: `${i}`,
                name: `Student ${i}`,
                avatarUrl: "https://via.placeholder.com/40",
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FiSearch className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
          <p className="text-sm">
            Try adjusting your search or filter criteria, or select a different
            Class/Batch/Group.
          </p>
        </div>
      )}
    </div>
  );
};

// --- Main Page Export ---
export default function StudentListPageByGroup() {
  // Renamed for clarity
  const headerUser = {
    name: "Educator Name",
    role: "Teacher",
    avatarSrc: "/teacher-b2b/profile.png",
  };
  // This page design does not show a separate title bar or back button below the main header.
  // The Class/Batch/Group tabs define the context.

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} activeState="Students" />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <StudentListViewContent />
      </main>
      <Footer />
    </div>
  );
}
