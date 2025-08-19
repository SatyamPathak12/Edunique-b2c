import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityStudent = () => {
  return (
    <>
    <PrincipalLoginBanner button1='Class 8A' button2='Group A' profileImage='/principal/profile-image.jpg' activity="Student" />
    <LoginTable />
    </>
  )
}

export default LoginActivityStudent;