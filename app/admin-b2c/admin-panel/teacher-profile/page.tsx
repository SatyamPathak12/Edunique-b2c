import ChartsReport from '@/components/b2c-admin/charts'
import CourseSection from '@/components/b2c-admin/course-section'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import TeacherCard from '@/components/b2c-admin/teacher-card'
import TeacherControlPanel from '@/components/b2c-admin/teacher-control-panel'
import BackButton from '@/components/common-components/BackButton'

export default function page() {
	return (
		<div>
			<BackButton Heading="Teacher Profile" />
			<div className='p-4'>
			<MaxWidthWrapper>
				<main className="flex-grow w-full max-w-[90rem] mx-auto  ">
					<div className="space-y-4 ">
						<TeacherCard />
						<TeacherControlPanel />
						<CourseSection />
						<ChartsReport />
					</div>
				</main>
			</MaxWidthWrapper></div>
		</div>
	)
}
