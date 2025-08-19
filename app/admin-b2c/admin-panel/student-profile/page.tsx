import BackButton from '@/components/common-components/BackButton'
import StudentProfile from './components/StudentProfile'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper'

const SchoolProfile = () => {
	return (
		<>
			<BackButton Heading="Student Profile" />
			<AdminB2CWrapper>
				<StudentProfile />
			</AdminB2CWrapper>
		</>
	)
}

export default SchoolProfile
