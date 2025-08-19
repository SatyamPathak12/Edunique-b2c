'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { BaseModal, PopupProp } from '../page'; // Adjust path if needed
import Image from 'next/image';

const RemoveStudent: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const [selectedBatch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Shift to batch:', selectedBatch);
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="max-h-[95vh] overflow-y-auto custom-scrollbar-thin-grey bg-white mr-1 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl py-4 mt-2 px-6 w-full space-y-4"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-lg font-semibold">Remove Student</h2>
            <button
                        type="button"
                        onClick={onClose}
                        className="p-0.5 bg-black/5 rounded-full hover:bg-gray-200"
                      >
                        <FiX className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                      </button>
          </div>

          {/* Student Info */}
          <div className="flex items-start gap-3 bg-[#F9FAFB] border rounded-3xl p-2">
            <Image
              src="/common-images/student.png"
              alt="Student"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-cover"
            />
            <span className="text-sm md:text-lg">Student Name</span>
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
              className="w-full max-w-28 py-3 rounded-full text-sm md:text-lg text-[#ff3366] bg-[#FF33661A] font-medium"
            >
              Remove
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default RemoveStudent;
