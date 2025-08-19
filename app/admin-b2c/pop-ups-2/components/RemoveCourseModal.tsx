import React from "react";
import { FiX } from "react-icons/fi";
import { BaseModal, PopupProp } from "../page";



const RemoveCourseModal: React.FC<PopupProp> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-2xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        {/* Title */}
        <h2 className="text-center font-semibold text-base mb-6">Remove Course</h2>

        {/* Content */}
        <h3 className="font-medium text-sm mb-2">Course Name</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna
          vitae odio ullamcorper vestibulum. Maecenas semper leo ac tellus lobortis,
          vel vehicula urna posuere.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full px-4 py-3 border border-gray-300 text-sm font-medium text-gray-500 "
          >
            Cancel
          </button>
          <button
          onClick={onClose}
            className="rounded-full px-4 py-3 bg-[#ff33661a] text-[#ff3366] text-sm font-medium "
          >
            Remove
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default RemoveCourseModal;
