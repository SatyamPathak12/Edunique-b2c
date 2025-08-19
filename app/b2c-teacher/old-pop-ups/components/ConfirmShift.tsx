'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page'; // Adjust this path if needed

const ShiftStudentConfirmModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const handleShift = () => {
    console.log('Student shifted');
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="bg-white max-h-[95vh] overflow-y-auto mr-1 flex justify-center">
        <div className="bg-white rounded-2xl py-4 mt-2 px-6 w-full space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-lg font-semibold">Shift Student</h2>
            <button
              type="button"
              onClick={onClose}
              className="p-1 bg-black/5 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </button>
          </div>

          {/* Student Info */}
          <div className="flex items-start gap-3 bg-[#F9FAFB] border rounded-3xl p-2">
            <Image
              src="/common-images/full-student.jpg"
              alt="Student"
              width={104}
              height={80}
              className="w-[104px] h-[80px] rounded-2xl object-cover"
            />
            <div className="text-sm md:text-base">
              <div className="font-normal text-black text-base md:text-lg">Student Name</div>
              <div className="text-gray-600">Level / Grade</div>
              <div className="text-gray-600">Group</div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full max-w-28 py-3 rounded-full text-sm md:text-lg text-gray-700 border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full max-w-28 py-3 rounded-full text-sm md:text-lg text-white bg-[#3366ff] font-medium"
            >
              Shift
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ShiftStudentConfirmModal;
