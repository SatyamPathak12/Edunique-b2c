"use client";
import { useState } from 'react';
import TabSwitch from '../common-components/TabSwitch';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import TeacherB2CWrapper from './common-components/TeacherB2CPageWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import UploadVideo from '@/app/b2c-teacher/ct-pop-ups/popupComponent/UploadVideos';

interface CustomSelectProps {
  label: string;
  options: string;
}

const CustomSelect = ({ label, options }: CustomSelectProps) => {
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
                                <span className="text-black">{isOption2Open === true ? "Selected Option": options}</span>
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
                                                        : 'text-gray-600 hover:bg-[#B0B0B014] text-center'}
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


const TeachMoreCourse = () => {
  const [upload, setUplaod] = useState(false);
  return (
    <>
      <form className="flex flex-col text-sm">
        <div className="flex flex-col">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#f9fafb] font-semibold rounded-xl">Your Contact Information</h1>
          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-md' htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="email">Email</label>
            <input id="email" type="email" className='rounded-full px-4 py-2 bg-[#B0B0B014] border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Current Teaching Engagements</h1>
          <div className="max-w-md border mb-2 rounded-xl">
            <ul className="p-4 gap-2 flex flex-col">
              <li className="font-medium pb-1.5">Course (s) Currently Taught</li>
              <li className="">Mathematics Foundation Course</li>
              <li className="">Spoken English & Vocabulary</li>
            </ul>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="weeklyHours">Weekly Work Hours</label>
            <input id="weeklyHours" type="text" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">
            Desired New Teaching Opportunities
          </h1>

          <div className="max-w-md w-full space-y-4 py-3.5">
            {/* Preferred New Course */}
            <CustomSelect label="Preferred New Course" options="Option 1" />

            {/* Ideal Teaching Hours */}
            <CustomSelect label="Ideal Teaching Hours" options="80 Hours" />

            {/* Preferred Teaching Day */}
            <CustomSelect label="Preferred Teaching Day" options="Tuesday" />

            {/* Grade Levels or Student Groups */}
            <CustomSelect
              label="Grade Levels or Student Groups of Interest"
              options="Grade 1 - 3"
            />

            {/* Upload Document */}
            <div>
              <label className="block font-medium mb-1">
                Qualifications & Certifications for New Subject(s)
              </label>
              <span className="block text-sm text-gray-500 mb-1 ml-2">
                Upload Document
              </span>
              <div
              onClick={() => setUplaod(true)} className="flex items-center gap-2 rounded-full ml-2 border border-gray-300 bg-[#f9fafb] p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-full">
                  <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                </div>
                <span className="truncate">Document Name</span>
              </div>
            </div>

            {/* Motivation Textarea */}
            <div>
              <label className="block font-medium mb-1">
                Motivation & Experience for This New Teaching Area
              </label>
              <textarea
                rows={4}
                className="w-full rounded-3xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Compensation Preferences</h1>

          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-md' htmlFor="teachingExperience">Your Total Teaching Experience (in years)</label>
            <input id="teachingExperience" type="text" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='6 years' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="timeServed">Time Served at Edunique (in months)</label>
            <input id="timeServed" type="text" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='18 Months' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="hourlyRate">Current Hourly Rate (₹)</label>
            <input id="hourlyRate" type="number" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='20000' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="newHourlyRate">Expected New Hourly Rate (₹)</label>
            <input id="newHourlyRate" type="number" className='rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='40000' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className="block font-medium mb-1">
              why are you requesting a raise?
            </label>
            <textarea
              rows={2}
              className="w-full rounded-3xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
            />

          </div>

        </div>
        <div className="max-w-md">
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
      <UploadVideo isOpen={upload} onClose={() => setUplaod(false)} />
    </>
  )
}

const DropCourse = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(["Science"]); // ✅ array now
  const [agree, setAgree] = useState(true);

  const courses = [
    "Mathematics Foundation Course",
    "Spoken English & Vocabulary",
    "Science",
  ];

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course) // remove if already selected
        : [...prev, course] // add if not selected
    );
  };

  return (
    <form>
      {/* Heading */}
      <div className="flex flex-col">
        <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Your Contact Information</h1>
        <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
          <label className='font-medium text-sm' htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" className='text-sm rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
        </div>
        <div className="max-w-md flex flex-col gap-1 pb-4">
          <label className='font-medium text-sm' htmlFor="email">Email</label>
          <input id="email" type="email" className='text-sm rounded-full px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">
          Course(s) You Wish to Discontinue
        </h1>
        <p className="text-[#ff3366] text-xs pt-2 pb-4">
          Please select the course(s) you no longer wish to continue teaching.
        </p>
        <div className="max-w-md w-full text-sm space-y-4">
          {/* Subtext */}


          {/* Custom Radio Group */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => toggleCourse(course)}
              >
                {selectedCourses.includes(course) ? (
                  <FaCheckCircle className="text-blue-600" size={20} />
                ) : (
                  <FaRegCircle className="text-gray-700" size={20} />
                )}
                <span className="text-zinc-800 font-medium text-md md:text-lg">
                  {course}
                </span>
              </div>
            ))}
          </div>

          {/* Date Picker */}
          <div>
            <label className="block font-medium mb-1">Effective From</label>
            <input
              type="date"
              className="w-full rounded-full border bg-[#f9fafb] border-gray-300 px-4 py-2 text-gray-500"
            />
          </div>

          {/* Reason Textarea */}
          <div>
            <label className="block font-medium mb-1">Reason For Dropping A Subject</label>
            <textarea
              rows={4}
              className="w-full rounded-3xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
            />
          </div>
        </div>
        {/* Custom Checkbox */}
        <div
          className="flex items-center max-w-2xl gap-3 py-3 cursor-pointer"
          onClick={() => setAgree(!agree)}
        >
          <div className="">
            {agree ? (
              <FaCheckCircle className="text-blue-600" size={30} />
            ) : (
              <FaRegCircle className="text-gray-400" size={30} />
            )}
          </div>
          <span className="text-[13px] font-medium">
            I confirm that I no longer wish to teach the above-mentioned subject(s) and
            understand this request will be reviewed by the admin.
          </span>
        </div>

        {/* Submit Button */}
        <div className="max-w-md">
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>

    </ form>
  );
};



const ManageCourse = () => {
  const tabs = ['Teach More Course', 'Drop Course'];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <TeacherB2CWrapper>
      <div className="mx-auto max-w-7xl bg-[#e3e3e3]">
        <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />

        {/* Content Switcher */}
        <div className=" bg-white p-3 rounded-2xl">
          {selectedTab === 'Teach More Course' && (
            <TeachMoreCourse />
          )}
          {selectedTab === 'Drop Course' && (
            <DropCourse />
          )}
        </div>
      </div>
    </TeacherB2CWrapper>
  );
};

export default ManageCourse;
