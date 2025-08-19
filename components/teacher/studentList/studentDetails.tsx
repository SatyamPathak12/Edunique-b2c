'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import {
    FiSearch, FiBell, FiChevronDown, FiUpload // Assuming FiUpload for export
} from 'react-icons/fi';

// --- Detail Item Component (from previous Profile tab) ---
const DetailItem = ({ label, value, fullWidth = false }: { label: string, value: string | React.ReactNode, fullWidth?: boolean }) => (
    <div className={`flex flex-col ${fullWidth ? 'md:col-span-3' : ''}`}>
        <span className="text-xs text-gray-500 mb-0.5">{label}</span>
        <div className="bg-blue-500/10 text-gray-700 px-4 py-3 rounded-md text-sm">
            {value}
        </div>
    </div>
);

// --- Progress Bar Component ---
const ProgressBar = ({ label, percentage }: { label: string, percentage: number }) => (
    <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            {/* Optional: Display percentage text next to bar if needed */}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="bg-green-500 h-2.5 rounded-full flex items-center justify-end pr-1.5"
                style={{ width: `${percentage}%` }}
            >
                 <span className="text-xs font-medium text-white">{percentage}%</span>
            </div>
        </div>
    </div>
);

// --- Sample Data for Analyst Tab ---
const dmitSkillResults = {
    date: '10 March 2025',
    totalMark: 50,
    strengths: [
        { name: 'Creativity (%)', value: 80 },
        { name: 'Logic (%)', value: 60 },
        { name: 'Leave3 (%)', value: 60 }, // Placeholder names
        { name: 'Leave4 (%)', value: 60 },
        { name: 'Leave5 (%)', value: 60 },
    ],
    summary: {
        totalQus: 50,
        attempted: 40,
        right: 30,
        wrong: 10,
    },
};

interface BiWeeklyTestEntry {
    id: number;
    testName: string;
    batch: string;
    dateFrom: string;
    dateTo: string;
    score: string;
    status: 'Pass' | 'Fail';
}

const biWeeklyTestData: BiWeeklyTestEntry[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    testName: 'English Test',
    batch: '8th Grade A',
    dateFrom: i % 2 === 0 ? '10-03-2025' : '17-03-2025',
    dateTo: '04/07/2025 04:30 pm',
    score: '80/100',
    status: 'Pass',
}));

const studentProfileData = { // From previous Profile tab
    avatarSrc: '/placeholder-student-profile.png',
    studentName: 'Jane Cooper',
    emailAddress: 'jane@gamil.com',
    contactNumber: '+91 ▼ 9876543210',
    classNum: '8th',
    gender: 'Male',
    dob: '15-may-2007',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    pincode: '302028',
};


