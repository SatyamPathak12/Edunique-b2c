"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import {
  PopupPropB2CTeacher,
  TeacherB2CBaseModal,
} from "@/app/b2c-teacher/new-pop-ups/page";
import DropdownOptions5 from "@/components/common-components/Dropdown/DropdownOptions";
import ConfirmShiftStudentModal from "./ConfirmShiftStudent";

const ShiftStudentModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleContinue = () => {
    onClose(); // Close ShiftStudentModal first
    setTimeout(() => {
      setShowConfirmModal(true); // Open confirm modal after slight delay
    }, 200); // 200ms to ensure the first modal unmounts
  };

  const handleCloseConfirm = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      {/* Shift Student Modal */}
      <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
        <div className="relative bg-white p-6 rounded-3xl space-y-5">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          >
            <FiX size={20} />
          </button>

          <h2 className="text-base font-semibold text-gray-900">Shift Student</h2>

          {/* Student Name */}
          <div className="w-full p-1 rounded-xl border border-gray-300 bg-[#f9fafb] flex items-start gap-3 text-sm font-medium text-gray-800">
            <Image
              src="/common-images/full-student.jpg"
              alt="Student"
              width={75}
              height={75}
              className="w-8 h-8 rounded-xl object-cover"
            />
            Student Name
          </div>

          {/* Batch Dropdown */}
          <DropdownOptions5 label="Shift to Batch" options="Batch Name" />

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-1">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white"
            >
              Cancel
            </button>
            <button
              onClick={handleContinue}
              className="px-4 py-2.5 rounded-full text-sm font-medium text-white bg-[#3366ff]"
            >
              Continue
            </button>
          </div>
        </div>
      </TeacherB2CBaseModal>

      {/* Confirm Modal */}
      <ConfirmShiftStudentModal
        isOpen={showConfirmModal}
        onClose={handleCloseConfirm}
      />
    </>
  );
};

export default ShiftStudentModal;
