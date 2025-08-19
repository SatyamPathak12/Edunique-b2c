"use client"

import { FiArrowLeft, FiChevronDown, FiFilter, FiSearch } from "react-icons/fi"
import Footer from "../layout/Footer"
import Header from "../layout/TeacherB2CHeader"
import { FiSettings } from "react-icons/fi";
import { useState } from "react"
import Image from "next/image";
import SearchFilterIcon from "../common-components/SearchFilterIcon";
import TeacherB2CWrapper from "./common-components/TeacherB2CPageWrapper";
import CreateGroupPopup from "@/app/b2c-teacher/ct-pop-ups/popupComponent/CreateGroup";
import ManageGroupPopup from "@/app/b2c-teacher/ct-pop-ups/popupComponent/ManageGroup";



const dummyGroups = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "Group Name",
    students: "No. of Students",
    image: "/b2c-teacher/manage-group-share.png", // Replace with actual path later
}));

const GroupCardList = () => {
    const [group, setGroup] = useState(false)
    return (
        <div className="grid grid-cols-1 px-4 sm:px-6 md:px-12 lg:px-20 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dummyGroups.map((group) => (
                <div
                    key={group.id}
                    className="flex items-start justify-between bg-[#f9fafb] p-2 border border-gray-200 rounded-2xl"
                >
                    {/* Left side: image + text */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gray-200 relative overflow-hidden flex items-center justify-center">
                            <Image src={group.image} alt={group.name} fill className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-md font-semibold text-gray-800">{group.name}</span>
                            <span className="text-xs text-gray-500">{group.students}</span>
                        </div>
                    </div>

                    {/* Right side: icon */}
                    <button onClick={() => setGroup(true)}>
                        <FiSettings className="text-gray-700 bg-gray-50 rounded-full border w-8 h-8 p-1.5" />
                    </button>
                </div>
            ))}
            <ManageGroupPopup  isOpen={group} onClose={() => setGroup(false)}/>
        </div>
    );
};


interface GeneralFilterOption {
    id: string;
    label: string;
}

const GeneralFilterButton: React.FC<{
    filter: GeneralFilterOption;
    onClick: () => void;
}> = ({ filter, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 border border-gray-300 bg-[#F9FAFB] text-[#1E1E1E] font-medium rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}
    >
        <span>{filter.label}</span>
        <FiChevronDown className="w-4 h-4 text-[#1E1E1E]" />
    </button>
);



const GroupShare = () => {
    const Filter: GeneralFilterOption[] = [
        { id: "filter1", label: "Filter 1" },
        { id: "filter2", label: "Filter 2" },
        { id: "filter3", label: "Filter 3" },
    ];
    return (
        <>
            <div className="bg-white rounded-3xl min-h-screen p-2 space-y-4">
                <SearchFilterIcon filters={Filter} />
                <GroupCardList />
            </div>
        </>
    )
}

const ManageGroup = () => {
    const [createGroup, setCreateGroup] = useState(false)
    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    }
    return (
        <>
            <Header activeState="Material" />
            <div className="flex items-center justify-between gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
                <div className="flex gap-3 items-center w-full">
                    <button
                        onClick={handleBackClick}
                        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
                        aria-label="Go back"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-lg md:text-2xl font-medium text-[#FF3366]">
                        Manage Group Share
                    </h1>
                </div>
                <button onClick={() => setCreateGroup(true)}
                 className="rounded-full bg-[#ff3366] p-2 text-white whitespace-nowrap font-normal">Create new group</button>
            </div>
            <TeacherB2CWrapper>

                <GroupShare />
            </TeacherB2CWrapper>
            <Footer />

            <CreateGroupPopup isOpen={createGroup} onClose={() => setCreateGroup(false)}/>
        </>
    )
}

export default ManageGroup;