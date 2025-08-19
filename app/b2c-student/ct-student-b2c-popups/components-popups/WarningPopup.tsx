import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";
import RescheduleClass from "../Reschedule/RescheduleClass";
import SelectLectureToCancel from "../Reschedule/SelectLectureToCancel";

const WarningPopup: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  const [classes, setClasses] = useState(false)
  return (
    <>
    <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 text-center">
      

        <h2 className="text-xl font-semibold mb-4">Reschedule Request</h2>
        <p className="text-black text-base leading-normal mb-6">
          Please note that the lecture can only be canceled if the request is made at least
          24 hours prior to the lecture timing.
        </p>
        <p className="text-black text-base leading-normal mb-4">
          Are you sure you want to proceed with the rescheduling request?
        </p>

        <button
          onClick={() => {
  onClose();
  setTimeout(() => {
    setClasses(true);
  }, 300); // 300ms delay after close
}}

          className="px-8 py-3 rounded-full bg-[#3366ff] text-white font-medium"
        >
          Continue
        </button>
      </div>
    </StudentB2CBaseModal>
    <SelectLectureToCancel isOpen={classes} onClose={() => setClasses(false)}/> 
    </>
  );
};

export default WarningPopup;
