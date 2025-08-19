import GoBack from '@/components/principal/goback';
import ReviewList from '@/components/b2c-admin/review-list';
import React from 'react'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';

const reviewTeachList = () => {
  return (
    <>
      <GoBack GoBackHeading="Teacher Request Tracker" />
      <AdminB2CWrapper>

      <ReviewList/>
      </AdminB2CWrapper>
      
    </>
  )
}

export default reviewTeachList;