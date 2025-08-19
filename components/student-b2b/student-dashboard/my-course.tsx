'use client'

// import { useState } from 'react';
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// Assuming no specific icons from react-icons are directly used in the cards for this design.

// --- Course Card Component ---
interface Course {
	id: number
	status: 'ongoing' | 'upcoming' | 'completed'
	imageSrc: string
	category?: string // e.g., "PERSONALITY DEVELOPMENT"
	name: string
	domain: string
	levelGrade: string
	pendingClasses?: string // "2 out of 16"
	validity?: string // "1/6/25"
	progress?: number // 0-100 for ongoing/completed
	isKnowledgeBox?: boolean
	description?: string
}

const CourseCard = ({ course }: { course: Course }) => {
	const isOngoing = course.status === 'ongoing'
	const isUpcoming = course.status === 'upcoming'
	const isCompleted = course.status === 'completed'

	if (course.isKnowledgeBox) {
		return (
			<div className="bg-[#F9FAFB] border-[#E5E7EB] border rounded-2xl p-3 flex flex-col h-full hover:shadow-xl cursor-pointer">
				<div className="w-full  rounded-xl flex items-center justify-center mb-4">
					<Image src={course.imageSrc} alt={course.name} width={932} height={460} />
				</div>
				<h3 className="text-xl font-bold text-black mb-1">{course.name}</h3>
				<p className="text-sm text-[#6B7280] w-[30ch] tracking-wide">{course.description}</p>
			</div>
		)
	}

	return (
		<div className="bg-[#F9FAFB] border-[#E5E7EB] border rounded-2xl p-3 flex flex-col h-full hover:shadow-xl cursor-pointer">
			<Image src={course.imageSrc} alt={course.name} width={932} height={460} />
			<div className="flex flex-col flex-grow mt-2">
				<h3 className="text-xl font-bold text-black my-2">{course.name}</h3>
				<p className="text-sm text-[#6B7280]">
					<span className="text-black">Domain:</span> {course.domain}
				</p>
				<p className="text-sm text-gray-500">
					<span className="text-black">Level / Grade:</span> {course.levelGrade}
				</p>
				{isOngoing && course.pendingClasses && (
					<p className="text-sm text-gray-500">
						<span className="text-black">Pending Class:</span> {course.pendingClasses}
					</p>
				)}
				{isUpcoming && course.validity && (
					<p className="text-xs text-gray-500">
						<span className="font-medium text-black">Validity to start from:</span> {course.validity}
					</p>
				)}
				{isCompleted &&
					course.pendingClasses && ( // Assuming completed also shows this info
						<p className="text-xs text-gray-500">
							<span className="font-medium text-black">Pending Class:</span> {course.pendingClasses}
						</p>
					)}

				<div className="mt-auto pt-3">
					{(isOngoing || isCompleted) && typeof course.progress === 'number' && (
						<div className="mb-2 p-2 rounded-3xl bg-[#F3F4F6] items-center flex justify-start gap-3">
							<div className="w-[55%]  rounded-full">
								<div
									className={`h-3 rounded-full ${isCompleted ? 'bg-[#8DD9B3]' : 'bg-blue-500'}`}
									style={{ width: `${course.progress}%` }}></div>
							</div>
							<p className="text-xs text-[#6B7280] text-right ">
								{course.progress}% {isCompleted ? 'Completed' : ''}
							</p>
						</div>
					)}
					{isUpcoming && (
						<button className="w-full bg-blue-600 text-white text-sm font-medium py-2.5 rounded-3xl hover:bg-blue-700 transition-colors">
							Start
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

// --- Sample Data ---
const ongoingCourses: Course[] = [
	{
		id: 1,
		status: 'ongoing',
		isKnowledgeBox: true,
		imageSrc: '/C1.png',
		name: 'My Knowledge Box',
		description: 'Explore subjects like Academics, Sports & more',
		domain: '',
		levelGrade: '',
	}, // UPDATE PATH
	{
		id: 2,
		status: 'ongoing',
		imageSrc: '/C2.png',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		pendingClasses: '2 out of 16',
		progress: 70,
	}, // UPDATE PATH
	{
		id: 3,
		status: 'ongoing',
		imageSrc: '/C2.png',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		pendingClasses: '2 out of 16',
		progress: 70,
	}, // UPDATE PATH
]

const upcomingCourses: Course[] = [
	{
		id: 4,
		status: 'upcoming',
		imageSrc: '/course-image-personality.jpg',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		validity: '1/6/25',
	},
	{
		id: 5,
		status: 'upcoming',
		imageSrc: '/course-image-personality.jpg',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		validity: '1/6/25',
	},
]

const completedCourses: Course[] = [
	{
		id: 6,
		status: 'completed',
		imageSrc: '/course-image-personality.jpg',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		pendingClasses: '2 out of 16',
		progress: 100,
	},
	{
		id: 7,
		status: 'completed',
		imageSrc: '/course-image-personality.jpg',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		pendingClasses: '2 out of 16',
		progress: 100,
	},
	{
		id: 8,
		status: 'completed',
		imageSrc: '/course-image-personality.jpg',
		category: 'PERSONALITY DEVELOPMENT',
		name: 'Course Name',
		domain: 'Self Dev.',
		levelGrade: 'Grade 4',
		pendingClasses: '2 out of 16',
		progress: 100,
	},
]

export default function MyCoursePage() {
	// Sample user data for the Header
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
	}
	// const [newsletterEmail, setNewsletterEmail] = useState('');
	// const handleNewsletterSubmit = (e: React.FormEvent) => {
	//     e.preventDefault();
	//     console.log("Newsletter Subscription:", newsletterEmail);
	//     setNewsletterEmail('');
	// };

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl my-6">
				{/* Ongoing Courses */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold text-black mb-6">Ongoing</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{ongoingCourses.map(course => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</section>

				{/* Upcoming Courses */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold text-black mb-6">Upcoming</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{upcomingCourses.map(course => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</section>

				{/* Completed Courses */}
				<section className="mb-12">
					<div className="flex items-center gap-2 mb-6">
						<h2 className="text-xl font-semibold text-[#00B060]">Completed</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{completedCourses.map(course => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</section>

				{/* AI Suggests Section */}
				<section
					className="rounded-3xl px-8 py-4 md:px-12 text-black relative overflow-hidden bg-black/10" // Main pink background
					style={{
						backgroundImage: 'url(/images/ai-suggests-bg-pattern.png)', // UPDATE PATH for pattern
						backgroundRepeat: 'repeat',
						backgroundSize: 'auto',
						backgroundPosition: 'center',
					}}>
					<div className="flex gap-8 items-center relative z-10 ">
						{/* Text Content */}
						<div className="text-center md:text-left relative z-10">
							<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
								<h2 className="text-3xl tracking-wider md:text-4xl font-bold">AI suggests</h2>
								{/* Sparkle icon - using a simple SVG or you can find a react-icon */}
								<Image src="/star.png" alt="star" width={180} height={180} className="w-16" />
							</div>
							<p className="text-sm opacity-90 mb-8 w-[38ch]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet.
								Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius.
							</p>
							<button className="px-22 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-pink-600 transition-colors">
								Explore More
							</button>
						</div>
						{/* Image Carousel/Grid */}
						<div className="py-4 overflow-hidden relative rounded-2xl z-20">
							<Image
								src="/AI.png"
								alt="star"
								width={1804}
								height={1148}
								className="max-w-[70%] rounded-2xl scale-110 ml-auto"
								priority
							/>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
