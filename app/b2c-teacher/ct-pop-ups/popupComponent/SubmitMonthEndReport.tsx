import React from "react";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const SubmitMonthEndReportModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white p-6 rounded-3xl space-y-5">
        {/* Title */}
        <h2 className="text-center text-lg font-semibold ">Report Published</h2>

        <h3 className="font-medium text-sm text-center">The report for Shlok has been successfully published.</h3>

        {/* Generate Button */}
        <div className="pt-1 flex justify-center">
          <button className="w-32 rounded-full py-2.5 px-4 text-white bg-[#3366FF] text-sm font-medium"
          onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default SubmitMonthEndReportModal;
