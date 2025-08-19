'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';
import TabSwitch from '@/components/common-components/TabSwitch';
import Link from 'next/link';


type CardData = {
  id: number;
  name: string;
  role: 'student' | 'teacher';
  course: string;
  level: string;
  group: string;
  image: string;
};

const students = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: 'Student Name',
  role: 'student' as const,
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  image: '/common-images/full-student.jpg', // Use same image or add logic to vary if needed
}));

const teachers = Array.from({ length: 16 }, (_, i) => ({
  id: i + 17,
  name: 'Name',
  role: 'teacher' as const,
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...students, ...teachers];

const filter = [
  { id: "f1", label: "Filter 1" },
  { id: "f2", label: "Filter 2" },
  { id: "f3", label: "Filter 3" },
];

const CourseManagement = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('teacher');

  const filteredData = sampleData.filter((item) => item.role === activeTab);
  const tabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5",];
  const [selected, setSelected] = useState(tabs[0])
  return (
    <div className="p-4 ">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">

        <SearchFilter filters={filter} />

        <div className="flex my-4 space-x-4 text-sm font-medium">
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('teacher')}
          >
            Teachers
          </button>
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
        </div>
        {/* <ClassTab /> */}
        <TabSwitch tabs={tabs} selected={selected} onChange={setSelected} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-screen overflow-y-auto custom-scrollbar-thin">
          {filteredData.map((item) => {
            const linkHref =
              item.role === 'teacher'
                ? `/admin-b2c/admin-panel/teacher-profile`
                : `/admin-b2c/admin-panel/student-profile`;

            return (
              <Link href={linkHref} key={item.id} passHref>
                <div className="flex items-center gap-4 bg-[#f9fafb] rounded-2xl px-2 py-1 cursor-pointer">
                  <div
                    className={`${item.role === 'teacher' ? 'w-20 h-20' : 'w-20 h-15 rounded-2xl'
                      }  relative overflow-hidden`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.name}</div>
                    {item.role === 'teacher' && (
                      <div className="text-sm font-semibold text-[#FF3366]">
                        {item.course}
                      </div>
                    )}
                    <div className="text-xs text-gray-500">{item.level}</div>
                    <div className="text-xs text-gray-500">{item.group}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseManagement;
