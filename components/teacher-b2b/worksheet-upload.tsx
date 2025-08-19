"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import {
  FiSearch,
  FiChevronDown,
  FiCalendar,
  FiArrowLeft,
} from "react-icons/fi";
// --- Data Interfaces ---
interface StepperStep {
  id: number;
  name: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

interface UnitaryItemData {
  id: string;
  title: string;
  subtitle: string;
}

interface StudentData {
  id: string;
  avatarUrl: string;
  name: string;
  courseName: string;
  levelGrade: string;
  group: string;
}

// --- Sample Data ---
const AVATAR_PLACEHOLDER = "/teacher-b2b/list-profile.png"; // Placeholder

const sampleSubjects: DropdownOption[] = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "english", label: "English" },
];

const sampleClasses: DropdownOption[] = [
  { value: "Option 1", label: "Option 1" },
  { value: "class9b", label: "Class 9 - Section B" },
];

const sampleGroups: DropdownOption[] = [
  { value: "Option 1", label: "Option 1" },
  { value: "groupBeta", label: "Beta Group" },
];

const sampleUnitaryItems: UnitaryItemData[] = [
  { id: "u1", title: "Option Title", subtitle: "Option Subtitle" },
  { id: "u2", title: "Option Title", subtitle: "Option Subtitle" },
  { id: "u3", title: "Option Title", subtitle: "Option Subtitle" },
  { id: "u4", title: "Option Title", subtitle: "Option Subtitle" },
];

const sampleStudents: StudentData[] = [
  {
    id: "s1",
    avatarUrl: AVATAR_PLACEHOLDER,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
  },
  {
    id: "s2",
    avatarUrl: AVATAR_PLACEHOLDER,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
  },
  {
    id: "s3",
    avatarUrl: AVATAR_PLACEHOLDER,
    name: "Student Name",
    courseName: "Course Name",
    levelGrade: "Level / Grade",
    group: "Group",
  },
];

const sampleStandards: DropdownOption[] = [
  { value: "1std", label: "1st STD" },
  { value: "2std", label: "2nd STD" },
  // ... more standards
];

const PRIMARY_BLUE = "#3366FF";
const INPUT_BG = "bg-[#F9FAFB]";
const INPUT_BORDER = "border-[#D5D5D5]";

// --- Helper Components ---

const FormField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "textarea";
  placeholder?: string;
  required?: boolean;
}> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm  sm:text-lg font-medium text-black mb-1"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        rows={3}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Text"}
        required={required}
        className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none h-[190px] text-sm resize-none`}
      />
    ) : (
      <input
        type="text" // Changed from type to always be text for simplicity, date handled separately
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Text"}
        required={required}
        className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
      />
    )}
  </div>
);

const FormSelect: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
  required?: boolean;
}> = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm  sm:text-lg  font-medium text-black mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3 py-2.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-full appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-8`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
    </div>
  </div>
);

