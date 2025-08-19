"use client";
import { CiPower } from "react-icons/ci";
import { LuMonitor } from "react-icons/lu";
import Link from "next/link";
const TeacherControlPanel = () => {
  return (
    <div className="bg-[#faf9fb]  max-w-[90rem] mx-4  sm:mx-auto mt-4 p-4 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Teacher Control Panel</h2>
      <div className="flex flex-wrap gap-4">
        <Link href="./payload-management" passHref>
          <button className="flex items-center gap-2  cursor-pointer border border-[#e5e7eb] px-4 py-2 rounded-xl text-sm bg-[#faf9fb] hover:bg-[#f0f0f0] transition">
            <LuMonitor className="text-[#6b7280] w-5 h-5" />
            Payload Management/Edit Working Hours
          </button>
        </Link>
        <Link href="./teacher-profile-management" passHref>
        <button className="flex items-center  cursor-pointer gap-2 border  border-[#e5e7eb] px-4 py-2 rounded-xl text-sm  bg-[#faf9fb]">
          <CiPower className="text-[#6b7280] w-5 h-6" />
          Profile Management
        </button>
       </Link>
      </div>
    </div>
  );
};

export default TeacherControlPanel;
