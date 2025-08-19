import React from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const RemoveStudentModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {


  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="relative bg-white p-6 rounded-3xl space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900">Remove Student</h2>

        {/* Student Display */}
       <div className="w-full p-1 rounded-xl border border-gray-300 bg-[#f9fafb] flex items-start gap-3 text-sm font-medium text-gray-800">
                 <Image
                   src="/common-images/full-student.jpg" // Replace with real image path
                   alt="Student"
                   width={75}
                   height={75}
                   className="w-8 h-8 rounded-xl object-cover"
                 />
                 Student Name
               </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-1">
          <button
            onClick={onClose}
            className="px-2 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-3 py-2.5 rounded-full text-sm font-medium bg-[#ff33661a] text-[#ff3366]"
          >
            Remove
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default RemoveStudentModal;
