import React from 'react'
import RemoveCourse from './RemoveCourse'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper'
import BackButton from '@/components/common-components/BackButton'
export default function page() {
  return (
    <>
    <BackButton Heading="Remove Course"/> <div className='p-4'>
      <AdminB2CWrapper>
        
        < RemoveCourse />
      </AdminB2CWrapper></div>
    </>
  )
}