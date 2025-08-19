"use client";

import React, { useState } from "react";
import GoBack from "@/components/principal/goback";
import AssignmentForm from "@/components/b2c-admin/assign-courses-students";
import TeacherForm from "@/components/b2c-admin/assign-courses-teachers-form";
import { AnimatePresence, motion } from "framer-motion";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssignCourses: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("students");

  const tabClasses = (tab: string) =>
    `px-2 py-2 rounded-xl text-sm sm:text-base font-medium transition ${
      activeTab === tab
        ? "bg-[#8DD9B3] text-white"
        : "bg-white text-[#6b7280] hover:bg-blue-100"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0000004a] flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex mb-8 flex-col sm:flex-row justify-between items-start sm:items-center">
              <GoBack GoBackHeading="Assign Courses" />

              {/* Tab Switcher */}
              <div className="flex gap-4 sm:gap-6 p-2 border border-[#E5E7EB] rounded-2xl">
                <button
                  className={tabClasses("students")}
                  onClick={() => setActiveTab("students")}
                >
                  For Students
                </button>
                <button
                  className={tabClasses("teachers")}
                  onClick={() => setActiveTab("teachers")}
                >
                  For Teachers
                </button>
              </div>
            </div>

            {/* Conditional Rendering */}
            {activeTab === "students" && <AssignmentForm />}
            {activeTab === "teachers" && <TeacherForm />}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AssignCourses;
