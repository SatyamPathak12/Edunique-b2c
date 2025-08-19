"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchFilterIcon from "@/components/common-components/SearchFilterIcon";
import { FiMinusCircle } from "react-icons/fi";
import { AiOutlineSwap } from "react-icons/ai";
import ShiftStudentModal from "../../ct-pop-ups/popupComponent/ShiftStudent";
import RemoveStudentModal from "../../ct-pop-ups/popupComponent/ConfirmStudentRemove";
import Link from "next/link";

const students = new Array(9).fill("Student Name");
const filter = [{ id: 'f1', label: 'Filter 1' }, { id: 'f2', label: 'Filter 2' }, { id: 'f3', label: 'Filter 3' }];

const StudentBatchPage: React.FC = () => {
    const [shiftStudent, setShiftStudent] = useState(false)
    const [removeStudent, setRemoveStudent] = useState(false)
    return (

        <>
            <div className="px-4">
                <SearchFilterIcon filters={filter} />
            </div>
            <div className="flex flex-col md:flex-row gap-2 py-4 sm:p-4">
                {/* Left - Student List */}
                <div className="flex-1 space-y-3">
                    {students.map((student, index) => (
                        <Link
                            href={"/b2c-teacher/teacher-flow/student-profile"}
                            key={index}
                            className="flex items-center justify-between p-1.5 rounded-2xl bg-[#f9fafb] border border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/common-images/full-student.jpg"
                                    alt="Student"
                                    width={32}
                                    height={32}
                                    className="rounded-xl w-10 h-10 object-cover"
                                />
                                <p className="text-sm font-medium text-gray-800">{student}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setRemoveStudent(true)} className="text-[#ff3366] bg-[#f3f4f6] rounded-full p-1 border">
                                    <FiMinusCircle size={18} />
                                </button>
                                <button onClick={() => setShiftStudent(true)} className="text-black bg-[#f3f4f6] rounded-full p-1 border">
                                    <AiOutlineSwap size={18} />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Right - Sidebar */}
                <div className="w-full md:w-[390px] bg-[#f9fafb] p-4 border rounded-2xl space-y-4">
                    {/* Analytics */}
                    <div className="grid grid-cols-2 gap-3">
                        <AnalyticsCard title="Avg. Test Score" value="78%" />
                        <AnalyticsCard title="Avg. Quiz Score" value="78%" />
                        <AnalyticsCard title="Avg. Assessment Score" value="78%" />
                        <AnalyticsCard title="No. of Students" value="12" />
                    </div>

                    {/* Batch Name Form */}
                    <div className="bg-white p-4 rounded-2xl space-y-3">
                        <h2 className="font-semibold text-sm text-gray-800">Edit Batch Name</h2>
                        <input
                            type="text"
                            placeholder="Batch Name"
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
                        />
                        <div className="flex justify-center">
                            <button className="px-6 bg-[#3366ff] text-white text-sm py-2 rounded-full font-medium">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ShiftStudentModal onClose={() => setShiftStudent(false)} isOpen={shiftStudent} />
            <RemoveStudentModal onClose={() => setRemoveStudent(false)} isOpen={removeStudent} />
        </>
    );
};

const AnalyticsCard: React.FC<{ title: string; value: string }> = ({ title, value }) => {
    return (
        <div className="bg-[#8dd9b3] text-center min-h-[125px] gap-2 flex flex-col justify-center items-center rounded-xl py-4 space-y-1">
            <p className="text-sm font-medium text-black">{title}</p>
            <p className="text-lg font-semibold text-black">{value}</p>
        </div>
    );
};

export default StudentBatchPage;
