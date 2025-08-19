"use client";
import { BaseModal, PopupProp } from "@/app/admin-b2c/pop-ups-2/page";
import { useState } from "react";

const SuggestionPopup : React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
  const [suggestion, setSuggestion] = useState("");


  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white rounded-3xl w-full p-6 shadow-lg">
        {/* Title */}
        <h2 className="sm:text-lg text-md font-semibold text-black mb-4">Send Suggestion to Student</h2>

        {/* Label */}
        <label className="block text-sm  text-black mb-2">Add Suggestion</label>

        {/* Textarea */}
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Enter your suggestion to the student..."
          className="w-full rounded-2xl border border-[#E5E7EB] p-3 text-sm text-[#6b7280] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-28"
        />

        {/* Send Button */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-[#3366ff] text-white px-6 sm:px-8 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
            onClick={onClose}
          >
            Send
          </button>
        </div>
      </div>
      </BaseModal>
  );
}

export default SuggestionPopup;