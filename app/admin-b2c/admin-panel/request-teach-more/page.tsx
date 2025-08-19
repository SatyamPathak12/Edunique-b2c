import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import BackButton from "@/components/common-components/BackButton";
import TeachMoreCourseComponent from "./TeachMoreComponent";

const TeachMore = () => {
    return (
        <>
        <BackButton Heading="Teacher Request Tracker"/>
        <AdminB2CWrapper>
           <div className="bg-white rounded-2xl p-4">
             <TeachMoreCourseComponent />
           </div>
        </AdminB2CWrapper>
        </>
    )
}

export default TeachMore;