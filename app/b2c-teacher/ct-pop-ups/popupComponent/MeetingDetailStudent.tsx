"use client"
import React, { useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from '../../new-pop-ups/page';
import RescheduleMeetingStudent from './RescheduleMeetingStudent';



const MeetingDetailStudent: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    const students = Array.from({ length: 6 }).map((_) => ({
        name: 'Student Name',
        course: 'Level / Grade',
        image: '/common-images/full-student.jpg',
    }));
const [scheduleOpen, setScheduleOpen] = useState(false);
      const handleAction = () => {
        onClose();

        setTimeout(() => {
            setScheduleOpen(true); // open the next after 300ms
        }, 300); // same as your modal transition duration
    };
    return (
        <>
            <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
                <div className="relative bg-white rounded-2xl p-6">


                    <h2 className="text-lg font-semibold text-center mb-6">Meeting Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Form */}
                        <div className="space-y-7 mt-2">
                            <input
                                type="text"
                                placeholder="Lecture Title"
                                className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm"
                            />

                            <input
                                type="text"
                                placeholder="URL"
                                className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm"
                            />
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="DD / MM / YYYY"
                                    className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm pr-10"
                                />
                                <FiCalendar className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="18:00"
                                    className="w-full border rounded-full px-4 py-2 bg-[#f9fafb] text-sm pr-10"
                                />
                                <FiClock className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Course Name"
                                className="w-full border rounded-full placeholder-black px-4 py-2 bg-[#f9fafb] text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Batch Name"
                                className="w-full border rounded-full placeholder-black px-4 py-2 bg-[#f9fafb] text-sm"
                            />
                        </div>

                        {/* Right List */}
                        <div className='bg-[#f9fafb] px-3 pb-3 pt-4 rounded-2xl'>
                            <h3 className="text-sm font-semibold mb-3">Student List</h3>
                            <div className="space-y-3 max-h-[20rem] overflow-y-auto custom-scrollbar-thin pr-2 ">
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
                                                className="rounded-xl w-18 h-18 object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-sm">{student.name}</p>
                                                <p className="text-xs text-gray-500">{student.course}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="bg-[#3366ff] max-w-28 w-full text-white px-6 py-2.5 rounded-full text-sm font-medium shadow" onClick={handleAction}>
                            Edit
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-gray-200 max-w-28 w-full text-gray-700 cursor-pointer px-6 py-2.5 rounded-full text-sm font-medium">
                            Discard
                        </button>
                    </div>
                </div>
            </TeacherB2CBaseModal>
            <RescheduleMeetingStudent isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
        </>
    );
};

export default MeetingDetailStudent;
