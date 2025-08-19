import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import BackButton from "@/components/common-components/BackButton";
import DropCourseComponent from "./DropCourse";
import DashboardOverview from "./DashboardComponent";

const DropCourse = () => {
    return (
        <>
            <BackButton Heading="Manage Your Course" />
            <AdminB2CWrapper>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                    <div className="bg-white rounded-2xl p-4">
                        <DropCourseComponent />
                    </div>
                    <DashboardOverview />
                </div>
            </AdminB2CWrapper>
        </>
    )
}

export default DropCourse;