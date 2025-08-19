'use client';

import React, { MouseEvent, useState } from 'react';
import Image from 'next/image';

import { IoIosArrowDown } from 'react-icons/io';
import ClassTab from './class-tab';
import { FiMinusCircle, FiSearch } from "react-icons/fi";
import { AiOutlineSwap } from "react-icons/ai";
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from 'lucide-react';
import ManageLectureModal from '@/app/principal/pop-ups/components/ManageLecture';
import ReassignClassModal from '@/app/principal/pop-ups/components/Reassign';
import ShiftStudentModalSimple from '@/app/principal/pop-ups/components/ShiftStudentModalSimple';
import ShiftTeacherModalSimple from '@/app/principal/pop-ups/components/ShiftTeacherModalSimple';
import AddClassModal from '@/app/principal/pop-ups/components/AddClass';
import AddStudentsModal from '@/app/principal/pop-ups/components/AddStudents';
type CardData = {
  id: number;
  name: string;
  role: 'student' | 'teacher';
  course: string;
  level: string;
  group: string;
  image: string;
};

const students = Array.from({ length: 62 }, (_, i) => ({
  id: i + 1,
  name: 'Student Name',
  role: 'student' as const,
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  image: '/student-avatar-1.png', // Use same image or add logic to vary if needed
}));

const teachers = Array.from({ length: 62 }, (_, i) => ({
  id: i + 17,
  name: 'Name',
  role: 'teacher' as const,
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...students, ...teachers];

const filters = ['Filter 1', 'Filter 2'];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const RemoveTeacherModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Remove Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-1.5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={48}
            height={48}
            className="w-13 h-13 rounded-lg object-cover mr-3"
          />
          <div className="text-xs">
            <p className="font-semibold text-sm text-black">Name</p>
            <p className="text-[#FF3366] text-sm font-medium">Subject</p>
            <p className="text-[#F9FAFB]0">Class Assigned</p>
            <p className="text-[#F9FAFB]0">Batch Assigned</p>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const RemoveStudentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Remove Student</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/teacher-b2b/list-profile.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Student Name</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const ShiftTeacherModalWithOptions: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-5">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Name</p>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Section
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Group
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button onClick={onSave} className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const ShiftStudentModalWithOptions: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Student</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-5">
          <Image
            src="/teacher-b2b/list-profile.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Student Name</p>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Section
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Group
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button onClick={onSave} className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectClassToEditModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-2 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-sm font-medium text-black mb-3"
        >
          Select Class to manage
        </label>
        <div className="flex items-center gap-2 mb-2 bg-[#F9FAFB] border border-[#E5E7EB] p-2 rounded-xl">
          <div className="relative flex-grow text-black">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border-2 border-[#6B7280] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
        </div>
        <div className="space-y-1 max-h-80 overflow-y-auto custom-scrollbar pr-1 relative">
          {classes.map((cls) => (
            <div
              key={cls}
              onClick={() => onClose()}
              className="p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer hover:border-blue-500 text-sm font-medium text-[#6B7280]"
            >
              {cls}
            </div>
          ))}
        </div>
        {/* No action buttons in this specific design screenshot */}
      </div>
    </div>
  );
};

const ManageClassModal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;
  // Dummy state for this modal's internal selections if any
  // const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { id: "t1", name: "Teacher One", detail1: "Maths", detail2: "Grade 10" },
    { id: "t2", name: "Teacher Two", detail1: "Science", detail2: "Grade 9" },
    {
      id: "t3",
      name: "Teacher Three",
      detail1: "English",
      detail2: "Grade 10",
    },
  ];

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="space-y-5 mb-8">
          <div>
            <label
              htmlFor="mc_className"
              className="block text-sm font-medium text-black mb-1"
            >
              Class Name
            </label>
            <input
              type="text"
              id="mc_className"
              placeholder="Branch Name"
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="mc_gradeLevel"
              className="block text-sm font-medium text-black mb-1"
            >
              Grade / Level
            </label>
            <div className="relative">
              <select
                id="mc_gradeLevel"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <div>
            <label
              htmlFor="mc_group"
              className="block text-sm font-medium text-black mb-1"
            >
              Group
            </label>
            <div className="relative">
              <select
                id="mc_group"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <label className="block text-sm font-medium text-black mb-1">
            Assign Class Teacher
          </label>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-2 rounded-2xl">
            <div className="flex items-center gap-2 mb-2 ">
              <div className="relative flex-grow text-black">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Student"
                  className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">filter 1</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">filter 2</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
              </div>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1 relative">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="flex items-center p-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer hover:border-blue-500"
                >
                  <Image
                    src={`/principal/manage.jpg`}
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm text-black">
                      {teacher.name}
                    </p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail1}</p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail2}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors">
            Delete Class
          </button>
          <button onClick={onSave} className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageAddStudentsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const students = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `s${i}`,
      name: `Student Name ${i + 1}`,
      course: "Course Name",
      grade: "Level / Grade",
      group: "Group",
    }));
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-3xl transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-sm font-medium text-black mb-3"
        >
          Add Students
        </label>
        <div className="flex items-center gap-2 mb-2 ">
          <div className="relative flex-grow text-black">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-80 overflow-y-auto custom-scrollbar pr-2 mb-8 relative  p-3 rounded-xl">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center p-1.5 rounded-xl border border-[#E5E7EB] bg-white cursor-pointer hover:border-blue-500"
            >
              <Image
                src={`/teacher-b2b/list-profile.png`}
                alt="User Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover mr-2"
              />
              <div className="flex-grow text-[10px]">
                <p className="font-semibold text-xs text-black">
                  {student.name}
                </p>
                <p className="text-[#F9FAFB]0">{student.course}</p>
                <p className="text-[#F9FAFB]0">{student.grade}</p>
                <p className="text-[#F9FAFB]0">{student.group}</p>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 ml-2"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          <button onClick={() => onClose()} className="px-6 w-45 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors">
            Delete Class
          </button>
          <button onClick={() => onClose()} className="px-6 w-45 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Save
          </button>{" "}
          {/* Or Create Class */}
        </div>
      </div>
    </div>
  );
};

