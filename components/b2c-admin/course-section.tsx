// app/components/CourseSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const courseSections = [
  {
    title: "Active Courses",
    courses: Array(10).fill({}),
  },
  {
    title: "Upcoming Courses",
    courses: Array(10).fill({}),
  },
  {
    title: "Previous Demos",
    courses: Array(10).fill({}),
  },
];

const CourseCard = () => (
  <div className="bg-white rounded-3xl shadow-sm p-2 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[330px] flex-shrink-0">
    <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-2xl overflow-hidden">
      <Image
        src="/personality.png" // Place your image in public folder
        alt="Course"
        fill
        className="object-cover"
      />
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-md">
        <span className="text-[#ffcc00]">4.2</span> 
        <AiFillStar className="text-[#ffcc00] w-3 h-3 sm:w-4 sm:h-4" />
      </div>
    </div>
    <div className="p-2 sm:p-3">
      <p className="text-left font-semibold text-sm sm:text-base lg:text-lg text-gray-800 truncate">
        Course Name
      </p>
      
    </div>
  </div>
);

const CourseSection = () => {
  return (
    <div className="max-w-[90rem] px-3 sm:px-4 lg:px-6 py-2 mx-auto">
      {courseSections.map((section, index) => (
        <div key={index} className="mb-8 sm:mb-10">
          <h2 className="text-[#ff3366] text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 px-1">
            {section.title}
          </h2>
          
          {/* Scrollable Container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-3 sm:gap-4 lg:gap-6 pb-4  no-scrollbar">
              {section.courses.map((_, idx) => (
                <CourseCard key={idx} />
              ))}
            </div>
            
            {/* Gradient Fade Effect */}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;