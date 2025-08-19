'use client'
import React, { useMemo, useState } from 'react'
import Header from '@/components/layout/TeacherB2CHeader'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import SearchFilterIcon from '@/components/common-components/SearchFilterIcon'
import BackButton from '@/components/common-components/BackButton'
import TeacherB2CWrapper from '@/components/teacher-b2c/common-components/TeacherB2CPageWrapper'
import Link from 'next/link'

export default function StudentListPage() {


    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header activeState="Dashboard" />

            <BackButton Heading="DMIT Test" />

            <TeacherB2CWrapper>
                <StudentPerformancePage />
            </TeacherB2CWrapper>

            <Footer />
        </div>
    )
}

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

// Placeholder avatar URL (same image for all students, B&W as in screenshot)
const AVATAR_URL = '/teacher-b2b/list-profile.png'

// Sample Data: Mimics the structure and repetition seen in the image
const dummyStudents: Student[] = [
    {
        id: '1',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '2',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Failed',
    },
    {
        id: '3',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '4',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '5',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '6',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '7',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
    {
        id: '8',
        avatarUrl: AVATAR_URL,
        name: 'Student Name',
        courseName: 'Course Name',
        levelGrade: 'Level / Grade',
        group: 'Group',
        score: 40,
        status: 'Passed',
    },
]

// StudentCard Component
const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <Link href={"/b2c-teacher/teacher-flow/dmit-student-paper"} className="bg-[#F9FAFB] border border-[#B0B0B0] rounded-2xl p-2 justify-between flex flex-col gap-1.5 sm:flex-row sm:items-center sm:space-x-4 ">
            <div className="flex items-center gap-2">
                {/* Avatar */}
                <Image
                    width={100}
                    height={100}
                    src={student.avatarUrl}
                    alt={`${student.name}'s avatar`}
                    className="w-28 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0"
                />

                {/* Student Info */}
                <div className="flex-grow min-w-0">
                    {' '}
                    {/* min-w-0 prevents text overflow issues */}
                    {/* <h3 className="text-base sm:text-xl font-normal text-black">{student.name}</h3> */}
                    <p className="text-base sm:text-xl font-normal text-black">{student.name}</p>
                    <p className="text-xs  text-[#6B7280] mt-0.5">{student.courseName}</p>
                    <p className="text-xs  text-[#6B7280] mt-0.5">{student.levelGrade}</p>
                    <p className="text-xs  text-[#6B7280] mt-0.5">{student.group}</p>
                </div>
            </div>
            {/* Score and Status */}
            <div className="grid grid-cols-2 w-full gap-2 flex-shrink-0 sm:mt-0 self-start sm:self-center mr-2">
                <div className="bg-[#F3F4F6] rounded-xl px-3 py-1.5 sm:px-4 sm:py-3 text-center  w-full sm:min-w-[140px]">
                    <p className="text-sm text-[#6B7280] mb-0.5">Score</p>
                    <p className="text-sm font-bold text-[#3366FF]">{student.score}</p>
                </div>
                <div className="bg-[#F3F4F6] rounded-xl w-full px-3 py-1.5 sm:px-4 sm:py-3 text-center  sm:min-w-[140px]">
                    <p className="text-sm text-[#6B7280] mb-0.5">Status</p>
                    <p className={`text-md  font-semibold ${student.status === 'Passed' ? 'text-[#4BC4B6]' : 'text-[#FF3366CC]'}`}>
                        {student.status}
                    </p>
                </div>
            </div>
        </Link>
    )
}



// Main Page Component
const StudentPerformancePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    // In a real app, student data would likely come from props or a global state/API call
    const [students] = useState<Student[]>(dummyStudents)

    // Add states for filters if/when their logic is defined
    // const [activeFilters, setActiveFilters] = useState({});

    const filteredStudents = useMemo(() => {
        const S = students.filter(
            student =>
                student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.group.toLowerCase().includes(searchTerm.toLowerCase())
        )
        // Add further filtering logic here based on activeFilters
        return S
    }, [students, searchTerm /*, activeFilters */])
    const filter = [{ id: 'f1', label: 'Filter 1' }, { id: 'f2', label: 'Filter 2' }, { id: 'f3', label: 'Filter 3' }];
    return (
        <main className="flex-grow container mx-auto p-4 min-h-screen space-y-6 bg-white rounded-2xl">
            {/* Header: Search and Filters */}
            <SearchFilterIcon filters={filter} />
            {/* Student List */}
            {filteredStudents.length > 0 ? (
                <div className="space-y-3">
                    {filteredStudents.map(student => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-[#6B7280] bg-white rounded-xl shadow-sm border border-[#B0B0B0]">
                    <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            )}
        </main>
    )
}
