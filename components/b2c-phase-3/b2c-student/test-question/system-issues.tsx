'use client'

import { useState, useEffect, Fragment } from 'react' // Added Fragment
import Image from 'next/image'
import {  FiX } from 'react-icons/fi' // Added FiX for close button
import DmittTestPage from './test-page-1'

// --- System Error Modal Component ---
const SystemErrorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; onRestart?: () => void }) => {
	if (!isOpen) return null

	// const handleRestart = () => {
	//     if (onRestart) {
	//         onRestart();
	//     }
	//     onClose(); // Close modal after restart action
	// };

	return (
		// Backdrop
		<div className="fixed inset-0 bg-[#00000045] bg-opacity-60 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
			{/* Modal Content */}
			<div className="bg-white rounded-3xl shadow-2xl w-full max-w-84 overflow-hidden transform transition-all duration-300 ease-in-out scale-100 text-center p-6 md:p-8 relative">
				{/* Optional Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 bg-[#F9FAFB] rounded-full p-1 focus:outline-none"
					aria-label="Close error modal">
					<FiX className="w-5 h-5" />
				</button>

				{/* Error Icon Image */}
				<div className="mb-6 flex justify-center">
					<Image
						src="/images/system_issue.png" // <-- UPDATE PATH to your error icon image
						alt="System Error"
						width={200} // Adjust size as needed
						height={200}
						className="object-contain scale-130 aspect-square"
					/>
				</div>

				{/* Error Message */}
				<p className="text-md font-bold  tracking-tight text-red-600">A system error has occurred.</p>
				<p className="text-md font-bold text-red-600 tracking-tight ">The &quot;module&quot; will now restart.</p>
			</div>
		</div>
	)
}

export default function DmittTestPageWithSystemErrorModal() {
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false) // State for error modal

	// Simulate an error for demonstration
	useEffect(() => {
		const showErrorTimer = setTimeout(() => {
			setIsErrorModalOpen(true)
		}, 5000) // Show error after 5 seconds
		return () => clearTimeout(showErrorTimer)
	}, [])

	const closeErrorModal = () => {
		setIsErrorModalOpen(false)
		// Potentially trigger a restart action here if needed
		console.log("Error modal closed. Module 'restarted'.")
	}

	// const handleModuleRestart = () => {
	//     console.log("Simulating module restart...");
	//     // Add logic to reset test state, reload page, or specific module part
	//     // For now, just logs and closes modal (handled by closeErrorModal)
	// };

	return (
		<Fragment>
			{' '}
			{/* Needed for the modal to be a sibling */}
			<div className={`min-h-screen bg-gray-100 flex flex-col ${isErrorModalOpen ? 'filter backdrop-blur-3xl pointer-events-none' : ''}`}>
				<DmittTestPage />
			</div>
			{/* Error Modal Invocation */}
			<SystemErrorModal
				isOpen={isErrorModalOpen}
				onClose={closeErrorModal}
				// onRestart={handleModuleRestart} // Uncomment if you want a restart button in the modal
			/>
		</Fragment>
	)
}
