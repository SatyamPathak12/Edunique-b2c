'use client'
import { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import MaxWidthWrapper from '../../components/admin/max-width-wrapper'
import ScrollableButton from './common-component/scrollable-button'
import AddCourseModal from '@/components/b2c-admin/add-course'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { FiSearch, FiChevronDown } from 'react-icons/fi'

export default function CourseManagementPage() {
	const [searchTerm, setSearchTerm] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const courses = [
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			domain: 'Self Dev',
		},
	]

	const PRIMARY_BLUE = '#3366FF'
	const INPUT_BG_SEARCH = 'bg-white'

	return (
		<div>
			<div className="py-2 px-4 sm:px-12 min-h-screen ">
				<main className="p-2 max-w-[90rem] sm:p-6 mx-auto bg-white my-6  rounded-3xl">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
						<div className="relative flex-grow">
							<FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2  h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
							<input
								type="text"
								placeholder="Search"
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								className={`w-full sm:min-w-96 pl-10 pr-4 py-2 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
							/>
						</div>

						<div className="flex items-center gap-2 overflow-x-auto no-scrollbar ">
							<Link href="/admin-b2c/admin-panel/remove-courses" passHref>
								<button className="flex items-center cursor-pointer justify-center gap-1.5 px-3 py-2 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-2xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors">
									Remove Course
								</button>
							</Link>
							<Link href="/admin-b2c/admin-panel/admin-course-management" passHref>
								<button
									className={
										'flex items-center cursor-pointer justify-center gap-1.5 px-3 py-2 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-2xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors'
									}>
									Edit Membership Plans
								</button>
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex font-normal items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9FAFB]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 1
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="rounded-2xl">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 2nd */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex font-normal items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 2
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="rounded-2xl">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 3rd */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex font-normal items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 3
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="rounded-2xl">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 4th */}
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-4">
						{courses.map((course, index) => (
							<Link href="/admin-b2c/admin-panel/course-management-teacher" key={index}>
								<div className="flex flex-col w-full max-h-[330px] px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl">
									<div className="w-full aspect-auto rounded-2xl overflow-hidden">
										<Image src={course.image} width={300} height={200} alt={course.name} className="w-full h-full object-cover" />
									</div>

									<div className="flex flex-col px-2  mt-2 text-black">
										<h2 className="font-semibold">{course.name}</h2>
										<h4 className="text-sm font-normal">
											Domain: <span className="text-[#6B7280]">{course.domain}</span>
										</h4>
									</div>
								</div>
							</Link>
						))}
					</div>
					<ScrollableButton onClick={() => setIsModalOpen(true)} ButtonHeading="Add Courses" />

					<AddCourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
				</main>
			</div>
		</div>
	)
}
