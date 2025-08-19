"use client"; // For useState hooks used in sub-components

import React, { useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoTimeOutline, IoStar, IoStarOutline } from 'react-icons/io5';
import { FiArrowLeft, FiPieChart } from 'react-icons/fi';
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import GoBack from '../principal/goback';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

// --- Data Interfaces ---
interface Option {
    id: string;
    text: string;
    isCorrect?: boolean;
    isSelected?: boolean;
}

interface Question {
    id: string;
    questionNumber: number;
    text: string;
    options: Option[];
}

interface RatingCategory {
    id: string;
    name: string;
    score: number;
    maxScore: number;
}

interface ExtendedAssessmentSummaryData {
    assessmentScore: number;
    incorrectAnswers: number;
    ratings: RatingCategory[];

}

// --- Sample Data ---
const sampleQuestionsData: Question[] = [
    {
        id: 'q1',
        questionNumber: 1,
        text: 'Question',
        options: [
            { id: 'q1o1', text: 'Option 1', isCorrect: true, isSelected: true },
            { id: 'q1o2', text: 'Option 2' },
            { id: 'q1o3', text: 'Option 3' },
            { id: 'q1o4', text: 'Option 4' },
        ],
    },
    {
        id: 'q2',
        questionNumber: 2,
        text: 'Question',
        options: [
            { id: 'q2o1', text: 'Option 1', isSelected: true, isCorrect: false },
            { id: 'q2o2', text: 'Option 2', isCorrect: true }, // User missed this, but it's correct
            { id: 'q2o3', text: 'Option 3' },
            { id: 'q2o4', text: 'Option 4' },
        ],
    },
    {
        id: 'q3',
        questionNumber: 3,
        text: 'Question',
        options: [
            { id: 'q3o1', text: 'Option 1' },
            { id: 'q3o2', text: 'Option 2' },
            { id: 'q3o3', text: 'Option 3', isCorrect: true, isSelected: true },
            { id: 'q3o4', text: 'Option 4' },
        ],
    },
];

const sampleSummaryData: ExtendedAssessmentSummaryData = {
    assessmentScore: 40,
    incorrectAnswers: 3,
    ratings: [
        { id: 'r1', name: 'Concept', score: 4, maxScore: 5 },
        { id: 'r2', name: 'Critical thinking', score: 3, maxScore: 5 },
        { id: 'r3', name: 'Application of Concept', score: 5, maxScore: 5 },
        { id: 'r4', name: 'Retention', score: 4, maxScore: 5 },
        { id: 'r5', name: 'Logical Reasoning', score: 4, maxScore: 5 },
    ],
};

// --- Style Constants (derived from your theme and image) ---
const COLOR_CORRECT_TEXT = 'text-[#8DD9B3]';
const COLOR_INCORRECT_TEXT = 'text-[#E57373]';
const COLOR_INCORRECT_ICON = 'text-[#E57373]';
const COLOR_NEUTRAL_TEXT = 'text-[#6B7280]';
const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]';
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BORDER_GRAY = 'border-[#D5D5D5]';

// --- Sub-components ---
const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
    let iconComponent = null;
    let optionTextColor = COLOR_NEUTRAL_TEXT;

    // Determine icon and text color based on option state
    if (option.isCorrect) {
        iconComponent = <IoCheckmarkCircle className={`w-10 h-10 text-[#8DD9B3] flex-shrink-0`} strokeWidth={3} />;
        optionTextColor = COLOR_CORRECT_TEXT;
    } else if (option.isSelected && !option.isCorrect) {
        iconComponent = <IoCloseCircle className={`w-10 h-10 ${COLOR_INCORRECT_ICON} flex-shrink-0`} strokeWidth={3} />;
        optionTextColor = COLOR_INCORRECT_TEXT;
    } else {
        iconComponent = <div className="h-10"></div>;
    }

    return (
        <div className={`w-full flex items-center py-2 sm:py-3 bg-white rounded-full ${(option.isSelected || option.isCorrect) ? "px-2 sm:px-3" : "px-1"}`}>
            {iconComponent}
            <span className={`ml-2 sm:ml-3 text-xs sm:text-sm font-semibold ${optionTextColor}`}>{option.text}</span>
        </div>
    );
};

const QuestionItem: React.FC<{ question: Question }> = ({ question }) => {
    return (
        <div className="py-4 sm:py-6 bg-[#F9FAFB] rounded-2xl ">
            <div className=" px-4 sm:px-6 text-base font-medium sm:text-lg text-black mb-4 flex gap-2 sm:gap-3">
                <h1>{question.questionNumber})</h1>
                <h1>{question.text || "Question"}</h1>
            </div>
            <div className="px-4 space-y-3">
                {question.options.map((opt) => (
                    <OptionDisplay key={opt.id} option={opt} />
                ))}
            </div>
        </div>
    );
};

const StarRatingDisplay: React.FC<{ currentRating: number; maxRating: number }> = ({
    currentRating,
    maxRating,
}) => {
    return (
        <div className="flex items-center  gap-1 sm:gap-2">
            {Array.from({ length: maxRating }).map((_, index) =>
                index < currentRating ? (
                    <IoStar key={index} className={` h-[13px] w-[13px] lg:w-[15px] sm:h-[15px]  tet-wrap ${COLOR_RATING_STARS}`} />
                ) : (
                    <IoStar key={index} className={` h-[13px] w-[13px] lg:w-[15px] sm:h-[15px]  tet-wrap text-[#C7C7C7]`} />
                )
            )}
        </div>
    );
}

