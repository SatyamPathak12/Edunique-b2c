'use client'

import { useState, useEffect, Fragment } from 'react' // Added Fragment
import Image from 'next/image'
import { FiX } from 'react-icons/fi' // Added FiX for close button
import DmittTestPage from './test-page-1'

// --- System Error Modal Component ---
const SystemErrorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; onRestart?: () => void }) => {
	if (!isOpen) return null

	return (
		// Backdrop
		<div className="fixed inset-0 bg-[#00000045] flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
			{/* Modal Content */}
			<div className="bg-white rounded-4xl shadow-2xl w-full max-w-84 overflow-hidden transform transition-all duration-300 ease-in-out scale-100 text-center p-6 md:p-8 relative">
				{/* Optional Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 bg-[#F9FAFB] rounded-full p-1 focus:outline-none"
					aria-label="Close error modal">
					<FiX className="w-5 h-5" />
				</button>

				{/* Error Icon Image */}
				<div className="flex justify-center h-64">
					<Image
						src="/images/nework_issue.png" // <-- UPDATE PATH to your error icon image
						alt="System Error"
						width={200} // Adjust size as needed
						height={200}
						className="object-contain scale-150 aspect-square"
					/>
				</div>

				{/* Error Message */}
				<p className="text-md font-semibold text-red-600">Network issues detected.</p>
				<p className="text-md font-semibold text-red-600">The &quot;module&quot; will now restart.</p>
			</div>
		</div>
	)
}

const TIME_LIMIT_MINUTES = 20

// --- Main Test Page Component (from previous, with modal integration) ---
export default function DmittTestPageWithErrorModal() {
	const [timeLeft] = useState(TIME_LIMIT_MINUTES * 60)
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false) // State for error modal

	// Simulate an error for demonstration
	useEffect(() => {
		const showErrorTimer = setTimeout(() => {
			setIsErrorModalOpen(true)
		}, 5000) // Show error after 5 seconds
		return () => clearTimeout(showErrorTimer)
	}, [])

	useEffect(() => {}, [timeLeft])

	const closeErrorModal = () => {
		setIsErrorModalOpen(false)
		console.log("Error modal closed. Module 'restarted'.")
	}

	return (
		<Fragment>
			{' '}
			{/* Needed for the modal to be a sibling */}
			<div className={`min-h-screen bg-gray-100 flex flex-col ${isErrorModalOpen ? 'filter backdrop-blur-3xl pointer-events-none' : ''}`}>
				<DmittTestPage />
			</div>
			{/* Error Modal Invocation */}
			<SystemErrorModal isOpen={isErrorModalOpen} onClose={closeErrorModal} />
		</Fragment>
	)
}
