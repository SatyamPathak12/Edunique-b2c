'use client';

import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import Link from 'next/link';
import {
    FiSearch, FiBell, FiChevronDown, FiEdit,
    FiFacebook, FiInstagram, FiTwitter, FiLinkedin,
    FiMail, FiPhone
} from 'react-icons/fi';

export default function TeacherProfilePage() {

    const editProfilePath = "/teacher/profile/edit";

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-64"> {/* ml-64 to account for sidebar width */}

                {/* Top Bar (Similar to Dashboard) */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
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
                                <FiBell className="w-5 h-5" />
                            </button>
                            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
                                <Image
                                    src="/placeholder-avatar.jpg" // Replace with actual avatar path
                                    alt="User Avatar"
                                    width={28}
                                    height={28}
                                    className="rounded-full"
                                />
                                <div className="hidden md:block">
                                    <p className="text-xs font-medium text-gray-800">Robert Allen</p>
                                    <p className="text-xs text-gray-500">Teacher</p>
                                </div>
                                <FiChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Profile Content */}
                <div className="relative">
                    {/* Blue Banner - Angled */}
                    <div className="bg-blue-600 h-48 md:h-56 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-white transform -skew-y-2 origin-bottom-left"></div>
                        <div className="absolute top-4 right-4 md:top-6 md:right-8">
                            <Link href={editProfilePath}>
                            
                                <button  className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors">
                                    <FiEdit className="w-4 h-4" />
                                    Edit
                                </button>
                            </Link>
                        </div>
                    </div>


                    {/* Profile Info Area */}
                    <div className="relative px-6 md:px-8 -mt-24 md:-mt-28 pb-16">
                        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center">
                            {/* Profile Picture */}
                            <div className="relative -mt-16 md:-mt-20 mb-4">
                                <Image
                                    src="/images/profile-robert-allen.jpg" // <-- UPDATE PATH
                                    alt="Robert Allen"
                                    width={128} // Adjust size as needed
                                    height={128}
                                    className="rounded-xl object-cover border-4 border-white shadow-lg"
                                />
                            </div>

                            {/* Name and Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Robert Allen</h2>
                            <p className="text-sm font-medium text-pink-500 mt-1">English Teacher</p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-3 mt-4 mb-8">
                                {[
                                    { icon: FiFacebook, color: 'bg-blue-600', href: '#' },
                                    { icon: FiInstagram, color: 'bg-pink-500', href: '#' },
                                    { icon: FiTwitter, color: 'bg-sky-500', href: '#' },
                                    { icon: FiLinkedin, color: 'bg-blue-700', href: '#' },
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity ${social.color}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Bio Section */}
                            <div className="text-left w-full max-w-3xl mx-auto mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bio</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                                    We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isnt going to get the job done so thats why this course is packed with practical hands-on examples that you can follow step by step.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="text-left w-full max-w-3xl mx-auto border-t border-gray-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 sm:gap-8">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <FiMail className="w-5 h-5 text-blue-600" />
                                    <span>dennisbarrett@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <FiPhone className="w-5 h-5 text-blue-600" />
                                    <span>+91- 9876543210</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}