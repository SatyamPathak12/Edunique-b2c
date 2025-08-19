import React, { useState } from "react";
import { FiX, FiChevronDown, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { BaseModal, PopupProp } from "@/app/admin-b2c/pop-ups-2/page";
import { AnimatePresence, motion } from 'framer-motion';
const AddCourseModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('Option 1');
    const [isPlanOpen, setIsPlanOpen] = useState(false);
    const [isOption2Open, setIsOption2Open] = useState(false);
    const handlePlanClick = (plan: string) => {
        setSelectedPlan(plan);
        setIsPlanOpen(false);
    };
    const plans = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        {/* Title */}
        <h2 className="text-center font-semibold text-base mb-6">Add Course</h2>

        {/* Available Courses */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">Available Courses</label>
           <motion.div
                            layout
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-[#f9fafb] border border-gray-300 overflow-hidden 
      ${isPlanOpen ? 'rounded-2xl' : 'rounded-full'} cursor-pointer`}
                            onClick={() => setIsPlanOpen(prev => !prev)}
                        >
                            {/* Selected Option */}
                            <div className="flex items-center justify-between px-4 py-3 text-sm">
                                <span className="text-black">{isPlanOpen === true ? "Selected Option": "Option 1"}</span>
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
                                       <div className="px-2 mb-2">
                                        <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
                                      <FiSearch size={20} className="text-black mr-2" />
                                      <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full bg-transparent outline-none text-sm"
                                      />
                                    </div>
                                       </div>
                                        {plans.map((option, index) => (
                                            <div
                                                key={option}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent parent click
                                                    handlePlanClick(option);
                                                }}
                                                className={`px-4 py-2.5 mx-2 rounded-full text-sm
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

        {/* Class */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block">Class</label>
          <motion.div
                            layout
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-[#f9fafb] border border-gray-300 overflow-hidden 
      ${isOption2Open ? 'rounded-2xl' : 'rounded-full'} cursor-pointer`}
                            onClick={() => setIsOption2Open(prev => !prev)}
                        >
                            {/* Selected Option */}
                            <div className="flex items-center justify-between px-4 py-3 text-sm">
                                <span className="text-black">{isOption2Open === true ? "Selected Option": "Option 1"}</span>
                                <FiChevronDown
                                    className={`ml-2 text-black transition-transform duration-200 ${isOption2Open ? 'rotate-180' : ''}`}
                                    size={18}
                                />
                            </div>
                             
                            {/* Expandable Options */}
                            <AnimatePresence>
                                {isOption2Open && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="pb-2 space-y-1"
                                    >
                                       <div className="px-2 mb-2">
                                        <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
                                      <FiSearch size={20} className="text-black mr-2" />
                                      <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full bg-transparent outline-none text-sm"
                                      />
                                    </div>
                                       </div>
                                        {plans.map((option, index) => (
                                            <div
                                                key={option}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent parent click
                                                    handlePlanClick(option);
                                                }}
                                                className={`px-4 py-2.5 mx-2 rounded-full text-sm
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

        {/* Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-full px-4 py-3 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="rounded-full px-4 py-3 bg-[#3366ff] text-white text-sm font-medium hover:bg-blue-600"
          >
            Add
          </button>
          <Link href="/admin-b2c/admin-panel/create-course" >
            <button
              className="rounded-full px-4 py-3 bg-yellow-400 text-white text-sm font-medium hover:bg-yellow-500"
            >
              Create New Course
            </button>
          </Link>
        </div>
      </div>
    </BaseModal>
  );
};

export default AddCourseModal;
