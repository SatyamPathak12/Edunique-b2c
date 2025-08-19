"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import GoBack from "@/components/principal/goback"; // Assuming this component exists as per your template
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// --- Data Interfaces ---
interface RequestItem {
    id: string;
    studentName: string;
    avatarSrc: string;
    courseName: string;
    batch: string;
    emailId: string;
    assignedFaculty: string;
    lectureDate: string;
    reason: string;
    type: 'cancellation' | 'rescheduling';
    // Extra fields for rescheduling
    requestedDate?: string;
    requestedTime?: string;
}

// --- Sample Data ---
const cancellationRequests: RequestItem[] = Array.from({ length: 6 }, (_, i) => ({
    id: `cancel-${i}`,
    studentName: "Student Name",
    avatarSrc: "/admin/student.png",
    courseName: "Course Name",
    batch: "Batch",
    emailId: "Email ID",
    assignedFaculty: "Assigned Faculty Name",
    lectureDate: "24 / 6 / 25",
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci.",
    type: 'cancellation',
}));

const reschedulingRequests: RequestItem[] = Array.from({ length: 6 }, (_, i) => ({
    id: `resched-${i}`,
    studentName: "Student Name",
    avatarSrc: "/admin/student.png",
    courseName: "Course Name",
    batch: "Batch",
    emailId: "Email ID",
    assignedFaculty: "Assigned Faculty Name",
    lectureDate: "24 / 6 / 25",
    requestedDate: "25 / 6 / 25",
    requestedTime: "11:30 AM",
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci.",
    type: 'rescheduling',
}));

// --- Helper UI Components ---

const TopTabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`p-2 sm:py-2.5 text-xs sm:text-sm rounded-2xl transition-colors cursor-pointer
        ${isActive ? 'bg-[#FF3366] text-white' : 'text-[#6B7280] hover:bg-gray-100'}`}
    >
        {label}
    </button>
);

// --- Component 2: StyledSelect (wrapper for Shadcn Select) ---
interface StyledSelectProps {
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
}
export const StyledSelect: React.FC<StyledSelectProps> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);
const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
    <StyledSelect
        defaultValue="all"
        placeholder={label}
        items={[{ value: "all", label }, { value: "batch1", label: "Option 1" }, { value: "batch2", label: "Option 2" }]}
    />
);

const RequestCard: React.FC<{ request: RequestItem, reference: React.RefObject<HTMLDivElement | null>, togglePopup: () => void }> = ({ request, reference, togglePopup }) => (
    <div ref={reference} className="bg-[#F9FAFB] rounded-2xl border border-[#B0B0B0] p-3 flex flex-col gap-3 transition-shadow duration-150 hover:shadow-lg">
        {/* Student Info Section */}
        <div className="flex items-center gap-3 sm:gap-4">
            <Image
                src={request.avatarSrc}
                alt={request.studentName}
                width={129} height={129}
                className="w-14 h-14 sm:w-[87px] sm:h-[87px] rounded-2xl object-cover flex-shrink-0"
            />
            <div className="flex-grow min-w-0">
                <h3 className="text-md sm:text-lg font-bold text-black truncate">{request.studentName}</h3>
                <p className="text-sm font-semibold text-[#FF3366] truncate">{request.courseName}</p>
                <div className="flex flex-col text-xs text-[#6B7280] mt-1">
                    <span>{request.batch}</span>
                    <span>{request.emailId}</span>
                </div>
            </div>
        </div>

        {/* Details Section */}
        <div className="text-xs text-black space-y-1">
            <p className=" text-black">{request.assignedFaculty}</p>
            {request.type === 'cancellation' && (
                <p className=" text-black">Lecture Date:{" "}{request.lectureDate}</p>
            )}
            {request.type === 'rescheduling' && (
                <>
                    <p className=" text-black">Original Lecture Date:{" "} {request.lectureDate}</p>
                    <p className=" text-black">Requested: Reschedule to {request.requestedDate}, {request.requestedTime}</p>
                </>
            )}
        </div>

        {/* Reason Section */}
        <div className="bg-[#F3F4F6] rounded-2xl text-center p-2 ">
            <h4 className="text-base font-semibold text-black mb-1.5">
                Reason for {request.type === 'cancellation' ? 'Cancellation' : 'Reschedule'}
            </h4>
            <p className="text-xs text-black leading-relaxed">{request.reason}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-3">
            <button onClick={togglePopup} className="w-28 py-2 text-sm  text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors cursor-pointer">
                Reject
            </button>
            <button onClick={togglePopup} className="w-28 py-2 text-sm   text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                Approve
            </button>
        </div>
    </div>
);


