"use client";
import ProfileSettingsTeacherPopup from "@/app/admin-b2c/pop-ups-2/components/profileSettingTeacher";
import Image from "next/image";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const TeacherCard = () => {
  const [editPopup, setEditPopup] = useState(false);
  return (
    <>
      <div
        className="rounded-2xl w-full max-w-[90rem] p-3 flex flex-col lg:flex-row gap-4" // Increased outer padding and added gap
        style={{
          backgroundImage: "url('/admin/bg-pattern.png')", // Assumes this path is correct from your public folder
          backgroundSize: "cover",
        }}
      >
        {/* Left Section: Teacher Info */}
        <div className="bg-white w-full lg:w-[55%] relative flex flex-col lg:flex-row items-center p-6 rounded-3xl "> {/* Increased padding, added subtle shadow */}
          {/* Settings Icon - Positioned absolutely within the white container */}
          <div className="flex flex-col w-full">
            <div className="absolute top-6 lg:right-64 right-6 bg-[#faf9fb] border border-[#e5e7eb] rounded-full p-1.5  z-10"
              onClick={() => setEditPopup(true)}> {/* Adjusted padding and added z-index */}

              <FiSettings className="text-black w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />

            </div>

            {/* Profile Section: Image, Name, Tags */}
            <div className="flex flex-col xl:flex-row gap-5 items-center sm:items-start mb-2 text-center sm:text-left"> {/* Adjusted gap, alignment, and margin */}
              {/* Profile Image */}
              <div className="flex-shrink-0">
                {/* Using fill and parent div for better responsiveness/aspect ratio control, or fixed size with object-cover */}
                <Image
                  src="/teacher-b2b/profile2.png" // Assumes this path is correct
                  alt="Teacher"
                  width={100} // Increased slightly based on visual
                  height={100} // Increased slightly based on visual
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name and Tags */}
              <div className="flex-1 min-w-0 mt-2 sm:mt-0"> {/* Added top margin for mobile stacking */}
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black"> {/* Adjusted font size, weight, margin, color */}
                  Teacher Name
                </h2>
                {/* Tags: Flex container with no gap, precise rounding on ends */}
                <div className="flex gap-1 justify-center sm:justify-start"> {/* Ensure tags are centered on mobile */}
                  <span className="bg-[#ff3366] text-white text-xs sm:text-sm px-4 py-1.5 rounded-l-full whitespace-nowrap font-medium"> {/* Adjusted padding, rounding, font weight */}
                    Batch Assigned
                  </span>
                  <span className="bg-[#ff3366] text-white text-xs sm:text-sm px-4 py-1.5 rounded-r-full whitespace-nowrap font-medium"> {/* Adjusted padding, rounding, font weight */}
                    Part-time {/* Corrected text based on image */}
                  </span>
                </div>
              </div>


            </div>

            {/* Contact Details Section */}
            <div className="pt-2 border-gray-200 space-y-4 text-center sm:text-left"> {/* Added top margin, padding, border */}
              <h3 className="font-semibold text-base sm:text-lg text-gray-800"> {/* Adjusted text size, weight, color */}
                Contact Details
              </h3>
              {/* Contact Fields: Flex container, stacking on mobile, row on medium */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3"> {/* Adjusted gap and alignment */}
                <div className="bg-[#f3f4f6] border border-[#b0b0b0] px-4 py-2.5 rounded-full text-sm text-gray-700 whitespace-nowrap"> {/* Adjusted padding, border color, text color */}
                  +91 0000000000
                </div>
                <div className="bg-[#f3f4f6] border border-[#b0b0b0] px-4 py-2.5 rounded-full text-sm text-gray-700 whitespace-nowrap"> {/* Adjusted padding, border color, text color */}
                  example@gm.com
                </div>
              </div>
            </div>
          </div>
          {/* Personal Details - Desktop (positioned next to name/tags) */}
          <div className="hidden lg:block text-base text-black whitespace-nowrap pt-2"> {/* Added text color */}
            <p className="mb-1">
              <strong className="font-medium text-black">City:</strong> Mumbai {/* Adjusted font weight and color for strong */}
            </p>
            <p className="mb-1">
              <strong className="font-medium text-black">State:</strong> Maharashtra
            </p>
            <p className="mb-1">
              <strong className="font-medium text-black">Gender:</strong> Male
            </p>
            <p className="mb-1">
              <strong className="font-medium text-black">DOB:</strong> 15 Jun 2015
            </p>
          </div>
          {/* Personal Details - Mobile/Tablet (positioned below contact details) */}
          <div className="block lg:hidden mt-6 pt-6"> {/* Added top margin, padding, border */}
            {/* Using grid for aligned key-value pairs */}
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700"> {/* Adjusted gap, added text color */}
              <p><strong className="font-medium text-gray-800">City:</strong> Mumbai</p>
              <p><strong className="font-medium text-gray-800">State:</strong> Maharashtra</p>
              <p><strong className="font-medium text-gray-800">Gender:</strong> Male</p>
              <p><strong className="font-medium text-gray-800">DOB:</strong> 15 Jun 2015</p>
            </div>
          </div>
        </div>

        {/* Right Section: Retention Rate */}
        <div className="bg-white w-full lg:w-[45%] rounded-3xl p-6 flex flex-col shadow-sm"> {/* Increased padding, added subtle shadow */}
          {/* Content container for Retention Rate, allows flex-grow to center vertically if needed, but primarily top aligned */}
          <div className="flex flex-col flex-wrap lg:flex-row items-center sm:items-start justify-between gap-6 h-full"> {/* Used h-full to fill parent, adjusted gap */}
            {/* Stats Block */}
            <div className="flex-1 space-y-2 text-center sm:text-left"> {/* Adjusted space-y */}
              <h3 className="font-semibold text-xl sm:text-2xl mb-4 text-gray-800"> {/* Adjusted font size, weight, margin, color */}
                Retention Rate
              </h3>
              {/* Adjusted text color and spacing */}
              <p className="text-sm text-gray-700">Total Student Taught: 120</p> {/* Corrected text */}
              <p className="text-sm text-gray-700">Returning Students: 101</p> {/* Added missing line */}
              <p className="text-sm text-gray-700">Avg. Rating: 4.6</p>

              {/* Percentage Increase Pill */}
              <p className="text-xs sm:text-sm font-medium text-[#238300] bg-[#8dd9b3]/30 rounded-full px-3 py-1.5 inline-block mt-3"> {/* Adjusted padding, background opacity, font weight, margin */}
                +6% from last month
              </p>
            </div>


            <div className="flex items-center justify-center mt-4 lg:m-6 sm:mt-0 sm:ml-6">
              <p className="text-2xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-[#8dd9b3]"> {/* Adjusted font sizes to be larger */}
                84%
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProfileSettingsTeacherPopup onClose={() => setEditPopup(false)} isOpen={editPopup} />
    </>
  );
};

export default TeacherCard;