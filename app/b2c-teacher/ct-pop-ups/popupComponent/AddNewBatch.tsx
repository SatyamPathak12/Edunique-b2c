'use client';

import { useState } from 'react';
import { FiCheck, FiSearch } from 'react-icons/fi';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import Image from 'next/image';
import DropdownBtn from '@/components/teacher-b2c/common-components/Dropdown';

const students = [...Array(5)].map((_, i) => ({
  id: i,
  name: 'Student Name',
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  avatar: '/common-images/full-student.jpg', // Replace this with actual path
}));

const AddNewBatch: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelected] = useState<number[]>([]);
  const option = [
    {id: "o1", label: "1:1"}
  ]
  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };



  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="bg-[#f9fafb] p-4 rounded-3xl space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">Add New batch</h2>

        <div className="flex flex-col px-2 my-6">
          <label htmlFor="groupName" className=' mb-2'>Batch Name</label>
          <input type="text" className="w-full rounded-full px-4 py-2 text-sm border" placeholder='Text' />
        </div>
        <div className="px-2 my-6">
          <DropdownBtn title='Batch Size' filters={option}/>
        </div>
        {/* Group Name Input */}

        <div className="rounded-3xl border pr-3 pl-2 py-2">
          <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
            <FiSearch size={20} className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
          <div className="space-y-3 max-h-[265px] mt-2 overflow-y-auto custom-scrollbar-thin pr-2">
            {students.map((student) => {
              const isSelected = selected.includes(student.id);
              return (
                <>

                  <div
                    key={student.id}
                    onClick={() => toggleSelect(student.id)}
                    className="flex items-center gap-4 p-1 border border-gray-200 rounded-2xl cursor-pointer "
                  >
                    <Image
                      src={student.avatar}
                      alt="Student"
                      width={75}
                      height={75}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.course}</p>
                      <p className="text-xs text-gray-500">{student.level}</p>
                      <p className="text-xs text-gray-500">{student.group}</p>
                    </div>

                    {/* Custom Styled Checkbox */}
                    <div
                      className={`w-6 h-6 rounded-full border-3 flex items-center justify-center ${isSelected
                          ? 'bg-[#3366ff] border-[#3366ff]'
                          : 'border-gray-500'
                        }`}
                    >
                      {isSelected && (
                        <span className="text-white text-xs font-bold"><FiCheck strokeWidth={3} /></span>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Student List */}


        {/* Create Button */}
        <div className="pt-2 flex gap-2 justify-center">

          <button className="px-4 bg-[#3366ff] text-white py-2.5 rounded-full text-sm font-medium"
            onClick={onClose}>
            Create
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default AddNewBatch;
