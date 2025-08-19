// page.tsx (e.g. /app/quiz/result/page.tsx)
"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header'
import {
    QuizResultHeader,
    QuestionReviewBlock,
    ResultsDisplayCard,
    EvaluationResultsTable,
    QuestionReviewData // Type
} from './components';
import { OptimizedCategoryTabsBar } from '@/components/common-components/topbar';
import Footer from '@/components/layout/Footer';
// SimpleIconButton is in ui-components, used by components

// --- Sample Data (from your original) ---
const mainCategoriesData = ["Academics", "Skill Development", "Brain Function", "Sports", "STEMnology", "Competition", "Extra curriculars"];
const reviewQuestionsData: QuestionReviewData[] = [ // Renamed for clarity
    { id: 1, text: '', options: [ { id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: true }, { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false }, { id: 'c', text: 'Option 2', isUserSelected: false, isCorrect: false }, { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false } ]},
    { id: 2, text: 'Question 1', options: [ { id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: false }, { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: true }, { id: 'c', text: 'Option 3', isUserSelected: false, isCorrect: false }, { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false } ]},
    { id: 3, text: 'Question', options: [ { id: 'a', text: 'Option 1', isUserSelected: false, isCorrect: false }, { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false }, { id: 'c', text: 'Option 3', isUserSelected: true, isCorrect: true }, { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false } ]},
];
// --- End Sample Data ---


export default function QuizTestResultPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);

    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" };

    const handlePageBack = () => { // For QuizResultHeader back button
        if(typeof window !== "undefined") window.history.back();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser}/>

            <main className=" p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="mb-4">
          <OptimizedCategoryTabsBar
            categories={mainCategoriesData}
            activeCategory={activeMainCategory}
            onCategoryClick={(category) => setActiveMainCategory(category)}
          />
        </div>

                {/* Main Content Card for Test Result */}
                {/* Original: bg-white px-3 py-6 rounded-2xl shadow-lg */}
                <div className="bg-white px-2 py-4 sm:px-3 sm:py-6 max-w-[96rem] mx-auto rounded-3xl mt-4 md:mt-6 "> {/* No shadow, add border */}
                    <QuizResultHeader
                        onBackClick={handlePageBack}
                        quizTitle="Quiz" // As per original
                        topicName="Topic name" // As per original
                    />
                    <div className="flex  flex-col sm:flex-row  justify-between gap-4">
                        <div className="sm:w-[55%] space-y-4 md:space-y-6 max-h-[70vh] lg:max-h-none overflow-y-auto custom-scrollbar-thin pr-1"> {/* Scrollable question review */}
                            {reviewQuestionsData.map((question, index) => (
                                <QuestionReviewBlock key={question.id} question={question} questionNumber={index + 1} />
                            ))}
                        </div>

                        <div className="sm:w-[45%] flex flex-col gap-4 md:gap-6 items-center justify-start lg:sticky lg:top-24"> {/* Sticky on lg+ */}
                            <ResultsDisplayCard
                                scorePercentage={90} // Example data
                                correctAnswers={2}   // Example data
                                totalQuestions={3}  // Example data
                            />
                            <EvaluationResultsTable />
                        </div>
                    </div>
                </div>
            </main>

           <Footer />
        </div>
    );
}