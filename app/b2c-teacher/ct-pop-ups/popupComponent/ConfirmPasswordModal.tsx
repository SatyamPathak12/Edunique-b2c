"use client"
import React, { useState } from "react";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const ConfirmPasswordModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-3xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute bg-[#f9fafb] p-2 rounded-full top-4 right-4 text-gray-700">
          <FiX size={20} />
        </button>

        <h2 className="text-lg font-semibold text-gray-900 mb-2">Confirm your choice</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>

        {/* Password Field */}
        <label className="text-sm font-medium text-gray-900 block mb-1">Enter Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold "
          >
            Apply
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default ConfirmPasswordModal;
