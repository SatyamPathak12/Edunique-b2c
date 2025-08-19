import StudentB2CWrapper from "@/components/b2c-student/common-components/StudentB2CWrapper";
import BackButton from "@/components/common-components/BackButton";
import Footer from "@/components/layout/Footer";
import StudentNavbarNew from "@/components/student-navbar-new";
import ChartsReportTeacherB2C from "@/components/teacher-b2c/common-components/ChartB2CTeacher";

export default function Report() {
	return (
		<>
		<StudentNavbarNew />
		<BackButton Heading="Report" />
		<StudentB2CWrapper>
			<ChartsReportTeacherB2C />
		</StudentB2CWrapper>
		<Footer />
		</>
	)
}

