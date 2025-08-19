'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const subjects = Array.from({ length: 10 }, (_, i) => `Subject ${i + 1}`);
const plans = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const AdminCourse: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState('Option 1');
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const handleSubjectChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handlePlanClick = (plan: string) => {
    setSelectedPlan(plan);
    setIsPlanOpen(false);
  };

  return (
    <div className="flex gap-6 flex-col sm:flex-row rounded-2xl border border-gray-200 bg-white p-6">
      {/* Left Form Section */}
      <div className="w-full max-w-xs space-y-6">
        <div>
          <h2 className="text-[#ff3366] text-base font-semibold mb-4">Select Membership Plan</h2>

          <div className="space-y-6">
            {/* Custom Dropdown */}
            <div className="relative w-full">
              <label className="block text-sm mb-1">Choose Membership Plan</label>

              <motion.div
                layout
                transition={{ duration: 0.3 }}
                className={`w-full bg-[#f9fafb] border border-gray-300 overflow-hidden 
      ${isPlanOpen ? 'rounded-2xl' : 'rounded-full'} cursor-pointer`}
                onClick={() => setIsPlanOpen(prev => !prev)}
              >
                {/* Selected Option */}
                <div className="flex items-center justify-between px-4 py-2 text-sm">
                  <span className="text-black">{selectedPlan}</span>
                  <FiChevronDown
                    className={`ml-2 text-black transition-transform duration-200 ${isPlanOpen ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </div>

                {/* Expandable Options */}
                <AnimatePresence>
                  {isPlanOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pb-2 space-y-1"
                    >
                      {plans.map((option, index) => (
                        <div
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent click
                            handlePlanClick(option);
                          }}
                          className={`px-4 py-2 mx-2 rounded-full text-sm
                ${selectedPlan === option
                              ? 'bg-[#99DEFF] text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-100 text-center'}
                ${index === 0 ? 'text-center' : 'text-center'}
              `}
                        >
                          {option}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>



            {/* Validity */}
            <div>
              <label className="block text-sm mb-1">Validity</label>
              <input
                type="text"
                placeholder="Text"
                className="w-full rounded-full bg-[#f9fafb] border border-gray-300 px-4 py-2 text-sm"
              />
            </div>

            {/* Number of Sessions */}
            <div>
              <label className="block text-sm mb-1">Number of Sessions</label>
              <input
                type="text"
                placeholder="Text"
                className="w-full rounded-full bg-[#f9fafb] border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center sm:justify-end gap-4">
          <Link href="/admin-b2c/admin-panel/course-management" className="rounded-full px-6 py-2 text-sm font-medium text-[#ff3366] bg-[#ffe6ec] hover:bg-[#ffd4df] transition">
            Discard
          </Link>
          <Link href="/admin-b2c/admin-panel/course-management" className="rounded-full px-6 py-2 text-sm font-medium text-white bg-[#3366ff] hover:bg-[#2b5de0] transition">
            Save
          </Link>
        </div>
      </div>

      {/* Right Subject Selector */}
      <div className="w-full md:w-[25%] bg-[#f9fafb] border rounded-2xl p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-5">Select Subjects</h3>
        <div className="space-y-5 overflow-y-auto custom-scrollbar-thin max-h-[300px]">
          {subjects.map((subject, index) => {
            const isChecked = selectedSubjects.includes(subject);
            return (
              <label key={index} className="flex items-center gap-2 cursor-pointer text-base font-normal text-black">
                <input
                  type="checkbox"
                  name="subject"
                  value={subject}
                  checked={isChecked}
                  onChange={() => handleSubjectChange(subject)}
                  className="peer hidden"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                    ${isChecked ? 'bg-[#3366ff] border-[#3366ff]' : 'border-gray-600 bg-white'}`}
                >
                  {isChecked && <FiCheck size={14} className="text-white" strokeWidth={3}/>}
                </div>
                <span className="font-normal">
                   {subject.replace(" ", "\u00A0\u00A0\u00A0\u00A0")}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
