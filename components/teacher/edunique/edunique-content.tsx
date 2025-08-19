'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; 
// import Image from 'next/image';
import {
    FiSearch, FiChevronDown, FiFilter, FiPlusCircle, FiMoreVertical
} from 'react-icons/fi';
import Link from 'next/link';
import Header from '../header';

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


// --- Sample Data ---
interface EduNiqueContentData {
    id: number;
    contentName: string;
    batch: string;
    createDate: string;
    createTime: string; // Added time part
    status: boolean; // true for active, false for inactive
}

const initialContentData: EduNiqueContentData[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    contentName: 'English Content',
    batch: '8th',
    createDate: '10-Jun-2025',
    createTime: '10:10PM', // Example time
    status: true, // Default to active
}));


export default function EduNiqueContentPage() {
    const [contentData, setContentData] = useState<EduNiqueContentData[]>(initialContentData);

    const addEduniquePath = "/teacher/edunique/add"

    const handleStatusToggle = (id: number, newStatus: boolean) => {
        setContentData(prevData =>
            prevData.map(item => (item.id === id ? { ...item, status: newStatus } : item))
        );
        console.log(`Content ID: ${id}, New Status: ${newStatus}`);
    };


    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64 p-6 md:p-8"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <Header title="EduNique Content" subtitle="Dashboard" />

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
                                    <option value="">Select Batch</option>
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                             <div className="relative w-full sm:w-auto">
                                <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                    <option value="">Select Grade</option>
                                    <option value="A">Grade A</option>
                                    <option value="B">Grade B</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <button className="px-5 py-2.5 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                <FiFilter className="w-4 h-4" />
                                Filter
                            </button>
                        </div>
                        <Link href={addEduniquePath}>
                        <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center">
                            <FiPlusCircle className="w-4 h-4" />
                            Add EduNique Content
                        </button>
                        </Link>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow overflow-x-auto">
                        <table className="w-full min-w-[700px] text-sm">
                            <thead className="bg-blue-500/10 text-gray-600">
                                <tr>
                                    {['Content Name', 'Batch', 'Create date', 'Status', 'Action'].map(header => (
                                        <th key={header} scope="col" className={`px-4 py-3 text-left font-medium ${header === 'Status' || header === 'Action' ? 'text-center' : ''}`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {contentData.map((item, index) => (
                                    <tr key={item.id} className={`${index % 2 !== 0 ? 'bg-blue-500/5' : 'bg-white'} hover:bg-gray-50`}>
                                        <td className="px-4 py-3 text-gray-800 font-medium">{item.contentName}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.batch}</td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {item.createDate} <span className="text-gray-400 text-xs">{item.createTime}</span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <ToggleSwitch enabled={item.status} setEnabled={(newStatus) => handleStatusToggle(item.id, newStatus)} />
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-pink-500 hover:text-pink-700 p-1 border border-pink-300 rounded-full hover:bg-pink-50" title="Actions">
                                                <FiMoreVertical className="w-4 h-4" />
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