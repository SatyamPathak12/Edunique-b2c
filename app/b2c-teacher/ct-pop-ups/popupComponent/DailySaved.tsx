"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiCheck } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const DailyLogSavedPopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleContinue = () => {
    onClose(); // Close the modal
    router.push("/b2c-teacher/teacher-flow/daily-log-student-list");
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div
        className="relative bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(/common-images/pattern-1.png)` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Modal content */}
        <div className="relative z-10 text-center px-6 py-12">
          <div className="w-14 h-14 mx-auto bg-[#8dd9b3] rounded-full flex items-center justify-center mb-4">
            <FiCheck className="text-white text-2xl" strokeWidth={4}/>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Daily Log Saved</h2>
          <p className="text-base text-white/90 font-medium mb-4">
            The daily log has been successfully saved. You can now use this data to generate month-end reports for the student.
          </p>
          <button
            onClick={handleContinue}
            className="bg-[#3366FF] text-white font-medium px-4 py-3 rounded-full text-sm "
          >
            Continue
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default DailyLogSavedPopup;
