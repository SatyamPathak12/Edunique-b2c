'use client'

import { useState } from 'react'
import { TestList } from '@/components/page3/test-list' // Assuming this path is correct in your project
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'


const scheduledTests = [{ id: '1', title: 'Test Title', batch: 'Batch 1', date: 'Scheduled for May 28, 2025', }, 
	{ id: '2', title: 'Test Title', batch: 'Batch 1', date: 'Scheduled for May 28, 2025', status: 'Ongoing', }, 
	...Array.from({ length: 6 }, (_, i) => ({ id: `${i + 3}`, title: 'Test Title', batch: 'Batch 1', date: 'Scheduled for May 28, 2025', }))];
const completedTests = [{ id: '1', title: 'Test Title', batch: 'Batch 1', date: 'Planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40, }, 
	...Array.from({ length: 3 }, (_, i) => ({ id: `${i + 4}`, title: 'Test Title', batch: 'Batch 1', date: 'Planned for May 28, 2025', studentsEnrolled: 40, studentsAttended: 40, averageScores: 40, }))];
const savedTests = Array.from({ length: 8 }, (_, i) => ({ id: `${i + 1}`, title: 'Test Title', batch: 'Batch 1', date: 'Scheduled for May 28, 2025', }));

const CustomTestTabs = ({
	tabs,
	activeTab,
	onChange,
}: {
	tabs: string[]
	activeTab: string
	onChange: (tab: string) => void
}) => {
	return (
		<div className="flex w-fit">
			{tabs.map(tab => (
				<button
					key={tab}
					onClick={() => onChange(tab)}
					className={`px-6 py-3 font-medium cursor-pointer whitespace-nowrap ${activeTab === tab ? 'text-[#FF3366] border-b-2 border-pink-500' : 'text-[#6B7280] hover:text-gray-900'
						}`}>
					{tab}
				</button>
			))}
		</div>
	)
}

function TestAnalytics({ complete, incomplete, totalTests, averageScore }: { month: string; year: number; complete: number; incomplete: number; totalTests: number; averageScore: string; }) {
	return (
		<div className="space-y-4 w-full p-4 md:max-w-md border border-[#E5E7EB] rounded-2xl bg-white">
			<div>
				<div className="lg:flex lg:justify-between lg:items-center mb-4">
					<h3 className="text-md font-semibold">Test</h3>
					<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] w-fit px-3 py-2 rounded-xl">
						<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
						<span className='text-nowrap'>June 2025</span>
						<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
					</div>
				</div>
				<div className="flex justify-between mx-2">
					<div className="flex flex-col justify-center items-center">
						<p className="text-md text-[#6B7280]">Complete</p>
						<p className="text-md font-semibold">
							{complete}/{totalTests}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<p className="text-md text-[#6B7280]">Incomplete</p>
						<p className="text-md font-semibold text-[#FF3366]">{incomplete}</p>
					</div>
				</div>
			</div>
			<div className="bg-[#F3F4F6] rounded-2xl p-4 py-3">
				<div className="flex justify-between items-center">
					<p className="text-sm text-[#6B7280]">Average Scores</p>
					<p className="text-sm font-medium text-[#3366FF]">{averageScore}</p>
				</div>
			</div>
		</div>
	)
}


// --- MAIN PAGE COMPONENT ---
export default function TestsPage() {
	const [activeTab, setActiveTab] = useState('Scheduled Test')

	return (
		<div className="min-h-screen bg-[#eeeeee] py-4 ">
			<div className="container bg-white max-w-[96rem] rounded-2xl mx-auto p-4 ">
				<div className="bg-white rounded-2xl mb-14 py-4">

					{/* THIS IS THE CORRECTED LAYOUT CONTAINER */}
					<div className="grid grid-cols-1 md:grid-cols-7 gap-6">

						{/* --- Right Column Content --- */}
						<div className="md:col-span-2 md:col-start-6 md:row-start-1">
							<div className="flex justify-end items-center mb-6">
								<Button className="bg-[#3366FF] hover:bg-blue-600 text-white font-semibold rounded-full text-md py-6 px-6 w-full md:w-auto">
									Create BW Test
								</Button>
							</div>
							<TestAnalytics month="May" year={2025} complete={2} incomplete={1} totalTests={20} averageScore="15%" />
						</div>

						{/* --- Left Column Content --- */}
						<div className="md:col-span-5 md:col-start-1 md:row-start-1">
							<div className="flex flex-col lg:flex-row h-fit overflow-x-auto custom-scrollbar justify-between sm:items-center mb-4">
								<CustomTestTabs tabs={['Scheduled Test', 'Completed Test', 'Saved']} activeTab={activeTab} onChange={setActiveTab} />
								<div className="mt-4 lg:my-2 w-full sm:w-auto">
									<Select defaultValue="all">
										<SelectTrigger className="w-full sm:w-fit rounded-xl bg-[#F9FAFB] text-black border border-[#E5E7EB]">
											<SelectValue placeholder="All Batches" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">All Batches</SelectItem>
											<SelectItem value="batch1">Batch 1</SelectItem>
											<SelectItem value="batch2">Batch 2</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							{activeTab === 'Scheduled Test' && <TestList tests={scheduledTests} type="scheduled" />}
							{activeTab === 'Completed Test' && <TestList tests={completedTests} type="completed" />}
							{activeTab === 'Saved' && <TestList tests={savedTests} type="saved" />}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}