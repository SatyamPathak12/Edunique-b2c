"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function  DeactivatePopup  () {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;
  const accentPink = "#ff3366";

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-sm p-6 rounded-3xl relative shadow-lg">
        {/* Close button */}
        <button onClick={handleClose} className="absolute top-6 right-4 text-sm bg-black/5 rounded-full text-black ">
         <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Title */}
        <h2 className="text-center font-semibold text-lg mb-4">Want to Deactivate ?</h2>

        {/* School name */}
        <h3 className="font-medium text-sm mb-2">School Name</h3>

        {/* Description */}
        <p className="text-sm text-[#6b7280] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna vitae odio ullamcorper vestibulum. 
          Maecenas semper leo ac tellus lobortis, vel vehicula urna posuere.
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={handleClose}
            className="px-4 py-3 rounded-full border text-[#6b7280] border-[#e5e7eb]  text-sm"
          >
            Cancel
          </button>
          <button className="px-4 py-3 rounded-full bg-[#ff3366]/10 text-[#ff3366] font-medium text-sm">
            Deactivate / Activate
          </button>
        </div>
      </div>
    </div>
  );
};


