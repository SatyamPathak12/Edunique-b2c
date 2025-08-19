'use client'

import { useState } from 'react'
import Header from '@/components/b2c-phase-3/student-navbar-new'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

// --- Recording Card Component ---
interface Recording {
	id: string
	imageSrc: string
	category: string // e.g., "PERSONALITY DEVELOPMENT"
	topicName: string
	classInfo: string // e.g., "Class"
	boardInfo: string // e.g., "Board"
	duration: string // e.g., "00 hrs : 00 mins"
}

const RecordingCard = ({ recording }: { recording: Recording; onDelete: (id: string) => void }) => (
	<div className="bg-white rounded-2xl overflow-hidden flex flex-col group">
		<div className="relative">
			<Image
				src={recording.imageSrc}
				alt={recording.topicName}
				width={256}
				height={256} // Adjust aspect ratio as needed
				className="w-full h-44 object-fill group-hover:scale-105 transition-transform duration-300"
			/>
		</div>
		<div className="flex gap-4 items-center justify-between">
			<div className="p-4 flex-grow flex flex-col">
				<h3 className="text-md font-semibold text-gray-800 mb-1">{recording.topicName}</h3>
				<p className="text-sm text-gray-500">{recording.classInfo}</p>
				<p className="text-sm text-gray-500 mt-1">{recording.boardInfo}</p>
				<p className="text-xs text-gray-500  mt-0.5">{recording.duration}</p>
			</div>
			<svg width={40} height={41} viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect y="0.5" width={50} height={50} rx={25} fill="#FF3366" fillOpacity="0.1" />
				<path d="M16 19.5H18H34" stroke="#FF3366" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M32 19.5V33.5C32 34.0304 31.7893 34.5391 31.4142 34.9142C31.0391 35.2893 30.5304 35.5 30 35.5H20C19.4696 35.5 18.9609 35.2893 18.5858 34.9142C18.2107 34.5391 18 34.0304 18 33.5V19.5M21 19.5V17.5C21 16.9696 21.2107 16.4609 21.5858 16.0858C21.9609 15.7107 22.4696 15.5 23 15.5H27C27.5304 15.5 28.0391 15.7107 28.4142 16.0858C28.7893 16.4609 29 16.9696 29 17.5V19.5"
					stroke="#FF3366"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	</div>
)

// --- Sample Data Grouped by Date ---
interface RecordingsByDate {
	date: string // e.g., "20 May 2025"
	recordings: Recording[]
}

const initialRecordingsData: RecordingsByDate[] = [
	{
		date: 'Date', // This should be a dynamic date, e.g., "20 May 2025"
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_a_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
	{
		date: 'Date', // This should be a dynamic date
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_b_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
	{
		date: 'Date', // This should be a dynamic date
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_c_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
]

export default function RecordingsPage() {
	const [recordingsByDate, setRecordingsByDate] = useState<RecordingsByDate[]>(initialRecordingsData)

	// Dummy user for Header
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/teacher-b2b/profile.png', // UPDATE PATH
	}

	const handleDeleteRecording = (id: string) => {
		console.log('Deleting recording with ID:', id)
		// In a real app, you would:
		// 1. Call an API to delete the recording from the backend.
		// 2. On success, update the local state to remove the recording from the UI.
		setRecordingsByDate(
			prevData =>
				prevData
					.map(dateGroup => ({
						...dateGroup,
						recordings: dateGroup.recordings.filter(rec => rec.id !== id),
					}))
					.filter(dateGroup => dateGroup.recordings.length > 0) // Remove date group if empty
		)
	}

	return (
		<>
			<Header  activeState='Recordings'/>
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">

			<main className="container p-4 max-w-[90vw] sm:p-6 lg:p-8 bg-white m-6 mx-auto rounded-2xl">
				{' '}
				{/* Increased padding */}
				{recordingsByDate.length === 0 ? (
					<div className="text-center py-20">
						<p className="text-gray-500 text-lg">No recordings found.</p>
					</div>
				) : (
					recordingsByDate.map((dateGroup, index) => (
						<section key={index} className=" mb-12">
							<h2 className="text-xl  font-semibold text-black mb-6">{dateGroup.date}</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{dateGroup.recordings.map(recording => (
									<RecordingCard key={recording.id} recording={recording} onDelete={handleDeleteRecording} />
								))}
							</div>
						</section>
					))
				)}
			</main>

			<Footer />
		</div>
		</>
	)
}
