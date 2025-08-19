'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import AdminAreaChart from '@/components/admin/area-chart'
import ArrowControl from '@/components/admin/ui/arrow-control'
import RadarChartAdmin from '@/components/admin/radar-chart'
import { FiChevronDown } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const PieChartAdmin = dynamic(() => import('@/components/admin/pie-chart'), {
    ssr: false,
    loading: () => (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
    ),
})

export default function SchoolManagementReportPage() {

    return (
        <div>

            <MaxWidthWrapper className="bg-white rounded-2xl py-4 my-4 overflow-hidden">

                <div className="p-4 rounded-2xl relative overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0 bg-[url('/common-images/pattern.png')] bg-cover bg-center filter grayscale opacity-60"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-4 rounded-2xl relative z-10">
                        <div className="flex flex-wrap lg:flex-nowrap gap-4 sm:gap-6">
                            <div className="w-full lg:w-[70%]">
                                <Image
                                    src={'/images/school.jpg'}
                                    width={1880}
                                    height={1250}
                                    alt="School Management Report"
                                    className="w-full h-96 rounded-2xl object-cover"
                                />
                                <div className="mt-4">
                                    <p className="font-semibold">School Name</p>
                                    <p className="text-[#6B7280] text-sm mt-2">Branch Name</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[30%]">
                                <p>
                                    <span className="font-medium">Email: </span>
                                    example@gm.com
                                </p>
                                <p>
                                    <span className="font-medium">Contact: </span>
                                    +91 1234567890
                                </p>
                                <p>
                                    <span className="font-medium">City: </span>
                                    Mumbai
                                </p>
                                <p>
                                    <span className="font-medium">State: </span>
                                    Maharashtra
                                </p>
                                <p>
                                    <span className="font-medium">Address: </span>
                                    Vivamus sit amet sem ac nibh bibendum condimentum vel in sem. Curabitur tincidunt pretiutm faucibus. Vestibulum eget
                                    pellentesque justo. Vivamus ut pulvinar nibh
                                </p>

                                <div className="text-[#3366FF] mt-2 w-full space-y-2">
                                    <Link href="/admin/panel/school-management-branch-report">
                                        <p className="border-b border-blue-500 cursor-pointer">
                                            <span className="font-medium">Branch 1:</span> Name
                                        </p>
                                    </Link>

                                    <Link href="/admin/panel/school-management-branch-report">
                                        <p className="border-b border-blue-500 cursor-pointer">
                                            <span className="font-medium">Branch 2:</span> Name
                                        </p>
                                    </Link>

                                    <Link href="/admin/panel/school-management-branch-report">
                                        <p className="border-b border-blue-500 cursor-pointer">
                                            <span className="font-medium">Branch 3:</span> Name
                                        </p>
                                    </Link>

                                    <Link href="/admin/panel/school-management-branch-report">
                                        <p className="border-b border-blue-500 cursor-pointer">
                                            <span className="font-medium">Branch 4:</span> Name
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 font-medium">Teachers</p>
                            <div className="flex gap-4 overflow-x-auto custom-scrollbar">
                                <TecherChip />
                                <TecherChip />
                                <TecherChip />
                                <TecherChip />
                                <TecherChip />
                            </div>
                        </div>
                    </div>
                </div>

                {/* These are the 3 boxes  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <ClassBox />
                    <ClassBox />
                    <div className="sm:col-span-2 lg:col-span-1">
                        <ClassBox />
                    </div>
                </div>

                {/* This is the part where I'll make the progress, top batches and school score */}
                <div className="grid sm:grid-cols-2 lg:flex gap-8">
                    {/* Progress Chart */}
                    <div className="mt-8 w-full">
                        <div className="flex items-center justify-between -mb-4">
                            <h2 className="font-semibold ml-2">Progress</h2>
                            <ArrowControl leftOnClick={() => { }} RightOnClick={() => { }} text="June 2025" />
                        </div>
                        <div className="mr-4">
                            <AdminAreaChart />
                        </div>
                    </div>

                    {/* Top Batches */}
                    <div className="mt-8 w-full">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-semibold ml-2">Top Batches</h2>
                        </div>
                        <div className="space-y-2">
                            {[
                                { name: 'A', score: '120k', progress: 100 },
                                { name: 'B', score: '80k', progress: 50 },
                                { name: 'C', score: '70k', progress: 45 },
                                { name: 'D', score: '50k', progress: 33 },
                                { name: 'E', score: '25k', progress: 23 },
                            ].map((batch, indx) => (
                                <div key={indx} className="relative" style={{ width: `${batch.progress}%` }}>
                                    <Progress value={100} innerClass="bg-[#3366FF] rounded-full" className="bg-white h-7 rounded-full" />

                                    <div className="absolute top-1/2 -translate-y-1/2 text-white left-2 text-sm">{batch.name}</div>
                                    <div className="absolute top-1/2 -translate-y-1/2 text-white right-2 text-[10px]">{batch.score}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* School Score */}
                    <div className="pt-8 overflow-hidden sm:col-span-2 lg:max-w-xs w-full flex flex-col justify-between items-center gap-20 border border-[#F2F2F2] max-h-80 shadow-xs rounded-2xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="font-semibold ml-2">School Score</h2>
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <div className="flex justify-center items-center w-full scale-150" suppressHydrationWarning>
                                    <PieChartAdmin />
                                </div>

                                <div className="w-[88%] rounded-full h-[88%] aspect-square absolute top-0 left-1/2 -translate-x-1/2 mt-4 overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="48"
                                            fill="none"
                                            stroke="#7A7A7A"
                                            strokeWidth="1"
                                            strokeDasharray="1 6"
                                            strokeLinecap="butt"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full h-full aspect-square bg-white absolute top-11/12 -translate-y-1/2 mt-4 z-10"></div>
                            </div>
                            <div className="text-4xl font-semibold absolute top-2/5 -translate-y-1/2 left-1/2 -translate-x-1/2">50</div>
                        </div>
                    </div>
                </div>

                {/* Weakness and improvement */}
                <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8">
                    <div className="">
                        <div className="flex items-center justify-between -mb-4">
                            <h2 className="font-semibold ml-2">Weakness</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
                            <RadarChartAdmin />
                            <ul className="px-4 sm:px-0 list-disc sm:text-nowrap text-xs lg:text-[0.60rem] xl:text-xs">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Aliquam hendrerit augue at nulla imperdiet feugiat.</li>
                                <li>Sed dapibus est et leo luctus cursus.</li>
                                <li>Cras interdum tortor vestibulum sagittis efficitur.</li>
                                <li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
                                <li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
                                <li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
                                <li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
                                <li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
                                <li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
                                <li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
                                <li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between -mb-4">
                            <h2 className="font-semibold ml-2">Improvements</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
                            <RadarChartAdmin />
                            <ul className="px-4 sm:px-0 list-disc sm:text-nowrap text-xs lg:text-[0.60rem] xl:text-xs">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Aliquam hendrerit augue at nulla imperdiet feugiat.</li>
                                <li>Sed dapibus est et leo luctus cursus.</li>
                                <li>Cras interdum tortor vestibulum sagittis efficitur.</li>
                                <li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
                                <li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
                                <li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
                                <li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
                                <li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
                                <li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
                                <li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
                                <li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*  */}
                <StudentReport />
            </MaxWidthWrapper>
        </div>
    )
}

function TecherChip() {
    return (<Link href={"/admin/panel/school-management-teacher-student"}>
        <div className="rounded-2xl bg-[#F3F4F6] flex gap-4 items-center p-2 min-w-52 w-52">
            <Image
                src={'/images/teacher.jpg'}
                width={480}
                height={331}
                alt="teacher profile image"
                className="rounded-2xl w-18 h-18 object-cover"
            />
            <div>
                <p className="font-semibold text-lg">Name</p>
                <p className="text-[#FF3366] text-sm font-medium">Subject</p>
            </div>
        </div></Link>
    )
}

function ClassBox() {
    return (<Link href={"/admin/panel/school-management-student "}>
        <div className="border p-4 rounded-2xl w-full">
            <div className="flex gap-2 items-center mb-4">
                <h1 className="text-[#1D5851] font-semibold text-lg px-2">Class 1</h1>
                <span className="rounded-2xl text-[#F9326F] border px-1 py-0.5 text-[10px] border-[#F9326F]">
                    Total Groups <span className="font-bold ml-1">4</span>
                </span>
            </div>

            <div className="bg-[#D3F5FF] rounded-2xl px-4 py-2">
                <h1 className="text-[#1D5851] font-bold">Class Completion Progress</h1>
                <div className="my-2">
                    <h3 className="text-sm text-[#5E5E5E]">60%</h3>
                    <Progress value={80} className="rounded-full mt-1 bg-white" />
                </div>
            </div>

            <div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-2xl flex items-center justify-between">
                <p>Students Enrolled</p>
                <p className="text-[#5E5E5E] font-bold">20</p>
            </div>
            <div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-2xl flex items-center justify-between">
                <p>Average Score</p>
                <p className="text-[#5E5E5E] font-bold">75/100</p>
            </div>
            <div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-2xl flex items-center justify-between">
                <p>Teachers Onboarded</p>
                <p className="text-[#5E5E5E] font-bold">20</p>
            </div>
        </div></Link>
    )
}

const ProgressCircleItem = ({
    percentageText,
    color,
    skillName,
    details,
}: {
    percentageText: string
    color: string
    skillName: string
    details: string
}) => {
    const [numerator, denominator] = percentageText.split('/').map(Number)
    const percentage = (numerator / denominator) * 100

    const radius = 35
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className="flex items-center justify-start space-x-3 mb-3">
            <div className="w-[3.35rem] h-[3.35rem] relative flex-shrink-0">
                <svg className="w-full h-full transform rotate-90 " viewBox="0 0 75 75">
                    <circle cx="37.5" cy="37.5" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="4" />
                    <circle
                        cx="37.5"
                        cy="37.5"
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{percentageText}</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 ml-2">
                <p className="text-sm text-[#626262]">{skillName}</p>
                <p className="text-xs font-light text-[#626262]">{details}</p>
            </div>
        </div>
    )
}