// --- Main Page Component ---
export default function RequestManagementPage() {
    const [activeTab, setActiveTab] = useState<'rescheduling' | 'cancellation'>('rescheduling');
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const requestsToDisplay = activeTab === 'cancellation' ? cancellationRequests : reschedulingRequests;

    const [minHeight, setMinHeight] = useState<number>(345);
    const heightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (heightRef.current) {
            setMinHeight(heightRef.current.offsetHeight);
        }
    }, [activeTab])

    useEffect(() => {
        const updateHeight = () => {
            if (heightRef.current) {
                setMinHeight(heightRef.current.offsetHeight);
            }
        }

        updateHeight();

        const observer = new ResizeObserver(() => {
            updateHeight();
        })

        if (heightRef.current) {
            observer.observe(heightRef.current);
        }

        return () => {
            if (heightRef.current) {
                observer.unobserve(heightRef.current);
            }
            observer.disconnect();
        }

    }, [])

    return (
        // Using your provided page template structure
        <div className={`bg-[#eeeeee] min-h-screen flex flex-col relative`}>
            <GoBack GoBackHeading="Lecture Adjustment Requests" toLink='/admin-b2c/admin-panel/dashboard' /> {/* This is your template component */}
            <div className='p-4 sm:p-6 lg:p-8'>
                <main className="bg-white rounded-2xl flex-grow w-full max-w-screen-xl mx-auto p-4">

                    {/* Top Tabs */}
                    <div className="flex justify-center items-center mb-4">
                        <div className="flex items-center justify-center border w-full border-[#E5E7EB] p-1.5 rounded-2xl space-x-2 sm:space-x-4">
                            <TopTabButton label="Class Rescheduling" isActive={activeTab === 'rescheduling'} onClick={() => setActiveTab('rescheduling')} />
                            <TopTabButton label="Class Cancellation" isActive={activeTab === 'cancellation'} onClick={() => setActiveTab('cancellation')} />
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
                        <div className="relative w-full sm:flex-grow mx-3">
                            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 border-2 border-[#6B7280] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-2 flex-shrink-0">
                            <FilterDropdown label="Filter 1" />
                            <FilterDropdown label="Filter 2" />
                            <FilterDropdown label="Filter 3" />
                            <FilterDropdown label="Filter 4" />
                        </div>
                    </div>

                    {/* Requests Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 custom-scrollbar-thin overflow-y-auto pr-3 pb-2" style={{
                        height: `${minHeight}px`
                    }}>
                        {requestsToDisplay.map(request => (
                            <RequestCard key={request.id} request={request} reference={heightRef} togglePopup={togglePopup} />
                        ))}
                    </div>

                </main>
            </div>
            {isPopupOpen ? <ReschedulePopup onCancel={togglePopup} onConfirm={togglePopup} /> : <div />}
        </div>
    );
}





interface RescheduleProps {
    onCancel: () => void;
    onConfirm: () => void;
}

const ReschedulePopup: React.FC<RescheduleProps> = ({ onCancel, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className=' bg-black opacity-50 absolute h-full w-full z-10' />
            <div className="relative z-50 bg-white rounded-3xl p-6 w-[90%] max-w-lg text-center shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
                <p className="text-black font-normal text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
                    lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum
                    pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam
                    sagittis, tellus laoreet semper vehicula, orci eros facilisis purus,
                    at viverra ex lectus nec orci.
                </p>

                <div className="mt-4 flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="bg-[#6B72801A] text-[#6B7280] font-medium px-4 py-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-[#3366FF] text-white font-medium px-4 py-3 rounded-full hover:bg-blue-700 transition cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};