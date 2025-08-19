"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiBell, FiClock } from "react-icons/fi";
import { useRouter } from "next/navigation";

// Sample Question Data Structure
interface QuestionOption {
  id: string;
  text: string;
}

interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  correctOptionId?: string; // For grading, not used in student view directly
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "Which part of the plant makes food?",
    options: [
      { id: "a", text: "Option" },
      { id: "b", text: "Option" },
      { id: "c", text: "Option" },
    ],
    correctOptionId: "b",
  },
  {
    id: 2,
    text: "Which part of the plant makes food?",
    options: [
      { id: "a", text: "Option" },
      { id: "b", text: "Option" },
      { id: "c", text: "Option" },
    ],
    correctOptionId: "b",
  },
  {
    id: 3,
    text: "Which part of the plant makes food?",
    options: [
      { id: "a", text: "Option" },
      { id: "b", text: "Option" },
      { id: "c", text: "Option" },
    ],
    correctOptionId: "b",
  },
  {
    id: 4,
    text: "Which part of the plant makes food?",
    options: [
      { id: "a", text: "Option" },
      { id: "b", text: "Option" },
      { id: "c", text: "Option" },
      { id: "d", text: "Option" },
    ],
    correctOptionId: "b",
  },
  {
    id: 5,
    text: "What is the capital of France?",
    options: [
      { id: "a", text: "Option" },
      { id: "b", text: "Option" },
      { id: "c", text: "Option" },
      { id: "d", text: "Option" },
    ],
    correctOptionId: "c",
  },
  // Add more questions up to 10 for this example
];

const TOTAL_QUESTIONS = 10; // As per image (1/10)
const TIME_LIMIT_MINUTES = 20;

const tabCategories = [
  "Academic Skills",
  "Brain Development",
  "Personality Development",
  "Emotional Intelligence",
];

export default function DmittTestPage() {
    const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(tabCategories[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(TOTAL_QUESTIONS).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES * 60); // Time in seconds

  // Timer useEffect
  useEffect(() => {
    if (timeLeft <= 0) {
      // Handle time up (e.g., auto-submit)
      console.log("Time's up!");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const currentQuestion = sampleQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleNextQuestion = () => {
    // Save current answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOptionId;
    setAnswers(newAnswers);

    setSelectedOptionId(null); // Reset selection for next question

    if (
      currentQuestionIndex < TOTAL_QUESTIONS - 1 &&
      currentQuestionIndex < sampleQuestions.length - 1
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle end of test (e.g., submit answers)
      console.log("Test Finished. Answers:", newAnswers);
      // Potentially navigate to a results page or submit to backend
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-[#3366FF] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Replace with your actual logo */}
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={150}
              height={40}
            />
            {/* <Image src="/logo-white.png" alt="Edunique Logo" width={150} height={40} /> */}
          </div>

          {/* User Info & Notification */}
          <div className="flex items-center space-x-4">
            <button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
              <FiBell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/person.jpg" // Replace with actual avatar path
                alt="Shlok Agheda"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Shlok Agheda</p>
                <p className="text-xs opacity-80">Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white flex-1 pb-8 lg:py-8 ">
        <div className="max-w-[53rem] mx-auto bg-white rounded-xl  p-6 md:p-8">
          {/* Test Title */}
          <h1 className="text-lg md:text-xl leading-loose font-medium text-gray-800 mb-6">
            DMIT (Dermatoglyphics Multiple Intelligence Test) and skill
            assessment
          </h1>

          {/* Category Tabs */}
          <div className="mb-8 flex justify-center pb-2">
            <div className="inline-flex w-auto overflow-x-auto mx-auto space-x-1 border bg-[#f9fafb] border-gray-200 rounded-full p-2">
              {tabCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-150 rounded-full ${
                    activeCategory === category
                      ? "bg-[#FF3366] text-white"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Test Info: Questions, Time Limit, Progress, Timer */}
          <div className="flex max-w-[100%] items-center relative  justify-between  mb-8 gap-4">
            <div className="sm:text-left">
              <p className="text-lg font-semibold text-[#6B7280]">
                Questions : {TOTAL_QUESTIONS}
              </p>
              <p className="text-xs mt-2 text-gray-500">
                Time Limit: {TIME_LIMIT_MINUTES} Minutes
              </p>
              <div className="mt-2 inline-flex items-center justify-center px-3 bg-[#8DD9B3] text-[#1E2A32] py-2 rounded-full">
                {currentQuestionIndex + 1} / {TOTAL_QUESTIONS}
              </div>
            </div>
            <div className="absolute right-0">
              <div className="flex items-center gap-1.5 text-[#FF3366]">
                <FiClock className="w-5 h-5" />
                <span className="text-lg font-extrabold">
                  {formatTime(timeLeft)}
                </span>
              </div>
              <p className="text-md font-medium text-[#FF99B7]">Min Left</p>
            </div>
          </div>

          {/* Current Question */}
          {currentQuestion && (
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-sm mb-2 text-gray-500">
                Question {currentQuestionIndex + 1}
              </p>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                {currentQuestion.text}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`hover:cursor-pointer w-full text-left flex items-center p-4 rounded-full transition-all duration-150 font-semibold focus:outline-none bg-white hover:bg-blue-100 ${
                      selectedOptionId === option.id &&
                      "border-2 border-blue-500"
                    }`}
                  >
                    {/* Optional: Add a visual radio button if needed */}
                    {/* <div className={`w-4 h-4 rounded-full border-2 mr-3 ${selectedOptionId === option.id ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}></div> */}
                    <span className="text-sm text-[#6B7280]">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 flex justify-center rounded-full">
            <button
              onClick={() => router.push("/b2c-phase-3/b2c-student/test/test-page-9")}
              className="px-10 py-3 bg-[#3366FF] text-white font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:cursor-pointer"
            >
              {currentQuestionIndex === TOTAL_QUESTIONS - 1 ||
              currentQuestionIndex === sampleQuestions.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