const SummaryPanel: React.FC<{ summary: ExtendedAssessmentSummaryData, handleSubmitClick: () => void, Redirect: () => void }> = ({ summary, handleSubmitClick, Redirect }) => {
    const [feedbackText, setFeedbackText] = useState('');

    return (
        <div className="relative  rounded-2xl p-4 space-y-5 overflow-hidden"
            style={{
                backgroundImage: "url('/images/brandpatternnoti.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="absolute inset-0 h-full bg-black/40 z-0 rounded-2xl"></div>
            <div className=" flex flex-col md:flex-row lg:flex-col gap-4 relative z-10 rounded-2xl">

                <div className="space-y-4 flex flex-col">
                    {/* Assessment Score */}
                    <div className={`flex-1 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center`}>
                        <p className="sm:text-lg lg:text-xl text-base text-[#6b7280] mb-2">Assessment Score</p>
                        <p className={`text-lg  sm:text-[45px] md:py-8 lg:py-0 font-semibold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
                    </div>
                    <div className={`flex-1 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center`}>
                        <p className="text-lg  lg:text-xl text-gray-500 mb-1">Incorrect Answers</p>
                        <p className={`text-lg sm:text-[45px] py-0 md:py-8 lg:py-0 font-semibold ${COLOR_SCORE_BLUE}`}>{summary.incorrectAnswers}</p>
                    </div>

                    {/* View Detailed Report Button */}
                    <button onClick={Redirect} className={`w-full flex items-center justify-center  gap-1 sm:gap-2 px-3 py-2 bg-white rounded-xl hover:bg-gray-200 transition-colors`}>
                        <FiPieChart className={`w-6 h-6 ${COLOR_RATING_STARS}`} />
                        <span className={` text-base sm:text-lg lg:text-xl ${COLOR_RATING_STARS}`}>View Detailed Report</span>
                    </button>
                </div>

                {/* Ratings Section */}
                <div className='flex-1 bg-white px-4 pt-6 pb-4 rounded-2xl space-y-4 overflow-x-hidden'>
                    <div className="space-y-2 sm:space-y-5 py-1"> {/* Reduced top padding for tighter spacing */}
                        {summary.ratings.map((rating) => (
                            <div key={rating.id} className="flex justify-between gap-1 items-center">
                                <p className="text-xs sm:text-sm text-black font-medium">{rating.name}</p>
                                <StarRatingDisplay currentRating={rating.score} maxRating={rating.maxScore} />
                            </div>
                        ))}
                    </div>


                    {/* Write a Feedback Form */}
                    <div className="space-y-3 pt-1">
                        <div className='mt-2 space-y-1.5'>
                            <label htmlFor="feedback" className="block text-sm sm:text-base text-black">
                                Write a Feedback
                            </label>
                            <textarea
                                id="feedback"
                                rows={4}
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                placeholder="Text"
                                className={`w-full text-[#6B7280] p-3 placeholder:text-[#6B7280] bg-[#F9FAFB] sm:h-40 border ${BORDER_GRAY} rounded-2xl focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none text-sm resize-none`}
                            />
                        </div>
                        <button
                            onClick={handleSubmitClick}
                            className={`w-28 md:w-34 py-2 sm:py-2.5 ${COLOR_BUTTON_PRIMARY_BG} ${COLOR_BUTTON_PRIMARY_TEXT} rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SavedNotification: React.FC<{
    isVisible: boolean;
    message?: string;
}> = ({
    isVisible,
    message = "Submitted !"
}) => {
        return (
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed top-30 left-1/2 -translate-x-1/2 z-50"
                    >
                        <div
                            className="flex w-50 sm:w-xs items-center gap-2 bg-[#00B060] text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
                        >
                            <FaRegCircleCheck className="w-5 h-5" strokeWidth={2.5} />
                            <span className="text-base">{message}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

export function StudentPaperComponent({ linkPart }:{ linkPart:string }) {
    const [questionsData] = useState<Question[]>(sampleQuestionsData);
    const [summaryData] = useState<ExtendedAssessmentSummaryData>(sampleSummaryData);
    const [showSavedNotification, setShowSavedNotification] = useState(false);

    const handleSubmitClick = () => {
        setShowSavedNotification(true);
        setTimeout(() => {
            setShowSavedNotification(false);
        }, 3000);
    }

    const Router = useRouter();
    const Redirect = () => Router.push(`/b2c-teacher/teacher-flow/student-progress-report${linkPart}`);

    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header />

            <div>

                {/* Go Back */}
                <GoBack GoBackHeading='Student Name' />

                <SavedNotification isVisible={showSavedNotification} />

                <main className=" max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
                    <div className=" bg-white p-4 md:p-6 lg:p-8 rounded-2xl flex  flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between">

                        {/* Left Column: Questions List */}
                        <div className="w-full space-y-4">
                            {questionsData.map((question) => (
                                <QuestionItem key={question.id} question={question} />
                            ))}
                        </div>

                        {/* Right Column: Summary Panel */}
                        <div className="w-full lg:max-w-[43%]">
                            <SummaryPanel summary={summaryData} handleSubmitClick={handleSubmitClick} Redirect={Redirect} />
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}