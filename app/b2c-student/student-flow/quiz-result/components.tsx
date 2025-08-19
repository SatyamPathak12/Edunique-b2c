// components.tsx
"use client";

import React from 'react';// For QuestionReviewBlock icons
import { FiArrowLeft } from 'react-icons/fi'; // Smile for ScoreChart
import {  OptionReviewDisplay, SimpleIconButton, ScoreChartDisplay } from './ui-components';

// --- Data Interfaces (from your original) ---
export interface OptionReview { id: string; text: string; isUserSelected: boolean; isCorrect: boolean; }
export interface QuestionReviewData { id: number; text: string; options: OptionReview[]; }

// --- Component 2: QuizResultHeader ---
interface QuizResultHeaderProps { onBackClick?: () => void; quizTitle: string; topicName: string; }
export const QuizResultHeader: React.FC<QuizResultHeaderProps> = ({ onBackClick, quizTitle, topicName }) => (
    <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3">
        {onBackClick && <SimpleIconButton onClick={onBackClick} icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />} ariaLabel="Go back"/>}
        <div>
            <h2 className="text-xl font-medium text-[#FF3366] sm:text-2xl">{quizTitle}</h2>
            <p className="font-light tracking-wide text-black mt-0.5 sm:text-base sm:mt-1">{topicName}</p> {/* text-base not md */}
        </div>
    </div>
);

// --- Component 3: QuestionReviewBlock ---
interface QuestionReviewBlockProps { question: QuestionReviewData; questionNumber: number; }
export const QuestionReviewBlock: React.FC<QuestionReviewBlockProps> = ({ question, questionNumber }) => (
    // Original: mb-8 p-6 bg-[#F9FAFB] rounded-2xl
    <div className="mb-6 p-4 bg-[#F9FAFB] rounded-2xl border border-gray-200 sm:mb-8 sm:p-6"> {/* Add border, responsive padding */}
        {/* Original h3: text-md font-semibold text-black mb-4 */}
        <h2 className='text-sm md:text-lg py-4 font-semibold text-black'>
             {questionNumber}) { "Question"} </h2>
        
        {/* Original div: space-y-3 */}
        <div className="space-y-2.5 sm:space-y-3">
            {question.options.map(option => <OptionReviewDisplay key={option.id} option={option} />)}
        </div>
    </div>
);

// --- Component 4: ResultsDisplayCard (New component for ScoreChart and text) ---
interface ResultsDisplayCardProps {
    scorePercentage: number; // e.g., 90
    correctAnswers: number;
    totalQuestions: number;
}
export const ResultsDisplayCard: React.FC<ResultsDisplayCardProps> = ({ scorePercentage, correctAnswers, totalQuestions }) => (
    <div className="bg-[#F9FAFB]  border border-[#E5E7EB] min-h-[380px] sm:min-h-[450px] flex flex-col justify-center sm:justify-between rounded-2xl p-4 md:p-6 lg:p-8 w-full text-center"> {/* Centering items and responsive padding */}
        <ScoreChartDisplay />
        <div className="mt-4 sm:mt-0"> {/* Ensure some space on mobile if chart is large */}
            <p className="text-4xl font-bold text-[#8DD9B3] sm:text-6xl">{scorePercentage}%</p>
            <p className="text-md text-[#6B7280] mt-1 sm:mt-2 sm:text-lg">
                You got {correctAnswers} correct out of {totalQuestions} !
            </p>
        </div>
    </div>
);

// --- Component 5: EvaluationResultsTable ---
// Copied directly from your provided EvaluationResults function, with minor responsive tweaks
const evaluationTableData = [ // Hardcoded as per your component
  { name: "Concept" }, { name: "Sentence Formation" }, { name: "Defintions" },
  { name: "Retention" }, { name: "Choice of Words" },
];
export const EvaluationResultsTable: React.FC = () => (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 lg:p-8 w-full">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Evaluation Results</h1>
        <div className="border-2 border-black overflow-hidden rounded-md"> {/* Added rounded-md */}
            <div className="bg-black text-white flex">
                <div className="flex-1 p-2 text-sm sm:text-base font-semibold border-r border-white">Section</div> {/* sm:text-base */}
                <div className="flex-1 p-2 text-sm sm:text-base font-semibold text-center">Scores (in stars out of 5)</div>
            </div>
            <div className="bg-white">
                {evaluationTableData.map((item, index, arr) => (
                    <div key={item.name} className={`flex ${index < arr.length -1 ? 'border-b border-black' : ''}`}>
                        <div className="flex-1 p-2 text-xs sm:text-sm font-medium border-r border-black">{item.name}</div>
                        <div className="flex-1 p-2">{/* Empty space for stars */}</div>
                    </div>
                ))}
            </div>
        </div>
        <h2 className="text-md sm:text-lg font-semibold tracking-wide text-black mt-4 sm:mt-6">Skills a child will develop:</h2>
    </div>
);