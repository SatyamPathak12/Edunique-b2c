"use client"
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5"
import RejectRequestPopup from "../../pop-ups-2/components/reject-request-popup";
import ScheduleInterview from "../../pop-ups-2/components/ScheduleInterview";


interface CustomSelectProps {
  label: string;
  options: string[];
}

const CustomSelect = ({ label, options }: CustomSelectProps) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="relative">
        <div className="w-full appearance-none text-gray-500  font-normal rounded-xl border border-gray-300 bg-[#f9fafb] p-2 pr-10">
          {options}
        </div>
      </div>
    </div>
  );
};


const TeachMoreCourseComponent = () => {
  const [rejectPopup, setRejectPopup] = useState(false);
  const [approvePopup, setApprovePopup] = useState(false);
  return (
    <>
      <form className="flex flex-col text-sm">
        <div className="flex flex-col">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl"> Contact Information</h1>
          <div className="max-w-md flex flex-col gap-1 pt-4 pb-4">
            <label className='font-medium text-base' htmlFor="fullName">Full Name</label>
            <div id="fullName" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500' >Text</div>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="email">Email</label>
            <div id="email" className='text-gray-500 rounded-xl px-4 py-2 bg-[#f9fafb] border'  >Text</div>
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
            <label className='font-medium text-base' htmlFor="weeklyHours">Weekly Work Hours</label>
            <div id="weeklyHours" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500'  >Text</div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">
            Desired New Teaching Opportunities
          </h1>

          <div className="max-w-md w-full space-y-4 py-3.5">
            {/* Preferred New Course */}
            <CustomSelect label="Preferred New Course" options={["Course Name"]} />

            {/* Ideal Teaching Hours */}
            <CustomSelect label="Ideal Teaching Hours" options={["80 Hours"]} />

            {/* Preferred Teaching Day */}
            <CustomSelect label="Preferred Teaching Day" options={["Tuesday"]} />

            {/* Grade Levels or Student Groups */}
            <CustomSelect
              label="Grade Levels or Student Groups of Interest"
              options={["Grade 1 - 3"]}
            />

            {/* Upload Document */}
            <div>
              <label className="block font-medium mb-1">
                Qualifications & Certifications for New Subject(s)
              </label>

              <div className="flex items-center gap-2 rounded-2xl mb-2 border border-gray-300 bg-[#f9fafb] p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-xl">
                  <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                </div>
                <span className="truncate">Document Name</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl  border border-gray-300 bg-[#f9fafb] p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-xl">
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
              <div

                className="w-full h-36 rounded-xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Compensation Preferances</h1>

          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-base' htmlFor="teachingExperience">Your Total Teaching Experience (in years)</label>
            <div id="teachingExperience" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500'  >6 years</div>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="timeServed">Time Served at Edunique (in months)</label>
            <div id="timeServed" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500' >18 Months</div>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="hourlyRate">Current Hourly Rate (₹)</label>
            <div id="hourlyRate" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500'  >20000</div>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="newHourlyRate">Expected New Hourly Rate (₹)</label>
            <div id="newHourlyRate" className='rounded-xl px-4 py-2 bg-[#f9fafb] border text-gray-500' >40000</div>
          </div>
          <div className="max-w-md">
            <label className="block font-medium mb-1">
              Reason for requesting a raise?
            </label>
            <div
              className="text-gray-500 h-16 w-full rounded-xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
            ></div>
          </div>

        </div>
        <div className="font-medium flex-wrap flex justify-center gap-2 mt-6 md:mt-8">
          <button
            type="button"
            onClick={() => setRejectPopup(true)}
            className=" rounded-full bg-pink-50 text-sm md:text-base text-[#ff3366] cursor-pointer py-2.5 px-6 transition duration-200"
          >
            Reject Request
          </button>
          <button
            type="button"
            onClick={() => setApprovePopup(true)}
            className=" rounded-full text-sm md:text-base bg-blue-600 cursor-pointer text-white py-2.5 px-4 transition duration-200"
          >
            Approve Request
          </button>
        </div>
      </form>
      <RejectRequestPopup isOpen={rejectPopup} onClose={() => setRejectPopup(false)} />
      <ScheduleInterview isOpen={approvePopup} onClose={() => setApprovePopup(false)} />
    </>
  )
}

export default TeachMoreCourseComponent;