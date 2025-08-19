"use client"
import Image from 'next/image';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

interface PrincipalLoginBannerProps {
    activity: string;
    profileImage: string;
    button1: string;
    button2: string;
}

// Receive props as an object, not a string
const PrincipalLoginBanner = ({ activity, button1, button2, profileImage }: PrincipalLoginBannerProps) => {
    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };
    const PALETTE = {
        GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
        GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
        PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
        PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
        PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
        PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

        ACCENT_PINK: "#FF3366", // Tags, highlights
        ACCENT_BLUE: "#0DC6FD", // Line chart, progress
        ACCENT_PURPLE: "#AC50F5", // Line chart, progress
        ACCENT_RED: "#FF4A69", // Failed status

        BG_PAGE: "#F3F4F6", // Main page background
        BORDER_GREY: "#B0B0B0", // General borders for cards
        TEXT_DARK: "#1F2937", // For primary text
        TEXT_MEDIUM: "#6B7280", // For secondary text
        TEXT_LIGHT: "#9CA3AF", // For tertiary text
        WHITE_CARD: "#FFFFFF",
    };

    return (
        <div className='w-full'>
            <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
                <button
                    onClick={handleBackClick}
                    className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
                    aria-label="Go back"
                >
                    <FiArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
                    {`${activity} Attendence`}
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-3.5 gap-6 bg-[url('/principal/dashboard-pattern.png')] bg-repeat bg-[length:650px_650px] rounded-2xl m-4">
                {/* Student Info Card */}
                <div
                    className="lg:col-span-3 bg-white p-3 rounded-full"
                    style={{
                        borderColor: PALETTE.BORDER_GREY,
                    }}
                >
                    <div className="flex  items-start sm:items-center gap-4">
                        <Image
                            src={profileImage}
                            alt="Shlok Agheda"
                            width={72}
                            height={72}
                            className="rounded-full h-24 w-24 flex-shrink-0"
                        />
                        <div className="flex-grow">
                            <h2
                                className="text-xl font-semibold"
                                style={{ color: PALETTE.TEXT_DARK }}
                            >
                                Shlok Agheda
                            </h2>
                            <div className="flex flex-wrap items-center gap-1 mt-2">
                                <span
                                    className="text-xs font-medium px-2.5 py-1.5 rounded-l-full"
                                    style={{
                                        backgroundColor: PALETTE.ACCENT_PINK,
                                        color: PALETTE.WHITE_CARD,
                                    }}
                                >
                                    {button1}
                                </span>
                                <span
                                    className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full"
                                    style={{
                                        backgroundColor: PALETTE.ACCENT_PINK,
                                        color: PALETTE.WHITE_CARD,
                                    }}
                                >
                                    {button2}
                                </span>
                            </div>
                        </div>
                        <div>
                              <p><span className="text-black-400">City:</span> Mumbai</p>
                            <p><span className="text-black-400">State:</span> Maharashtra</p>
                        </div>
                        <div className="font-medium text-right sm:text-left space-y-0.5">
                            <p><span className="text-black-400">Gender:</span> Male</p>
                            <p><span className="text-black-400">DOB:</span> 15 Jun 2015</p>
                            <p><span className="text-black-400">Email:</span> example@gm.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalLoginBanner;