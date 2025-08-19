import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import AttendanceCourseCard from "./CourseCard";
import BackButton from "@/components/common-components/BackButton";

const AttendanceCourse = () => {
    return (
        <>
        <BackButton Heading="Attendance" />
            <AdminB2CWrapper>
                <AttendanceCourseCard />
            </AdminB2CWrapper>
        </>
    )
}

export default AttendanceCourse;