"use client";

import React from 'react';
import Image from 'next/image';

// --- Data Interfaces (as you provided) ---
interface LoginHistoryEntry {
    id: number;
    loginDate: string;
    loginTime: string;
    ipAddress: string;
    device: string;
    stateCity: string;
    status: 'Success' | 'Fail';
}

interface TeacherProfile {
    name: string;
    avatarSrc: string;
    tags: string[];
    details: { label: string; value: string }[];
}

// --- Sample Data (as you provided) ---
const teacherProfileData: TeacherProfile = {
    name: "Teacher Name",
    avatarSrc: "/teacher-b2b/profile2.png",
    tags: ["Batch Assigned", "Part-time"],
    details: [
        { label: "City", value: "Mumbai" },
        { label: "State", value: "Maharashtra" },
        { label: "Gender", value: "Male" },
        { label: "DOB", value: "15 Jun 2015" },
        { label: "Email", value: "example@gmail.com" },
    ]
};

const loginHistoryData: LoginHistoryEntry[] = [
    { id: 1, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Fail" },
    { id: 2, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
    { id: 3, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
    { id: 4, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Fail" },
    { id: 5, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Fail" },
    { id: 6, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Fail" },
    { id: 7, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
    { id: 8, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
    { id: 9, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Fail" },
    { id: 10, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
    { id: 11, loginDate: "12/10/25", loginTime: "10:12 AM", ipAddress: "192.168.1.23", device: "Device Name", stateCity: "State / City", status: "Success" },
];

// --- Your Final Component with Responsiveness ---
type ActivityProps = {
  isStudent?: boolean;
};

const Activity: React.FC<ActivityProps> = ({ isStudent = false }) => {
    const tableHeaders = ["Login Date", "Login Time", "IP Address", "Device", "State / City", "Status"];

    return (
        // Main wrapper for the page content, responsive padding.
        <div className="bg-[#eeeeee] p-2 sm:p-4 md:p-6 space-y-4">
            {/* Header Card */}
            <div className="p-3 rounded-2xl w-full max-w-screen-xl mx-auto border border-gray-200 overflow-hidden"
                style={{ backgroundImage: "url('/pattern.png')", backgroundSize: "1200px" }}
            >
                <div className="bg-white rounded-2xl px-4 py-2 relative overflow-hidden">
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
                            <Image
                                src={teacherProfileData.avatarSrc}
                                alt={teacherProfileData.name}
                                width={80} height={80}
                                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white flex-shrink-0"
                            />
                            <div className="text-center sm:text-left space-y-2">
                                <h2 className="text-lg sm:text-2xl font-semibold text-black">{isStudent ? "Student Name" : teacherProfileData.name}</h2>
                                <div className="flex text-nowrap gap-1 justify-center sm:justify-start">
                                    <span className="text-[10px] sm:text-xs font-medium px-3 py-2 rounded-l-full bg-[#FF3366] text-white">
                                        {isStudent ? "Course Name" : "Batch Assigned"}
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-medium px-3 py-2 rounded-r-full bg-[#FF3366] text-white">
                                        {isStudent ? "Course Name" : "Part-Time"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Details section now stacks on mobile and aligns properly on desktop */}
                        <div className='flex flex-col gap-2 md:flex-row md:items-center sm:gap-6'>
                            <div className="w-full md:w-fit grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-x-6 gap-y-1 text-xs md:text-sm text-black pt-1.5 md:pt-0 border-t md:border-none border-gray-200">
                                <div className="flex flex-row justify-start gap-1 md:gap-1.5">
                                    <span className="font-semibold">City:</span>
                                    <span className="text-black">Mumbai</span>
                                </div>
                                <div className="flex flex-row justify-start gap-1 md:gap-1.5">
                                    <span className="font-semibold">State:</span>
                                    <span className="text-black">Maharashtra</span>
                                </div>
                            </div>
                            <div className="w-full md:w-fit grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-x-6 gap-y-1 text-xs md:text-sm text-black pt-1.5 md:pt-0 border-t md:border-none border-gray-200">
                                <div className="flex flex-row justify-start gap-1 md:gap-1.5">
                                    <span className="font-semibold">Gender:</span>
                                    <span className="text-black">Male</span>
                                </div>
                                <div className="flex flex-row justify-start gap-1 md:gap-1.5">
                                    <span className="font-semibold">DOB:</span>
                                    <span className="text-black">15 Jun 2015</span>
                                </div>
                                <div className="flex flex-row justify-center md:justify-start col-span-2 md:col-span-1 items-center md:gap-1.5">
                                    <span className="font-semibold">email:</span>
                                    <span className="text-black">example@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Card */}
            {/* The outer div handles horizontal scrolling on smaller screens */}
            <div className="overflow-x-auto  bg-white p-3 rounded-2xl w-full max-w-screen-xl mx-auto border border-gray-200 ">
                {/* The inner div has a minimum width to force scrolling */}
                <div className="space-y-2 min-w-[700px]">
                    {/* Header Row */}
                    <div className="grid grid-cols-6 gap-x-2 sm:gap-x-4 px-2 sm:px-3 py-5 rounded-2xl bg-[#3366FF] text-white text-xs sm:text-sm font-semibold tracking-wide">
                        {tableHeaders.map(header => (
                            <div key={header} className="text-center">
                                {header}
                            </div>
                        ))}
                    </div>

                    {/* Data Rows */}
                    {loginHistoryData.map(entry => (
                        <div
                            key={entry.id}
                            className="grid grid-cols-6 gap-x-2 sm:gap-x-4 p-2 sm:p-3 rounded-xl text-center bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-gray-200 transition-colors text-xs md:text-sm items-center"
                        >
                            <div className="text-black">{entry.loginDate}</div>
                            <div className="text-black">{entry.loginTime}</div>
                            <div className="text-black">{entry.ipAddress}</div>
                            <div className="text-black">{entry.device}</div>
                            <div className="text-black">{entry.stateCity}</div>
                            <div className={`${entry.status === 'Success' ? 'text-[#28A745]' : 'text-[#DC3545]'}`}>
                                {entry.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;