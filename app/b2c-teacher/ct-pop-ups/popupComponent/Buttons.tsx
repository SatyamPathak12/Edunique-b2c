import React from "react";
import { PiGitBranchLight, PiCalendarBlankLight } from "react-icons/pi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const Buttons: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="bg-white p-4 space-y-3 rounded-3xl">
        {/* Journey Report Button */}
        <button className="w-full flex items-center border justify-between px-4 py-3 rounded-xl bg-[#F9FAFB] ">
          <span className="text-sm font-medium text-gray-900">Download Student Journey Report</span>
          <PiGitBranchLight className="text-gray-600 text-xl" />
        </button>

        {/* Month End Report Button */}
        <button className="w-full flex items-center border justify-between px-4 py-3 rounded-xl bg-[#F9FAFB] ">
          <span className="text-sm font-medium text-gray-900">Download Student Month End Report</span>
          <PiCalendarBlankLight className="text-gray-600 text-xl" />
        </button>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default Buttons;
