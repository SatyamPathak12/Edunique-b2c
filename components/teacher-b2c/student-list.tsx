'use client'
import React from 'react'
import Header from "@/components/layout/TeacherB2CHeader"
import Footer from '@/components/layout/Footer'
import { FiSearch, FiFilter } from 'react-icons/fi'
import Image from 'next/image'
import GoBack from '../principal/goback'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation'

interface Student {
    id: string
    avatarUrl: string
    name: string
    courseName: string
    levelGrade: string
    group: string
    score: number
    status: 'Passed' | 'Failed'
}

const dummyStudents: Student[] = [
    {
        id: '1',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '2',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Failed',
    },
    {
        id: '3',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '4',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '5',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '6',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '7',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '8',
        avatarUrl: '/teacher-b2b/list-profile.png',
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
]

// StudentCard Component
const StudentCard: React.FC<{ student: Student, Redirect:()=> void }> = ({ student, Redirect }) => {
    return (
        <div onClick={Redirect} className="bg-[#F9FAFB] flex-wrap border border-[#B0B0B0] rounded-2xl p-2 flex gap-1 sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow duration-200 cursor-pointer">


            <div className='flex gap-2 sm:gap-4 flex-shrink-0'>
                {/* Avatar */}
                <Image
                    width={100}
                    height={100}
                    src={student.avatarUrl}
                    alt={`${student.name}'s avatar`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
                />

                {/* Student Info */}
                <div className="h-full">
                    <h1 className="text-sm sm:text-base font-normal text-black">{student.name}</h1>
                    <p className="text-[10px] sm:text-xs text-[#6B7280] sm:mt-0.5">{student.courseName}</p>
                    <p className="text-[10px] sm:text-xs text-[#6B7280] sm:mt-0.5">{student.levelGrade}</p>
                    <p className="text-[10px] sm:text-xs text-[#6B7280] sm:mt-0.5">{student.group}</p>
                </div>
            </div>

            {/* Score and Status */}
            <div className="flex gap-2 flex-shrink-0 sm:mt-0 self-center flex-grow sm:flex-none ">
                <div className="flex-1 sm:flex-none bg-[#F3F4F6] rounded-xl sm:rounded-2xl h-full sm:h-auto py-2 px-4 sm:py-2 text-center min-w-[75px] sm:min-w-[140px]">
                    <p className="text-xs sm:text-sm text-[#6B7280] mb-2">Score</p>
                    <p className="text-xs sm:text-sm font-medium text-[#3366FF]">{student.score}</p>
                </div>
                <div className="flex-1 sm:flex-none bg-[#F3F4F6] rounded-xl sm:rounded-2xl h-full sm:h-auto py-2 px-4 sm:py-2 text-center min-w-[75px] sm:min-w-[140px]">
                    <p className="text-xs sm:text-sm text-[#6B7280] mb-2">Status</p>
                    <p className={`text-xs sm:text-sm font-medium ${student.status === 'Passed' ? 'text-[#4BC4B6]' : 'text-[#FF3366CC]'}`}>
                        {student.status}
                    </p>
                </div>
            </div>
        </div>
    )
}

// StyledSelect (for the 1st STD filter)
const StyledSelect: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
}> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="sm:flex-none flex-1 w-auto rounded-xl py-3.5 sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);

export function StudentListPage({ label } : { label: string; }) {
    const Router = useRouter();
    const Redirect = () => Router.push(`/b2c-teacher/teacher-flow/${label === "Test" ? "" : `${label.toLowerCase()}-` }student-paper`);
    return (
        <div>
            <Header />
            <GoBack GoBackHeading={`${label} Name`} />

            <div className="bg-[#eeeeee] py-6 px-2 sm:p-6">
                <main className="w-full max-w-screen-xl mx-auto p-5 space-y-4 bg-white rounded-3xl mb-10">
                    {/* Header: Search and Filters */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="w-full flex-grow flex gap-2">
                            <div className="relative flex-grow">
                                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className={`w-full pl-10 pr-4 py-1.5 sm:py-2.5 text-base bg-white border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none`}
                                />
                            </div>
                            <button
                                className={`sm:hidden block p-2 rounded-xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors`}
                                aria-label="Open main filters"
                            >
                                <FiFilter className="h-5 w-5 sm:w-6 sm:h-6" strokeWidth={2} />
                            </button>
                        </div>
                        <div className="flex sm:flex-nowrap flex-wrap gap-2 sm:w-fit w-full">
                            <button
                                className={`hidden sm:block p-2 rounded-xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors`}
                                aria-label="Open main filters"
                            >
                                <FiFilter className="h-5 w-5 sm:w-6 sm:h-6" strokeWidth={2} />
                            </button>
                            <StyledSelect
                                defaultValue="all"
                                placeholder="Filter"
                                items={[{ value: "all", label: `Filter 1` }, { value: "batch1", label: "Batch 1" }]}
                            />
                            <StyledSelect
                                defaultValue="all"
                                placeholder="Filter"
                                items={[{ value: "all", label: `Filter 2` }, { value: "batch1", label: "Batch 1" }]}
                            />
                            <StyledSelect
                                defaultValue="all"
                                placeholder="Filter"
                                items={[{ value: "all", label: `Filter 3` }, { value: "batch1", label: "Batch 1" }]}
                            />
                        </div>
                    </div>

                    {/* Student List */}
                    <div className="space-y-2 min-h-[64rem]">
                        {dummyStudents.map(student => (
                            <StudentCard key={student.id} student={student} Redirect={Redirect}/>
                        ))}
                    </div>
                </main>
            </div>


            <Footer />
        </div>
    )
}