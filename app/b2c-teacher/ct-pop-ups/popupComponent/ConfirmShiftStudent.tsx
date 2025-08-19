import React from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const ConfirmShiftStudentModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {


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

        {/* Header */}
        <h2 className="text-base font-semibold text-gray-900">Shift Student</h2>

        {/* Student Card */}
        <div className="w-full flex items-center gap-4 p-1 rounded-xl border border-gray-300 bg-[#f9fafb]">
          <Image
                      src="/common-images/full-student.jpg" // Replace with real image path
                      alt="Student"
                      width={75}
                      height={75}
                      className="w-16 h-12 rounded-xl object-cover"
                    />
          <div>
            <p className="text-sm font-medium text-gray-800">Student Name</p>
            <p className="text-xs text-gray-500">Level / Grade</p>
            <p className="text-xs text-gray-500">Group</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-1">
          <button
            onClick={onClose}
            className="px-2 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-[#f9fafb]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#3366ff]"
          >
            Shift
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default ConfirmShiftStudentModal;
