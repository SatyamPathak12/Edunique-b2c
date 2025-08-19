'use client';

import { useState, Fragment } from 'react'; // Added Fragment
import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import {
    FiSearch, FiBell, FiChevronDown, FiUpload, FiFilter, FiInfo, FiX // Added FiX
} from 'react-icons/fi';

// --- Modal Component ---
const AddCommentModal = ({ isOpen, onClose, studentName, onSubmit }: { isOpen: boolean, onClose: () => void, studentName: string, onSubmit: (comment: string) => void }) => {
    const [comment, setComment] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSubmit(comment);
        setComment(''); // Clear comment after submit
        onClose();
    };

    return (
        // Backdrop
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 ease-in-out scale-100">
                {/* Modal Header */}
                <div className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Add comments</h2>
                    <button onClick={onClose} className="text-white hover:bg-pink-600 p-1 rounded-full">
                        <FiX className="w-5 h-5" />
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6">
                    <label htmlFor="studentComment" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Comments for {studentName}
                    </label>
                    <textarea
                        id="studentComment"
                        rows={5}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none shadow-sm"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full mt-6 bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Sample Data ---
interface StudentSubmission {
    id: number;
    avatarSrc: string;
    studentName: string;
    batch: string; // Changed from 'class' to 'batch' to match image header
    score: string;
    status: 'Pass' | 'Fail';
    // Add a field for comments if you want to store them per student
    // comments?: string;
}

const initialSubmissions: StudentSubmission[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    avatarSrc: `/placeholder-student-avatar.png`,
    studentName: 'Nguyen, Shane',
    batch: '8th Grade A', // Updated batch/class format
    score: i === 4 ? '20/100' : '80/100',
    status: i === 4 ? 'Fail' : 'Pass',
}));


export default function StudentSubmissionsPage() {
    const [submissions] = useState<StudentSubmission[]>(initialSubmissions);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<StudentSubmission | null>(null);

    const openCommentModal = (student: StudentSubmission) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const closeCommentModal = () => {
        setIsModalOpen(false);
        setSelectedStudent(null);
    };

    const handleCommentSubmit = (comment: string) => {
        if (selectedStudent) {
            console.log(`Comment for ${selectedStudent.studentName} (ID: ${selectedStudent.id}): ${comment}`);
            // Here, you would typically update the student's record with the comment,
            // possibly making an API call.
            // For this example, we'll just log it.
            // setSubmissions(prev => prev.map(s => s.id === selectedStudent.id ? {...s, comments: comment } : s));
        }
    };

    return (
        <Fragment> {/* Added Fragment for Modal */}
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />

                <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                    {/* Top Bar */}
                    <header className="bg-white shadow-sm sticky top-0 z-30">
                        <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800">Student Submitted this Test List</h1>
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
                        {/* Top Action Bar with Filters */}
                        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                                <div className="relative w-full sm:w-auto">
                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Search" className="pl-9 pr-3 py-2.5 w-full sm:w-48 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white" />
                                </div>
                                <div className="relative w-full sm:w-auto"> {/* Changed "Select Batch" to "Grade" to match image filter */}
                                    <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                        <option value="">Grade</option>
                                        <option value="8A">8th Grade A</option>
                                        <option value="8B">8th Grade B</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <div className="relative w-full sm:w-auto">
                                    <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                        <option value="">Status</option>
                                        <option value="Pass">Pass</option>
                                        <option value="Fail">Fail</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <button className="px-5 py-2.5 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                    <FiFilter className="w-4 h-4" />
                                    Filter
                                </button>
                            </div>
                            <button className="px-5 py-2.5 bg-yellow-400 text-gray-800 text-sm font-medium rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center">
                                <FiUpload className="w-4 h-4" />
                                Export
                            </button>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-lg shadow overflow-x-auto">
                            <table className="w-full min-w-[800px] text-sm"> {/* Increased min-width for Action column */}
                                <thead className="bg-blue-500/10 text-gray-600">
                                    <tr>
                                        {/* Updated "Batch" to "Class" */}
                                        {['Student name', 'Class', 'Score', 'Status', 'Action'].map(header => (
                                            <th key={header} scope="col" className={`px-4 py-3 text-left font-medium ${header === 'Status' || header === 'Action' ? 'text-center' : ''}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {submissions.map((item, index) => (
                                        <tr key={item.id} className={`${index % 2 !== 0 ? 'bg-blue-500/5' : 'bg-white'} hover:bg-gray-50`}>
                                            <td className="px-4 py-3 text-gray-800">
                                                <div className="flex items-center gap-3">
                                                    <Image src={item.avatarSrc} alt={item.studentName} width={32} height={32} className="rounded-full object-cover" />
                                                    <span className="font-medium">{item.studentName}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">{item.batch}</td>
                                            <td className="px-4 py-3 text-green-600 font-medium">{item.score}</td>
                                            <td className="px-4 py-3 text-center">
                                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${ item.status === 'Pass' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-red-100 text-red-700 border-red-300' }`}>
                                                    <span className={`w-2 h-2 rounded-full ${item.status === 'Pass' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    {item.status}
                                                    <FiChevronDown className="w-3 h-3 ml-1" />
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => openCommentModal(item)}
                                                    className="text-pink-500 hover:text-pink-700 p-1 border border-pink-300 rounded-full hover:bg-pink-50"
                                                    title="Add Comment"
                                                >
                                                    <FiInfo className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modal Invocation */}
            {selectedStudent && (
                <AddCommentModal
                    isOpen={isModalOpen}
                    onClose={closeCommentModal}
                    studentName={selectedStudent.studentName}
                    onSubmit={handleCommentSubmit}
                />
            )}
        </Fragment>
    );
}