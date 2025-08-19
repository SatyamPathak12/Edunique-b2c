import GoBack from '@/components/principal/goback';
import ManageAccess from '@/components/b2c-admin/manage-access';
import React from 'react'

const Manageaccess = () => {
  return (
    <>
      <GoBack GoBackHeading="Course Name" />
      <ManageAccess/>
      
    </>
  )
}

export default Manageaccess;