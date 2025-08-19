'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'

interface NavbarProps {
	user: {
		avatarSrc: string
		name: string
		role: string
	}
}

const Navbar = ({ user }: NavbarProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	return (
		<div className="bg-[#3366ff]">
			<nav className="text-white px-4 sm:px-6 py-2 max-w-[96rem] mx-auto  relative">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Image
							src="/page3/student_b2b/Clip path group.svg"
							alt="Edunique Logo"
							width={231}
							height={46}
							className="w-32 sm:w-40"
						/>
					</div>

					{/* Desktop Right Side */}
					<div className="hidden sm:flex items-center gap-5 px-4 py-2 rounded-full">
						<FiBell className="text-white text-xl sm:text-3xl cursor-pointer" />

						<div className="flex items-center gap-3">
							<Image
								src={user.avatarSrc || '/admin/usernav.jpg'}
								alt={user.name}
								width={40}
								height={40}
								className="rounded-full w-10 sm:w-14 sm:h-14 object-cover"
							/>
							<div className="leading-tight space-y-1">
								<div className="font-semibold sm:text-lg text-sm">{user.name}</div>
								<div className="text-[#FFCC00] sm:text-sm text-xs">{user.role}</div>
							</div>
						</div>
					</div>

					{/* Mobile Toggle Button */}
					<div className="sm:hidden">
						<button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none" aria-label="Toggle mobile menu">
							{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
						</button>
					</div>
				</div>

				{/* Mobile Overlay */}
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 bg-black/40 z-30 sm:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
						aria-hidden="true"
					/>
				)}

				{/* Mobile Slide-in Menu */}
				<div
					className={`fixed top-0 left-0 bottom-0 w-64 bg-[#3366FF] z-40 transition-transform duration-300 ease-in-out sm:hidden ${
						isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<div className="p-4 border-b border-white/20 flex justify-between items-center">
						<Image src="/page3/student_b2b/Clip path group.svg" alt="Edunique Logo" width={150} height={30} className="w-32" />
						<button
							onClick={toggleMobileMenu}
							className="p-2 rounded-full hover:bg-white/20 focus:outline-none"
							aria-label="Close menu">
							<FaTimes className="w-6 h-6 text-white" />
						</button>
					</div>

					{/* You can add navigation links here if needed */}
					<div className="flex flex-col gap-4 p-4 text-white text-sm">
						<Link href="/dashboard" onClick={toggleMobileMenu}>
							Dashboard
						</Link>
						<Link href="/profile" onClick={toggleMobileMenu}>
							Profile
						</Link>
						<Link href="/settings" onClick={toggleMobileMenu}>
							Settings
						</Link>
					</div>

					{/* User Info in Mobile Menu */}
					<div className="p-4 border-t border-white/20 mt-auto flex items-center gap-2">
						<Image
							src={user.avatarSrc || '/admin/usernav.jpg'}
							alt={user.name}
							width={32}
							height={32}
							className="w-8 h-8 rounded-full object-cover"
						/>
						<div>
							<div className="text-sm font-semibold">{user.name}</div>
							<div className="text-xs text-white/80">{user.role}</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
