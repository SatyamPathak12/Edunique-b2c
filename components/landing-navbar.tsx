'use client'

import LogoImage from '@/public/mianLogo.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button, buttonVariants } from '@/components/ui/button'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'

export default function LandingNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const phoneNumber = '+0931-705-3875'

	return (
		<nav className="sticky top-0 left-0 w-full z-50 flex flex-col">
			{/* Top Bar (1/3 of total height => 40px) */}
			<div className="flex-1 bg-[#F9326F] text-white py-[0.3rem] px-[8vw] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 min-h-[40px]">
				{/* Left: Contact */}
				<div className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-2 sm:gap-6">
					{/* Phone */}
					<a href={`tel:${phoneNumber}`} className="flex items-center gap-2 no-underline">
						<div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#ff5e8e] text-white text-sm shadow-md">
							<FaPhoneAlt />
						</div>
						<span className="font-bold tracking-wide text-xs sm:text-sm break-all">
							{phoneNumber.split('').map((char, index) => (
								<span key={index} className={`relative px-[0.3px] ${index % 2 === 0 ? '-top-[0.5px]' : 'top-[0.7px]'}`}>
									{char}
								</span>
							))}
						</span>
					</a>

					{/* Email */}
					<a href="mailto:ElizabethJ@jourrapide.com" className="flex items-center gap-2 no-underline">
						<div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#ff5e8e] text-white text-sm shadow-md">
							<FaEnvelope />
						</div>
						<span className="font-bold tracking-wide text-xs sm:text-sm break-all">ElizabethJ@jourrapide.com</span>
					</a>
				</div>

				{/* Right: Social */}
				<div className="flex justify-center sm:justify-end gap-2 sm:gap-4 items-center">
					{[FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube].map((Icon, index) => {
						const bgColors = ['#3b5998', '#E4405F', '#0088cc', '#444', '#FF0000']
						return (
							<a
								key={index}
								className="w-[24px] h-[24px] flex items-center justify-center rounded-t-full rounded-bl-full text-white text-xs"
								style={{ backgroundColor: bgColors[index] }}
								target="_blank"
								rel="noopener noreferrer"
								href="https://facebook.com">
								<Icon />
							</a>
						)
					})}
				</div>
			</div>

			<div className="flex-2 bg-white text-black min-h-[80px] px-[8vw] py-2 flex items-center justify-between relative">
				<Link href="/" className="flex-shrink-0">
					<Image src={LogoImage} alt="logo" className="h-[30px] w-auto object-contain" priority/>
				</Link>

				{/* Mobile Toggle */}
				<button className="md:hidden ml-auto text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <HiX /> : <HiMenu />}
				</button>

				{/* Desktop Menu */}
				<div className="ml-16 w-full justify-between hidden md:flex items-center">
					{['/', '/about', '/courses', '/principal/registration/choose-profile', '/subscription', '/contact'].map((href, idx) => (
						<Link key={href} href={href} className="text-base font-medium hover:text-blue-600">
							{['Home', 'About Us', 'Courses', 'Become a Future School', 'Subscription Plan', 'Contact Us'][idx]}
						</Link>
					))}
					{/* <button className="px-6 py-2 text-xs text-white rounded-sm bg-[#3366ff] hover:bg-blue-700 cursor-pointer">Login</button> */}
					<Link href={'/student/auth/login'} className={cn(buttonVariants({ variant: 'default' }), 'px-6 text-xs bg-[#f9326f] rounded-full')}>
						Login
					</Link>
				</div>

				{/* Mobile Dropdown */}
				{isMenuOpen && (
					<div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 px-8 py-6 shadow-lg md:hidden">
						{['/', '/about', '/courses', '/future-school', '/subscription', '/contact'].map((href, idx) => (
							<Link
								key={href}
								href={href}
								onClick={() => setIsMenuOpen(false)}
								className="text-base font-medium hover:text-blue-600">
								{['Home', 'About Us', 'Courses', 'Become a Future School', 'Subscription Plan', 'Contact Us'][idx]}
							</Link>
						))}
						<Button>Login</Button>
					</div>
				)}
			</div>
		</nav>
	)
}
