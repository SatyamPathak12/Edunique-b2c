import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper"
import TeacherProfile from "./Profile"
import BackButton from "@/components/common-components/BackButton";

const TeacherProfileManagement = () => {
    return (
        <>  
            <BackButton Heading="Profile Management" />
            <AdminB2CWrapper>
                <TeacherProfile />
            </AdminB2CWrapper>
        </>
    )
}

export default TeacherProfileManagement;