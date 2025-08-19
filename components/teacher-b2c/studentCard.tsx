'use client'

import Header from '@/components/layout/TeacherB2CHeader'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import MaxWidthWrapper from '../admin/max-width-wrapper'

import Link from 'next/link'
import TeacherB2CWrapper from './common-components/TeacherB2CPageWrapper'
export default function StudentCard() {


	const courses = [
		{
			image: '/personality.png',
			name: 'Course Name',
			batches: 5,
			students: 6,
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			batches: 5,
			students: 6,
		},
		{
			image: '/personality.png',
			name: 'Course Name',
			batches: 5,
			students: 6,
		},
	]

	return (
		<>
			<Header activeState='Students' />

			<TeacherB2CWrapper>
				<main className="p-4  bg-white my-4 lg:my-6  rounded-3xl min-h-screen">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4  justify-items-center">
						{courses.map((course, index) => (
							<div key={index} className="w-full ">
								<Link href={"/b2c-teacher/teacher-flow/course-name-students"} >
									<div key={index} className="flex flex-col gap-4 p-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl ">
										<div className="rounded-xl overflow-hidden">
											<Image src={course.image} width={280} height={250} alt={course.name} className="h-full w-full object-cover" />
										</div>
										<div className="flex flex-col gap-1 px-2 text-black">
											<h2 className="font-semibold text-lg">{course.name}</h2>
											<p className="text-md font-normal text-black">
												No. of Batches: <span className="text-[#6B7280]">{course.batches}</span>
											</p>
											<p className="text-sm font-normal text-black">
												No. of Students: <span className="text-[#6B7280]">{course.students}</span>
											</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</main>
			</TeacherB2CWrapper>
			<Footer />
		</>
	)
}