const Management = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('teacher');

  const filteredData = sampleData.filter((item) => item.role === activeTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddClassPopup, setShowAddClassPopup] = useState<boolean>(false);
  const [showRemoveTeacherPopup, setShowRemoveTeacherPopup] = useState<boolean>(false)
  const [showRemoveStudentPopup, setShowRemoveStudentPopup] = useState<boolean>(false)
  const [showAddStudentPopup, setShowAddStudentPopup] = useState<boolean>(false)
  const [showShiftTeacherPopup, setShowShiftTeacherPopup] = useState<boolean>(false)
  const [showShiftTeacherModalSimple, setShowShiftTeacherModalSimple] = useState<boolean>(false)
  const [showShiftStudentPopup, setShowShiftStudentPopup] = useState<boolean>(false)
  const [showShiftStudentModalSimple, setShowShiftStudentModalSimple] = useState<boolean>(false)
  const [showSelectClassPopup, setShowSelectClassPopup] = useState<boolean>(false)
  const [showManageClassPopup, setShowManageClassPopup] = useState<boolean>(false)
  const [showManageAddStudentsPopup, setShowManageAddStudentsPopup] = useState<boolean>(false)
  const [showManageLecturePopup, setShowManageLecturePopup] = useState<boolean>(false)
  const [showReassignModal, setShowReassignPopup] = useState<boolean>(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

  const router = useRouter()

  const handleRemove = (e: MouseEvent<SVGElement>) => {
    e.stopPropagation()
    if (activeTab === "teacher") {
      setShowRemoveTeacherPopup(true)
    } else {
      setShowRemoveStudentPopup(true)
    }
  }

  const handleShift = (e: MouseEvent<SVGElement>) => {
    e.stopPropagation()
    if (activeTab === "teacher") {
      setShowShiftTeacherPopup(true)
    } else {
      setShowShiftStudentPopup(true)
    }
  }

  const handleManageClass = () => {
    setShowSelectClassPopup(false);
    setShowManageClassPopup(true);
  }

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  return (
    <div className="p-4 mx-auto w-[90vw]">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">
        <RemoveTeacherModal isOpen={showRemoveTeacherPopup} onClose={() => { setShowRemoveTeacherPopup(false) }} />
        <RemoveStudentModal isOpen={showRemoveStudentPopup} onClose={() => { setShowRemoveStudentPopup(false) }} />
        <ShiftTeacherModalWithOptions isOpen={showShiftTeacherPopup} onClose={() => { setShowShiftTeacherPopup(false) }}  onSave={() => { setShowShiftTeacherPopup(false); setShowShiftTeacherModalSimple(true) }}/>
        <ShiftTeacherModalSimple isOpen={showShiftTeacherModalSimple} onClose={() => setShowShiftTeacherModalSimple(false)} />
        <ShiftStudentModalWithOptions isOpen={showShiftStudentPopup} onClose={() => setShowShiftStudentPopup(false)} onSave={() => { setShowShiftStudentPopup(false); setShowShiftStudentModalSimple(true) }} />
        <ShiftStudentModalSimple isOpen={showShiftStudentModalSimple} onClose={() => setShowShiftStudentModalSimple(false)} />
        <SelectClassToEditModal isOpen={showSelectClassPopup} onClose={handleManageClass} />
        <ManageClassModal isOpen={showManageClassPopup} onClose={() => setShowManageClassPopup(false)} onSave={() => {setShowManageClassPopup(false); setShowManageAddStudentsPopup(true) }} />
        <ManageAddStudentsModal isOpen={showManageAddStudentsPopup} onClose={() => setShowManageAddStudentsPopup(false)} />
        <AddClassModal isOpen={showAddClassPopup} onSave={() => {setShowAddClassPopup(false); setShowAddStudentPopup(true)}} />
        <AddStudentsModal isOpen={showAddStudentPopup} onClose={() => setShowAddStudentPopup(false)} />
        <ManageLectureModal isOpen={showManageLecturePopup} onClose={() => {setShowManageLecturePopup(false)}} onReassign={() => {setShowManageLecturePopup(false); setShowReassignPopup(true) }} />
        <ReassignClassModal isOpen={showReassignModal} onClose={() => setShowReassignPopup(false)} />

        <div className="relative flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative mx-4 flex justify-evenly">
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className=" pl-8 pr-4 py-2 border border-[#6b7280] rounded-full focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-grow gap-4 justify-between">
            <Button onClick={() => setShowSelectClassPopup(true)} className="flex-1 bg-[#f9fafb] px-6 py-2 cursow-pointer text-m border rounded-xl whitespace-nowrap">Manage Class</Button>
            <Button onClick={() => setShowAddClassPopup(true)} className="flex-1 bg-[#f9fafb] px-6 py-2 cursow-pointer text-m border rounded-xl whitespace-nowrap">Add Class</Button>
            <Button onClick={() => setShowManageLecturePopup(true)} className="flex-1 bg-[#f9fafb] px-4 py-2 cursow-pointer text-m border rounded-xl whitespace-nowrap">Lecture Manager</Button>
            {/* Filters with dropdown icons */}
            {filters.map((filter, index) => (
              <div key={filter} className="relative flex w-20">
                <select
                  className="appearance-none min-w-10 w-full border border-[#e5e7eb] text-sm px-3 py-2 cursor-pointer rounded-xl  bg-[#f9fafb] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={selectedFilters[index]}
                  onChange={(e) => handleFilterChange(index, e.target.value)}
                >
                  <option value="">{filter}</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#6b7280] text-xs" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex mb-4 space-x-4 text-sm font-medium">
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
            onClick={() => setActiveTab('teacher')}
          >
            Teachers
          </button>
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-[#6b7280]'}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
        </div>
        <ClassTab />
        <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-4 max-h-[80vh] overflow-y-scroll custom-peach-scrollbar">

          {/* Cards */}
          {filteredData.map((item) => (
            <div key={item.id} onClick={() => router.push(item.role === 'teacher' ? "/principal/teacher-performance" : "/principal/student-progress-report")} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl px-2 py-1 shadow-sm">
              <div className={`${item.role === "teacher" ? "w-20 h-20" : "w-10 h-10"} rounded-xl relative overflow-hidden`}>
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-m">{item.name}</div>
                {item.role === 'teacher' && (
                  <>
                    <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.level}</div>
                    <div className="text-xs text-gray-500">{item.group}</div>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-100 text-pink-600 p-2 text-sm rounded-full ">
                  <FiMinusCircle onClick={handleRemove} />
                </button>
                <button className=" bg-gray-100 text-zinc-900 p-2 text-sm rounded-full">
                  <AiOutlineSwap onClick={handleShift} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
