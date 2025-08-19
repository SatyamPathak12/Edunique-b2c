
"use client";

import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Activity } from './components'; // Import Activity type if needed for state
import {
	StudentProfileCard,
	LearningActivitiesSection,
	ClassesSummaryCard,
	YourTeachersCard,
	NotificationsCard
} from './components';
import StudentNavbarNew from '@/components/student-navbar-new';

// --- Sample Data ---
const studentData = {
	name: 'Shlok Agheda', role: 'Student', class: 'Class 8A', group: 'Group A',
	avatar: '/images/person.jpg', avatarSrc: '/images/person.jpg',
	gender: 'Male', dob: '15 Jun 2015', email: 'example@gm.com', contact: '+91 1234567890',
	city: 'Mumbai', state: 'Maharashtra', dmitScore: 50, assessmentReportDate: 'June 2025',
	objective: "The assessment provides a holistic understanding of the student's standing across three critical areas: academics, brain development, and personality growth. It helps in identifying strengths and gaps to guide personalized strategies and long-term development.",
	focusAreas: ['Academics', 'Personality Development', 'Brain Development'],
};
const classStatsData = {
	month: 'June 2025', complete: 2, total: 20, incomplete: 1,
	attendance: '15%', grade: '3.5', leaderBoardRank: 'Rank 5',
};
const teachersData = [
	{ id: 1, name: 'Anita Sharma', subject: 'Math', avatarSrc: '/teacher-avatar-1.jpg' },
	{ id: 2, name: 'Pooja Menon', subject: 'Science', avatarSrc: '/teacher-avatar-2.jpg' },
	{ id: 3, name: 'Ritika Joshi', subject: 'English', avatarSrc: '/teacher-avatar-3.jpg' },
];
const learningActivitiesData: Activity[] = [ // Use the imported Activity type
	{ id: 1, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'join' },
	{ id: 2, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
	{ id: 3, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'join' },
	{ id: 4, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
	{ id: 5, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
	{ id: 6, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'join' },
	{ id: 7, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
	{ id: 8, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
	{ id: 9, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
	{ id: 10, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
	{ id: 11, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
	{ id: 12, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
	{ id: 13, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
	{ id: 14, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'completed' },
];
const notificationsData = [
	{ id: 1, title: 'Notification Title', message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem', date: '20/5/25' },
	{ id: 2, title: 'Notification Title', message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem', date: '20/5/25' },
	{ id: 3, title: 'Notification Title', message: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem', date: '20/5/25' },
];

export default function StudentDashboardPage() {
	const [learningActivityFilter, setLearningActivityFilter] = useState<'Active' | 'Completed'>('Active');
	const [currentLearningDate, setCurrentLearningDate] = useState('June 2025'); // Example state


	// Dummy date navigation handlers
	const handleLearningDatePrev = () => { setCurrentLearningDate("May 2025"); console.log("Prev Learning Month"); };
	const handleLearningDateNext = () => { setCurrentLearningDate("July 2025"); console.log("Next Learning Month"); };
	// const handleClassDatePrev = () => { setCurrentClassDate("May 2025"); console.log("Prev Class Month"); };
	// const handleClassDateNext = () => { setCurrentClassDate("July 2025"); console.log("Next Class Month"); };

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<StudentNavbarNew />
			<main className="container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 flex-grow">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
					<div className="lg:col-span-2 space-y-4 md:space-y-6">
						<StudentProfileCard studentData={studentData} />
						<LearningActivitiesSection
							activities={learningActivitiesData}
							currentFilter={learningActivityFilter}
							onFilterChange={setLearningActivityFilter}
							currentDate={currentLearningDate}
							onDatePrev={handleLearningDatePrev}
							onDateNext={handleLearningDateNext}
						/>
					</div>
					<div className="lg:col-span-1 space-y-4 md:space-y-6 flex flex-col">
						<ClassesSummaryCard
							classStats={classStatsData}
						// onDatePrev={handleClassDatePrev}
						// onDateNext={handleClassDateNext}
						/>
						<YourTeachersCard teachers={teachersData} />
						<NotificationsCard notifications={notificationsData} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}