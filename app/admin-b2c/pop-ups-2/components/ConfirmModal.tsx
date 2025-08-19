import React from "react";
import { FiX } from "react-icons/fi";
import { BaseModal, PopupProp } from "../page";

const ConfirmChoiceModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
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
        <h2 className="text-center font-semibold text-sm text-black mb-4">
          Confirm Choice
        </h2>

        {/* Subheading (Placeholder for dynamic content) */}
        <h3 className="text-sm font-medium text-black mb-2">
          Accept [ School / Teacher / Student Name ]
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis magna vitae odio ullamcorper vestibulum. Maecenas semper leo
          ac tellus lobortis, vel vehicula urna posuere.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="rounded-full px-6 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ConfirmChoiceModal;
