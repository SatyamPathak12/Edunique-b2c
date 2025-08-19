import AttendenceBanner from "@/components/b2c-admin/common-component/AttendenceBanner";
import TeacherTable from "./TeacherTable";
import BackButton from "@/components/common-components/BackButton";
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";


const TeacherAttendence = () => {
  return (
    <>
    <BackButton Heading="Teacher Attendance" />
      <AdminB2CWrapper>
        <AttendenceBanner button1='Class 8A' button2='Group A' profileImage='/teacher-b2b/profile2.png' name="Student Name" />
        <TeacherTable />
      </AdminB2CWrapper>
    </>
  )
}

export default TeacherAttendence;