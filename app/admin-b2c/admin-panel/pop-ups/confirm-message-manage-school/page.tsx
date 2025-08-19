"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const RejectConfirmationPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open

  const handleConfirm = () => {
    alert("Confirmed!");
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-3xl px-4 py-6 space-y-6 relative text-center shadow-lg">
            {/* Close Icon */}
            <button
              onClick={handleCancel}
              className="absolute top-6 right-5 cursor-pointer text-black bg-black/5 rounded-full p-1 hover:text-black transition"
            >
              <IoClose className="w-5 sm:h-6 sm:w-6 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-sm sm:text-md font-semibold mb-8">Confirm Choice</h2>

            {/* Rejection Target */}
            <p className="text-sm sm:text-md text-left font-medium text-black mb-2">
              Reject [ School / Teacher / Student Name ]
            </p>

            {/* Description */}
            <p className="text-sm text-left sm:text-md text-[#6b7280] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis magna vitae odio ullamcorper vestibulum. Maecenas semper
              leo ac tellus lobortis, vel vehicula urna posuere.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-3 rounded-full border border-[#e5e7eb] text-gray-500 font-semibold text-sm hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-3 rounded-full bg-[#ff3366]/10 text-[#ff3366] font-semibold text-sm hover:bg-[#ffccd9] transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RejectConfirmationPopup;
