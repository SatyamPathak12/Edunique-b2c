'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import {
    FiSearch, FiBell, FiChevronDown, FiUsers, FiCheckCircle
} from 'react-icons/fi';

// --- Toggle Switch Component (Reused) ---
const ToggleSwitch = ({ enabled, setEnabled }: { enabled: boolean, setEnabled: (enabled: boolean) => void }) => {
    return (
        <button
            type="button"
            className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                enabled ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setEnabled(!enabled)}
            aria-pressed={enabled}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    enabled ? 'translate-x-4' : 'translate-x-0'
                }`}
            />
        </button>
    );
};


// --- Sample Data (for demonstration) ---
const testDetails = {
    testName: 'English Test',
    totalQuestions: 20,
    totalMark: 100,
    examDate: '10-Jun-2025',
    examTime: '10:10PM to 10:30PM',
    totalStudent: 2000,
    passStudents: 15,
    class: '8th',
    grade: 'A',
    isActive: true, // For the toggle switch
};


export default function MonitorTestPage() {
    const [isTestActive, setIsTestActive] = useState(testDetails.isActive);
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(true); // For the expand/collapse


    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Monitor Test</h1>
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
                    {/* Test Details Section */}
                    <div className="bg-white rounded-xl shadow-lg mb-8">
                        {/* Header with Toggle and Expand/Collapse */}
                        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">{testDetails.testName}</h2>
                            <div className="flex items-center gap-4">
                                <ToggleSwitch enabled={isTestActive} setEnabled={setIsTestActive} />
                                <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="text-gray-500 hover:text-blue-600">
                                    <FiChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDetailsExpanded ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>

                        {/* Collapsible Details */}
                        {isDetailsExpanded && (
                            <div className="p-4 md:p-6 space-y-6">
                                {/* Test Info Bar */}
                                <div className="flex flex-wrap gap-3 text-sm">
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md">Total Questions : {testDetails.totalQuestions}</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md">Total Mark : {testDetails.totalMark}</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md">Exam Date : {testDetails.examDate}   {testDetails.examTime}</span>
                                </div>

                                {/* Stats Cards & Class/Grade Info */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                    {/* Stats Cards (Col Span 2) */}
                                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 rounded-lg p-5 flex items-center justify-between shadow">
                                            <div>
                                                <p className="text-sm text-gray-500">Total Student</p>
                                                <p className="text-3xl font-bold text-gray-800">{testDetails.totalStudent}</p>
                                            </div>
                                            <div className="bg-blue-100 p-3 rounded-full">
                                                <FiUsers className="w-6 h-6 text-blue-500" />
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-5 flex items-center justify-between shadow">
                                            <div>
                                                <p className="text-sm text-gray-500">Pass Students</p>
                                                <p className="text-3xl font-bold text-gray-800">{testDetails.passStudents}</p>
                                            </div>
                                            <div className="bg-green-100 p-3 rounded-full">
                                                <FiCheckCircle className="w-6 h-6 text-green-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Class/Grade Card (Col Span 1) */}
                                    <div className="bg-gray-50 rounded-lg p-5 shadow">
                                        <div className="mb-3">
                                            <p className="text-sm text-gray-500">Class</p>
                                            <p className="text-xl font-semibold text-gray-800">{testDetails.class}</p>
                                        </div>
                                        <hr className="my-2 border-gray-200" />
                                        <div>
                                            <p className="text-sm text-gray-500">Grade</p>
                                            <p className="text-xl font-semibold text-gray-800">{testDetails.grade}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                    {/* Action Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Student Submitted this Test List', buttonText: 'View List', action: () => console.log('View List Clicked') },
                            { title: 'Edit Test', buttonText: 'Edit', action: () => console.log('Edit Clicked') },
                            { title: 'View Test', buttonText: 'View', action: () => console.log('View Clicked') },
                        ].map((card, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <p className="text-md font-medium text-gray-700 mb-4">{card.title}</p>
                                <button
                                    onClick={card.action}
                                    className="w-full max-w-[150px] bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                >
                                    {card.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}