"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/layout/TeacherB2CHeader"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import {
    FiSearch,
    FiChevronDown,
    FiCheck,
} from "react-icons/fi";
import BackButton from "@/components/common-components/BackButton";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import Image from "next/image";
import DropdownOptions5 from "@/components/common-components/Dropdown/DropdownOptions";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import { useRouter } from "next/navigation";


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
                className="block text-sm   font-medium text-black mb-1"
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



const UnitaryItemCard: React.FC<{
    item: UnitaryItemData;
    isSelected: boolean;
    onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`w-full text-left p-3 rounded-full transition-all px-4 duration-150
      ${isSelected
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
        className="w-full flex flex-row items-start sm:items-center p-2 sm:p-1.5 rounded-2xl border gap-3"
    >
        <Image
            src={student.avatarUrl}
            alt={student.name}
            width={68}
            height={68}
            className="w-17 h-17 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-grow text-left min-w-0">
            <p className="text-sm sm:text-base font-normal text-black truncate">
                {student.name}
            </p>
            <p className="text-[10px] text-[#6B7280] truncate">{student.courseName}</p>
            <p className="text-[10px] text-[#6B7280] truncate">{student.levelGrade}</p>
            <p className="text-[10px] text-[#6B7280] truncate">Group</p>
        </div>
        <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border-[3px] flex-shrink-0 transition ${isSelected
                ? "bg-[#3366ff] border-[#3366ff]"
                : "border-[#6b7280]"
                }`}
        >
            {isSelected && (
                <FiCheck className="text-white w-4 h-4" strokeWidth={4} />
            )}
        </div>
    </button>
);

// --- Main Content Component ---
const CreateAIAssessmentContent: React.FC = () => {
    // Form State (Left Column)
    const filter = [{ id: 'f1', label: '1st STD' }];

    const toggleAssignType = (type: "all" | "selective") => {
        setStudentAssignType((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

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

    const [studentAssignType, setStudentAssignType] = useState({
        all: false,
        selective: false,
    });
    const [studentSearch] = useState("");


    const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);

    const handleFormChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    const router = useRouter();
    const handleCreate = () => {
        router.push("/b2c-teacher/teacher-flow/dashboard");
    };

    return (
        <div className="bg-white w-full rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-8">
                {/* Left Column */}
                <div className="w-full space-y-6">
                    <FormField
                        label="Worksheet Name"
                        name="assessmentName"
                        value={formData.testName}
                        onChange={handleFormChange}
                    />

                    <DropdownOptions5 label="Select Subject" options="Option 1" />
                    <DropdownOptions5 label="Select Classes" options="Option 1" />
                    <DropdownOptions5 label="Select Group" options="Option 1" />
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
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar-thin">
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
                <div className="w-full space-y-6 flex flex-col">
                    {/* Unitary Selection */}

                    {/* Student Selection */}
                    <div className=" bg-[#f9fafb] border border-[#E5E7EB]  h-full p-2 rounded-2xl">

                        <div className="flex items-center space-x-4 mb-3">
                            {/* For All */}
                            <div
                                onClick={() => toggleAssignType("all")}
                                className="flex items-center space-x-1.5 cursor-pointer"
                            >
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-full border-[3px] transition 
        ${studentAssignType.all
                                            ? "bg-[#007bff] border-[#007bff]"
                                            : "border-[#6b7280]"
                                        }`}
                                >
                                    {studentAssignType.all && (
                                        <FiCheck className="text-white w-4 h-4" strokeWidth={4} />
                                    )}
                                </div>
                                <span className="text-md text-black">For all</span>
                            </div>

                            {/* For Selective Students */}
                            <div
                                onClick={() => toggleAssignType("selective")}
                                className="flex items-center space-x-1.5 cursor-pointer"
                            >
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-full border-[3px] transition 
        ${studentAssignType.selective
                                            ? "bg-[#007bff] border-[#007bff]"
                                            : "border-[#6b7280]"
                                        }`}
                                >
                                    {studentAssignType.selective && (
                                        <FiCheck className="text-white w-4 h-4" strokeWidth={4} />
                                    )}
                                </div>
                                <span className="text-md text-black">For selective Students</span>
                            </div>
                        </div>


                        <SearchFilter filters={filter} bg="bg-[#f9fafb]" placeHolder="Search Student"/>

                        <div className="space-y-2 max-h-[16rem] overflow-y-auto pr-1 custom-scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
                            {filteredStudents.map((student) => (
                                <StudentSelectItemCard
                                    key={student.id}
                                    student={student}
                                    isSelected={selectedStudentIds.includes(student.id)}
                                    onSelect={() => toggleStudentSelection(student.id)}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-3">
                <button
                    type="button"
                    className="px-4 py-2.5 text-md font-medium text-gray-600 border  rounded-full "
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


    return (
        <>
            <Header activeState="Dashboard" />

            <BackButton Heading="" />

            <TeacherB2CWrapper>
                <CreateAIAssessmentContent />
            </TeacherB2CWrapper>


            {/* Page Title Bar */}

            <Footer />
        </>
    );
}
