"use client"
import Image from 'next/image';
import React from 'react'

interface PrincipalLoginBannerProps {
    name: string;
    profileImage: string;
    button1: string;
    button2: string;
}

// Receive props as an object, not a string
const AttendenceBanner = ({ name, button1, button2, profileImage }: PrincipalLoginBannerProps) => {


    return (
        <div className='w-full'>

            <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-3.5 gap-6 bg-[url('/principal/dashboard-pattern.png')] bg-repeat bg-[length:650px_650px] rounded-2xl mb-4">
                {/* Student Info Card */}
                <div
                    className="lg:col-span-3 bg-white px-6 py-2 rounded-3xl"
                    style={{
                        borderColor: "#B0B0B0",
                    }}
                >
                    <div className="flex flex-wrap items-start sm:items-center gap-4">
                        <Image
                            src={profileImage}
                            alt="Shlok Agheda"
                            width={72}
                            height={72}
                            className="rounded-full h-20 w-20 flex-shrink-0"
                        />
                        <div className="flex-grow">
                            <h2
                                className="text-xl font-semibold"
                                style={{ color: "#1F2937" }}
                            >
                                {name}
                            </h2>
                            <div className="flex flex-wrap items-center gap-1 mt-2">
                                <span
                                    className="text-xs text-white bg-[#ff3366] font-medium px-2.5 py-1.5 rounded-l-full"

                                >
                                    {button1}
                                </span>
                                <span
                                    className="text-xs text-white bg-[#ff3366] font-meduim px-2.5 py-1.5 rounded-r-full"
                                >
                                    {button2}
                                </span>
                            </div>
                        </div>
                        <div className="text-base gap-x-8 md:gap-y-2 flex flex-col md:flex-row items-start md:items-center space-y-0.5 text-black">
                            <div className="flex flex-col gap-1">
                                <p className='text-sm md:text-base'><strong className="font-semibold">City:</strong>{" "}Mumbai</p>
                                <p className='text-sm md:text-base'><strong className="font-semibold">State:</strong>{" "}Maharashtra</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-sm md:text-base'><strong className="font-semibold">Gender:</strong>{" "}Male</p>
                                <p className='text-sm md:text-base'><strong className="font-semibold">DOB:</strong>{" "}15 Jun 2015</p>
                                <p className='text-sm md:text-base'><strong className="font-semibold">Email:</strong>{" "}example@gm.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendenceBanner;