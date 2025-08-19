/* eslint-disable @typescript-eslint/no-unused-vars */
'use client' // needed for client components using hooks

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // App Router hook for current path
import { FiGrid, FiBookOpen, FiMessageSquare, FiVideo, FiBell } from 'react-icons/fi'

export default function TestHeader() {


    return (
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    {/* Replace with your actual logo */}
                    {/* <span className="text-2xl font-bold italic">EDUNIQUE</span> */}
                    <Image src="/images/logo.png" alt="Edunique Logo" width={150} height={40} />
                </div>

                {/* User Info & Notification */}
                <div className="flex items-center space-x-4">
                    <button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
                        <FiBell className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/person.jpg" // Replace with actual avatar path
                            alt="Shlok Agheda"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <div>
                            <p className="text-sm font-medium">Shlok Agheda</p>
                            <p className="text-xs opacity-80">Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
