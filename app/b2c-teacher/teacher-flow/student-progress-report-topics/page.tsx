// /app/your-page-path/page.tsx
"use client";

import BackButton from "@/components/common-components/BackButton";
import TabSwitch from "@/components/common-components/TabSwitch";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/TeacherB2CHeader";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Attitude from "../student-progress-report-attitude/page";
import StudentAtitude from "@/components/teacher-b2c/attitude";
import ExamReport from "@/components/teacher-b2c/exams-report";
import AcademicsReport from "../student-progess-report-academics/page";

// --- NEW, UPDATED DATA STRUCTURES & DATA ---

interface FeedbackOption {
    id: string;
    text: string;
}

interface QuestionOptions {
    emerging: FeedbackOption[];
    developing: FeedbackOption[];
    established: FeedbackOption[];
}

interface FeedbackQuestion {
    id: string;
    number: number;
    text: string;
    options: QuestionOptions;
}

const tabData = ["Student Engagement", "Attitude", "Academics", "Exams"];

const questions: FeedbackQuestion[] = [
    {
        id: 'q1',
        number: 1,
        text: 'Attendance & Punctuality',
        options: {
            emerging: [
                { id: 'q1e1', text: 'sometimes on time' },
                { id: 'q1e2', text: 'sometimes attends' },
                { id: 'q1e3', text: 'generally on time' },
                { id: 'q1e4', text: 'generally attends class' },
            ],
            developing: [
                { id: 'q1d1', text: 'consistently on time' },
                { id: 'q1d2', text: 'consistently attends' },
            ],
            established: [
                { id: 'q1s1', text: 'always on time' },
                { id: 'q1s2', text: 'always attends class' },
            ],
        }
    },
    {
        id: 'q2',
        number: 2,
        text: 'Preparation for class',
        options: {
            emerging: [
                { id: 'q2e1', text: 'rarely ready to learn' },
                { id: 'q2e2', text: 'rarely brings materials required for class (binders, books, pens, etc.)' },
                { id: 'q2e3', text: 'sometimes ready to learn' },
                { id: 'q2e4', text: 'sometimes brings materials required for class(binders, books, pens, etc.)' },
            ],
            developing: [
                { id: 'q2d1', text: 'generally ready to learn' },
                { id: 'q2d2', text: 'generally brings all materials required for class (binders, books, pens, etc.)' },
            ],
            established: [
                { id: 'q2s1', text: 'consistently ready to learn' },
                { id: 'q2s2', text: 'consistently brings all materials required for class (binders, books, pens, etc.)' },
            ],
        }
    },
    {
        id: 'q3',
        number: 3,
        text: 'Homework completion',
        options: {
            emerging: [
                { id: 'q3e1', text: 'rarely completes homework' },
                { id: 'q3e2', text: 'sometimes completes homework' },
            ],
            developing: [
                { id: 'q3d1', text: 'generally completes homework' },
            ],
            established: [
                { id: 'q3s1', text: 'consistently completes homework' },
            ],
        }
    },
    {
        id: 'q4',
        number: 4,
        text: 'In-class time on task, work ethic &participation; Shows a willingness to question, to discuss and take risk',
        options: {
            emerging: [
                { id: 'q4e1', text: 'rarely attentive to and during instruction' },
                { id: 'q4e2', text: 'rarely participates or frequently disrupts class activity' },
                { id: 'q4e3', text: 'frequently distracted, attending to other agendas, off-task' },
                { id: 'q4e4', text: 'Rarely attends study period' },
                { id: 'q4e5', text: 'sometimes attentive to and during instruction' },
                { id: 'q4e6', text: 'sometimes participates or disrupts class activity' },
                { id: 'q4e7', text: 'sometimes distracted, attending to other agendas, off-task' },
                { id: 'q4e8', text: 'Sometimes attends study periods' },
            ],
            developing: [
                { id: 'q4d1', text: 'generally attentive to and during instruction' },
                { id: 'q4d2', text: 'generally participates, most often appropriately' },
                { id: 'q4d3', text: 'generally uses class time effectively to attend to work' },
                { id: 'q4d4', text: 'Often attends study period for additional help' },
            ],
            established: [
                { id: 'q4s1', text: 'consistently attentive to and during instruction' },
                { id: 'q4s2', text: 'participates freely, appropriately' },
                { id: 'q4s3', text: 'consistently uses class time effectively to attend to work' },
                { id: 'q4s4', text: 'Attends study period to stay up to date' },
            ],
        }
    },
    {
        id: 'q5',
        number: 5,
        text: 'Sets specific goals',
        options: {
            emerging: [
                { id: 'q5e1', text: 'rarely sets goals' },
                { id: 'q5e2', text: 'sometimes sets goals' },
            ],
            developing: [
                { id: 'q5d1', text: 'generally sets goals and strives to reach them' },
            ],
            established: [
                { id: 'q5s1', text: 'consistently sets goals and meets these goals' },
            ],
        }
    },
    {
        id: 'q6',
        number: 6,
        text: 'Implements plans for improvement',
        options: {
            emerging: [
                { id: 'q6e1', text: 'rarely strives to improve' },
                { id: 'q6e2', text: 'sometimes strives to improve' },
            ],
            developing: [
                { id: 'q6d1', text: 'generally strives to improve' },
            ],
            established: [
                { id: 'q6s1', text: 'consistently completes homework' },
            ],
        }
    },
];

