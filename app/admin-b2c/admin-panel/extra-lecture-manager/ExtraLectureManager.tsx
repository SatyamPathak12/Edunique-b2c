'use client';
import React, { useState } from "react";
import Image from 'next/image';

import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";

type leavecards = {
    id: number,
    image: string,
    name: string,
    course: string,
    group: string,
    reason: string,
    email: string
};

const teachers = Array.from({ length: 9 }, (_, i) => ({
    id: i + 5,
    name: 'Teacher Name',
    course: 'Course Name',
    group: 'Batch',
    image: "/teacher-avatar-4.png", // Use same image or add logic to vary if needed,
    reason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum illum, itaque et perferendis ea hic alias modi ex reiciendis animi eum quam minus, autem deserunt voluptatibus ducimus, officiis corporis?',
    email: "Email ID"
}));

export const sampleData: leavecards[] = [...teachers];

const ExtraLectureManager = () => {
    // const [activeTab, setActiveTab] = useState<'teacher'>('teacher');
    const filters = [
        { id: "f1", label: "Filter 1" },
        { id: "f2", label: "Filter 2" },
        { id: "f3", label: "Filter 3" },
        { id: "f4", label: "Filter 4" },
    ];

    return (
        <>

            <AdminB2CWrapper>
                {/* Tabs */}
                <div className="bg-white rounded-2xl p-4">

                    <SearchFilter filters={filters} />
                    <div className="max-h-[764px] overflow-y-auto grid gap-1 grid-cols-1 sm:grid-cols-2 custom-scrollbar-thin">
                        {teachers.map((item, index) => (
                            <div key={item.id} className="flex flex-wrap items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-4 inline-block mr-2 mb-4  relative">
                                <div className="flex">
                                    <div className="rounded-3xl bg-white p-1.5 relative overflow-hidden">
                                        <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 justify-between ml-4">
                                        <div className="font-semibold text-md ">{item.name}</div>
                                        <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                                        <div className="text-xs text-gray-500"> {item.group} </div>
                                        <div className="text-xs text-gray-500"> {item.email} </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-4">
                                    <p className=""><strong className="font-medium">Remaining Topics:</strong> Lorem Ipusm</p>
                                    {index % 2 === 0 ? (
                                        <p className="">
                                            <strong className="font-medium">Remaining Subtopics:</strong> Lorem Ipusm
                                        </p>
                                    ) : (
                                        <p className="">
                                            <strong className="font-medium">Remaining Left:</strong> Lorem Ipusm
                                        </p>
                                    )}
                                    <p className=""><strong className="font-medium">Deadline Missed:</strong> 22 / 6 / 25</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-2xl max-w-xl mt-5 mb-3 mx-2  ">
                                    <p className="text-center text-black font-bold text-lg">Note</p>
                                    <p className="text-center text-black-600 text-base">
                                        {item.reason}</p>
                                </div>
                                <div className="space-y-6 my-3 mx-2">
                                    {/* Schedule Date */}
                                    <div className="space-y-2">
                                        <label className="text-base font-medium text-black">Schedule Date</label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>

                                    {/* Schedule Time */}
                                    <div className="space-y-2">
                                        <label className="text-base font-medium text-black">Schedule Time</label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>

                                    {/* Fee */}
                                    <div className="space-y-2">
                                        <label className="text-base font-medium text-black">
                                            Fee to be Paid by Parents (₹)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 mt-6">

                                    <button className="px-2 py-2 bg-[#3366FF] text-white rounded-3xl">
                                        Confirm & Schedule
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>

            </AdminB2CWrapper>
        </>
    )
}
export default ExtraLectureManager;