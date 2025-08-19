import React from 'react'
import ChartsReport from '@/components/b2c-admin/charts'
import MentorCard from './components/MentorCard'
import MentorControl from './components/MentorControl'
import MentorCourse from './components/MentorCourse'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper'
import BackButton from '@/components/common-components/BackButton';
export default function page() {
  return (
    <div>
      <BackButton Heading="Mentor Profile" />
      <AdminB2CWrapper>
        <div className='min-h-screen '>

            <div className="space-y-4 ">
              <MentorCard />
              <MentorControl />
              <MentorCourse />
              <ChartsReport />
            </div>
        </div>
      </AdminB2CWrapper>
    </div>
  )
}