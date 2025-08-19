'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import MaxWidthWrapper from '../admin/max-width-wrapper'

const TeacherDroppingForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		courseName: '',
		totalBatch: '3',
		batch1Teacher: '',
		batch2Teacher: '',
		batch3Teacher: '',
	})

	const [dropdownOpen, setDropdownOpen] = useState({
		batch1: false,
		batch2: false,
		batch3: false,
	})

	// Sample teacher names for the dropdown
	const teacherNames = ['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis', 'David Wilson', 'Lisa Anderson']

	const handleInputChange = (field, value) => {
		setFormData(prev => ({
			...prev,
			[field]: value,
		}))
	}

	const handleTeacherSelect = (batch, teacher) => {
		setFormData(prev => ({
			...prev,
			[`${batch}Teacher`]: teacher,
		}))
		setDropdownOpen(prev => ({
			...prev,
			[batch]: false,
		}))
	}

	const toggleDropdown = batch => {
		setDropdownOpen(prev => ({
			...prev,
			[batch]: !prev[batch],
		}))
	}

	const handleSubmit = () => {
		console.log('Form submitted:', formData)
		// Handle form submission logic here
	}

	return (
		<div className="bg-[#eeeeee] py-6 sm:py-8 lg:py-10 min-h-screen">
			<MaxWidthWrapper className="">
				<div className="max-w-[94rem] mx-auto bg-white p-6  rounded-2xl shadow-sm">
					<h1 className="text-md text-black mb-2">Teacher Dropping</h1>
					<div className="w-full sm:w-96 space-y-4">
						{/* Name Input */}
						<div>
							<input
								type="text"
								placeholder="Name"
								value={formData.name}
								onChange={e => handleInputChange('name', e.target.value)}
								className="w-full px-4 py-1.5 border bg-[#faf9fb] border-[#d5d5d5] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 placeholder:text-sm text-[#6B7280]"
							/>
						</div>

						{/* Course Section */}
						<div>
							<h2 className="text-base text-black mb-2">Course</h2>
							<input
								type="text"
								placeholder="Course Name"
								value={formData.courseName}
								onChange={e => handleInputChange('courseName', e.target.value)}
								className="w-full px-4 py-1.5 border bg-[#faf9fb] border-[#d5d5d5] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 placeholder:text-sm text-[#6B7280]"
							/>
						</div>

						{/* Total Batch */}
						<div className="mb-6">
							<h2 className="text-base text-gray-800 mb-2">Total Batch</h2>
							<input
								type="number"
								value={formData.totalBatch}
								onChange={e => handleInputChange('totalBatch', e.target.value)}
								className="w-full px-4 py-1.5 border bg-[#faf9fb] border-[#d5d5d5] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 placeholder:text-sm text-[#6B7280]"
							/>
						</div>
					</div>
					{/* Reassign Batches & Students */}
					<div className="mb-8">
						<h2 className="text-md sm:text-xl  p-4 bg-[#b0b0b0]/8 rounded-xl font-semibold text-[#3366ff] mb-4">
							Reassign Batches & Students
						</h2>
						<div className="w-full mb-4 sm:w-96 space-y-6">
							{/* Batch 1 */}
							<div>
								<label className="block text-sm font-medium text-black mb-2">Batch 1 (12 Students)</label>
								<div className="relative">
									<button
										type="button"
										onClick={() => toggleDropdown('batch1')}
										className="w-full px-2 py-2 text-left border bg-[#faf9fb] border-[#d5d5d5]  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between">
										<span className={formData.batch1Teacher ? 'text-black' : 'text-black'}>
											{formData.batch1Teacher || 'Teacher Name'}
										</span>
										<ChevronDown className={`w-5 h-5 text-black transition-transform ${dropdownOpen.batch1 ? 'rotate-180' : ''}`} />
									</button>
									{dropdownOpen.batch1 && (
										<div className="absolute z-10 w-full mt-1 bg-[#faf9fb] border border-[#d5d5d5]  rounded-b-xl shadow-lg">
											{teacherNames.map((teacher, index) => (
												<button
													key={index}
													type="button"
													onClick={() => handleTeacherSelect('batch1', teacher)}
													className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
													{teacher}
												</button>
											))}
										</div>
									)}
								</div>
							</div>

							{/* Batch 2 */}
							<div>
								<label className="block text-sm font-medium text-black mb-2">Batch 2 (16 Students)</label>
								<div className="relative">
									<button
										type="button"
										onClick={() => toggleDropdown('batch2')}
										className="w-full px-2 py-2 text-left border bg-[#faf9fb] border-[#d5d5d5]  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between">
										<span className={formData.batch2Teacher ? 'text-black' : 'text-black'}>
											{formData.batch2Teacher || 'Teacher Name'}
										</span>
										<ChevronDown className={`w-5 h-5 text-black transition-transform ${dropdownOpen.batch2 ? 'rotate-180' : ''}`} />
									</button>
									{dropdownOpen.batch2 && (
										<div className="absolute z-10 w-full mt-1 bg-[#faf9fb] border-[#d5d5d5]  rounded-b-xl shadow-lg">
											{teacherNames.map((teacher, index) => (
												<button
													key={index}
													type="button"
													onClick={() => handleTeacherSelect('batch2', teacher)}
													className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
													{teacher}
												</button>
											))}
										</div>
									)}
								</div>
							</div>

							{/* Batch 3 */}
							<div>
								<label className="block text-sm font-medium text-black mb-2">Batch 3 (11 Students)</label>
								<div className="relative">
									<button
										type="button"
										onClick={() => toggleDropdown('batch3')}
										className="w-full px-2 py-2 text-left border bg-[#faf9fb] border-[#d5d5d5] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between">
										<span className={formData.batch3Teacher ? 'text-black' : 'text-black'}>
											{formData.batch3Teacher || 'Teacher Name'}
										</span>
										<ChevronDown className={`w-5 h-5 text-black transition-transform ${dropdownOpen.batch3 ? 'rotate-180' : ''}`} />
									</button>
									{dropdownOpen.batch3 && (
										<div className="absolute z-10 w-full mt-1  border  bg-[#faf9fb] border-[#d5d5d5]   rounded-b-xl shadow-lg">
											{teacherNames.map((teacher, index) => (
												<button
													key={index}
													type="button"
													onClick={() => handleTeacherSelect('batch3', teacher)}
													className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
													{teacher}
												</button>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Submit Button */}
					<div className=" flex sm:ml-[32rem]">
						<button
							onClick={handleSubmit}
							className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
							Submit Assessment
						</button>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default TeacherDroppingForm
