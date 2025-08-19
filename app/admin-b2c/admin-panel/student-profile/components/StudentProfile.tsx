"use client"
import PrincipalChatrsReport from '@/components/principal/principal-charts-report'
import React, { useState } from 'react'
import Image from 'next/image'

import { FaRegStar, FaStar } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import StudentPanel from './StudentControlPanel'
import Link from 'next/link'
import ProfileSettingsStudentPopup from '@/app/admin-b2c/pop-ups-2/components/profileSettingStudent'
import AllotCoursePopup from '@/app/admin-b2c/pop-ups-2/components/allotNewCourse'
import SuggestionPopup from '../../pop-ups/send-suggestion/page'

interface CourseCardProps {
	image: string
	rating: number
	courseName: string
	teacherName: string
	teacherRole: string
	teacherImage: string
}

const CourseCard: React.FC<CourseCardProps> = ({ image, rating, courseName, teacherName, teacherRole, teacherImage }) => {
	return (
		<div className="w-full rounded-2xl bg-white border border-gray-200">
			<div className="relative w-full h-56 p-2 rounded-2xl">
				<div className="relative w-full h-full rounded-2xl overflow-hidden">
					<Image src={image} alt="Course Image" fill className="object-cover rounded-2xl" />
					<div className="absolute top-2 right-2 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1">
						{rating} <FaStar className="text-yellow-400" />
					</div>
				</div>
			</div>

			<div className="p-4 space-y-2">
				<h2 className="text-base font-semibold text-black">{courseName}</h2>
				<div className="flex items-center gap-3 mt-2">
					<Image src={teacherImage} alt="Teacher" width={36} height={36} className="rounded-full object-cover" />
					<div>
						<h3 className="text-sm font-semibold text-black">{teacherName}</h3>
						<p className="text-xs text-pink-500">{teacherRole}</p>
					</div>
					<div className="ml-auto flex items-center gap-0.5 text-yellow-400">
						{[...Array(4)].map((_, i) => (
							<FaStar key={i} className="w-3.5 h-3.5" />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const StudentProfile = () => {
	const [editPopup, setEditPopup] = useState(false);
	const [suggetionPopup, setSuggestionPopup] = useState(false);
	const [coursePopup, setCoursePopup] = useState(false);
	const PALETTE = {
		GREEN_LIGHT: '#8DD9B3', // Basic Academic Skills BG
		GREEN_DARK: '#4BC4B6', // Not explicitly used but similar to progress bar
		PURPLE_LIGHT: '#EEDAFE', // Critical Academic Skills BG
		PURPLE_DARK: '#A866DD', // Critical Academic Skills Progress
		PINK_LIGHT: '#FBD2D9', // Life Skill / Personal Dev BG
		PINK_DARK: '#893544', // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

		ACCENT_PINK: '#FF3366', // Tags, highlights
		ACCENT_BLUE: '#0DC6FD', // Line chart, progress
		ACCENT_PURPLE: '#AC50F5', // Line chart, progress
		ACCENT_RED: '#FF4A69', // Failed status

		BG_PAGE: '#F3F4F6', // Main page background
		BORDER_GREY: '#B0B0B0', // General borders for cards
		TEXT_DARK: '#1F2937', // For primary text
		TEXT_MEDIUM: '#6B7280', // For secondary text
		TEXT_LIGHT: '#9CA3AF', // For tertiary text
		WHITE_CARD: '#FFFFFF',
	}
	const keyFocusAreas = ['Academics', 'Personality Development', 'Brain Development']
	type Person = {
		name: string
		subject: string
		image: string
	}
	const Teachers: Person[] = Array.from({ length: 4 }, () => ({
		name: 'Name',
		subject: 'Subject',
		image: '/principal/manage.jpg',
	}))

	const courses = Array.from({ length: 6 }, (_, i) => ({
		id: i,
		image: '/principal/principal-student-progress.png', // update path
		rating: 4.2,
		courseName: 'Course Name',
		teacherName: 'Mr. Ranvir Ahuja',
		teacherRole: 'Teacher',
		teacherImage: '/teacher-avatar-3.jpg', // update path
	}))
	return (
		<>
			<div className="w-full">

				<div className="p-2 md:p-4 rounded-2xl gap-6 bg-[url('/principal/dashboard-pattern.png')] bg-repeat bg-[length:650px_650px]">
					{/* Student Info Card */}
					<div className=" rounded-2xl"
						style={{
							borderColor: PALETTE.BORDER_GREY,
						}}>
						<div className="flex flex-col w-full justify-center sm:flex-row sm:justify-between px-4 py-2 bg-white border border-gray-200 rounded-2xl sm:items-center gap-4">
							<div className="flex items-center flex-wrap relative gap-4">
								<Image
									src="/teacher-b2b/profile2.png"
									alt="Shlok Agheda"
									width={72}
									height={72}
									className="rounded-full h-24 w-24 flex-shrink-0"
								/>
								<div className="flex-grow relative">
									<div className=" max-w-52 md:max-w-60 relative">
										<h2 className="text-xl font-semibold" style={{ color: PALETTE.TEXT_DARK }}>
											Student Name
										</h2>
										<div className="rounded-full top-0 -sm:top-[100%] border border-gray-200 p-1 block md:hidden bg-[#f9fafb] absolute right-0 -md:right-10"
											onClick={() => setEditPopup(true)}>
											<IoSettingsOutline size={20} />
										</div>
									</div>
									<div className="rounded-full top-0 -sm:top-[100%] border border-gray-200 p-1 hidden md:block bg-[#f9fafb] absolute -right-10"
										onClick={() => setEditPopup(true)}>
										<IoSettingsOutline size={20} />
									</div>
									<div className="flex flex-wrap items-center relative gap-1 mt-2">

										<span
											className="text-sm font-medium px-2.5 py-1.5 rounded-l-full"
											style={{
												backgroundColor: PALETTE.ACCENT_PINK,
												color: PALETTE.WHITE_CARD,
											}}>
											Course Name
										</span>
										<span
											className="text-sm font-meduim px-2.5 py-1.5 rounded-r-full"
											style={{
												backgroundColor: PALETTE.ACCENT_PINK,
												color: PALETTE.WHITE_CARD,
											}}>
											Course Name
										</span>
									</div>
								</div>

							</div>
							<div className="text-base gap-x-8 md:gap-y-2 flex flex-col md:flex-row items-start md:items-center space-y-0.5 text-black">
								<div className="flex flex-col gap-1">
									<p className='text-sm md:text-base'><strong className="font-semibold">City:</strong>{" "}Mumbai</p>
									<p className='text-sm md:text-base'><strong className="font-semibold">State:</strong>{" "}Maharashtra</p>
								</div>
								<div className="flex flex-col gap-1">
									<p className='text-sm md:text-base'><strong className="font-semibold">Gender:</strong>{" "}Male</p>
									<p className='text-sm md:text-base'><strong className="font-semibold">DOB:</strong>{" "}15 Jun 2015</p>
								</div>
							</div>
						</div>

						<div className="bg-white p-4 mt-4 rounded-2xl border border-gray-200">
							<h2 className="font-semibold text-sm mb-3">Parent / Guardian Details</h2>

							<div className="flex flex-wrap gap-4 items-center justify-between">
								{/* Info Blocks */}
								<div className="flex flex-wrap gap-4 flex-1 min-w-[300px]">
									<div className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm w-40 text-gray-600">
										Name
									</div>
									<div className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm w-44 text-gray-600">
										+91 0000000000
									</div>
									<div className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm w-52 text-gray-600 truncate">
										example@gm.com
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-wrap gap-3 mt-4 md:mt-0">
									<button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
									onClick={() => setSuggestionPopup(true)}>
										<FaRegStar className="text-yellow-400" />
										Give Suggestion
									</button>
									<button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50">
										<FiMail className="text-[#FF3366]" />
										Mail to Parents
									</button>
									<button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
									onClick={() => setCoursePopup(true)}>
										<HiOutlineBookOpen className="text-[#3366FF]" />
										Allot a Course
									</button>
								</div>
							</div>
						</div>

						<div className="pt-4 bg-white rounded-2xl border px-4 pt-4 pb-2 border-gray-200 mt-4">
							<p className="text-sm font-bold mb-3" style={{ color: PALETTE.TEXT_DARK }}>
								Key Focus Area
							</p>
							<div className="flex flex-wrap gap-4">
								{keyFocusAreas.map(area => (
									<button
										key={area}
										className="text-xs px-2 py-2.5 text-black rounded-full border"
										style={{
											backgroundColor: '#F3F4F6',
										}}>
										{area}
									</button>
								))}
							</div>
						</div>
						<div className="bg-white border px-4 pt-2 rounded-2xl pb-1 border-gray-200 mt-4">
							<h2 className="my-2 text-sm font-bold">Assigned Teachers</h2>
							<div className="flex flex-wrap gap-4 items-stretch">
								{Teachers.map((card, index) => (
									<Link href={"/admin-b2c/admin-panel/teacher-profile"} className="py-2 pr-16 pl-2 bg-gray-100 flex items-center gap-4 rounded-2xl border-gray-200" key={index}>
										<Image className="rounded-xl" src={card.image} width={80} height={80} alt={card.name} />
										<div className="">
											<h2 className="font-medium">{card.name}</h2>
											<p className={`text-[${PALETTE.ACCENT_PINK}]`}>{card.subject}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
						<div className=""><StudentPanel /></div>
					</div>
				</div>
			</div>
			<div className="my-2 mx-4 rounded-2xl bg-[#f1f1f2] border px-3 py-2">
				<h2 className={`text-[${PALETTE.ACCENT_PINK}] font-bold text-m`}>Active Courses</h2>
				<div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 ">
					{courses.map((course, index) => (
						<div key={index} className="min-w-[325px]">
							<CourseCard {...course} />
						</div>
					))}
				</div>
			</div>
			<PrincipalChatrsReport />
			<ProfileSettingsStudentPopup onClose={() => setEditPopup(false)} isOpen={editPopup} />
			<SuggestionPopup onClose={() => setSuggestionPopup(false)} isOpen={suggetionPopup} />
				<AllotCoursePopup onClose={() => setCoursePopup(false)} isOpen={coursePopup} />
		</>
	)
}

export default StudentProfile
