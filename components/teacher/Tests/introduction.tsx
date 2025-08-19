'use client';

import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

export default function TestIntroductionPage() {
    const loremIpsumText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>
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
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        {/* Test Title and Time */}
                        <div className="mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">English Test</h2>
                            <p className="text-sm text-blue-600 font-medium mt-1">Time :30 Minutes</p>
                        </div>

                        {/* Introduction Text */}
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <p>{loremIpsumText}</p>
                            <p>{loremIpsumText}</p>
                            <p>{loremIpsumText}</p>
                        </div>

                        {/* Next Button */}
                        <div className="mt-10 flex justify-end">
                            <button
                                onClick={() => console.log("Next button clicked")} // Replace with actual navigation or action
                                className="px-8 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}