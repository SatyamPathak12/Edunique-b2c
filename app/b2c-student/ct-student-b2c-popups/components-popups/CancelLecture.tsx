import React, { useState } from "react";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";
import SelectLectureToCancel from "../Reschedule/SelectLectureToCancel";
import SelectLectureToReschedule from "../Reschedule/SelectLectureToReschedule";

const CancelLectureModal: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  const [reschedule, setReschedule] = useState(false);
  return (
    <>
      <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
        <div className="relative bg-white p-6 text-center">

          <h2 className="text-xl font-semibold mb-4">Cancel Lecture</h2>
          <p className="text-black text-base text-center leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus urna elit.
            Phasellus pharetra orci dolor, eget convallis tellus facilisis facilisis. Nulla mattis,
            augue nec facilisis cursus, diam libero scelerisque ex, vitae pretium ligula sem quis mi.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-2 max-w-36 w-full py-3 rounded-full bg-gray-200 text-gray-600 font-medium"
            >
              Discard
            </button>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  setReschedule(true);
                }, 300); // 300ms delay after close
              }}
              className="px-2 max-w-36 w-full py-3 rounded-full bg-[#ff3366] text-white font-medium"
            >
              Cancel Lecture
            </button>
          </div>
        </div>
      </StudentB2CBaseModal>
      <SelectLectureToReschedule isOpen={reschedule} onClose={() => setReschedule(false)} />
    </>
  );
};

export default CancelLectureModal;
