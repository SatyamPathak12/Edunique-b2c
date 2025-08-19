import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityTeacher = () => {
  return (
    <div className='max-w-screen-2xl'>
    <PrincipalLoginBanner name='Teacher Name' button1='Class Assigned' button2='Class Assigned' profileImage='/teacher-b2b/profile2.png' activity="Teacher" />
    <LoginTable />
    </div>
  )
}

export default LoginActivityTeacher;