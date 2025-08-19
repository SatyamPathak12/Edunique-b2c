'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button' // Using shadcn Button
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

// Course type
interface Course {
	id: string
	title: string
	category: string
	image: string
	features: string[]
	teacher: {
		name: string
		image: string
	}
	priceRange: string
}

// Sample courses array
const courses: Course[] = [
	{
		id: 'academics',
		title: 'Academics',
		category: 'Science',
		image: '/student/home/acadmics.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'foundation',
		title: 'Foundation',
		category: 'Technology Programs',
		image: '/student/home/foundation.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'brain-development',
		title: 'Brain Development',
		category: 'Science',
		image: '/student/home/basic-dev.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'skill-development',
		title: 'Skill Development',
		category: 'Public speaking',
		image: '/student/home/learn-peace.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'stem-programs',
		title: 'STEM Programs',
		category: 'Technology Programs',
		image: '/student/home/learn-peace2.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'robotics',
		title: 'Robotics',
		category: 'Technology Programs',
		image: '/student/home/robotics.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'phonics',
		title: 'Phonics',
		category: 'English',
		image: '/student/home/phonics.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
	{
		id: 'personality-development',
		title: 'Personality Development',
		category: 'Public speaking',
		image: '/student/home/pers-dev.png',
		features: ['Customized Curriculums & Plans', 'Individualized Classes', 'Skill Development', 'Mentoring'],
		teacher: {
			name: 'Mrs. Sandeep Kaur',
			image: '/student/home/teacher.png',
		},
		priceRange: '₹2,000.00 - ₹5,000.00',
	},
]

// Types
type Category =
	| 'All'
	| 'Technology Programs'
	| 'Computer Science'
	| 'Science'
	| 'English'
	| 'Public speaking'
	| 'Chess'
	| 'AI Explorers'
	| 'Abacus'

interface Course {
	id: string
	title: string
	category: string
	image: string
	features: string[]
	teacher: {
		name: string
		image: string
	}
	priceRange: string
}

const categories: Category[] = ['All', ...(Array.from(new Set(courses.map(c => c.category))) as Category[])]

// Accept masked prop
export default function CoursesComponent({ masked, className = '' }: { masked?: boolean; className?: string }) {
	const [selectedCategory, setSelectedCategory] = useState<Category>('All')
	const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)

	const filteredCourses =
		selectedCategory === 'All' ? courses : courses.filter(course => course.category === selectedCategory)

	// If masked is false or undefined, limit to 8
	const visibleCourses = masked ? filteredCourses : filteredCourses.slice(0, 8)

	return (
		<div className={cn('relative min-h-screen w-full overflow-hidden bg-[#FFF8E8]', className)}>
			{/* Background */}
			<div
				className="absolute inset-0 bg-center bg-repeat z-0"
				style={{
					backgroundImage: "url('/Background2.png')",
					backgroundSize: '400px',
					filter: 'grayscale(10%) brightness(0.9) opacity(0.5) blur(0.5px)',
					opacity: 0.3,
				}}
			/>
			{!masked && <div className="absolute inset-0 bg-[#ffcc80] z-0 opacity-80 mix-blend-multiply" />}

			<div className="relative z-10 container mx-auto px-4 py-12">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
					{!masked && (
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#0A2342]">
							Explore EduNique Courses
						</h1>
					)}

					{/* Tabs */}
					<div className="overflow-x-auto pb-2">
						<Tabs defaultValue="All" className="w-full">
							<TabsList className="flex flex-nowrap mb-2 bg-transparent h-auto p-1 border-b border-pink-300">
								{categories.map(category => (
									<TabsTrigger
										key={category}
										value={category}
										onClick={() => setSelectedCategory(category)}
										className="px-4 py-2 whitespace-nowrap text-black data-[state=active]:bg-pink-100 data-[state=active]:text-pink-600 rounded-t-lg">
										{category}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>

					{masked && (
						<div className="w-full flex flex-wrap items-center justify-between gap-4 rounded-xl">
							<div className="flex gap-4">
								{/* Search Input */}
								<div className="flex-1 min-w-[400px]">
									<Input type="text" placeholder="Search" className="w-full" />
								</div>

								{/* Search Button */}
								<Button className="bg-pink-500 hover:bg-pink-600 text-white">Search</Button>
							</div>

							{/* Select Dropdown */}
							<div className="min-w-[180px] bg-white">
								<Select>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Class" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">Light</SelectItem>
										<SelectItem value="dark">Dark</SelectItem>
										<SelectItem value="system">System</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					)}

					{/* Courses */}
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{visibleCourses.map(course => (
							<motion.div
								key={course.id}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.9 }}
								whileHover={{ y: -5 }}
								onMouseEnter={() => setHoveredCourse(course.id)}
								onMouseLeave={() => setHoveredCourse(null)}>
								<Card className="h-full overflow-hidden border-none shadow-lg bg-white">
									<CardHeader className="p-0 relative">
										<div className="relative h-48 w-full overflow-hidden">
											<Image
												src={course.image}
												alt={course.title}
												className="w-full h-full object-cover transition-transform duration-300"
												style={{
													transform: hoveredCourse === course.id ? 'scale(1.05)' : 'scale(1)',
												}}
												width={1028}
												height={720}
											/>
											<div className="absolute top-0 left-0 bg-[#0A2342] text-white text-xs font-bold uppercase px-3 py-1 rounded-br-lg">
												{course.title}
											</div>
										</div>
									</CardHeader>

									<CardContent className="p-4">
										<h3 className="text-xl font-bold mb-3 text-[#0A2342]">{course.title}</h3>
										<ul className="space-y-2 mb-4">
											{course.features.map((feature, idx) => (
												<li key={idx} className="flex items-start">
													<Check className="h-5 w-5 text-green-500 mr-2" />
													<span className="text-sm text-gray-600">{feature}</span>
												</li>
											))}
										</ul>

                    <div className="flex items-center mt-4">
                      <Image
                        src={course.teacher.image}
                        alt={course.teacher.name}
                        width={300}
                        height={300}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-xs text-gray-500">Teacher</p>
                        <p className="text-sm font-medium">
                          {course.teacher.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>

									<CardFooter className="flex justify-between items-center p-4 pt-0 border-t border-gray-100">
										<div className="text-sm font-medium text-pink-600">{course.priceRange}</div>
										<Button size="sm">Enroll Now</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>

					{/* View All Button */}
					{!masked && (
						<div className="flex justify-center mt-10">
							<Link href="/courses" passHref>
								<div className="flex justify-center mt-8">
									<Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3" size="lg">
										View All
									</Button>
								</div>
							</Link>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	)
}
