// page.tsx (e.g., /app/quiz/test/page.tsx)
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/b2c-student/Header';
// Removed unused icons
import {
  QuizHeader,
  QuizContent, // New wrapper for questions and submit button
  QuestionData // Type
} from './components';
import { OptimizedCategoryTabsBar } from '@/components/common-components/topbar';
import StudentWrapper from '@/components/student-wrapper';

// --- Sample Data (from your original) ---
const mainCategoriesData = ["Academics", "Skill Development", "Brain Function", "Sports", "STEMnology", "Competition", "Extra curriculars"];
const mockTestQuestionsData: QuestionData[] = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  text: `Question`,
  options: Array.from({ length: 4 }, (_, j) => ({ id: String.fromCharCode(97 + j), text: `Option ${j + 1}` })),
}));
const TIME_LIMIT_MINUTES_MOCK_TEST = 17;
// --- End Sample Data ---

export default function QuizTestPage() {
  const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES_MOCK_TEST * 60);

  const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" };

  useEffect(() => {
    if (timeLeft <= 0) {
      console.log("Time's up for Mock Test!");
      // Auto-submit or show time up message
      return;
    }
    const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionSelect = (questionId: number, optionId: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: optionId }));
  };

  const handleSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Test Submitted. Answers:", answers);
    alert("Test Submitted! (Check console)");
  };

  const handlePageBack = () => { // For the QuizHeader back button
    if (typeof window !== "undefined") window.history.back();
  };

  return (
    <StudentWrapper student activeState='My course'>

      <div className="bg-gray-100 min-h-screen w-full flex flex-col">

        <main className="flex-grow w-full mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="mb-4">
            <OptimizedCategoryTabsBar
              categories={mainCategoriesData}
              activeCategory={activeMainCategory}
              onCategoryClick={(category) => setActiveMainCategory(category)}
            />
          </div>

          {/* Main Content Card for Mock Test */}
          <div className="bg-white rounded-2xl w-full px-2 py-4 sm:px-3 sm:py-6 relative border border-gray-200"> {/* No shadow, add border */}
            <QuizHeader
              onBackClick={handlePageBack}
              quizTitle="Quiz"
              topicName="Topic name"
            />
            <QuizContent
              questions={mockTestQuestionsData}
              answers={answers}
              onOptionSelect={handleOptionSelect}
              onSubmit={handleSubmitTest}
            />
          </div>
        </main>


      </div>
    </StudentWrapper>
  );
}