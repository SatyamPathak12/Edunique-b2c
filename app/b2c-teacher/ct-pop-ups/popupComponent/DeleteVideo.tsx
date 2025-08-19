import React from "react";
import { FiX } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const DeleteVideoModal: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white p-6 rounded-3xl relative space-y-4">
        {/* Close button */}
        <button
          className="absolute rounded-full p-1 bg-[#f9fafb] top-4 right-4 text-black"
          onClick={onClose}
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-center mb-6 text-base font-semibold text-gray-900">
          Delete Video
        </h2>

        {/* Subheading */}
        <div className="space-y-4">
          <p className="font-medium text-sm text-gray-900">Video Name</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis magna vitae odio ullamcorper vestibulum. Maecenas semper leo
            ac tellus lobortis, vel vehicula urna posuere.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium rounded-full bg-[#f9fafb] border text-gray-600"
          >
            Cancel
          </button>
          <button className="px-4 py-2.5 text-sm font-medium rounded-full bg-[#ff33661a] text-[#FF3366]"
          onClick={onClose}>
            Delete
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default DeleteVideoModal;
