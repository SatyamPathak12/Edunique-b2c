"use client"
import { FiX } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import { useState } from "react";

const EditDemoVideo: React.FC<PopupPropB2CTeacher> = ({
    isOpen,
    onClose,
}) => {

    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="rounded-3xl px-4 pt-6 pb-4 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-base font-semibold">Edit Demo Video</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
                    >
                        <FiX size={25}/>
                    </button>
                </div>
                <div className="mt-8">
                    <label className=' text-base'>Upload Document</label>
                    <div className="flex items-center gap-2 rounded-full my-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
                        <div className="p-1 bg-pink-100 rounded-full">
                            <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                        </div>
                        <span className="truncate">Document Name</span>
                    </div>
                </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default EditDemoVideo;