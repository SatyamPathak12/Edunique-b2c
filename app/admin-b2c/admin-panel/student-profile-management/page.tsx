import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper"
import StudentProfile from "./Profile"
import BackButton from "@/components/common-components/BackButton";

const StudentProfileManagement = () => {
    return (
        <>  
            <BackButton Heading="Profile Management" />
            <AdminB2CWrapper>
                <StudentProfile />
            </AdminB2CWrapper>
        </>
    )
}

export default StudentProfileManagement;