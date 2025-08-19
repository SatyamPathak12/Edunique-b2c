'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; 
// import Image from 'next/image';
import {
    FiSearch, FiChevronDown, FiUpload, FiFilter, FiMoreVertical
} from 'react-icons/fi';
import Header from '../header';

// --- Toggle Switch Component ---
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


// --- Sample Data ---
interface TestData {
    id: number;
    testName: string;
    batch: string;
    totalQus: number;
    totalMark: number;
    examDate: string;
    time: string;
    status: boolean; // true for active, false for inactive
}

const initialTestData: TestData[] = [
    { id: 1, testName: 'English Test', batch: '8th', totalQus: 20, totalMark: 100, examDate: '10-Jun-2025', time: '0h 30m 0s', status: true },
    { id: 2, testName: 'Math Test', batch: '8th', totalQus: 25, totalMark: 100, examDate: '12-Jun-2025', time: '0h 45m 0s', status: false },
    { id: 3, testName: 'Science Test', batch: '9th', totalQus: 30, totalMark: 100, examDate: '15-Jun-2025', time: '1h 00m 0s', status: false },
    { id: 4, testName: 'History Test', batch: '8th', totalQus: 20, totalMark: 50, examDate: '17-Jun-2025', time: '0h 30m 0s', status: true },
    { id: 5, testName: 'Geography Test', batch: '9th', totalQus: 15, totalMark: 50, examDate: '19-Jun-2025', time: '0h 25m 0s', status: true },
    { id: 6, testName: 'Physics Test', batch: '10th', totalQus: 30, totalMark: 100, examDate: '22-Jun-2025', time: '1h 15m 0s', status: true },
    { id: 7, testName: 'Chemistry Test', batch: '10th', totalQus: 25, totalMark: 75, examDate: '24-Jun-2025', time: '1h 00m 0s', status: false },
    { id: 8, testName: 'Biology Test', batch: '10th', totalQus: 20, totalMark: 75, examDate: '26-Jun-2025', time: '0h 45m 0s', status: false },
];


export default function TeacherBiWeeklyTestPage() {
    const [testData, setTestData] = useState<TestData[]>(initialTestData);

    const handleStatusToggle = (id: number, newStatus: boolean) => {
        setTestData(prevData =>
            prevData.map(item => (item.id === id ? { ...item, status: newStatus } : item))
        );
        // Here you would typically also make an API call to update the status on the server
        console.log(`Test ID: ${id}, New Status: ${newStatus}`);
    };


    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64 p-6 md:p-8"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <Header title="Bi-Weekly Test" subtitle="Dashboard" />

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    {/* Top Action Bar with Filters */}
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                            <div className="relative w-full sm:w-auto">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search" className="pl-9 pr-3 py-2.5 w-full sm:w-48 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white" />
                            </div>
                            <div className="relative w-full sm:w-auto">
                                <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                    <option value="">Select Class</option>
                                    {/* Add class options here */}
                                    <option value="8">8th</option>
                                    <option value="9">9th</option>
                                    <option value="10">10th</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="relative w-full sm:w-auto">
                                <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                    <option value="">Select Batch</option>
                                    {/* Add batch options here */}
                                    <option value="A">Batch A</option>
                                    <option value="B">Batch B</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <button className="px-5 py-2.5 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                <FiFilter className="w-4 h-4" />
                                Filter
                            </button>
                        </div>
                        <button className="px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center">
                            <FiUpload className="w-4 h-4" />
                            CSV File Upload
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow overflow-x-auto">
                        <table className="w-full min-w-[800px] text-sm">
                            <thead className="bg-blue-500/10 text-gray-600">
                                <tr>
                                    {['Test Name', 'Batch', 'Total Qus.', 'Total Mark', 'Exam Date', 'Time', 'Status', 'Action'].map(header => (
                                        <th key={header} scope="col" className="px-4 py-3 text-left font-medium">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {testData.map((item, index) => (
                                    <tr key={item.id} className={`${index % 2 !== 0 ? 'bg-blue-500/5' : 'bg-white'} hover:bg-gray-50`}>
                                        <td className="px-4 py-3 text-gray-800 font-medium">{item.testName}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.batch}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.totalQus}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.totalMark}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.examDate}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.time}</td>
                                        <td className="px-4 py-3">
                                            <ToggleSwitch enabled={item.status} setEnabled={(newStatus) => handleStatusToggle(item.id, newStatus)} />
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-pink-500 hover:text-pink-700 p-1">
                                                <FiMoreVertical className="w-5 h-5" /> {/* Using MoreVertical for "i" in circle concept */}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     {/* Optional: Pagination could go here */}
                </div>
            </main>
        </div>
    );
}