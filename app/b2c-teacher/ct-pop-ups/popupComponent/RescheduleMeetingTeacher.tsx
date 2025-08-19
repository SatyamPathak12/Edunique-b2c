"use client"
import React, { useState } from 'react';
import { FiCalendar, FiChevronDown, FiClock, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from '../../new-pop-ups/page';
import TabSwitchLight from '@/components/common-components/TabSwitchLight';
import { FC } from 'react';
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';

interface FilterOption {
    id: string;
    label: string;
}

// Filters component
interface FiltersProps {
    filters: FilterOption[];
}




const RescheduleMeetingTeacher: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {

  
    const students = Array.from({ length: 5 }).map((_, i) => ({
        name: 'Name',
        subject: 'Subject',
        course: 'Course Assigned',
        batch: 'Batch Assigned',
        image: '/common-images/teacher.png',
    }));
    const filter = [
        { id: "f1", label: "Filter 1" },
    ];
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
            <div className="relative bg-white rounded-2xl p-6">


                <h2 className="text-lg font-semibold text-center mb-6">Edit Meeting</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Form */}
                    <div className="space-y-4 mt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Title</label>
                            <input
                                type="text"
                                placeholder="Meeting Title"
                                className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting URL</label>
                            <input
                                type="text"
                                placeholder="URL"
                                className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="DD / MM / YYYY"
                                    className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm pr-10"
                                />
                                <FiCalendar className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="18:00"
                                    className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm pr-10"
                                />
                                <FiClock className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>
                    </div>


                    {/* Right List */}
                    <div className='bg-[#f9fafb] px-3 pb-3 pt-4 rounded-2xl'>

                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 text-base font-medium ">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="all"
                                    className="form-radio "
                                />
                                For all
                            </label>
                            <label className="flex items-center gap-2 text-base font-medium ">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="selective"
                                    className="form-radio"
                                />
                                For Selective Teacher
                            </label>
                        </div>

                        <SearchFilter bg='bg-[#f9fafb]' placeHolder='Search Teacher' filters={filter} />

                        <div className="space-y-3 overflow-y-auto custom-scrollbar-thin pr-2 max-h-[20rem]">
                            {students.map((student, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border rounded-2xl p-2 bg-[#f9fafb]"
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            width={75}
                                            height={75}
                                            className="rounded-2xl object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">{student.name}</p>
                                            <p className="text-xs text-[#FF3366]">{student.subject}</p>
                                            <p className="text-xs text-gray-500">{student.course}</p>
                                            <p className="text-xs text-gray-500">{student.batch}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center flex-wrap gap-3">
                    <button className="bg-[#3366ff] text-white px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium "
                      onClick={onClose}>
                        Reschedule
                    </button>
                    <button className="bg-pink-100 text-[#ff3366] px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium "
                      onClick={onClose}>
                        Cancel Meeting
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-4 py-2.5 max-w-36 w-full rounded-full text-sm font-medium"
                    >
                        Discard
                    </button>
                </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default RescheduleMeetingTeacher;
