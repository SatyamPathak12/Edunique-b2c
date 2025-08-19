import GoBack from '@/components/principal/goback';
import React from 'react'
import AdminCourse from '@/components/b2c-admin/admincourse';
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';

const AdminCourseManagement = () => {
  return (
    <>
      <GoBack GoBackHeading="Edit Memeberships Plans" />
      <AdminB2CWrapper>
        <AdminCourse />
      </AdminB2CWrapper>
    </>
  )
}

export default AdminCourseManagement;