"use client";
import React, { useState } from "react";
import { FiX, FiCalendar } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import DropdownOptions5 from "@/components/common-components/Dropdown/DropdownOptions";
import ConfirmPasswordModal from "./ConfirmPasswordModal"; // 👈 Import yahi se

const LeaveApplicationModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [passwordPopup, setPasswordPopup] = useState(false);
  const [form, setForm] = useState({
    teacherName: "",
    email: "",
    leaveType: "Sick leave",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleApplyButton = () => {
    onClose(); // Close current popup
    setTimeout(() => {
      setPasswordPopup(true); // Open confirm password popup
    }, 300);
  };

  return (
    <>
      {/* Main Modal */}
      <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
        <div className="relative bg-white p-6 rounded-3xl space-y-4">
          <button onClick={onClose} className="absolute bg-[#f9fafb] p-2 rounded-full top-4 right-4 text-gray-700">
            <FiX size={20} />
          </button>

          <h2 className="text-lg font-semibold text-black">Apply for Leave</h2>

          {/* Teacher Name */}
          <div>
            <label className="text-sm font-medium text-black mb-1 block">Teacher Name</label>
            <input
              type="text"
              placeholder="Text"
              value={form.teacherName}
              onChange={(e) => handleChange("teacherName", e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-black mb-1 block">Email id</label>
            <input
              type="email"
              placeholder="Text"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
            />
          </div>

          {/* Leave Type Dropdown */}
          <DropdownOptions5 label="Leave type" options="Sick leave" />

          {/* To Date */}
          <div>
            <label className="text-sm font-medium text-black mb-1 block">To Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD / MM / YYYY"
                value={form.toDate}
                onChange={(e) => handleChange("toDate", e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
              />
              <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="text-sm font-medium text-black mb-1 block">Detailed Reason</label>
            <textarea
              placeholder="Text"
              value={form.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] text-sm outline-none resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyButton}
              className="px-6 py-2.5 rounded-full bg-[#3366ff] text-white text-sm font-semibold"
            >
              Apply
            </button>
          </div>
        </div>
      </TeacherB2CBaseModal>

      {/* Confirm Password Modal */}
      <ConfirmPasswordModal
        isOpen={passwordPopup}
        onClose={() => setPasswordPopup(false)}
      />
    </>
  );
};

export default LeaveApplicationModal;
