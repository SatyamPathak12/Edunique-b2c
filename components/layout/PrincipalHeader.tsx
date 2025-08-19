/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiDatabase, FiShield, FiBell } from 'react-icons/fi'
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { PiSuitcaseBold } from "react-icons/pi";
import { useEffect, useState } from 'react'
import { Bell } from 'lucide-react'


export default function PrincipalHeader() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            icon: FaRegSmile,
            label: 'Dashboard',
            href: '/principal/dashboard',
            activePaths: ['/principal/dashboard', '/principal/student-progress-report']
        },
        {
            icon: PiSuitcaseBold,
            label: 'School MGMT',
            href: '/principal/branch-management',
            activePaths: ['/principal/branch-management', '/principal/teacher-management', '/principal/manage-teacher-leave', '/principal/manage-staff', '/principal/teacher-performance']
        },
        {
            icon: FiDatabase,
            label: 'Material',
            href: '/principal/content-management-principal',
            activePaths: ['/principal/content-management']
        },
        {
            icon: FiShield,
            label: 'Security',
            href: '/principal/school-security',
            activePaths: ['/principal/school-security', '/principal/student-login-activity', '/principal/teacher-login-activity', '/principal/school-login-activity']
        },
        {
            icon: IoChatbubbleOutline,
            label: 'Chat',
            href: '/principal/chat',
            activePaths: ['/principal/chat']
        },
    ]


    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "shadow-md" : ""
                }`}
        >
            <nav className="bg-[#3366FF] text-white pt-5">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 h-16">
                        {/* Left Side - Logo and Back Arrow */}
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0">
                                <div className="relative h-10 w-32">
                                    <Image
                                        src="/mianLogo2.png"
                                        alt="EduHub Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-2 xl:space-x-4">

                            {/* Center - Navigation Items */}
                            <div className="flex items-center space-x-2 xl:space-x-4 bg-[#E3F2FD26] rounded-full p-1">
                                {navItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 rounded-full transition-all duration-200 
                                ${item.activePaths.some((path) => pathname.startsWith(path)) ? "text-[#FFCC00]" : "hover:bg-white/10"
                                                }`}
                                        >
                                            <IconComponent className="xl:h-5 xl:w-5 h-4 w-4" />
                                            <span className="font-medium text-nowrap lg:block hidden lg:text-sm xl:text-base">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side - Actions */}
                        <div className="flex items-center space-x-3">

                            {/* Notification Bell */}
                            <Link href="#">
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                                    <Bell className="h-5 w-5" />
                                </button>
                            </Link>

                            {/* Profile Picture */}
                            <Link href="#" className="relative h-11 w-11 rounded-full overflow-hidden ">
                                <Image
                                    src="/images/person.jpg"
                                    alt="User profile"
                                    fill
                                    className="object-cover"
                                />
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={
                                            isMobileMenuOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
                            }`}
                    >
                        <div className="space-y-2">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 
                                ${item.activePaths.some((path) => pathname.startsWith(path))
                                                ? "text-[#FFCC00]"
                                                : "hover:bg-white/10"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
