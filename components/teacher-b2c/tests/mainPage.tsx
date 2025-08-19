// page.tsx (e.g., /app/tests/bi-weekly/page.tsx)
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/TeacherB2CHeader';
import Footer from '@/components/layout/Footer';
import GoBack from '@/components/principal/goback';
import { TestListSection, TestAnalyticsCard, Test } from './components'; // Import types and sections
import { CustomTabButton, StyledSelect, ActionButton } from './ui-components';
import { useRouter } from 'next/navigation';

interface TestsPageProps {
	testType?: "BW Test" | "Assessment" | "Quiz";
}

// --- MAIN PAGE COMPONENT ---
export default function TestsPage({ testType = "BW Test" }: TestsPageProps) {

	const testLabel = () => {
		switch (testType) {
			case "BW Test":
				return "Test";
			case "Assessment":
				return "Assessment";
			case "Quiz":
				return "Quiz";
			default:
				return "Test";
		}
	}

	const TABS = (label: string): string[] => [
		`Scheduled ${label}`,
		`Completed ${label}`,
		"Saved"
	];

	const label = testLabel();
	const tabs = TABS(label);

	// --- Sample Data (defined in page for clarity) ---
	const scheduledTests: Test[] = [
		{ id: 's1', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's2', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's3', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's4', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's5', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 29, 2025', status: 'Ongoing' },
		{ id: 's6', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 29, 2025', status: 'Ongoing' },
		{ id: 's7', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's8', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 's9', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
	];
	const completedTests: Test[] = [
		{ id: 'c1', title: `${label} Title`, batch: 'Batch 1', date: 'planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40 },
		{ id: 'c2', title: `${label} Title`, batch: 'Batch 1', date: 'planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40 },
		{ id: 'c3', title: `${label} Title`, batch: 'Batch 1', date: 'planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40 },
		{ id: 'c4', title: `${label} Title`, batch: 'Batch 1', date: 'planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40 },
	];
	const savedTests: Test[] = [
		{ id: 'v1', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v2', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v3', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v4', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v5', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v6', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v7', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
		{ id: 'v8', title: `${label} Title`, batch: 'Batch 1', date: 'Scheduled for May 28, 2025' },
	];


	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

	const getTestsForActiveTab = () => {
		switch (activeTab) {
			case `Scheduled ${label}`: return scheduledTests;
			case `Completed ${label}`: return completedTests;
			case 'Saved': return savedTests;
			default: return [];
		}
	};

	const getTestType = (): "scheduled" | "completed" | "saved" => {
		switch (activeTab) {
			case `Scheduled ${label}`: return "scheduled";
			case `Completed ${label}`: return "completed";
			case 'Saved': return "saved";
			default: return "saved";
		}
	}

	const Router = useRouter();

	return (
		<div className="min-h-screen bg-[#eeeeee] flex flex-col">
			<Header activeState='Dashboard' />
			<GoBack GoBackHeading='' />
			<main className="flex-grow w-full max-w-[96rem] mx-auto p-2 sm:p-6">
				<div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6">

					{/* Re-architected layout using a responsive grid */}
					<div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-7 lg:gap-4">

						{/* Left Column Content (Takes 5/7 space on desktop) */}
						<div className="lg:col-span-5 space-y-6">
							<div className="flex flex-col sm:flex-row h-fit justify-between items-center gap-4">
								<div className="flex flex-wrap gap-3 sm:gap-6 w-full">
									{tabs.map(tab => (
										<CustomTabButton key={tab} label={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />
									))}
								</div>
								<div className="w-full sm:w-auto">
									<StyledSelect
										defaultValue="all"
										placeholder="All Batches"
										items={[{ value: "all", label: "All Batches" }, { value: "batch1", label: "Batch 1" }]}
									/>
								</div>
							</div>
							<div className='h-245 overflow-auto custom-scrollbar-thin pr-2'>
								<TestListSection tests={getTestsForActiveTab()} type={getTestType()} testType={testType} />
							</div>
						</div>

						{/* Right Column Content (Takes 2/7 space on desktop) */}
						<div className="lg:col-span-2 space-y-4">
							<div className='w-full flex justify-end'>
								<ActionButton onClick={()=>{
									Router.push(`/b2c-teacher/teacher-flow/create-${testType === "BW Test" ? "test" : testType.toLowerCase()}`)
								}} className='sm:px-4 sm:py-7 flex gap-1'>Create {testType}</ActionButton>
							</div>
							<TestAnalyticsCard complete={2} incomplete={1} totalTests={20} averageScore="15%" testType={testType} />
						</div>

					</div>

				</div>
			</main>
			<Footer />
		</div>
	)
}