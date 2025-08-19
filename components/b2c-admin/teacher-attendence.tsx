import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityTeacher = () => {
  return (
    <>
    <PrincipalLoginBanner button1='Batch Assigned' button2='Part-Time' profileImage='/teacher-b2b/profile2.png' activity="Teacher" />
    <LoginTable />
    </>
  )
}

export default LoginActivityTeacher;