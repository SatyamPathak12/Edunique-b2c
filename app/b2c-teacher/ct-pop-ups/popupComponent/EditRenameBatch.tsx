"use client"
import React, { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from "@/app/b2c-teacher/new-pop-ups/page";
import DropdownOptions5 from "@/components/common-components/Dropdown/DropdownOptions";

const EditBatchNameModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [renameTo, setRenameTo] = useState("");

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="relative bg-[#f9fafb] p-6 rounded-3xl space-y-5">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          <FiX size={20} />
        </button>

        <h2 className="text-lg font-semibold text-black">Edit Batch Name</h2>

        <DropdownOptions5 label="Select Branch" options="Option 1"/>

        {/* Rename To */}
        <div>
          <label className="text-sm font-medium text-black mb-1 block">Rename to</label>
          <input
            type="text"
            placeholder="Text"
            value={renameTo}
            onChange={(e) => setRenameTo(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-sm outline-none"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-[#3366ff] text-white text-sm font-medium px-8 py-2.5 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default EditBatchNameModal;
