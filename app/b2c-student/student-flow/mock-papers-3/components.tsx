// components.tsx
"use client";

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { OptionButton, SimpleIconButton, ActionButton } from './ui-components';
import { useRouter } from 'next/navigation';

// --- Data Interfaces ---
export interface Option { id: string; text: string; }
export interface QuestionData { id: number; text: string; options: Option[]; }

// --- Component 2: TestHeader (Similar to QuizHeader) ---
interface TestHeaderProps { onBackClick?: () => void; testTitle: string; assessmentType: string; }
export const TestHeader: React.FC<TestHeaderProps> = ({ onBackClick, testTitle, assessmentType }) => (
    <div className="mb-6 flex items-start gap-2 sm:mb-8 sm:gap-3"> {/* items-start for title alignment */}
        {onBackClick && <SimpleIconButton onClick={onBackClick} icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />} ariaLabel="Go back"/>}
        <div>
            <h2 className="text-xl font-bold text-[#FF3366] sm:text-2xl">{testTitle}</h2>
            <p className="text-sm font-light text-black mt-0.5 sm:text-md sm:mt-1">{assessmentType}</p>
        </div>
    </div>
);

// --- Component 3: QuestionBlock ---
interface QuestionBlockProps {
  question: QuestionData; questionNumber: number; selectedOptionId: string | null; // Renamed from selectedOption
  onOptionSelect: (questionId: number, optionId: string) => void;
}
export const QuestionBlock: React.FC<QuestionBlockProps> = ({ question, questionNumber, selectedOptionId, onOptionSelect }) => (
  // Original: mb-4 p-6 bg-[#F9FAFB] max-w-2xl rounded-3xl
  // Parent will handle max-w-2xl if needed for the group of questions.
  <div className="mb-4 p-4 bg-[#F9FAFB] rounded-2xl w-full sm:p-6 sm:rounded-3xl">
    {/* Original h3: text-md font-medium text-gray-800 mb-4 */}
    <h2 className='text-sm md:text-lg font-semibold text-black mb-2'>{questionNumber}) Question</h2>
    
    <div className="space-y-2.5 sm:space-y-3">
      {question.options.map((option) => (
        <OptionButton key={option.id} text={option.text} isSelected={selectedOptionId === option.id} onClick={() => onOptionSelect(question.id, option.id)}/>
      ))}
    </div>
  </div>
);

// --- Component 4: TestContent (Wraps questions and submit button) ---
interface TestContentProps {
    questions: QuestionData[]; answers: Record<number, string | null>;
    onOptionSelect: (questionId: number, optionId: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
export const TestContent: React.FC<TestContentProps> = ({ questions, answers, onOptionSelect, onSubmit}) => {
  const router = useRouter();
  return(
    <form onSubmit={onSubmit} className="w-full">
        {/* The QuestionBlocks will take the width of their container. */}
        {/* If the container of TestContent needs to be max-w-2xl and centered, that happens in page.tsx */}
        {questions.map((question, index) => (
            <QuestionBlock key={question.id} question={question} questionNumber={index + 1} selectedOptionId={answers[question.id] || null} onOptionSelect={onOptionSelect}/>
        ))}
        {/* Original submit button wrapper: mt-10 flex justify-center max-w-2xl */}
        {/* This centering and max-width should apply to the button itself if it's narrower than the form */}
        <div className="mt-8 flex justify-center sm:mt-10">
            <ActionButton 
onClick={() => router.push("/b2c-student/student-flow/mock-paper-result")}  type="submit" fullWidthOnMobile={false}> {/* fullWidthOnMobile=false to match original centered button */}
                Submit
            </ActionButton>
        </div>
    </form>
)};