'use client';

import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';
import Image from 'next/image';

const students = [...Array(5)].map((_, i) => ({
  id: i,
  name: 'Student Name',
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  avatar: '/common-images/full-student.jpg', // Replace this with actual path
}));

const CreateGroupPopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const filter = [
    {id: "f1", label: "1st STD"}
  ]

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="bg-white p-4 rounded-3xl space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">Create New Group</h2>

        <div className="flex flex-col px-2 my-2">
          <label htmlFor="groupName" className='font-medium mb-2'>Enter Group Name</label>
          <input type="text" className="w-full rounded-full px-4 py-2 border" placeholder='Text'/>
        </div>

        {/* Group Name Input */}
        <SearchFilter filters={filter} placeHolder='Search Student'/>


        {/* Student List */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar-thin pr-1">
          {students.map((student) => {
            const isSelected = selected.includes(student.id);
            return (
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
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.course}</p>
                  <p className="text-xs text-gray-500">{student.level}</p>
                  <p className="text-xs text-gray-500">{student.group}</p>
                </div>

                {/* Custom Styled Checkbox */}
                <div
                  className={`w-6 h-6 rounded-full border-3 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#3366ff] border-[#3366ff]'
                      : 'border-gray-500'
                  }`}
                >
                  {isSelected && (
                    <span className="text-white text-xs font-bold"><FiCheck strokeWidth={3}/></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Create Button */}
        <div className="pt-2 flex justify-center">
          <button className="px-4 bg-[#3366ff] text-white py-2.5 rounded-full text-sm font-medium"
          onClick={onClose}>
            Create
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default CreateGroupPopup;
