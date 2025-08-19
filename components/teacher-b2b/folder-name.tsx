'use client'

import Header from '@/components/layout/Header' // Adjust path as needed
import Footer from '@/components/layout/Footer' // Adjust path as needed
import React, { useState, useMemo } from 'react'
import { FiSearch, FiFilter, FiChevronDown, FiFileText, FiImage } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import MaxWidthWrapper from '../admin/max-width-wrapper'
import Image from 'next/image'
// Define the File interface
interface ManagedFile {
	id: string
	name: string
	type: 'pdf' | 'image' | 'doc' | 'other'
	size: string // e.g., "300 KB", "1.2 MB"
}

// Sample Data
const dummyFiles: ManagedFile[] = [
  { id: '1', name: 'File Name ', type: 'pdf', size: '300 KB' },
  { id: '2', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '3', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '4', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '5', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '6', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '7', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '8', name: 'File Name', type: 'pdf', size: '300 KB' },
  { id: '9', name: 'File Name', type: 'pdf', size: '300 KB' },
];

// FileItem Component
const FileItem: React.FC<{ file: ManagedFile }> = ({ file }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between py-3 px-2 hover:bg-[#F9FAFB] transition-colors duration-150 rounded-md gap-1">
			<div className="flex items-center space-x-3 min-w-0 justify-self-start">
				<Image 
				src={"/teacher-b2b/pdf.png"}
				alt="pdf"
				height={50}
				width={20}
				className='h-6 w-6'/>
				<span className="text-sm sm:text-md text-black font-medium truncate" title={file.name}>
					{file.name}
				</span>
			</div>
			<span className="text-sm sm:text-md text-gray-500 flex-shrink-0 ml-4 sm:justify-self-end">{file.size}</span>
			{/* <div className="flex gap-4 text-gray-500 justify-self-end">
				<MdOutlineFileDownload size={22}/>
				<FiShare2 size={22}/>
			</div> */}
		</div>
	)
}

// Main File Management Content Component
const FileManagementContent: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	// In a real app, file data would likely come from props or a global state/API call
	const [files] = useState<ManagedFile[]>(dummyFiles)

	// Add states for filters if/when their logic is defined
	// const [activeFilters, setActiveFilters] = useState({});

	const filteredFiles = useMemo(() => {
		const f = files.filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
		// Add further filtering logic here based on activeFilters
		return f
	}, [files, searchTerm /*, activeFilters */])

	return (
		<div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 relative min-h-screen flex flex-col">
			{' '}
			{/* Header: Search and Filters */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
				{/* Search Input */}
				<div className="relative flex-grow">
					<FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
					<input
						type="text"
						placeholder="Search files..."
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className="w-full pl-10 pr-4 py-2.5 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm appearance-none"
					/>
				</div>

				{/* Filter Controls */}
				<div className="flex items-center gap-2 overflow-x-auto">
					<button
						onClick={() => alert('General filter clicked. Implement filter logic.')}
						className="p-2.5 rounded-xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors"
						aria-label="Open filters">
						<FiFilter className="w-5 h-5" strokeWidth={2} />
					</button>
					{['Filter 1', 'Filter 2', 'Filter 3'].map(filterName => (
						<button
							key={filterName}
							onClick={() => alert(`${filterName} clicked. Implement filter logic.`)}
							className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 border border-[#E5E7EB] bg-[#F9FAFB] text-black font-medium rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors">
							<span>{filterName}</span>
							<FiChevronDown className="w-4 h-4 text-black" />
						</button>
					))}
				</div>
			</div>
			{/* File List */}
			<div className="flex flex-col flex-grow overflow-y-auto custom-scrollbar pr-1">
				{' '}
				{/* Added custom-scrollbar if you have it defined */}
				{filteredFiles.length > 0 ? (
					<div className="space-y-1">
						{' '}
						{/* Reduced spacing between file items */}
						{filteredFiles.map(file => (
							<FileItem key={file.id} file={file} />
						))}
					</div>
				) : (
					<div className="text-center py-10 text-[#F9FAFB]0">
						<FiSearch className="w-12 h-12 mx-auto mb-3 text-black" />
						<h3 className="text-lg font-semibold mb-1">No Files Found</h3>
						<p className="text-sm">Try adjusting your search or filter criteria, or upload a new file.</p>
					</div>
				)}
				{/* <div className='flex justify-end bg-red-400'> */}
					<button className='bg-[#ffcc00] w-fit py-2 px-4 rounded-full text-white text-semibold'>Upload</button>
				{/* </div> */}
			</div>
		</div>
	)
}

export default function StudentSubmittedPapersPage() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE THIS PATH
	}

	const handleBackClick = () => {
		// Implement back navigation, e.g., using Next.js router or window.history
		if (typeof window !== 'undefined') {
			window.history.back()
		}
	}

	return (
		<div className="bg-[#eeeeee]  min-h-screen flex flex-col">
			<Header user={headerUser} />
			<div className="   bg-white  py-4 ">
				<div className='   max-w-[96rem]  mx-auto'>
					<div className='flex justify-between items-center'>
						<div className="flex items-center gap-2 ">
					<button
					onClick={handleBackClick}
					className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
					aria-label="Go back">
					<FiArrowLeft className="w-5 h-5" />
				</button>
				{/* You can make this title dynamic based on context */}
				<h1 className="text-lg sm:text-base font-bold text-[#FF3366]">Folder Name</h1>
				</div>
				<div className="bg-white pr-2 flex items-center">
					<button className='whitespace-nowrap px-4 sm:px-6 py-2 rounded-xl border-[#E5E7E8] border bg-[#F9FAFB] text-sm sm:text-md font-medium'>Manage Group Share</button>
				</div>
					</div>
				</div>
			</div>
			<MaxWidthWrapper className="bg-[#eeeeee]">
				<div className="bg-[#eeeeee]">
					<main className="flex-grow container mx-auto px-2 py-4 sm:p-6">
						{/* 
          The space-y-8 from your example is removed here if FileManagementContent 
          is the only direct child and already has its own internal spacing/padding.
          If you have other elements directly within main, you can add space-y back.
        */}
						<FileManagementContent />
					</main>
				</div>
			</MaxWidthWrapper>
			{/* Back Button and Page Title */}

			<Footer />
		</div>
	)
}
