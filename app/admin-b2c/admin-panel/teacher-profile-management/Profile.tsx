'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiCalendar } from "react-icons/fi";


export default function TeacherProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const options = ['Option 1', 'Option 2'];
  return (
    <div className="bg-white rounded-3xl p-4 space-y-4">
      <h2 className="text-lg font-semibold text-[#ff3366] border bg-gray-100 rounded-2xl border-gray-200 py-3.5 px-2 text-center">Edit Teacher&apos;s Profile</h2>
      <h2 className="text-xl font-semibold text-gray-800 border-b-1 border-gray-200 pb-4">My Profile</h2>

      {/* Profile Image and Buttons */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 relative rounded-full overflow-hidden border">
          <Image
            src="/admin/usernav.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#3366ff] text-white hover:opacity-90">
            + Change Image
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border border-[#3366ff] text-gray-600 hover:bg-gray-100">
            Remove Image
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 items-center md:grid-cols-2 pb-6 border-b-1 border-gray-200 gap-4 md:gap-x-[4rem] gap-y-7">
        {/* First Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            defaultValue="Parth"
            className="w-full rounded-[12px] mt-2 border border-gray-200 px-4 py-2 text-sm bg-[#f9fafb]"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-[12px] mt-2 border border-gray-200 px-4 py-2 text-sm bg-[#f9fafb]"
          />
        </div>

        {/* City */}
        <div className="space-y-1 w-full">
          <label className="text-sm font-medium">City</label>

          <div className="bg-[#f9fafb] border border-gray-200 rounded-[12px] text-sm text-black mt-2">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span>Pune</span>
              <FaChevronDown
                className={`text-black text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                  }`}
              />
            </div>

            {/* Dropdown options */}
            {isOpen && (
              <div className="flex flex-col pb-2">
                {options.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => setIsOpen(false)} // Just closing dropdown
                    className="text-center text-gray-600 px-4 py-2 text-sm cursor-pointer transition hover:bg-gray-100"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* State */}
        <div className="space-y-1 w-full">
          <label className="text-sm font-medium">State</label>

          <div className="bg-[#f9fafb] border border-gray-200 rounded-[12px] text-sm text-black mt-2">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
              onClick={() => setIsStateOpen((prev) => !prev)}
            >
              <span>Maharastra</span>
              <FaChevronDown
                className={`text-black text-xs transition-transform duration-200 ${isStateOpen ? 'rotate-180' : ''
                  }`}
              />
            </div>

            {/* Dropdown options */}
            {isStateOpen && (
              <div className="flex flex-col pb-2">
                {options.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => setIsStateOpen(false)} // Just closing dropdown
                    className="text-center text-gray-600 px-4 py-2 text-sm cursor-pointer transition hover:bg-gray-100"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-1 w-full">
          <label className="text-sm font-medium">Gender</label>

          <div className="bg-[#f9fafb] border border-gray-200 rounded-[12px] text-sm text-black mt-2">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
              onClick={() => setIsGenderOpen((prev) => !prev)}
            >
              <span>Male</span>
              <FaChevronDown
                className={`text-black text-xs transition-transform duration-200 ${isGenderOpen ? 'rotate-180' : ''
                  }`}
              />
            </div>

            {/* Dropdown options */}
            {isGenderOpen && (
              <div className="flex flex-col pb-2">
                {options.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => setIsGenderOpen(false)} // Just closing dropdown
                    className="text-center text-gray-600 px-4 py-2 text-sm cursor-pointer transition hover:bg-gray-100"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* D.O.B */}
        <div className="space-y-1">
          <label className="text-sm font-medium">D.O.B.</label>
          <div className="relative">
            <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xs pointer-events-none" size={20}/>
            <input
              type="text"
              placeholder='DD / MM / YY'
              className="w-full rounded-[12px] mt-2 border border-gray-200 px-4 py-2 text-sm bg-[#f9fafb] pr-10 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
            />
          </div>

        </div>

        {/* Email */}
        <div className="col-span-1 md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center flex-wrap justify-between gap-4">
            <input
              type="email"
              defaultValue="example@gmail.com"
              className="flex-1 rounded-[12px] mt-2 md:max-w-md border border-gray-200 px-4 py-2 text-sm bg-[#f9fafb]"
            />
            <button
              type="button"
              className="whitespace-nowrap bg-[#3366ff] text-white text-sm px-4 py-2.5 rounded-full"
            >
              Change Email
            </button>
          </div>
        </div>

        {/* Contact Number */}
        <div className="col-span-1 md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Contact Number</label>
          <div className="flex items-center flex-wrap justify-between gap-4">
            <input
              type="text"
              defaultValue="+00 0000000000"
              className="flex-1 rounded-[12px] mt-2 border md:max-w-md border-gray-200 px-4 py-2 text-sm bg-[#f9fafb]"
            />
            <button
              type="button"
              className="whitespace-nowrap bg-[#3366ff] text-white text-sm px-4 py-2.5 rounded-full"
            >
              Change Number
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="col-span-1 md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Password</label>
          <div className="flex items-center flex-wrap justify-between gap-4">
            <input
              type="password"
              defaultValue="*********"
              className="flex-1 rounded-[12px] mt-2 border md:max-w-md border-gray-200 px-4 py-2 text-sm bg-[#f9fafb]"
            />
            <button
              type="button"
              className="whitespace-nowrap bg-[#3366ff] text-white text-sm px-4 py-2.5 rounded-full"
            >
              Change Password
            </button>
          </div>
        </div>
      </form>

      {/* Save Button */}
      <div>
        <Link href={"/admin-b2c/admin-panel/teacher-profile"}
          
          className="bg-[#3366ff] text-white px-8 py-2 text-sm rounded-full hover:opacity-90"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
