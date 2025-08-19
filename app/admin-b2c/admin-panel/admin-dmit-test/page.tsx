"use client"
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ExistingDmitModal from "../../pop-ups-2/components/existing-dmit-test";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from "react-icons/fi";

const DmitTestForm = () => {

    const [selectedPlan, setSelectedPlan] = useState('Option 1');
    const [isPlanOpen, setIsPlanOpen] = useState(false);
    const [isViewTestModalOpen, setIsViewTestModalOpen] = useState(false);
    const handlePlanClick = (plan: string) => {
        setSelectedPlan(plan);
        setIsPlanOpen(false);
    };
    const plans = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    return (
        <>
            <div className="bg-white pt-6 px-4 pb-3 rounded-3xl">
                <div className="flex justify-between w-full flex-col-reverse gap-4 md:flex-row">
                    <div className="flex flex-col items-start gap-4 md:gap-5">
                        <button className="text-[#3366ff] border-b-3 pb-1 text-base md:text-lg font-semibold px-2 border-[#3366ff] inline-block">DMIT</button>
                        <h2 className="font-semibold text-[#ff3366] pl-1 text-lg md:text-xl">Edit DMIT Test</h2>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8">

                        <h2 className="font-semibold text-[#ff3366] text-lg md:text-xl">Create New DMIT Test</h2>
                        <Link href={'/admin-b2c/admin-panel/create-dmit-test'} className="text-white bg-[#3366ff] font-medium rounded-full py-2 text-sm px-4 w-full text-center">Create</Link>
                    </div>
                </div>

                {/* Form strating */}
                <div className="w-full md:max-w-lg pt-6 pl-1 space-y-6">
                    {/* Dropdown */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-lg font-medium text-black">
                            Choose Existing Test (to Edit)
                        </label>
                        <motion.div
                            layout
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-[#f9fafb] border border-gray-300 overflow-hidden 
      ${isPlanOpen ? 'rounded-2xl' : 'rounded-full'} cursor-pointer`}
                            onClick={() => setIsPlanOpen(prev => !prev)}
                        >
                            {/* Selected Option */}
                            <div className="flex items-center justify-between px-4 py-3 text-sm">
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

                    {/* Test Name */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-lg font-medium text-black">Test Name</label>
                        <input
                            type="text"
                            placeholder="Text"
                            className="w-full bg-[#f9fafb] text-black text-sm md:text-base py-2.5 px-4 rounded-full border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-lg font-medium text-black">Duration (Minutes)</label>
                        <input
                            type="text"
                            placeholder="Text"
                            className="w-full bg-[#f9fafb] text-black text-sm md:text-base py-2.5 px-4 rounded-full border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Button */}
                    <div className="text-right">
  <Link
    href={'/admin-b2c/admin-panel/edit-dmit-test'}
    className="bg-[#ff3366] text-white inline-block text-sm py-3 rounded-full hover:opacity-90 w-full sm:w-32 text-center cursor-pointer"
  >
    Edit Questions
  </Link>

  <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 pt-4 sm:justify-end">
    <button className="bg-pink-100 w-full sm:w-auto text-[#ff3366] text-sm font-medium py-3 px-6 rounded-full hover:opacity-90 cursor-pointer text-center">
      Discard
    </button>

    <button
      className="bg-blue-100 w-full sm:w-auto text-[#3366ff] text-sm font-medium py-3 px-6 rounded-full hover:opacity-90 cursor-pointer text-center"
      onClick={() => setIsViewTestModalOpen(true)}
    >
      View Existing Test
    </button>

    <button className="bg-[#3366ff] text-white text-sm font-medium py-3 rounded-full hover:opacity-90 w-full sm:w-32 text-center cursor-pointer">
      Save
    </button>
  </div>
</div>


                </div>
            </div>
            <ExistingDmitModal
                isOpen={isViewTestModalOpen}
                onClose={() => setIsViewTestModalOpen(false)}
            />

        </>
    )
}

const DmitTest = () => {
    return (

        <AdminB2CWrapper>
            <DmitTestForm />
        </AdminB2CWrapper>

    )
}

export default DmitTest;