const StudentReport = () => {
    const handleBackClick = () => {
        if (typeof window !== 'undefined') {
            window.history.back()
        }
    }

    // Simplified data for the line chart (hardcoded points)
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                color: '#0DC6FD',
                points: [0, 30, 30, 50, 50, 50, 70, 80, 70, 90, 90, 95],
            }, // Basic Academic
            {
                color: '#AC50F5',
                points: [0, 25, 25, 40, 40, 40, 60, 75, 65, 85, 85, 90],
            }, // Critical Academic
            {
                color: '#FF4A69',
                points: [0, 20, 20, 30, 30, 30, 50, 65, 55, 70, 70, 80],
            }, // Personality Dev
        ],
    }
    const chartHeight = 160 // Max height of the chart area
    const chartWidth = 500 // Width of the chart area (approx)

    const personalDevData = {
        // Copied structure from Life Skills for Personal Development
        title: 'Personal Development',
        skills: [
            {
                name: 'Discipline',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
            {
                name: 'Confidence',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
            {
                name: 'Presentation',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
            {
                name: 'Written',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
            {
                name: 'Creativity',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
            {
                name: 'Problem Solving',
                details: 'Pedagogy and Plan',
                progress: '3/4',
            },
        ],
    }

    const parameterData = [
        { title: 'Spoken English', description: 'Pedagogy and Plan' },
        { title: 'Vocabulary', description: 'Pedagogy and Plan' },
        { title: 'Hand Writing', description: 'Pedagogy and Plan' },
        { title: 'Olympiad', description: 'Pedagogy and Plan' },
    ]

    const parameter3Data = [
        { title: 'Critical Thinking', description: 'Pedagogy and Plan' },
        { title: 'Visualization', description: 'Pedagogy and Plan' },
        { title: 'Accountability', description: 'Pedagogy and Plan' },
        { title: 'Like Challenges', description: 'Pedagogy and Plan' },
        { title: 'Social Skills', description: 'Pedagogy and Plan' },
        { title: 'Decision Making', description: 'Pedagogy and Plan' },
        { title: 'Focus', description: 'Pedagogy and Plan' },
        { title: 'Retention', description: 'Pedagogy and Plan' },
        { title: 'Adaptability', description: 'Pedagogy and Plan' },
        { title: 'Behavior', description: 'Pedagogy and Plan' },
        { title: 'Respect', description: 'Pedagogy and Plan' },
        { title: 'Emotional Skills', description: 'Pedagogy and Plan' },
    ]

    return (
        <>
            <div className="space-y-10">
                {/* Overall Progress and Paramter 0 */}
                <div className="flex flex-wrap font-main lg:flex-nowrap gap-8 w-full my-10 lg:my-14">
                    <div className="w-full lg:w-[65%]">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <p className="font-semibold text-lg mb-3 text-[#FF3366]">Overall Progress</p>
                        </div>
                        <div className="flex items-start flex-col-reverse gap-4 sm:flex-row justify-between px-7 mb-5">
                            <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 mb-4 text-xs text-nowrap">
                                <div className="flex items-center">
                                    <div className="w-16 h-5 rounded-full mr-2 bg-[#0DC6FD]"></div>
                                    <p className="text-[#626262] text-sm font-light">Basic Academic Skills</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-5 rounded-full mr-2 bg-[#AC50F5]"></div>
                                    <p className="text-[#626262] text-sm font-light">Critical Academic Skills</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-5 rounded-full mr-2 bg-[#FF4A69]"></div>
                                    <p className="text-[#626262] text-sm font-light">Personality Development</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-1.5 py-2 rounded-xl">
                                    <span>Month</span>
                                    <FiChevronDown className="w-4 h-4 ml-1" />
                                </div>

                                <ArrowControl
                                    leftOnClick={handleBackClick}
                                    RightOnClick={() => { }}
                                    text="2025"
                                    className="justify-between px-1.5!"
                                />
                            </div>
                        </div>
                        {/* Simplified SVG Line Chart */}
                        <div className="w-full overflow-x-auto">
                            <svg viewBox={`0 0 ${chartWidth + 40} ${chartHeight + 30}`} className="min-w-[500px]">
                                {/* Y-axis lines (simplified) */}
                                {[0, 25, 50, 75, 100].map(yVal => (
                                    <line
                                        key={yVal}
                                        x1="30"
                                        y1={chartHeight - (yVal / 100) * chartHeight}
                                        x2={chartWidth + 30}
                                        y2={chartHeight - (yVal / 100) * chartHeight}
                                        stroke={'#D6E0FF'}
                                        strokeWidth="0.5"
                                        strokeDasharray="0,0"
                                    />
                                ))}
                                {/* X-axis labels */}
                                {lineChartData.labels.map((label, i) => (
                                    <text
                                        key={label}
                                        x={35 + i * (chartWidth / (lineChartData.labels.length - 0.6))}
                                        y={chartHeight + 25}
                                        fontSize="7"
                                        fill={'#626262'}
                                        textAnchor="middle">
                                        {label}
                                    </text>
                                ))}

                                {/* Data lines */}
                                {lineChartData.datasets.map(dataset => (
                                    <polyline
                                        key={dataset.color}
                                        fill="none"
                                        stroke={dataset.color}
                                        strokeWidth="1"
                                        points={dataset.points
                                            .map(
                                                (p, i) => `${35 + i * (chartWidth / (lineChartData.labels.length - 1))},${chartHeight - (p / 100) * chartHeight}`
                                            )
                                            .join(' ')}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>
                    <div className="px-5 pt-1 mb-10 h-full rounded-2xl w-full lg:w-[35%]">
                        <h3 className="text-base font-semibold mb-3 text-[#FF3366]">Parameter 0</h3>
                        <div className="space-y-3 mt-8 custom-scrollbar overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
                            {personalDevData.skills.map((skill, i) => (
                                <ProgressCircleItem
                                    key={i}
                                    percentageText={skill.progress}
                                    color={'#F9326F'}
                                    skillName={skill.name}
                                    details={skill.details}
                                />
                            ))}
                        </div>
                        {/* The thin scrollbar visual element from the image - hard to replicate exactly without custom overlay */}
                        <div className="absolute right-1 top-16 bottom-5 w-1 bg-gray-300 rounded-full opacity-50 hidden sm:block"></div>
                    </div>
                </div>

                {/* Parameter : Overall Progress */}
                <div className="flex flex-wrap lg:flex-nowrap gap-8 relative">
                    <div className="w-full lg:w-[65%]">
                        {/* Parameter : Overall Progress */}
                        <div>
                            <div className="bg-[#FFF8E1] p-4 rounded-2xl text-[#FFCC00] ">
                                <h1 className="font-semibold tracking-wide">Parameter</h1>
                                <p className="text-xs my-4">Overall Progress</p>
                                <div className="max-w-96 mt-2 text-sm relative">
                                    <div className="absolute bottom-14 left-[80%]">
                                        <Image src={'/admin/maths-sign.png'} width={168} height={96} alt="Maths Sign" className="w-20 h-10" />
                                    </div>
                                    <span className="font-semibold">4/5</span>
                                    <div className="flex gap-2 items-center -mt-1.5">
                                        <Progress value={80} className="rounded-full bg-white" innerClass="bg-[#FFCC00]" />
                                        <span className="font-light">5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                {parameterData.map((data, i) => (
                                    <ProgressCircleItem
                                        key={i}
                                        percentageText={'3/4'}
                                        color={'#FFCC00'}
                                        skillName={data.title}
                                        details={data.description}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full mt-8">
                            <div className="bg-[#F9FAFB] w-full rounded-2xl p-3">
                                <div className="bg-[#8DD9B3] p-4 rounded-2xl text-[#1D5851]">
                                    <h1 className="font-semibold tracking-wide">Parameter 1</h1>
                                    <p className="text-xs my-4">Overall Progress</p>
                                    <div className="mt-2 text-sm relative">
                                        <div className="absolute bottom-14 left-[85%]">
                                            <Image src={'/admin/maths-sign-2.png'} width={156} height={104} alt="Maths Sign" className="w-16 h-10" />
                                        </div>
                                        <span className="font-semibold text-[#6B7280]">4/5</span>
                                        <div className="flex gap-2 items-center -mt-1.5">
                                            <Progress value={80} className="rounded-full bg-white" innerClass="bg-[#4BC4B6]" />
                                            <span className="font-light">5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <ProgressCircleItem
                                            key={i}
                                            percentageText={'3/4'}
                                            color={'#4BC4B6'}
                                            skillName={'Subject 1'}
                                            details={'Pedagogy and Plan'}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#F9FAFB] w-full rounded-2xl p-3">
                                <div className="bg-[#EEDAFE] p-4 rounded-2xl text-[#37085C]">
                                    <h1 className="font-semibold tracking-wide">Parameter 2</h1>
                                    <p className="text-xs my-4">Overall Progress</p>
                                    <div className="mt-2 text-sm relative">
                                        <div className="absolute bottom-14 left-[85%]">
                                            <Image src={'/admin/maths-sign-3.png'} width={168} height={96} alt="Maths Sign" className="w-20 h-10" />
                                        </div>
                                        <span className="font-semibold">4/5</span>
                                        <div className="flex gap-2 items-center -mt-1.5">
                                            <Progress value={80} className="rounded-full bg-white" innerClass="bg-[#A866DD]" />
                                            <span className="font-light">5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <ProgressCircleItem
                                            key={i}
                                            percentageText={'3/4'}
                                            color={'#A866DD'}
                                            skillName={'Spoken English'}
                                            details={'Pedagogy and Plan'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[35%]">
                        <div className="bg-[#FBD2D9] p-4 rounded-2xl text-[#893544]">
                            <h1 className="font-semibold tracking-wide">Parameter 3</h1>
                            <p className="text-xs my-4">Overall Progress</p>
                            <div className="mt-2 text-sm relative">
                                <div className="absolute bottom-14 left-[85%]">
                                    <Image src={'/admin/mask.png'} width={86} height={86} alt="Maths Sign" className="w-10 aspect-square h-10" />
                                </div>
                                <span className="font-semibold">4/5</span>
                                <div className="flex gap-2 items-center -mt-1.5">
                                    <Progress value={80} className="rounded-full bg-white" innerClass="bg-[#893544]" />
                                    <span className="font-light">5</span>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            {parameter3Data.map((_, i) => (
                                <ProgressCircleItem key={i} percentageText={'3/4'} color={'#893544'} skillName={_.title} details={_.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
