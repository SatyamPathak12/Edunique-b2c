"use client"
import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
interface CustomSelectProps {
    label: string;
    options: string;
}

const DropdownOptionSearch = ({ label, options }: CustomSelectProps) => {
    const [selectedPlan, setSelectedPlan] = useState('Option 1');
    const [isOption2Open, setIsOption2Open] = useState(false);
    const handlePlanClick = (plan: string) => {
        setSelectedPlan(plan);
    };
    const plans = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    return (
        <div>

            <div className="mb-2">
                <label className="block font-medium mb-1">{label}</label>
                <motion.div
                    layout
                    transition={{ duration: 0.3 }}
                    className={`w-full bg-[#f9fafb] border border-gray-300 overflow-hidden 
      ${isOption2Open ? 'rounded-2xl' : 'rounded-full'} cursor-pointer`}
                    onClick={() => setIsOption2Open(prev => !prev)}
                >
                    {/* Selected Option */}
                    <div className="flex items-center justify-between px-4 py-3 text-sm">
                        <span className="text-black">{isOption2Open === true ? "Selected Option" : options}</span>
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
        </div>
    );
};

export default DropdownOptionSearch;