import Header from '@/components/layout/Header';
import Curriculum from './component'
import React from 'react'
import StudentNavbarNew from '@/components/student-navbar-new';

const YearlyPlan = () => {
	return <>
		<StudentNavbarNew activeState='My course'/>
		<Curriculum />
	</>
}

export default YearlyPlan;
