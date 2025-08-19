'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Stat = {
  label: 'Resumed' | 'New Enrollments' | 'Continued';
  value: number;
};

const summaryStats: Stat[] = [
  { label: 'Resumed', value: 10 },
  { label: 'New Enrollments', value: 5 },
  { label: 'Continued', value: 8 },
];

// -------------------------
// Accurate Table Data
// -------------------------
const resumedData = Array(6).fill({
  student: 'Lorem ipsum',
  course: 'Lorem ipsum',
  lastActive: '12/10/25',
  resumedOn: '14/10/25',
});

const newEnrollmentsData = Array(6).fill({
  student: 'Lorem ipsum',
  course: 'Lorem ipsum',
  enrollmentDate: '23/6/25',
});

const continuedData = Array(6).fill({
  student: 'Lorem ipsum',
  course: 'Lorem ipsum',
  previousTerm: 'Jan - Mar 2025',
  currentTerm: 'Apr - Jun 2025',
});

// -------------------------
// Component
// -------------------------
const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Stat['label']>('Resumed');

  // Columns: label = display; key = object field (optional for Action)
  let columns: { label: string; key?: string }[] = [];
  let tableData: any[] = [];

  if (activeTab === 'Resumed') {
    columns = [
      { label: 'Student', key: 'student' },
      { label: 'Course', key: 'course' },
      { label: 'Last Active Date', key: 'lastActive' },
      { label: 'Resumed On', key: 'resumedOn' },
      { label: 'Action' },
    ];
    tableData = resumedData;
  } else if (activeTab === 'New Enrollments') {
    columns = [
      { label: 'Student', key: 'student' },
      { label: 'Course', key: 'course' },
      { label: 'Enrollment Date', key: 'enrollmentDate' },
      { label: 'Action' },
    ];
    tableData = newEnrollmentsData;
  } else if (activeTab === 'Continued') {
    columns = [
      { label: 'Student', key: 'student' },
      { label: 'Course', key: 'course' },
      { label: 'Previous Term', key: 'previousTerm' },
      { label: 'Current Term', key: 'currentTerm' },
      { label: 'Action' },
    ];
    tableData = continuedData;
  }

  return (
    <div className="space-y-4 rounded-2xl p-4 mb-4 mt-2 bg-white">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summaryStats.map((stat) => {
          const isActive = stat.label === activeTab;
          return (
            <motion.div
              key={stat.label}
              onClick={() => setActiveTab(stat.label)}
              whileTap={{ scale: 0.97 }}
              layout
              className={`cursor-pointer rounded-2xl px-4 py-6 text-center transition-colors duration-300 ${
                isActive ? 'bg-[#99DEFF] border-transparent' : 'bg-white border border-gray-200'
              }`}
            >
              <p className="text-lg lg:text-xl mb-2 font-medium">{stat.label}</p>
              <motion.p
                key={isActive ? 'active' : 'inactive'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl lg:text-[38px] font-bold"
              >
                {stat.value}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full pb-1 custom-scrollbar-thin">
        {/* Header */}
        <div className="flex bg-[#8DD9B3] min-w-[850px] justify-between items-center font-semibold text-sm rounded-2xl w-full px-12 py-5.5 gap-x-6 mb-3">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center ${
                i === 0
                  ? 'justify-start'
                  : i === columns.length - 1
                  ? 'justify-end'
                  : 'justify-center'
              }`}
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-2 w-full min-w-[850px]">
          {tableData.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center bg-[#f9fafb] text-sm rounded-2xl px-12 py-3 border border-gray-200 gap-x-6"
            >
              {columns.map((col, colIdx) => {
                if (col.label === 'Action') {
                  return (
                    <div
                      key={colIdx}
                      className="flex-1 flex justify-end items-center"
                    >
                      <button className="rounded-full bg-white border border-gray-300 px-4 py-1 hover:bg-[#f9fafb] transition">
                        Details
                      </button>
                    </div>
                  );
                }

                return (
                  <div
                    key={colIdx}
                    className={`flex-1 flex ${
                      colIdx === 0 ? 'justify-start' : 'justify-center'
                    } items-center`}
                  >
                    {row[col.key as keyof typeof row]}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
