import GoBack from '@/components/principal/goback';
import StudentDashboard from '@/components/b2c-admin/student-dashboard';
import React from 'react'

const student = () => {
  return (
    <>
      <GoBack GoBackHeading="All Students" />
      <StudentDashboard />
    </>
  )
}

export default student;