// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";
import {
    FiX,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import ManageAccess from "./components/ManageAccess";
import MeetingDetailTeacher from "./components/MeetingDetailTeacher";
import MeetingDetailStudent from "./components/MeetingDetailStudent";
import { IoCloudUploadOutline } from "react-icons/io5";
import ExistingDmitModal from "./components/existing-dmit-test";
import AssignPenaltyModal from "./components/AssignPelanty";
import RemoveCourseModal from "./components/RemoveCourseModal";
import ConfirmChoiceModal from "./components/ConfirmModal";
import ReassignClassModal from "./components/Reassign";
import RescheduleMeetingTeacher from "./components/RescheduleMeetingTeacher";
import RescheduleMeetingStudent from "./components/RescheduleMeetingStudent";
import CreateFolderModal from "./components/CreateFolder";
import AddCourseModal from "@/components/b2c-admin/add-course";
import RejectRequestPopup from "./components/reject-request-popup";
import AddReminder from "./components/add-reminder";
import ScheduleMeeting from "./components/ScheduleMeeting";
import ProfileSettingTeacher from "./components/profileSettingTeacher";
import ProfileSettingStudent from "./components/profileSettingStudent";
import AllotCoursePopup from "./components/allotNewCourse";
import EditWorkingHoursPopup from "./components/editWorkingHours";
import { UploadFile } from "./Popup-components-2/UploadFile";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth: string;
}
export interface PopupProp {
    isOpen: boolean;
    onClose: () => void;
}
export const BaseModal: React.FC<BaseModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth,
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white rounded-3xl w-full ${maxWidth} h-fit`}
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


export const UploadFileImage: React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="rounded-3xl px-4 pt-6 pb-4 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Upload Image</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="flex flex-col gap-1 pb-4 mt-6">
                    <label className='font-medium text-md mb-2' htmlFor="url">Enter URL</label>
                    <input id="url" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>
                <div className="text-center mt-4 mb-6">Or</div>
                <label className='font-medium text-md '>Upload Document</label>
                <div className="flex items-center gap-2 rounded-full my-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
                    <div className="p-1 bg-pink-100 rounded-full">
                        <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                    </div>
                    <span className="truncate">Document Name</span>
                </div>
                <div className="flex justify-end gap-2 items-center">
                    <button onClick={onClose} className="bg-[#f9fafb] border rounded-full py-2.5 px-4 text-gray-500">Cancel</button>
                    <button onClick={onClose} className="bg-[#3366ff] rounded-full py-2.5 px-6 text-white">Add</button>
                </div>
            </div>
        </BaseModal>
    );
};

export const AddItem: React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="rounded-3xl px-4 pt-6 pb-4 ">
                <div className="flex justify-center items-center">
                    <h2 className="text-xl font-semibold">Add Item</h2>

                </div>

                <div className="flex flex-col gap-1 pb-4 mt-6">
                    <label className='font-medium text-md mb-2' htmlFor="itemName">Item Name</label>
                    <input id="itemName" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>

                <div className="flex flex-col gap-1 pb-4 my-2">
                    <label className='font-medium text-md mb-2' htmlFor="description">Description</label>
                    <input id="description" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>

                <label className='font-medium text-md '>Upload Document</label>
                <div className="flex items-center gap-2 rounded-full my-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
                    <div className="p-1 bg-pink-100 rounded-full">
                        <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                    </div>
                    <span className="truncate">Document Name</span>
                </div>

                <div className="flex flex-col gap-1 pb-4 mt-4">
                    <label className='font-medium text-md mb-2' htmlFor="stocks">Stocks</label>
                    <input id="stocks" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>
                <div className="w-full flex items-center justify-center">
                    <button
                        onClick={onClose} className="cursor-pointer text-center px-6 py-2.5 rounded-full text-white bg-[#3366ff]">Add Item</button>
                </div>
            </div>
        </BaseModal>
    );
};

// --- Main Page Component to trigger modals ---
export default function AllPopupsPage() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "createFolder", label: "Create Folder" },
        { id: "manageAccess", label: "Manage Access" },
        { id: "meetingDetailTeacher", label: "Meeting Detail Teacher" },
        { id: "meetingDetailStudent", label: "Meeting Detail Student" },
        { id: "uploadFileImage", label: "Upload File Image" },
        { id: "existDmitTest", label: "Existing Dmit Test" },
        { id: "assignPelanty", label: "Assign Pelanty" },
        { id: "addItemPopUp", label: "Add Item PopUp" },
        { id: "removeCourse", label: "Remove Course Pop Up" },
        { id: "addCourse", label: "Add Course Pop Up" },
        { id: "confirmMessage", label: "Confirm Message Pop Up" },
        { id: "reassign", label: "Reassign" },
        { id: "rescheduleMeetingTeacher", label: "Reschedule Meeting Teacher" },
        { id: "RescheduleMeetingStudent", label: "Reschedule Meeting Student" },
        { id: "RejectRequestPopup", label: "Reject Request Popup" },
        { id: "AddReminder", label: "Add Reminder" },
        { id: "ScheduleMeeting", label: "Schedule Meeting" },
        { id: "ProfileSettingTeacher", label: "Profile Student Teacher" },
        { id: "ProfileSettingStudent", label: "Profile Student Student" },
        { id: "AllotCoursePopup", label: "Allot Course Popup" },
        { id: "EditWorkingHoursPopup", label: "Edit Working Hours Popup" },
        { id: "uploadFile", label: "Upload file" },

    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                Admin B2C Popups
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {modalButtons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setOpenModal(btn.id)}
                        className="bg-white text-[#6B7280] font-semibold py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <CreateFolderModal
                isOpen={openModal === "createFolder"}
                onClose={() => setOpenModal(null)}
            />
            <ManageAccess
                isOpen={openModal === "manageAccess"}
                onClose={() => setOpenModal(null)}
            />
            <MeetingDetailTeacher
                isOpen={openModal === "meetingDetailTeacher"}
                onClose={() => setOpenModal(null)}
            />
            <MeetingDetailStudent
                isOpen={openModal === "meetingDetailStudent"}
                onClose={() => setOpenModal(null)}
            />
            <UploadFileImage
                isOpen={openModal === "uploadFileImage"}
                onClose={() => setOpenModal(null)}
            />
            <ExistingDmitModal
                isOpen={openModal === "existDmitTest"}
                onClose={() => setOpenModal(null)}
            />
            <AssignPenaltyModal
                isOpen={openModal === "assignPelanty"}
                onClose={() => setOpenModal(null)}
            />
            <AddItem
                isOpen={openModal === "addItemPopUp"}
                onClose={() => setOpenModal(null)}
            />
            <RemoveCourseModal
                isOpen={openModal === "removeCourse"}
                onClose={() => setOpenModal(null)}
            />
            <AddCourseModal
                isOpen={openModal === "addCourse"}
                onClose={() => setOpenModal(null)}
            />
            <ConfirmChoiceModal
                isOpen={openModal === "confirmMessage"}
                onClose={() => setOpenModal(null)}
            />
            <ReassignClassModal
                isOpen={openModal === "reassign"}
                onClose={() => setOpenModal(null)}
            />
            <RescheduleMeetingTeacher
                isOpen={openModal === "rescheduleMeetingTeacher"}
                onClose={() => setOpenModal(null)}
            />
            <RescheduleMeetingStudent
                isOpen={openModal === "RescheduleMeetingStudent"}
                onClose={() => setOpenModal(null)}
            />
            <RejectRequestPopup
                isOpen={openModal === "RejectRequestPopup"}
                onClose={() => setOpenModal(null)}
            />
            <AddReminder
                isOpen={openModal === "AddReminder"}
                onClose={() => setOpenModal(null)}
            />
            <ScheduleMeeting
                isOpen={openModal === "ScheduleMeeting"}
                onClose={() => setOpenModal(null)}
            />
            <ProfileSettingTeacher
                isOpen={openModal === "ProfileSettingTeacher"}
                onClose={() => setOpenModal(null)}
            />
            <ProfileSettingStudent
                isOpen={openModal === "ProfileSettingStudent"}
                onClose={() => setOpenModal(null)}
            />
            <AllotCoursePopup
                isOpen={openModal === "AllotCoursePopup"}
                onClose={() => setOpenModal(null)}
            />
            <EditWorkingHoursPopup
                isOpen={openModal === "EditWorkingHoursPopup"}
                onClose={() => setOpenModal(null)}
            />
            <UploadFile
                isOpen={openModal === "uploadFile"}
                onClose={() => setOpenModal(null)}
            />
        </div>
    );
}
