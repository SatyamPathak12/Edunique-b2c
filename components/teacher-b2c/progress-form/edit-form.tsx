"use client";

import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiFileText,
  FiImage,
} from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import MaxWidthWrapper from "../../admin/max-width-wrapper";
import AttendanceForm from '@/components/teacher-b2c/progress-form/components'






// Main File Management Content Component

export default function StudentSubmittedPapersPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    // Implement back navigation, e.g., using Next.js router or window.history
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  const students = new Array(4).fill({
    name: "Student Name",
    grade: "Level / Grade",
    image: "/student-avatar-1.png", // place an avatar image in public folder
  });
  

  return (
    <div className="bg-[#eeeeee]  min-h-screen flex flex-col">
      <Header user={headerUser} />
      <div className=" px-22  bg-white py-4 flex justify-between">
        <div className="flex items-center gap-2 ">
          <button
            onClick={handleBackClick}
            className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          {/* You can make this title dynamic based on context */}
          <h1 className="text-lg sm:text-2xl font-bold text-[#FF3366]">
            Add Daily Progress
          </h1>
        </div>
      </div>
      <MaxWidthWrapper className="bg-[#eeeeee]">
        <div className="bg-[#eeeeee]">
          <main className="flex-grow   px-2 py-4 sm:p-6">
            <div className="space-y-4 mt-2 rounded-2xl p-4 bg-white">

              <div className="space-y-6">
<AttendanceForm/>

                {/* Section: Test Name */}
                <div className="  space-y-4">
                  <h2 className="text-md  rounded-2xl font-semibold text-gray-800 border bg-[#E5E7EB] px-4 py-4">
                    Test Name
                  </h2>

                  {students.map((student, index) => (
                    <StudentCard key={`test-${index}`} student={student} />
                  ))}
                </div>

                {/* Section: Quiz Name */}
                <div className="space-y-4 rounded-2xl">
                  <h2 className="text-md  rounded-2xl font-semibold text-gray-800 border bg-[#E5E7EB] px-4 py-4">
                    Quiz Name
                  </h2>

                  {students.map((student, index) => (
                    <StudentCard key={`quiz-${index}`} student={student} />
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-center gap-3">
                <button className="  bg-[#ff3366]/10 text-[#ff3366] px-6 py-2 rounded-full hover:bg-blue-600 transition-all">
                  Cancel
                </button>
                 <button className="bg-[#3366ff] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all">
                Update
                </button>
              </div>
            </div>
          </main>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </div>
  );
}

function StudentCard({ student }: { student: any }) {
  return (
    <div className="flex items-center justify-between bg-[#F9FAFB] px-2 py-2 rounded-2xl shadow-sm border border-[#B0B0B0]">
      <div className="flex items-center space-x-4">
        <Image
          src={student.image}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-md w-20 h-20"
        />
        <div>
          <p className="font-medium text-xl text-black">{student.name}</p>
          <p className="text-md text-[#6B7280]">{student.grade}</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter Marks"
        className="border  w-40 border-[#D5D5D5] px-4 py-2 bg-[#F9F5FB] rounded-full  text-md "
      />
    </div>
  );
}
