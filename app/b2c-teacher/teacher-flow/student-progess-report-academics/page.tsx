// /app/your-page-path/page.tsx
"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

// --- UPDATED DATA STRUCTURES & DATA for "Academics" page ---

interface FeedbackOption {
    id: string; // e.g., 'q1_opt1'
    text: string;
}

interface FeedbackQuestion {
    id: string;
    number: number;
    text: string;
    options: FeedbackOption[]; // Each question now has its own specific options
}

const tabData = ["Student Engagement", "Attitude", "Academics", "Exams"];

const questions: FeedbackQuestion[] = [
    {
        id: 'q1',
        number: 1,
        text: 'Meets Academic Outcomes',
        options: [
            { id: 'q1_opt1', text: 'rarely meets deadlines' },
            { id: 'q1_opt2', text: 'sometimes meets deadlines' },
            { id: 'q1_opt3', text: 'generally meets deadlines' },
            { id: 'q1_opt4', text: 'consistently meets deadlines' },
        ]
    },
    {
        id: 'q2',
        number: 2,
        text: 'Quality',
        options: [
            { id: 'q2_opt1', text: 'little care and pride is taken in work submitted for evaluation' },
            { id: 'q2_opt2', text: 'some care and pride is taken in work submitted for evaluation' },
            { id: 'q2_opt3', text: 'general care and pride is taken in work submitted for evaluation' },
            { id: 'q2_opt4', text: 'Great care and pride is taken in work submitted for evaluation' },
        ]
    },
    {
        id: 'q3',
        number: 3,
        text: 'Demonstrates understanding of key terms',
        options: [
            { id: 'q3_opt1', text: 'rarely demonstrates an understanding of key concepts' },
            { id: 'q3_opt2', text: 'sometimes demonstrates an understanding of key concepts' },
            { id: 'q3_opt3', text: 'generally demonstrates an understanding of key concepts' },
            { id: 'q3_opt4', text: 'consistently demonstrates an understanding of key concepts' },
        ]
    },
    {
        id: 'q4',
        number: 4,
        text: 'Applies knowledge and understanding to new concepts',
        options: [
            { id: 'q4_opt1', text: 'rarely applies knowledge and understanding to new concepts' },
            { id: 'q4_opt2', text: 'sometimes applies knowledge and understanding to new concepts' },
            { id: 'q4_opt3', text: 'generally applies knowledge and understanding to new concepts' },
            { id: 'q4_opt4', text: 'consistently applies knowledge and understanding to new concepts' },
        ]
    },
];

const ratingHeaders = ["Not Yet", "Occasionally", "Frequently", "Consistently"];

// --- Reusable UI Sub-Components ---

const TopTabs: React.FC<{ activeTab: string; onTabChange: (tab: string) => void }> = ({ activeTab, onTabChange }) => (
    <div className="flex justify-center items-center gap-2 mb-6 p-1.5 bg-white rounded-2xl">
        {tabData.map(tab => (
            <button key={tab} onClick={() => onTabChange(tab)} className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${activeTab === tab ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-gray-200'}`}>
                {tab}
            </button>
        ))}
    </div>
);

// UPDATED: This component now iterates over the options provided by the question object
const FeedbackRow: React.FC<{ question: FeedbackQuestion; selectedValue: string | undefined; onSelect: (optionId: string) => void; }> = ({ question, selectedValue, onSelect }) => (
    <>
        {/* Question Cell */}
        <div className="p-4 flex items-center bg-[#F9FAFB] rounded-2xl">
            <p className="font-semibold text-black text-sm text-center w-full">{question.number}. {question.text}</p>
        </div>

        {/* Option Cells */}
        {question.options.map((option) => (
            <div key={option.id} className="p-4 flex items-center bg-[#F9FAFB] rounded-2xl">
                <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative flex items-center justify-center w-5 h-5">
                        <input type="radio" name={question.id} value={option.id} checked={selectedValue === option.id} onChange={() => onSelect(option.id)} className="sr-only" />
                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${selectedValue === option.id ? 'border-[#3366FF] bg-white' : 'border-gray-300 bg-gray-100'}`}></div>
                        {selectedValue === option.id && <div className="absolute w-3 h-3 bg-[#3366FF] rounded-full"></div>}
                    </div>
                    <span className="text-sm text-black">{option.text}</span>
                </label>
            </div>
        ))}
    </>
);


function AcademicFeedbackPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleSelect = (questionId: string, optionId: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    };

    return (

        <div className="bg-white rounded-2xl p-4 ">
            <div className="py-3 px-4 bg-[#B0B0B014] rounded-2xl mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-[#3366FF]">Academics</h1>
            </div>
            <div className="overflow-x-auto custom-scrollbar-thin">
                <div className="grid grid-cols-5 gap-x-4 gap-y-4 min-w-[900px]">
                    <div className="p-4 rounded-xl bg-[#8DD9B3] font-bold text-black text-sm text-center">Academics</div>
                    {ratingHeaders.map(header => <div key={header} className="p-4 rounded-xl bg-[#8DD9B3] font-bold text-black text-sm text-center">{header}</div>)}

                    {questions.map((question) => (
                        <React.Fragment key={question.id}>
                            <FeedbackRow
                                question={question}
                                selectedValue={answers[question.id]}
                                onSelect={(optionId) => handleSelect(question.id, optionId)}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button className="bg-[#3366FF] text-white font-semibold text-lg px-12 py-3 rounded-full hover:bg-blue-700 transition-colors hover:shadow-xl">
                    Continue
                </button>
            </div>
        </div>

    );
}

// --- Main Page Component (Wrapper) ---
export default function AcademicsReport() {

    return (
        <>
            <AcademicFeedbackPage />

        </>
    );
}