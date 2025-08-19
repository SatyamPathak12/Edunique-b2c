import GoBack from '@/components/principal/goback';
import React from 'react'
import CourseManagement from './ManageComponent';
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';

const Managements = () => {
  return (
    <>
      <GoBack GoBackHeading="Course Name" />
      <AdminB2CWrapper>
        <CourseManagement />
      </AdminB2CWrapper>
    </>
  )
}

export default Managements;