const UnitaryItemCard: React.FC<{
  item: UnitaryItemData;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full text-left p-3 rounded-full transition-all px-4 duration-150
      ${
        isSelected
          ? `bg-orange-100 border-orange-400 shadow-md`
          : `bg-white hover:bg-gray-200 `
      }`}
  >
    <h4 className="text-sm  sm:text-md font-semibold text-black">
      {item.title}
    </h4>
    <p className="text-xs sm:text-sm text-[#6B7280]">{item.subtitle}</p>
  </button>
);

const StudentSelectItemCard: React.FC<{
  student: StudentData;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ student, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full flex  flex-row  items-start sm:items-center p-2 sm:p-1.5 rounded-2xl border transition-all duration-150 gap-3
      ${
        isSelected
          ? `bg-blue-50 border-[${PRIMARY_BLUE}]`
          : ` ${INPUT_BORDER} hover:bg-gray-50 hover:border-black`
      }`}
  >
    <img
      src={student.avatarUrl}
      alt={student.name}
      className="w-17 h-17 rounded-xl object-cover flex-shrink-0"
    />
    <div className="flex-grow text-left min-w-0">
      <h4 className="text-sm sm:text-md font-semibold text-black truncate">
        {student.name}
      </h4>
      <p className="text-[10px] text-[#6B7280] truncate">
        {student.courseName}
      </p>
      <p className="text-[10px] text-[#6B7280] truncate">
        {student.levelGrade}
      </p>
      <p className="text-[10px] text-[#6B7280] truncate">Group</p>
    </div>
    <div
      className={`appearance-none w-5 h-5 rounded-full border-[4px] border-[#6b7280] text-blue-600 ${
        isSelected
          ? `border-[${PRIMARY_BLUE}] bg-[${PRIMARY_BLUE}]`
          : `border-[#6B7280]`
      }`}
    >
      {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
    </div>
  </button>
);

// --- Main Content Component ---
const CreateAIAssessmentContent: React.FC = () => {
  // Form State (Left Column)
  const [formData, setFormData] = useState({
    testName: "",
    description: "",
    subject: "",
    class: "",
    group: "",
    testDate: "",
    expiryDate: "",
    durationHours: "00",
    durationMinutes: "00",
    totalPoints: "00",
    passPoints: "00",
  });

  // Right Column State
  const [unitarySearch, setUnitarySearch] = useState("");
  const [selectedUnitaryId, setSelectedUnitaryId] = useState<string | null>(
    null
  );

  const [studentAssignType, setStudentAssignType] = useState<
    "all" | "selective"
  >("selective");
  const [studentSearch, setStudentSearch] = useState("");
  const [studentStandardFilter, setStudentStandardFilter] = useState(
    sampleStandards[0]?.value || ""
  );
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleDurationPointChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredUnitaryItems = useMemo(
    () =>
      sampleUnitaryItems.filter((item) =>
        item.title.toLowerCase().includes(unitarySearch.toLowerCase())
      ),
    [unitarySearch]
  );

  const filteredStudents = useMemo(
    () =>
      sampleStudents.filter((student) =>
        student.name.toLowerCase().includes(studentSearch.toLowerCase())
      ),
    [studentSearch] // Add date/standard filters here later
  );

  const toggleStudentSelection = (studentId: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleCreate = () => {
    console.log("Form Data:", formData);
    console.log("Selected Unitary:", selectedUnitaryId);
    console.log(
      "Student Assignment:",
      studentAssignType,
      "Selected Students:",
      selectedStudentIds
    );
    alert("Assessment creation initiated! Check console for data.");
    // Navigate to next step or submit

    // else actual submission
  };

  return (
    <div className="bg-white w-full rounded-2xl p-4 sm:p-6 lg:p-8">
      <div className=" mx-auto  justify-evenly flex  flex-col sm:flex-row gap-8 px-4">
        {/* Left Column */}
        <div className="sm:w-1/3 space-y-6">
          <FormField
            label="Worksheet Name"
            name="assessmentName"
            value={formData.testName}
            onChange={handleFormChange}
          />

          <FormSelect
            label="Select Subject"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
            options={sampleSubjects}
          />
          <FormSelect
            label="Select Classes"
            name="class"
            value={formData.class}
            onChange={handleFormChange}
            options={sampleClasses}
          />
          <FormSelect
            label="Select Group"
            name="group"
            value={formData.group}
            onChange={handleFormChange}
            options={sampleGroups}
          />
          <div className="p-4 rounded-2xl border border-gray-300 bg-[#F9FAFB]">
            <div className="relative mb-3">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
              <input
                type="text"
                placeholder="Unitary"
                value={unitarySearch}
                onChange={(e) => setUnitarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl text-sm sm:text-md outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
              {filteredUnitaryItems.map((item) => (
                <UnitaryItemCard
                  key={item.id}
                  item={item}
                  isSelected={selectedUnitaryId === item.id}
                  onSelect={() => setSelectedUnitaryId(item.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="sm:w-1/2 space-y-6 flex flex-col">
          {/* Unitary Selection */}

          {/* Student Selection */}
          <div className=" bg-[#f9fafb] border border-[#E5E7EB]  h-full p-2 rounded-2xl">
            <div className="flex items-center space-x-4 mb-3">
            <label className="flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="studentAssignType"
                value="all"
                checked={studentAssignType === "all"}
                onChange={() => setStudentAssignType("all")}
                className={`appearance-none w-6 h-6 rounded-full border-[4px] 
        ${
          studentAssignType === "all"
            ? "bg-[#007bff] border-[#007bff]"
            : "border-[#6b7280]"
        }`}
              />
              <span className="text-md text-black">For all</span>
            </label>

            <label className="flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="studentAssignType"
                value="selective"
                checked={studentAssignType === "selective"}
                onChange={() => setStudentAssignType("selective")}
                className={`appearance-none w-5 h-5 rounded-full border-[4px] 
        ${
          studentAssignType === "selective"
            ? " border-[#007bff]"
            : "border-[#6b7280]"
        }`}
              />
              <span className="text-md text-black">For selective Students</span>
            </label>
          </div>

          {studentAssignType === "selective" && (
            <>
              <div className="flex gap-2 justify-between mb-2">
                <div className="relative w-[500px]">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                  <input
                    type="text"
                    placeholder="Search Student"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <select
                    value={studentStandardFilter}
                    onChange={(e) => setStudentStandardFilter(e.target.value)}
                    className="w-full px-6 py-2 border border-gray-300 rounded-xl text-sm appearance-none pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {sampleStandards.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2 h-[26rem] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
                {filteredStudents.map((student) => (
                  <StudentSelectItemCard
                    key={student.id}
                    student={student}
                    isSelected={selectedStudentIds.includes(student.id)}
                    onSelect={() => toggleStudentSelection(student.id)}
                  />
                ))}
              </div>
            </>
          )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center space-x-3">
        <button
          type="button"
          onClick={() => alert("Cancel clicked")}
          className="px-4 py-2.5 text-md font-medium text-black border border-[Card/Border]  hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleCreate}
          className={`px-4 py-2.5 text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_BLUE}]`}
        >
        Upload
        </button>
      </div>
    </div>
  );
};

export default function CreateAIAssessmentPage() {
  const headerUser = {
    name: "Educator Name", // Example, should be dynamic
    role: "Teacher", // Example role
    avatarSrc: "/teacher-b2b/list-profile.png", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  // Define colors for use in Tailwind JIT if not already in config
  const ACCENT_PINK_STYLE = "#FF3366";

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      <div className="bg-gray-100">
        <div className="bg-white">
          <div className="flex items-center gap-3 bg max-w-[96rem] mx-auto px-4 sm:px-6 py-3.5 sticky top-0 z-40">
            <button
              onClick={handleBackClick}
              className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
           
          </div>
        </div>

        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <CreateAIAssessmentContent />
        </main>
      </div>

      {/* Page Title Bar */}

      <Footer />
    </div>
  );
}