export default function StudentDetailsPage() {
    const [activeTab, setActiveTab] = useState<'Profile' | 'Analyst'>('Analyst'); // Default to Analyst

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Student Details</h1>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative hidden sm:block">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative"> <FiBell className="w-5 h-5" /> </button>
                            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
                                <Image src="/placeholder-avatar.jpg" alt="User Avatar" width={28} height={28} className="rounded-full" />
                                <div className="hidden md:block"> <p className="text-xs font-medium text-gray-800">Robert Allen</p> <p className="text-xs text-gray-500">Teacher</p> </div>
                                <FiChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    <div className="mb-6 flex justify-end">
                        <button className="px-5 py-2.5 bg-yellow-400 text-gray-800 text-sm font-medium rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 flex items-center gap-2">
                            <FiUpload className="w-4 h-4" />
                            Export
                        </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <div className="border-b border-gray-200 mb-8">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                {['Profile', 'Analyst'].map((tabName) => (
                                    <button
                                        key={tabName}
                                        onClick={() => setActiveTab(tabName as 'Profile' | 'Analyst')}
                                        className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm focus:outline-none ${
                                            activeTab === tabName
                                                ? 'border-pink-500 text-pink-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        {tabName}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {activeTab === 'Profile' && (
                            <div>
                                <div className="flex flex-col items-center mb-8">
                                    <Image
                                        src={studentProfileData.avatarSrc}
                                        alt={studentProfileData.studentName}
                                        width={100}
                                        height={100}
                                        className="rounded-full object-cover shadow-md mb-4"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
                                    <DetailItem label="Student Name" value={studentProfileData.studentName} />
                                    <DetailItem label="Email Address" value={studentProfileData.emailAddress} />
                                    <DetailItem label="Contact Number" value={studentProfileData.contactNumber} />
                                    <DetailItem label="Class" value={studentProfileData.classNum} />
                                    <DetailItem label="Gender" value={studentProfileData.gender} />
                                    <DetailItem label="DOB" value={studentProfileData.dob} />
                                    <DetailItem label="City" value={studentProfileData.city} />
                                    <DetailItem label="State" value={studentProfileData.state} />
                                    <DetailItem label="Country" value={studentProfileData.country} />
                                    <DetailItem label="Pincode" value={studentProfileData.pincode} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'Analyst' && (
                            <div className="space-y-10">
                                {/* DMIT & Skill Test Results Section */}
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">DMIT & Skill Test Results</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                        {/* Left Column: Date & Total Mark */}
                                        <div className="space-y-6 md:col-span-1">
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                                <p className="text-xs text-gray-500 mb-1">Date</p>
                                                <p className="text-md font-semibold text-gray-700">{dmitSkillResults.date}</p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                                <p className="text-xs text-gray-500 mb-1">Total Mark</p>
                                                <p className="text-md font-semibold text-gray-700">{dmitSkillResults.totalMark}</p>
                                            </div>
                                        </div>

                                        {/* Middle Column: Strengths & Weaknesses */}
                                        <div className="md:col-span-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                            <h3 className="text-md font-semibold text-gray-700 mb-4">Strengths & Weaknesses</h3>
                                            {dmitSkillResults.strengths.map((item) => (
                                                <ProgressBar key={item.name} label={item.name} percentage={item.value} />
                                            ))}
                                        </div>

                                        {/* Right Column: Summary Stats */}
                                        <div className="space-y-3 md:col-span-1">
                                            {[
                                                { label: 'Total Qus.', value: dmitSkillResults.summary.totalQus, color: 'text-blue-600' },
                                                { label: 'Attempted', value: dmitSkillResults.summary.attempted, color: 'text-purple-600' },
                                                { label: 'Right', value: dmitSkillResults.summary.right, color: 'text-green-600' },
                                                { label: 'Wrong', value: dmitSkillResults.summary.wrong, color: 'text-red-600' },
                                            ].map(stat => (
                                                <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bi-Weekly Test Section */}
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Bi-Weekly Test</h2>
                                    <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-200">
                                        <table className="w-full min-w-[800px] text-sm">
                                            <thead className="bg-blue-500/10 text-gray-600">
                                                <tr>
                                                    {['Test Name', 'Batch', 'Date From', 'Date To', 'Score', 'Status'].map(header => (
                                                        <th key={header} scope="col" className={`px-4 py-3 text-left font-medium ${header === 'Status' ? 'text-center' : ''}`}>
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {biWeeklyTestData.map((item, index) => (
                                                    <tr key={item.id} className={`${index % 2 !== 0 ? 'bg-blue-500/5' : ''} hover:bg-gray-50/50`}>
                                                        <td className="px-4 py-3 text-gray-800 font-medium">{item.testName}</td>
                                                        <td className="px-4 py-3 text-gray-600">{item.batch}</td>
                                                        <td className="px-4 py-3 text-gray-600">{item.dateFrom}</td>
                                                        <td className="px-4 py-3 text-gray-600">{item.dateTo}</td>
                                                        <td className="px-4 py-3 text-green-600 font-medium">{item.score}</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                                                                item.status === 'Pass'
                                                                    ? 'bg-green-100 text-green-700 border-green-300'
                                                                    : 'bg-red-100 text-red-700 border-red-300'
                                                            }`}>
                                                                <span className={`w-2 h-2 rounded-full ${item.status === 'Pass' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                                {item.status}
                                                                <FiChevronDown className="w-3 h-3 ml-1" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}