'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'

const profiles = [
	{
		id: 'student',
		label: 'Student / Parents',
		iconSrc: '/images/profile-student-smiley.svg',
	},
	{
		id: 'teacher',
		label: 'Teacher',
		iconSrc: '/images/profile-teacher-pen.svg',
	},
	{
		id: 'principal',
		label: 'Principal',
		iconSrc: '/images/profile-principal-star.svg',
	},
]

export default function ChooseProfilePage() {
	const [selectedProfile, setSelectedProfile] = useState<string>(profiles[0].id)

	const COLORS = {
		primaryBlue: '#3366FF', // Main background blue and selection indicator blue
		primaryPink: '#FF3366', // Left section background pink
		lightPink: '#FFDAE5', // Right section background light pink
		yellowAccent: '#f8bd00', // Yellow curve accent
		textDark: '#333333', // Dark text (for "Choose Profile" title)
		textMedium: '#555555', // Medium text (for profile labels)
		textLight: '#777777', // Light text (for Lorem Ipsum descriptions)
	}

	return (
		// Main container with full screen height and custom blue patterned background
		<div
			className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
			style={{
				backgroundColor: COLORS.primaryBlue,
				backgroundImage: 'url(/images/background.jpg)',
				backgroundRepeat: 'repeat',
				backgroundSize: 'auto',
			}}>
			{/* Central content card with large rounded corners and shadow */}
			<div className="bg-white rounded-4xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[65dvh]">
				{/* Left Section - Pink with Grid and Image */}
				<div
					className="w-full md:w-1/2 relative text-white p-8 lg:p-12 flex flex-col justify-between min-h-[450px] md:min-h-0"
					style={{ backgroundColor: '#f41e85' }}>
					{/* Grid Overlay */}
					<div
						className="absolute inset-0 opacity-10"
						style={{
							backgroundImage: 'url(/images/grid.png)',
							backgroundRepeat: 'repeat',
							backgroundSize: '100%',
						}}></div>

					{/* Text Content */}
					<div className="z-10 mb-auto pt-4 md:pt-0">
						<h1 className="text-2xl font-bold mb-2">Become a Future School</h1>
						<p className="text-sm max-w-[45ch] leading-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
					</div>

					{/* Yellow Curve Background */}
					<div className="absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
						<div
							className="absolute rounded-full scale-110"
							style={{
								backgroundColor: COLORS.yellowAccent,
								width: '125%',
								height: '150%',
								bottom: '-100%',
								left: '14%',
							}}></div>
						<Image
							src="/images/teacher-student-main.png"
							alt="Teacher helping student"
							width={500}
							height={400}
							className="w-full max-w-md h-auto object-contain drop-shadow-xl absolute bottom-0 -translate-x-1/2 left-1/2"
						/>
					</div>

					{/* Main Image */}
					<div className="relative z-10 mt-auto flex justify-center items-end h-full"></div>
				</div>

				{/* Right Section - Light Pink Profile Choice */}
				<div
					className="w-full md:w-1/2 p-8 text-black lg:p-12 flex flex-col gap-2"
					style={{ backgroundColor: COLORS.lightPink }}>
					<h2 className="text-xl font-bold">Choose Profile</h2>
					<p className="text-sm max-w-[60ch] mb-8 leading-normal">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>

					{/* Profile selection boxes */}
					<div className="space-y-4">
						{profiles.map(profile => (
							<div
								key={profile.id}
								onClick={() => setSelectedProfile(profile.id)}
								className={`flex items-center justify-between px-2 py-2  cursor-pointer transition-all duration-150 bg-[#F9FAFB] hover:shadow-md rounded-full`}>
								<div className="flex items-center gap-3">
									<Image src={profile.iconSrc} alt={`${profile.label} icon`} width={32} height={32} className="object-contain" />
									<span className="text-sm font-medium" style={{ color: COLORS.textMedium }}>
										{profile.label}
									</span>
								</div>
								{/* Selected checkmark */}
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center  transition-colors ${
										selectedProfile === profile.id ? '' : ' bg-white'
									}`}
									style={
										selectedProfile === profile.id
											? {
													backgroundColor: COLORS.primaryBlue,
											  }
											: {}
									}>
									{selectedProfile === profile.id && <FiCheck className="w-5 h-5 text-white" />}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
