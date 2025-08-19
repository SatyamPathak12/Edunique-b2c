// page.tsx (e.g. /app/faq/page.tsx)
"use client";

import React from 'react';
import Footer from '@/components/layout/Footer';
import {
	FAQSection,
	FAQItemData // Type
} from './components';
import { PageTitleBar } from './ui-components';
import Newsletter from '@/components/common-components/Newsletter';
import StudentNavbar from '@/components/student-navbar';
import BackButton from '@/components/common-components/BackButton';
import StudentB2CWrapper from '@/components/b2c-student/common-components/StudentB2CWrapper';

// --- Sample Data (from your original) ---
const faqQuestionsData: FAQItemData[] = [ // Renamed for clarity
	{ question: 'Question 1', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
	{ question: 'Question 2', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
	{ question: 'Question 3', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
	{ question: 'Question 4', answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
	{ question: 'Question 5', answer: 'Yes, Lorem Ipsum is widely used as placeholder text in design and development.' },
];
// --- End Sample Data ---

export default function FAQPage() {



	return (
		// Original wrapper: div and inner div with bg-gray-100
		// Simplified to single wrapper
		<div className="min-h-screen flex flex-col bg-[#e3e3e3]">
			<StudentNavbar activeState='faq' />
			<BackButton Heading='FAQs' />
			<StudentB2CWrapper>

				{/* Original main: container mx-auto p-2 max-w-[90vw] bg-white rounded-2xl my-6 flex flex-col sm:flex-row gap-4 */}
				<main className="flex-grow container mx-auto my-4 mt-6 p-3 bg-white 
                             rounded-2xl 
                           max-w-screen-xl ">
					<FAQSection
						questions={faqQuestionsData}
						imageSrc="/student.png" // Your original image path
						imageAlt="Student illustration for FAQ"
					/>
				</main>
				<div className='max-w-screen-xl mx-auto w-full mb-6'>

					<Newsletter />{/* Newsletter is outside the main white card as per your layout */}
				</div>
			</StudentB2CWrapper>
			<Footer />
		</div>
	);
}