const ratingHeaders = ["Emerging", "Developing", "Established"];

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

const FeedbackRow: React.FC<{ question: FeedbackQuestion; selectedAnswers: Record<string, string>; onSelect: (ratingHeader: string, optionId: string) => void; }> = ({ question, selectedAnswers, onSelect }) => (
    <>
        {/* Question Cell */}
        <div className="p-4 flex items-center justify-center bg-[#F9FAFB] rounded-2xl">
            <p className="font-semibold text-black text-sm">{question.number}. <span className="text-center">{question.text}</span></p>
        </div>

        {/* Option Cells */}
        {ratingHeaders.map(header => {
            const category = header.toLowerCase() as keyof QuestionOptions;
            const options = question.options[category] || [];
            return (
                <div key={header} className="p-4 flex flex-col items-start bg-[#F9FAFB] rounded-2xl space-y-3">
                    {options.map(option => (
                        <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                            <div className="relative flex items-center justify-center w-5 h-5">
                                <input type="radio" name={`${question.id}-${category}`} value={option.id} checked={selectedAnswers[category] === option.id} onChange={() => onSelect(category, option.id)} className="sr-only" />
                                <div className={`w-5 h-5 rounded-full border-2 transition-all ${selectedAnswers[category] === option.id ? 'border-[#3366FF] bg-white' : 'border-gray-300 bg-gray-100'}`}></div>
                                {selectedAnswers[category] === option.id && <div className="absolute w-3 h-3 bg-[#3366FF] rounded-full"></div>}
                            </div>
                            <span className="text-sm text-black">{option.text}</span>
                        </label>
                    ))}
                </div>
            );
        })}
    </>
);


function AcademicFeedbackPage() {
    const [answers, setAnswers] = useState<Record<string, Record<string, string>>>({});

    const handleSelect = (questionId: string, ratingHeader: string, optionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: {
                ...prev[questionId],
                [ratingHeader]: optionId,
            }
        }));
    };

    return (

        <>
            <div className="bg-white rounded-2xl p-4 ">
                <div className="py-3 px-4 bg-[#B0B0B014] rounded-2xl mb-6">
                    <h1 className="text-xl sm:text-2xl font-semibold text-[#3366FF]">Student Engagement</h1>
                </div>
                <div className="overflow-x-auto custom-scrollbar-thin">
                    <div className="grid grid-cols-4 gap-x-4 gap-y-4 min-w-[900px]">
                        <div className="p-4 rounded-xl bg-[#99DEFF] font-semibold text-black text-sm text-center">Commitment</div>
                        {ratingHeaders.map(header => <div key={header} className="p-4 rounded-xl bg-[#99DEFF] font-semibold text-black text-sm text-center">{header}</div>)}

                        {questions.map((question) => (
                            <React.Fragment key={question.id}>
                                <FeedbackRow
                                    question={question}
                                    selectedAnswers={answers[question.id] || {}}
                                    onSelect={(ratingHeader, optionId) => handleSelect(question.id, ratingHeader, optionId)}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="bg-[#3366FF] text-white font-semibold text-lg px-12 py-3 rounded-full hover:bg-blue-700 transition-colors">
                        Continue
                    </button>
                </div>
            </div>
        </>

    );
}

// --- Main Page Component (Wrapper) ---
export default function FeedbackDashboardPage() {
    const tabData = ["Student Engagement", "Attitude", "Academics", "Exams"];
    const [activeTab, setActiveTab] = useState(tabData[0]);
    return (
        <>
            <Header activeState="Dashboard" />
            <BackButton Heading="Student Progress Report" />
            <TeacherB2CWrapper>
                <div className="">
                    <TabSwitch tabs={tabData} selected={activeTab} onChange={setActiveTab} />
                </div>
                {activeTab==="Student Engagement" && (
                <AcademicFeedbackPage />
                )}
                {activeTab==="Attitude" && (
                <StudentAtitude />
                )}
                {activeTab==="Academics" && (
                <AcademicsReport />
                )}
                {activeTab==="Exams" && (
                <ExamReport />
                )}
            </TeacherB2CWrapper>
            <Footer />
        </>
    );
}