"use client"
import Image from 'next/image';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const PrincipalProfileBanner = () => {
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
    const keyFocusAreas = [
        "+91 0000000000",
        "example@gm.com",
    ];
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
                    Teacher Report
                </h1>
            </div>
            <div className="p-2 md:p-4 mt-4 rounded-2xl mx-2 md:mx-5 gap-6 bg-[url('/principal/teacher-progress-report-pattern.png')] bg-repeat bg-[length:650px_650px]">
                {/* Student Info Card */}
                <div
                    className="bg-white p-5 rounded-2xl "
                    style={{
                        borderColor: PALETTE.BORDER_GREY,
                    }}
                >
                    <div className="flex flex-col w-full justify-center sm:flex-row sm:justify-between bg-white rounded-2xl sm:items-center gap-4">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/teacher-b2b/profile2.png"
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
                                        className="text-xs font-medium px-2.5 py-1.5 rounded-l-full rounded-r-full sm:rounded-r-none"
                                        style={{
                                            backgroundColor: PALETTE.ACCENT_PINK,
                                            color: PALETTE.WHITE_CARD,
                                        }}
                                    >
                                        Class Assigned
                                    </span>
                                    <span
                                        className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full rounded-l-full sm:rounded-l-none"
                                        style={{
                                            backgroundColor: PALETTE.ACCENT_PINK,
                                            color: PALETTE.WHITE_CARD,
                                        }}
                                    >
                                        Class Assigned
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] col-span-2 lg:col-span-3 font-medium text-left space-y-0.5 text-black">
                            <p>Gender: Male</p>
                            <p>DOB: 15 Jun 2015</p>
                            <p>Email: example@gm.com</p>

                            <p>City: Mumbai</p>
                            <p>State: Maharashtra</p>
                        </div>
                    </div>
                    <div className="pt-4 ">
                        <p
                            className="text-sm font-bold mb-3"
                            style={{ color: PALETTE.TEXT_DARK }}
                        >
                            Contact details
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {keyFocusAreas.map((area) => (
                                <button
                                    key={area}
                                    className="text-xs px-2 py-2.5 text-black rounded-full border"
                                    style={{
                                        backgroundColor: "#F3F4F6",
                                        borderColor: PALETTE.BORDER_GREY,
                                    }}
                                >
                                    {area}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalProfileBanner;