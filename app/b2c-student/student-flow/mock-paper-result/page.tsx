// page.tsx (e.g. /app/quiz/result/page.tsx)
"use client";

import React, { useState } from 'react';
import Header from '@/components/b2c-student/Header';
import Footer from '@/components/layout/Footer';
import {
    QuizResultHeader,
    QuestionReviewBlock,
    ResultsDisplayCard,
    EvaluationResultsTable,
    QuestionReviewData // Type
} from './components';
import { OptimizedCategoryTabsBar } from '@/components/common-components/topbar';
import StudentNavbarNew from '@/components/student-navbar-new';
// SimpleIconButton is in ui-components, used by components

// --- Sample Data (from your original) ---
const mainCategoriesData = ["Academics", "Skill Development", "Brain Function", "Sports", "STEMnology", "Competition", "Extra curriculars"];
const reviewQuestionsData: QuestionReviewData[] = [ // Renamed for clarity
	{ id: 1, text: 'What is the capital of France?', options: [ { id: 'a', text: 'Paris', isUserSelected: true, isCorrect: true }, { id: 'b', text: 'London', isUserSelected: false, isCorrect: false }, { id: 'c', text: 'Berlin', isUserSelected: false, isCorrect: false }, { id: 'd', text: 'Rome', isUserSelected: false, isCorrect: false } ]},
	{ id: 2, text: 'Which gas do plants absorb from the atmosphere?', options: [ { id: 'a', text: 'Oxygen', isUserSelected: true, isCorrect: false }, { id: 'b', text: 'Carbon Dioxide', isUserSelected: false, isCorrect: true }, { id: 'c', text: 'Nitrogen', isUserSelected: false, isCorrect: false }, { id: 'd', text: 'Hydrogen', isUserSelected: false, isCorrect: false } ]},
	{ id: 3, text: 'What is H2O commonly known as?', options: [ { id: 'a', text: 'Salt', isUserSelected: false, isCorrect: false }, { id: 'b', text: 'Sugar', isUserSelected: false, isCorrect: false }, { id: 'c', text: 'Water', isUserSelected: true, isCorrect: true }, { id: 'd', text: 'Acid', isUserSelected: false, isCorrect: false } ]},
];
// --- End Sample Data ---


export default function QuizTestResultPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);

	

    const handlePageBack = () => { // For QuizResultHeader back button
        if(typeof window !== "undefined") window.history.back();
    };

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
				{/* Main Content Card for Test Result */}
                {/* Original: bg-white px-3 py-6 rounded-2xl shadow-lg */}
				<div className="bg-white px-2 py-4 sm:px-3 sm:py-6 rounded-2xl mt-4 md:mt-6 border border-gray-200"> {/* No shadow, add border */}
					<QuizResultHeader
                        onBackClick={handlePageBack}
                        quizTitle="Addition Mock Test" // As per original
                        topicName="Assessment" // As per original
                    />
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
						<div className="lg:col-span-2 space-y-4 md:space-y-6 max-h-[70vh] lg:max-h-none overflow-y-auto custom-scrollbar-thin pr-1"> {/* Scrollable question review */}
							{reviewQuestionsData.map((question, index) => (
								<QuestionReviewBlock key={question.id} question={question} questionNumber={index + 1} />
							))}
						</div>

						<div className="lg:col-span-1 flex flex-col gap-4 md:gap-6 items-center justify-start lg:sticky lg:top-24"> {/* Sticky on lg+ */}
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