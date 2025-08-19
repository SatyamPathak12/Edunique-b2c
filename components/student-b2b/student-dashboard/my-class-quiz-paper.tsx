"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

// --- Main Category Tab (Top horizontal bar) ---
const MainCategoryTab = ({
  label,
  isActive,
  onClick,
  hasDropdown = false,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  hasDropdown?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap ${
      isActive
        ? "bg-[#FF3366] text-white shadow-md"
        : "text-[#6B7280] hover:bg-[#ff33660f]"
    }`}
  >
    {label}
    {hasDropdown && (
      <FiChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          isActive ? "transform rotate-180" : ""
        } `}
      />
    )}
  </button>
);

// --- Question Block Component ---
interface Option {
  id: string;
  text: string;
}
interface QuestionData {
  id: number;
  text: string; // The question text itself is missing from the image, so this is a placeholder
  options: Option[];
}
const QuestionBlock = ({
  question,
  questionNumber,
  selectedOption,
  onOptionSelect,
}: {
  question: QuestionData;
  questionNumber: number;
  selectedOption: string | null;
  onOptionSelect: (questionId: number, optionId: string) => void;
}) => (
  <div className="mb-4 p-6 bg-[#F9FAFB] max-w-2xl rounded-3xl">
    <h3 className="text-md font-semibold text-gray-800 mb-4">
      {questionNumber}) Question{" "}
      {/* Replace "Question" with actual question.text if available */}
    </h3>
    <div className="space-y-3">
      {question.options.map((option) => (
        <button
          key={option.id}
          onClick={() => onOptionSelect(question.id, option.id)}
          className={`w-full text-left flex items-center py-3.5 px-4 rounded-full transition-all duration-150 focus:outline-none ${
            selectedOption === option.id
              ? "bg-blue-100 ring-blue-500"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {/* Optional: Visual radio button if desired */}
          {/* <div className={`w-4 h-4 rounded-full border-2 mr-3 ${selectedOption === option.id ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}></div> */}
          <span className="text-sm font-semibold text-[#6B7280]">{option.text}</span>
        </button>
      ))}
    </div>
  </div>
);

// --- Sample Data ---
const mainCategories = [
  "Academics",
  "Skill Development",
  "Brain Function",
  "Sports",
  "STEMnology",
  "Competition",
  "Extra curriculars",
];

const mockTestQuestions: QuestionData[] = Array.from({ length: 3 }, (_, i) => ({
  // Example: 3 questions
  id: i + 1,
  text: `This is the text for question ${
    i + 1
  }. Please replace with actual question.`, // Placeholder
  options: Array.from({ length: 4 }, (_, j) => ({
    id: String.fromCharCode(97 + j),
    text: `Option ${j + 1}`,
  })),
}));

const TIME_LIMIT_MINUTES_MOCK_TEST = 17; // As per image timer

export default function QuizTestPage() {
  const [activeMainCategory, setActiveMainCategory] = useState(
    mainCategories[0]
  );
  const [answers, setAnswers] = useState<Record<number, string | null>>({}); // { questionId: optionId }
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES_MOCK_TEST * 60);

  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg",
  }; // UPDATE PATH

  // Timer useEffect
  useEffect(() => {
    if (timeLeft <= 0) {
      console.log("Time's up for Mock Test!");
      // Handle auto-submission or time-up logic
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // const formatTime = (seconds: number) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
  //     .toString()
  //     .padStart(2, "0")}`;
  // };

  const handleOptionSelect = (questionId: number, optionId: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Test Submitted. Answers:", answers);
    // API call to submit answers
    // Navigate to results page or show confirmation
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header user={headerUser} />

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Main Category Tabs (Horizontal Scroll) */}
        <div className="mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto">
          <div className="flex space-x-4 justify-center items-center relative">
            <button className="absolute left-0 p-1.5 text-black cursor-pointer focus:outline-none">
              <FiArrowLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            {mainCategories.map((category) => (
              <MainCategoryTab
                key={category}
                label={category}
                isActive={activeMainCategory === category}
                onClick={() => setActiveMainCategory(category)}
                hasDropdown={category === "Sports"} // Example of a category with dropdown
              />
            ))}
          </div>
        </div>

        {/* Main Content Card for Mock Test */}
        <div className="bg-white rounded-2xl shadow-xl px-3 py-6 relative">
          {/* Test Title and Subtitle */}
          <div className="mb-8 flex items-center gap-3">
            <button className="p-1.5 text-black cursor-pointer focus:outline-none">
              <FiArrowLeft className="w-5 h-5" strokeWidth={3} />
            </button>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#FF3366]">
                  Quiz{" "}
                </h2>
                <p className="text-md text-black mt-1">Topic name </p>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <form onSubmit={handleSubmitTest}>
            {mockTestQuestions.map((question, index) => (
              <QuestionBlock
                key={question.id}
                question={question}
                questionNumber={index + 1}
                selectedOption={answers[question.id] || null}
                onOptionSelect={handleOptionSelect}
              />
            ))}

            {/* Submit Button */}
            <div className="mt-10 flex justify-center max-w-2xl ">
              <button
                type="submit"
                className="px-12 py-3 bg-[#3366FF] text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
