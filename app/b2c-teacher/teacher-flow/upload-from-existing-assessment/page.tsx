'use client'

import React, { useState, useMemo } from 'react'
import {  FiFolder, FiSettings } from 'react-icons/fi'
import Header from '@/components/layout/TeacherB2CHeader' // Adjust path as needed
import Footer from '@/components/layout/Footer' // Adjust path as needed
import Link from 'next/link'
import TabSwitch from '@/components/common-components/TabSwitch'
import TeacherB2CWrapper from '@/components/teacher-b2c/common-components/TeacherB2CPageWrapper'
import BackButton from '@/components/common-components/BackButton'

// --- Data Interfaces ---
interface Category {
	id: string
	name: string
}

interface Folder {
	id: string
	name: string
	fileCount: number
	categoryId: string // To link folder to a category
}

// --- Sample Data ---
const sampleCategories: Category[] = [
	{ id: 'cat1', name: 'Category 1' },
	{ id: 'cat2', name: 'Category 2' },
	{ id: 'cat3', name: 'Category 3' },
	{ id: 'cat4', name: 'Category 4' },
	{ id: 'cat5', name: 'Category 5' },
]

const sampleFolders: Folder[] = [
	{ id: 'f1', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
	{ id: 'f2', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
	{ id: 'f3', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
	{ id: 'f4', name: 'Folder Name', fileCount: 100, categoryId: 'cat3' },
	{ id: 'f5', name: 'Folder Name', fileCount: 100, categoryId: 'cat3' },
	{ id: 'f6', name: 'Folder Name', fileCount: 100, categoryId: 'cat4' },
	{ id: 'f7', name: 'Folder Name', fileCount: 100, categoryId: 'cat2' },
	{ id: 'f8', name: 'Folder Name', fileCount: 100, categoryId: 'cat2' },
]


interface FolderCardProps {
	folder: Folder
}

const FolderCard: React.FC<FolderCardProps> = ({ folder }) => {
	return (
		<Link href={"/b2c-teacher/teacher-flow/folder-name-2"} className="bg-[#f9fafb] border  border-[#e5e7eb] rounded-2xl p-2 duration-200 relative flex flex-col md:flex-row md:items-center gap-4  w-full">
			{/* Info Icon */}
			<div className="flex gap-4 items-center w-full justify-start">
				{/* Folder Icon Area */}
				<div className="bg-[#99DEFF] w-24 h-24 sm:w-28 sm:h-28 rounded-xl flex items-center justify-center flex-shrink-0">
					<FiFolder className="w-10 h-10 sm:w-14 sm:h-14 text-black opacity-80" strokeWidth={1.5} />
				</div>

				{/* Folder Details */}
				<div className="flex  flex-col flex-grow w-full">
					<p className="sm:text-lg text-lg font-medium text-black mb-1">{folder.name}</p>
					<p className="text-xs sm:text-sm text-[#6B7280] mb-5">{folder.fileCount} Files</p>
					<button
						onClick={() => alert(`Manage Access for ${folder.name}`)}
						className="w-full hidden md:flex text-base sm:self-start items-center justify-center gap-2 px-4 py-2.5 bg-[#f3f4f6] hover:bg-gray-200 text-[#6b7280] rounded-full transition-colors">
						<FiSettings className="w-4 h-4" />
						Manage Access
					</button>
				</div>
			</div>
			<button
				onClick={() => alert(`Manage Access for ${folder.name}`)}
				className="w-full md:hidden text-base sm:self-start flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f3f4f6] hover:bg-gray-200 text-[#6b7280] rounded-full transition-colors">
				<FiSettings className="w-4 h-4" />
				Manage Access
			</button>
		</Link>
	)
}

// --- Main Content Component ---
const UploadExistingTestContent: React.FC = () => {
	const [categories] = useState<Category[]>(sampleCategories)
	const [allFolders] = useState<Folder[]>(sampleFolders)
	const [activeCategoryId, setActiveCategoryId] = useState<string>(sampleCategories[0]?.id || '')
	const tabs = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5",]
	const [activeTab, setActiveTab] = useState(tabs[0])
	const filteredFolders = useMemo(() => {
		if (!activeCategoryId) return allFolders // Or an empty array if no default selection
		return allFolders.filter(folder => folder.categoryId === activeCategoryId)
	}, [allFolders, activeCategoryId])

	return (
		<div className="bg-white rounded-2xl  min-h-screen  px-6 py-4 ">
			{/* Category Tabs */}
			<TabSwitch tabs={tabs} selected={activeTab} onChange={setActiveTab} />

			{/* Folders Grid */}
			{filteredFolders.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-x-4 gap-y-2 sm:gap-6">
					{filteredFolders.map(folder => (
						<FolderCard key={folder.id} folder={folder} />
					))}
				</div>
			) : (
				<div className="text-center py-12 text-gray-500">
					<FiFolder className="w-16 h-16 mx-auto mb-4 text-gray-400" />
					<h3 className="text-xl font-semibold mb-2">No Tests Found</h3>
					<p className="text-sm">There are no tests available in this category.</p>
				</div>
			)}
		</div>
	)
}

export default function SelectExistingTestPage() {

	return (
		<>
			<Header activeState="Dashboard" />
			<BackButton Heading='Select Existing Assessment' />
			<TeacherB2CWrapper>
				<UploadExistingTestContent />

			</TeacherB2CWrapper>
			<Footer />
		</>
	)
}
