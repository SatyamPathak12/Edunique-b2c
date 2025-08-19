import React from 'react'
import CourseLoginPage from "@/components/b2c-admin/course-login-activity"
import BackButton from '@/components/common-components/BackButton'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper'
export default function  page  () {
  return (
    <div>
      <AdminB2CWrapper>
        < CourseLoginPage/>
        </AdminB2CWrapper>
    </div>
  )
}