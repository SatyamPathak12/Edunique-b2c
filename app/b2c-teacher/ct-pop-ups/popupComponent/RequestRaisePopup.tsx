"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  PopupPropB2CTeacher,
  TeacherB2CBaseModal,
} from "@/app/b2c-teacher/new-pop-ups/page";

const RequestRaiseModal: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    experience: "",
    duration: "",
    currentRate: "",
    expectedRate: "",
    reason: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted", form);
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center text-black mb-6">
          Request a Pay Raise
        </h2>

        {/* Form */}
        <div className="space-y-4 text-sm text-black">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">
              Your Total Teaching Experience (in years)
            </label>
            <input
              type="text"
              placeholder="6 years"
              value={form.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">
              Time Served at Edunique (in months)
            </label>
            <input
              type="text"
              placeholder="18 Months"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Current Hourly Rate (₹)</label>
            <input
              type="number"
              placeholder="20000"
              value={form.currentRate}
              onChange={(e) => handleChange("currentRate", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Expected New Hourly Rate (₹)</label>
            <input
              type="number"
              placeholder="40000"
              value={form.expectedRate}
              onChange={(e) => handleChange("expectedRate", e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f9fafb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">
              Why are you requesting a raise?
            </label>
            <textarea
              placeholder=""
              value={form.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
              rows={3}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-[#f9fafb] outline-none resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onClose}
            className="py-2 px-8 rounded-full bg-[#3366ff] text-white font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default RequestRaiseModal;
