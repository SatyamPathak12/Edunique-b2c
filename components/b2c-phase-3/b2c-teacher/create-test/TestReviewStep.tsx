"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

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
  points: number;
}

interface TestData {
  description: string;
  details: {
    scheduledFor: string;
    batch: string;
    time: string;
    totalPoint: number;
    passing: number;
    expiryDate: string;
  };
  questions: Question[];
}

// --- Hardcoded Data for Initial State ---
const initialTestPreviewData: TestData = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
  details: {
    scheduledFor: "12/04/2025, 06:00 AM",
    batch: "Batch 1",
    time: "30 Minutes",
    totalPoint: 100,
    passing: 40,
    expiryDate: "14/04/2025",
  },
  questions: [
    {
      id: "q1",
      questionNumber: 1,
      text: "Which part of the plant makes food ?",
      points: 4,
      options: [
        { id: "q1o1", text: "Option" },
        { id: "q1o2", text: "Option", isCorrect: true, isSelected: true },
        { id: "q1o3", text: "Option" },
      ],
    },
    {
      id: "q2",
      questionNumber: 2,
      text: "Which part of the plant makes food ?",
      points: 4,
      options: [
        { id: "q2o1", text: "Option" },
        { id: "q2o2", text: "Option", isCorrect: true, isSelected: true },
        { id: "q2o3", text: "Option" },
      ],
    },
  ],
};

// --- Option Component ---
interface OptionDisplayProps {
  option: Option;
  onSelect: () => void;
}

const OptionDisplay: React.FC<OptionDisplayProps> = ({ option, onSelect }) => {
  let iconComponent = null;
  let optionTextColor = "text-gray-600";
  let optionBgColor = "bg-white";

  if (option.isSelected && option.isCorrect) {
    iconComponent = (
      <IoCheckmarkCircle className="w-5 h-5 sm:w-8 sm:h-8 text-[#8DD9B3] flex-shrink-0" />
    );
    optionTextColor = "text-[#8DD9B3]";
  } else {
    iconComponent = <div className="h-5 sm:h-8" />;
  }

  return (
    <div
      onClick={onSelect}
      className={`w-full flex items-center p-3 ${optionBgColor} rounded-full cursor-pointer transition-colors hover:shadow-sm`}
    >
      {iconComponent}
      <span className={`ml-2 sm:ml-2.5 text-sm ${optionTextColor} font-medium`}>
        {option.text}
      </span>
    </div>
  );
};


// --- Question Component ---
interface QuestionPreviewItemProps {
  question: Question;
  onSelectOption: (questionId: string, optionId: string) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const QuestionPreviewItem: React.FC<QuestionPreviewItemProps> = ({
  question,
  onSelectOption,
  setCurrentStep
}) => {
  return (
    <div className="p-5 sm:p-6 max-w-2xl bg-[#F9FAFB] rounded-2xl">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Question {question.questionNumber}
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-black leading-tight">
            {question.text || "Question text not available"}
          </h3>
        </div>
        <p className="text-sm sm:text-base font-medium text-[#6B7280] self-end whitespace-nowrap">
          {question.points} Points
        </p>
      </div>
      <div className="space-y-2.5 sm:space-y-3 mt-4">
        {question.options.map((opt) => (
          <OptionDisplay
            key={opt.id}
            option={opt}
            onSelect={() => onSelectOption(question.id, opt.id)}
          />
        ))}
      </div>
      <div className="mt-4 text-left">
        <button
          onClick={() => setCurrentStep(2)}
          className="px-5 py-2 bg-[#B0B0B01A] text-black text-xs font-medium rounded-full hover:bg-gray-300 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};


// --- Main Component ---
const TestReviewStep: React.FC<{testType: string, setCurrentStep: React.Dispatch<React.SetStateAction<number>>}> = ({testType, setCurrentStep}) => {
  // Use state to make the test data interactive
  const [testData, setTestData] = useState<TestData>(initialTestPreviewData);

  const { description, details, questions } = testData;

  // Handler to select an option, which marks it as the correct answer
  const handleOptionSelect = (questionId: string, selectedOptionId: string) => {
    setTestData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id === questionId) {
          // Create a new question object with updated options
          return {
            ...q,
            options: q.options.map((opt) => ({
              ...opt,
              // The selected option becomes the correct one
              isCorrect: opt.id === selectedOptionId,
              isSelected: opt.id === selectedOptionId,
            })),
          };
        }
        return q; // Return other questions unchanged
      }),
    }));
  };

  return (
    // Added padding for better spacing on all screen sizes, especially mobile
    <div className="sm:p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-black mb-5">{`${testType} Title`}</h1>
        <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-5">
          {description}
        </p>
        <div className="p-4 font-medium bg-[#F9FAFB] rounded-2xl space-y-1.5 text-xs text-[#808080]">
          <p className="font-normal">
            Scheduled for
            <span className="ml-2 text-[#F9326F]">{details.scheduledFor}</span>
            <span className="ml-2 text-[#F9326F]">{details.batch}</span>
          </p>
          <p>
            Time: <span>{details.time}</span>
          </p>
          <p>
            Total Point: <span>{details.totalPoint}</span>
          </p>
          <p>
            Passing: <span>{details.passing}</span>
          </p>
          <p>
            Expiry Date: <span>{details.expiryDate}</span>
          </p>
        </div>
        <div className="mt-4 text-left">
          <button
            onClick={() => setCurrentStep(1)}
            className="px-6 py-2 bg-[#F9FAFB] text-black text-sm rounded-full hover:bg-gray-300 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Questions List Section */}
      <div className="space-y-5">
        {questions.map((question, index) => (
          <QuestionPreviewItem
            key={question.id}
            question={{ ...question, questionNumber: index + 1 }}
            onSelectOption={handleOptionSelect}
            setCurrentStep={setCurrentStep}
          />
        ))}
      </div>
    </div>
  );
};

export default TestReviewStep;