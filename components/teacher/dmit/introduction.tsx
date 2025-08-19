'use client';

import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import Header from '@/components/teacher/header'; // Adjust import path as needed
export default function DmtiIntroductionPage() {
    const descriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

           <main className="flex-1 ml-64 p-6 md:p-8">
                {/* Top Bar */}
                <Header title="Introduction" subtitle="Dashboard" />

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
                        {/* Illustration */}
                        <div className="mb-8 max-w-sm"> {/* Limit width of image container */}
                             <Image
                                src="/placeholder-dmit-illustration.png" // <-- REPLACE WITH YOUR ILLUSTRATION PATH
                                alt="DMIT Test Illustration"
                                width={500} // Adjust based on your image aspect ratio
                                height={350}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 max-w-xl">
                            5-level DMIT (Dermatoglyphics Multiple Intelligence Test) and skill assessment
                        </h1>

                        {/* Description */}
                         <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-xl">
                            {descriptionText}
                        </p>

                        {/* Summary Badges */}
                        <div className="flex flex-wrap justify-center gap-3 text-sm mb-10">
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Total Questions : 100</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Total Mark : 100</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Time : 0h:30m :10s</span>
                        </div>

                        {/* Next Button */}
                        <div className="w-full flex justify-end">
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