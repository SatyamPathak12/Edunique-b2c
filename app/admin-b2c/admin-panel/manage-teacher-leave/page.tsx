import BackButton from "@/components/common-components/BackButton";
import TeacherLeave from "./TeacherLeave";
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";

const ManageTeacherLeave = () => {
    return (
        <>
            <BackButton Heading="Manage Staff Leave" />
            <AdminB2CWrapper>
                <TeacherLeave />
            </AdminB2CWrapper>
        </>
    )
}

export default ManageTeacherLeave;