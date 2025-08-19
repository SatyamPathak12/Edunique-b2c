import React from "react";
import { FiX, FiUpload } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import DropdownBtn from "@/components/teacher-b2c/common-components/Dropdown";
import { IoCloudUploadOutline } from "react-icons/io5";

const AddVideoModal: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const filter = [
    { id: "f1", label: "Option 1" }
  ]
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white p-6 rounded-3xl relative space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900">Add Videos</h2>

        {/* Class + Topic Name */}
        <div className="grid grid-cols-2 gap-4">
          <DropdownBtn title="Select Class" filters={filter} />
          <div className="w-full">
            <label className="block text-base">
              Topic Name
            </label>
            <input
              type="text"
              placeholder="Text"
              className="w-full border mt-1 bg-[#f9fafb] rounded-full px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter URL
          </label>
          <input
            type="text"
            placeholder="Text"
            className="w-full border border-gray-300 bg-[#f9fafb] rounded-full px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* OR text */}
        <div className="my-2 text-center text-base">Or</div>

        <div className="">
          <label className=' text-base'>Upload Document</label>
          <div className="flex items-center gap-2 rounded-full my-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
            <div className="p-1 bg-pink-100 rounded-full">
              <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
            </div>
            <span className="truncate">Document Name</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Text"
            rows={4}
            className="w-full border border-gray-300 bg-[#f9fafb] rounded-2xl px-3 py-2 text-sm resize-none focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-3 text-sm font-medium rounded-full bg-[#f9fafb] text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-5 py-3 text-sm font-medium rounded-full bg-[#3366FF] text-white"
          onClick={onClose}>
            Add
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default AddVideoModal;
