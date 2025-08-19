import BackButton from "@/components/common-components/BackButton";
import Header from "@/components/layout/TeacherB2CHeader";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import CourseStudent from "./CourseComponent";
import Footer from "@/components/layout/Footer";

const CourseName = () => {
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg", // UPDATE THIS PATH
    };
    return (
        <>
            <Header activeState="Students" />
            <BackButton Heading="Course Name" />
            <TeacherB2CWrapper>
                <CourseStudent />
            </ TeacherB2CWrapper>
            <Footer />
        </>
    )
}

export default CourseName;