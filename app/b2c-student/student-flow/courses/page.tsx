import FooterNew from "@/components/footer3";
import StudentWrapper from "@/components/student-wrapper";
import CoursesPage from "@/components/student/home/course-page";

export default function AllCourses() {
  return (
    <StudentWrapper activeState="Courses List">
      <div className="bg-[#EEEEEE]">
        <CoursesPage className="pb-70" />

        <FooterNew />
      </div>
    </StudentWrapper>
  );
}
