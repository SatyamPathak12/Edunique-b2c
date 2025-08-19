'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import {
    FiSearch, FiBell, FiChevronDown, 
    FiCheckCircle, FiXCircle, FiChevronLeft, FiChevronRight, FiChevronsDown // Added icons
} from 'react-icons/fi';

// Custom Radio Button Component (visual only)
const CustomRadio = ({ checked, correct, incorrect }: { checked: boolean, correct?: boolean, incorrect?: boolean }) => {
    let bgColor = 'bg-white';
    let borderColor = 'border-gray-300';
    let iconColor = 'text-transparent'; // Hidden by default

    if (correct) {
        bgColor = 'bg-green-100';
        borderColor = 'border-green-400';
        iconColor = 'text-green-600';
    } else if (incorrect) {
        bgColor = 'bg-red-100';
        borderColor = 'border-red-400';
        iconColor = 'text-red-600';
    } else if (checked) { // Only if not marked correct/incorrect
        borderColor = 'border-blue-500'; // Example for selected but not yet graded
    }


    return (
        <div className={`w-5 h-5 rounded border-2 ${borderColor} ${bgColor} flex items-center justify-center flex-shrink-0`}>
            {correct && <FiCheckCircle className={`w-3.5 h-3.5 ${iconColor}`} />}
            {incorrect && <FiXCircle className={`w-3.5 h-3.5 ${iconColor}`} />}
            {!correct && !incorrect && checked && <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>}
        </div>
    );
};

// Number Input with Up/Down Arrows
const NumberInputStepper = ({ label, value, onChange, min = 0, max = 100 }: { label: string, value: number, onChange: (newValue: number) => void, min?: number, max?: number }) => {

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">{label}:</span>
            <div className="relative">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) onChange(Math.max(min, Math.min(max, val)));
                    }}
                    className="w-16 h-9 text-center border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min={min}
                    max={max}
                />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center">
                     <FiChevronsDown className="w-3.5 h-3.5 text-gray-500 cursor-pointer" onClick={(e: { stopPropagation: () => void; }) => { e.stopPropagation(); /* decide up or down or remove if not needed */}}/>
                </div>
            </div>
        </div>
    );
};


// --- Sample Data ---
const questionData = {
    id: 1,
    text: 'Which type of Programming does Python support?',
    options: [
        { id: 'A', text: 'Object-oriented programming', isSelected: false, isCorrect: false, isMarkedIncorrect: false },
        { id: 'B', text: 'Upsc Civil Services Assessmentination', isSelected: true, isCorrect: false, isMarkedIncorrect: true }, // Student's incorrect answer
        { id: 'C', text: 'Functional programming', isSelected: false, isCorrect: true, isMarkedIncorrect: false }, // Actual correct answer
        { id: 'D', text: 'All of the mentioned', isSelected: false, isCorrect: false, isMarkedIncorrect: false },
    ],
    correctAnswerPoints: 1,
};


export default function CheckAnswersPage() {
    // In a real app, you'd fetch questions, student answers, etc.
    const [currentQuestion] = useState(questionData);
    const [addedPoints, setAddedPoints] = useState(0);
    const [totalStudentScore, setTotalStudentScore] = useState(1); // Example score

   

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64 flex flex-col"> {/* ml-64 for sidebar, flex-col for footer */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Check Answers</h1>
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

                {/* Main Content Area - Scrollable */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-6">Questions</h2>

                        {/* Question Block */}
                        <div>
                            <p className="text-md font-medium text-gray-700 mb-5">
                                {currentQuestion.id}. {currentQuestion.text}
                            </p>
                            <div className="space-y-3">
                                {currentQuestion.options.map(option => {
                                    let optionBg = 'bg-white hover:bg-gray-50';
                                    let optionText = 'text-gray-700';
                                    if (option.isCorrect) {
                                        optionBg = 'bg-green-100 border-green-300';
                                        optionText = 'text-green-700';
                                    } else if (option.isMarkedIncorrect) {
                                        optionBg = 'bg-red-100 border-red-300';
                                        optionText = 'text-red-700';
                                    }

                                    return (
                                        <div
                                            key={option.id}
                                            // onClick={() => handleOptionClick(option.id)} // Potentially enable for re-grading
                                            className={`flex items-center p-3 border rounded-lg cursor-default transition-colors ${optionBg} border-gray-200`}
                                        >
                                            <span className={`mr-3 font-medium ${optionText}`}>{option.id}</span>
                                            <CustomRadio
                                                checked={option.isSelected}
                                                correct={option.isCorrect}
                                                incorrect={option.isMarkedIncorrect}
                                            />
                                            <span className={`ml-3 text-sm ${optionText}`}>{option.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Correct Answer Info & Add Points */}
                            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-md">
                                    Correct Answer : {currentQuestion.correctAnswerPoints} Point
                                </span>
                                <NumberInputStepper label="Add Point" value={addedPoints} onChange={setAddedPoints} min={0} max={currentQuestion.correctAnswerPoints} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <footer className="bg-white shadow-top p-4 border-t border-gray-200 sticky bottom-0 z-10">
                    <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <button className="px-6 py-2.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 w-full sm:w-auto">
                            Cancel & Close
                        </button>

                        <div className="flex items-center gap-3 sm:gap-6">
                            <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1.5 rounded-md">
                                Total Mark : 100
                            </span>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                    <FiChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                    <FiChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                             <NumberInputStepper label="Total Student Score" value={totalStudentScore} onChange={setTotalStudentScore} min={0} max={100} />
                        </div>

                        <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto">
                            Save & Next
                        </button>
                    </div>
                </footer>
            </main>
        </div>
    );
}