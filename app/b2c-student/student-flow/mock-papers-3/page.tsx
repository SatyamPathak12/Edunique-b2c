// page.tsx (e.g. /app/mock-test/[id]/page.tsx)
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/b2c-student/Header';
import Footer from '@/components/layout/Footer';
import {  TestHeader, TestContent, QuestionData } from './components';
import { TimerDisplay } from './ui-components'; // Timer is a UI element displayed on the page
import { OptimizedCategoryTabsBar } from '@/components/common-components/topbar';
import StudentNavbarNew from '@/components/student-navbar-new';

// --- Sample Data ---
const mainCategoriesData = ["Academics", "Skill Development", "Brain Function", "Sports", "STEMnology", "Competition", "Extra curriculars"];
const mockTestQuestionsData: QuestionData[] = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1, text: `This is the text for question ${i + 1}. Please replace with actual question.`,
  options: Array.from({ length: 4 }, (_, j) => ({ id: String.fromCharCode(97 + j), text: `Option ${j + 1}` })),
}));
const TIME_LIMIT_MINUTES_MOCK_TEST = 17;
// --- End Sample Data ---


export default function MockTestPage() {
  const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES_MOCK_TEST * 60);

 const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/images/person.jpg', // UPDATE PATH
		
	}

  useEffect(() => {
    if (timeLeft <= 0) { console.log("Time's up for Mock Test!"); return; }
    const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (questionId: number, optionId: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: optionId }));
  };

  const handleSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Test Submitted. Answers:", answers);
    alert("Test Submitted! (Check console)");
  };

  const handlePageBack = () => { if(typeof window !== "undefined") window.history.back(); };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <StudentNavbarNew activeState='My course' />

      <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="mb-4">
                  <OptimizedCategoryTabsBar
                    categories={mainCategoriesData}
                    activeCategory={activeMainCategory}
                    onCategoryClick={(category) => setActiveMainCategory(category)}
                  />
                </div>

        {/* Main Content Card for Mock Test */}
        {/* Original wrapper: bg-white rounded-2xl shadow-xl px-3 py-6 relative */}
        <div className="bg-white rounded-2xl px-2 py-4 sm:px-3 sm:py-6 relative border border-gray-200"> {/* No shadow, add border */}
          {/* Timer - Positioned top right of this card */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
            <TimerDisplay formattedTime={formatTime(timeLeft)} />
          </div>

          <TestHeader
            onBackClick={handlePageBack}
            testTitle="Addition Mock Test" // Your hardcoded title
            assessmentType="Assessment"    // Your hardcoded subtitle
          />
          
          {/* To achieve the max-w-2xl centering for questions as in your original image,
              wrap TestContent or ensure its parent has this constraint if the whole card isn't max-w-2xl */}
          <div className="max-w-2xl"> {/* This div centers the QuestionBlocks area */}
            <TestContent
                questions={mockTestQuestionsData}
                answers={answers}
                onOptionSelect={handleOptionSelect}
                onSubmit={handleSubmitTest}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}