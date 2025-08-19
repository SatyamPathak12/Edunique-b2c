// components.tsx
"use client";

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Only icons directly used by these major components
import { ActionButton, OptionButton, SimpleIconButton } from './ui-component';
import Link from 'next/link';

// --- Data Interfaces (from your original) ---
export interface Option { id: string; text: string; }
export interface QuestionData { id: number; text: string; options: Option[]; }


// --- Component 2: QuizHeader ---
interface QuizHeaderProps {
    onBackClick?: () => void; // Assuming this arrow is for navigation
    quizTitle: string;
    topicName: string;
}
export const QuizHeader: React.FC<QuizHeaderProps> = ({ onBackClick, quizTitle, topicName }) => (
    // Original: mb-8 flex items-center gap-3
    <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3">
        {onBackClick && (
            // Original button: p-1.5 text-black cursor-pointer focus:outline-none
            <SimpleIconButton 
                onClick={onBackClick}
                icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />} 
                ariaLabel="Go back"
            />
        )}
        {/* Original inner div: flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 */}
        {/* This structure stacks title/subtitle by default */}
        <div> 
            {/* Original h2: text-2xl font-bold text-[#FF3366] */}
            <h2 className="text-xl font-bold text-[#FF3366] sm:text-2xl">{quizTitle}</h2>
            {/* Original p: text-md text-black mt-1 */}
            <p className="text-sm text-black mt-0.5 sm:text-md sm:mt-1">{topicName}</p>
        </div>
    </div>
);

// --- Component 3: QuestionBlock ---
interface QuestionBlockProps {
  question: QuestionData;
  questionNumber: number;
  selectedOptionId: string | null;
  onOptionSelect: (questionId: number, optionId: string) => void;
}
export const QuestionBlock: React.FC<QuestionBlockProps> = ({
  question, selectedOptionId, onOptionSelect,
}) => (
  // Original: mb-4 p-6 bg-[#F9FAFB] max-w-2xl rounded-3xl
  // Retaining max-w-2xl for desktop. On mobile, it will be constrained by parent.
  // Removed mx-auto, parent container (QuizContent) will handle centering if needed.
  <div className="mb-4 p-4 bg-[#F9FAFB] w-full rounded-2xl
                 sm:p-6 sm:rounded-3xl md:max-w-2xl"> {/* md:max-w-2xl to apply only on medium screens up */}
    {/* Original h3: text-md font-semibold text-gray-800 mb-4 */}
    <h2 className='text-sm md:text-lg  my-3 font-semibold text-black'>
        {question.id}) {"Question"}</h2>
   
    {/* Original options div: space-y-3 */}
    <div className="space-y-2.5 sm:space-y-3">
      {question.options.map((option) => (
        <OptionButton
          key={option.id}
          text={option.text}
          isSelected={selectedOptionId === option.id}
          onClick={() => onOptionSelect(question.id, option.id)}
        />
      ))}
    </div>
    
  </div>
);

// --- Component 4: QuizContent (New major component to hold questions and submit button) ---
interface QuizContentProps {
    questions: QuestionData[];
    answers: Record<number, string | null>;
    onOptionSelect: (questionId: number, optionId: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
export const QuizContent: React.FC<QuizContentProps> = ({ questions, answers, onOptionSelect, onSubmit}) => (
    <form onSubmit={onSubmit} className="w-full"> {/* Form wraps questions and submit */}
        {questions.map((question, index) => (
            <QuestionBlock
                key={question.id}
                question={question}
                questionNumber={index + 1}
                selectedOptionId={answers[question.id] || null}
                onOptionSelect={onOptionSelect}
            />
        ))}
        {/* Original submit button container: mt-10 flex justify-center max-w-2xl */}
        {/* Retaining max-w-2xl for the button centering logic for desktop, and justify-center */}
        <Link href={"/b2c-student/student-flow/quiz-result"}>
        <div className="mt-8 flex justify-center sm:mt-10 max-w-2xl">

            <ActionButton type="submit" fullWidthOnMobile={true}>
                Submit
            </ActionButton>
        </div></Link>
    </form>
);