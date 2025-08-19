'use client'
import { useState } from 'react'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import MaxWidthWrapper from '../../components/admin/max-width-wrapper'
import PeopleGrid from '@/components/b2c-admin/attandance-teacher'
import StudentGrid from './attandance-student'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const topTabs = ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4', 'Batch 5']

export default function AttendancePage() {
	const [searchTerm, setSearchTerm] = useState('')
	const [activeTab, setActiveTab] = useState<'teachers' | 'students'>('teachers')
	const [selectedTopTab, setSelectedTopTab] = useState('Batch 1')

	return (
		<MaxWidthWrapper>
			<div className="py-2">
				<main className="p-2 max-w-[90rem] sm:p-6 mx-auto bg-white my-6 rounded-3xl">
					{/* Search & Filter Section */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
						<div className="relative flex-grow">
							<FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
							<input
								type="text"
								placeholder="Search"
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-2 text-sm bg-white border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none"
							/>
						</div>

						<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 1
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-14">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 2nd */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 2
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-14">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 3rd */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 3
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-14">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* 4th */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="flex items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
										Filter 4
										<FiChevronDown className="text-sm" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-14 px-0">
									<DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>

					{/* Top Tabs */}
					<div className="flex mt-4 gap-6 justify-start p-2">
						<button
							onClick={() => setActiveTab('teachers')}
							className={`font-medium text-sm sm:text-lg transition-colors pb-1 border-b-2 ${
								activeTab === 'teachers' ? 'text-[#3366ff] border-[#3366ff]' : 'text-[#6b7280] border-transparent'
							}`}>
							Teachers
						</button>
						<button
							onClick={() => setActiveTab('students')}
							className={`font-medium text-sm sm:text-lg transition-colors border-b-2 ${
								activeTab === 'students' ? 'text-[#3366ff] border-[#3366ff]' : 'text-[#6b7280] border-transparent'
							}`}>
							Students
						</button>
					</div>
					<div className="w-full my-2 bg-white border border-[#e5e7eb] rounded-2xl p-2 space-y-6">
						<div className="flex justify-center">
							<div className="flex justify-start space-x-4 overflow-x-auto whitespace-nowrap no-scrollbar">
								{topTabs.map(tab => (
									<button
										key={tab}
										onClick={() => setSelectedTopTab(tab)}
										className={`flex-shrink-0 flex-wrap sm:px-3 p-2 sm:py-1.5 rounded-2xl  transition-colors ${
											selectedTopTab === tab ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-gray-100'
										}`}>
										{tab}
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Toggle Between Teachers and Students */}

					{/* Conditional Grid */}
					<div className="w-full  my-2 ">{activeTab === 'teachers' ? <PeopleGrid /> : <StudentGrid />}</div>
				</main>
			</div>
		</MaxWidthWrapper>
	)
}
