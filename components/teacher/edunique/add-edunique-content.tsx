'use client'

import { useState, useRef } from 'react' // Added useRef for file input
import Sidebar from '@/components/teacher/layout'
import Image from 'next/image'
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi'

// --- Reusable Helper Components (Slightly adapted) ---

const InputField = ({
	id,
	label,
	placeholder,
	type = 'text',
	value,
	onChange,
	name,
}: {
	id: string
	label: string
	placeholder: string
	type?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	name?: string
}) => (
	<div className="space-y-1.5">
		<label htmlFor={id} className="block text-sm font-medium text-gray-700">
			{label}
		</label>
		<input
			id={id}
			name={name || id}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
		/>
	</div>
)

const SelectField = ({
	id,
	label,
	placeholder,
	options = [],
	value,
	onChange,
	name,
}: {
	id: string
	label: string
	placeholder: string
	options?: { value: string; label: string }[]
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
	name?: string
}) => (
	<div className="space-y-1.5">
		<label htmlFor={id} className="block text-sm font-medium text-gray-700">
			{label}
		</label>
		<div className="relative">
			<select
				id={id}
				name={name || id}
				className="appearance-none block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm pr-10"
				value={value || ''}
				onChange={onChange}>
				<option value="" disabled hidden={!!value}>
					{placeholder}
				</option>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
				<FiChevronDown className="h-5 w-5" aria-hidden="true" />
			</div>
		</div>
	</div>
)

export default function AddEduNiqueContentPage() {
	const [contentName, setContentName] = useState('')
	const [selectedBatch, setSelectedBatch] = useState('')
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [fileName, setFileName] = useState('No File Choose')
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setSelectedFile(event.target.files[0])
			setFileName(event.target.files[0].name)
		} else {
			setSelectedFile(null)
			setFileName('No File Choose')
		}
	}

	const handleChooseFileClick = () => {
		fileInputRef.current?.click()
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!contentName || !selectedBatch || !selectedFile) {
			alert('Please fill all fields and select a file.')
			return
		}
		console.log('Submitting EduNique Content:', {
			contentName,
			selectedBatch,
			fileName: selectedFile.name,
			fileSize: selectedFile.size,
			fileType: selectedFile.type,
		})
		// Add actual submission logic here (e.g., API call with FormData)
		// Reset form after submission (optional)
		setContentName('')
		setSelectedBatch('')
		setSelectedFile(null)
		setFileName('No File Choose')
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	const handleCancel = () => {
		console.log('Cancel clicked')
		// Add navigation logic or reset form
		setContentName('')
		setSelectedBatch('')
		setSelectedFile(null)
		setFileName('No File Choose')
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	return (
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar />

			<main className="flex-1 ml-64">
				{' '}
				{/* ml-64 for sidebar */}
				{/* Top Bar */}
				<header className="bg-white shadow-sm sticky top-0 z-30">
					<div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
						<div>
							<h1 className="text-xl font-semibold text-gray-800">Add EduNique Content</h1>
							<p className="text-xs text-gray-500">Dashboard</p>
						</div>
						<div className="flex items-center space-x-4">
							<div className="relative hidden sm:block">
								<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
								<input
									type="text"
									placeholder="Search"
									className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
								/>
							</div>
							<button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative">
								{' '}
								<FiBell className="w-5 h-5" />{' '}
							</button>
							<div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
								<Image src="/placeholder-avatar.jpg" alt="User Avatar" width={28} height={28} className="rounded-full" />
								<div className="hidden md:block">
									{' '}
									<p className="text-xs font-medium text-gray-800">Robert Allen</p> <p className="text-xs text-gray-500">Teacher</p>{' '}
								</div>
								<FiChevronDown className="w-4 h-4 text-gray-500" />
							</div>
						</div>
					</div>
				</header>
				{/* Main Content Area */}
				<div className="p-6 md:p-8">
					<div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<InputField
								id="contentName"
								label="Content name"
								placeholder="Enter Content Name"
								value={contentName}
								onChange={e => setContentName(e.target.value)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
								{' '}
								{/* Use items-end to align labels */}
								<SelectField
									id="selectBatch"
									label="Select Batch"
									placeholder="Select"
									options={[
										{ value: '8th', label: '8th' },
										{ value: '9th', label: '9th' },
										{ value: '10th', label: '10th' },
									]}
									value={selectedBatch}
									onChange={e => setSelectedBatch(e.target.value)}
								/>
								<div className="space-y-1.5">
									<label className="block text-sm font-medium text-gray-700">Pdf File Upload</label>
									<div className="flex items-center border border-gray-300 rounded-md shadow-sm bg-white">
										<button
											type="button"
											onClick={handleChooseFileClick}
											className="px-4 py-3 bg-blue-500 text-white text-sm font-medium rounded-l-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 whitespace-nowrap">
											Choose
										</button>
										<input
											type="file"
											ref={fileInputRef}
											onChange={handleFileChange}
											accept=".pdf" // Accept only PDF files
											className="sr-only" // Hidden visually, triggered by button
										/>
										<span className="flex-1 px-3 py-3 text-sm text-gray-500 truncate">{fileName}</span>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-4 pt-4">
								<button
									type="button"
									onClick={handleCancel}
									className="px-6 py-2.5 bg-gray-100 text-gray-700 border border-gray-300 font-medium text-sm rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
									Cancel
								</button>
								<button
									type="submit"
									className="px-8 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	)
}
