/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Sidebar from '@/components/teacher/layout'; // Adjust import path as needed
import Image from 'next/image';
import { FiSearch, FiBell, FiChevronDown, FiFileText, FiUsers, FiBookOpen, FiBarChart, FiInfo } from 'react-icons/fi'; // Using react-icons
import Header from '@/components/teacher/header'; // Adjust import path as needed
// Sample Data (Replace with your actual data fetching)
const statData = [
    { title: 'Current Add Test', value: '20', icon: FiFileText, bgColor: 'bg-yellow-400' },
    { title: 'Current Add Pedagogy', value: '20', icon: FiBookOpen, bgColor: 'bg-yellow-400' },
    { title: 'Total Class', value: '10', icon: FiBarChart, bgColor: 'bg-yellow-400' },
    { title: 'Total Student', value: '3878', icon: FiUsers, bgColor: 'bg-yellow-400' },
];

const testData = Array(10).fill({
    name: 'English Test',
    class: '8th Grade A',
    date: '10-Jun-2025',
    time: '10:10PM to 10:30'
});

const pedagogyData = Array(5).fill({
    title: 'STEM Diploma in Technology Programs',
    price: '₹2,000.00 – ₹5,000.00',
    imgSrc: '/teacher/dashboard/pedagogy.png' // Replace with actual image path
});


export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-64 p-6 md:p-8">
                {/* Header */}
                <Header title="Bi-Weekly Test" subtitle="Dashboard" />

                {/* Stats Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statData.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.title} className={`${stat.bgColor} rounded-xl p-5 shadow-md text-gray-800 flex items-center gap-5`}>
                                <div className="bg-white/80 rounded-full p-3 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Main Content Sections */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* DMIT and Skill Test Section */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">DMIT AND SKILL TEST</h2>
                            <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                View All
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-600">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 rounded-t-lg">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Test Name</th>
                                        <th scope="col" className="px-4 py-3">Class</th>
                                        <th scope="col" className="px-4 py-3">Exam Date</th>
                                        <th scope="col" className="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testData.map((test, index) => (
                                        <tr key={index} className={`border-b border-gray-100 ${index % 2 !== 0 ? 'bg-blue-50/30' : 'bg-white'}`}>
                                            <td className="px-4 py-3 font-medium text-gray-900">{test.name}</td>
                                            <td className="px-4 py-3">{test.class}</td>
                                            <td className="px-4 py-3">
                                                {test.date} <br />
                                                <span className="text-xs text-gray-500">{test.time}</span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <button className="text-gray-500 hover:text-blue-600">
                                                    <FiInfo className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pedagogy Section */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">PEDAGOGY</h2>
                            <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                View All
                            </button>
                        </div>
                        <div className="space-y-4">
                            {pedagogyData.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-lg border border-gray-100 relative">
                                    <Image
                                        src={item.imgSrc} // Replace with actual image source
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-blue-700 mb-1">{item.title}</h3>
                                        <p className="text-xs text-gray-600">{item.price}</p>
                                    </div>
                                    <button className="absolute top-3 right-3 text-gray-500 hover:text-blue-600">
                                         <FiInfo className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}