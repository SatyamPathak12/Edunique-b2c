import React from "react";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useRouter } from "next/navigation";

const MonthEndReportModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handlePublish = () => {
    router.push("/b2c-teacher/teacher-flow/monthly-report");
  };
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="bg-white p-6 rounded-3xl space-y-5">
        {/* Title */}
        <h2 className="text-center text-base font-semibold ">Month End Report</h2>

        {/* From Date */}
        <div>
          <label className="block text-sm font-medium  mb-1">From Date:</label>
          <div className="flex items-center justify-between mt-2.5 px-4 py-2 rounded-full bg-[#F9FAFB] border border-gray-200">
            <input
              type="text"
              placeholder="Text"
              className="bg-transparent outline-none w-full text-sm  placeholder-gray-400"
            />
            <MdOutlineCalendarToday className="text-black text-lg ml-2" />
          </div>
        </div>

        {/* To Date */}
        <div>
          <label className="block text-sm font-medium  mb-1">To Date:</label>
          <div className="flex items-center justify-between mt-2.5 px-4 py-2 rounded-full bg-[#F9FAFB] border border-gray-200">
            <input
              type="text"
              placeholder="Text"
              className="bg-transparent outline-none w-full text-sm  placeholder-gray-400"
            />
            <MdOutlineCalendarToday className="text-black text-lg ml-2" />
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-1 flex justify-center">
          <button className=" rounded-full py-2.5 px-4 text-white bg-[#3366FF] text-sm font-medium"
          onClick={handlePublish}>
            Generate
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default MonthEndReportModal;
