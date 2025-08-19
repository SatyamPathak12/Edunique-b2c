import React from "react";
import Image from "next/image";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";
import { useRouter } from "next/navigation";

const CourseRenewedModal: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {

const router = useRouter();
  return (
    <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="relative bg-white px-6 md:px-12 py-16 text-center">
       

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#8dd9b3] flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl font-semibold mb-3 flex items-center justify-center gap-2">
          Course Renewed Successfully
          <Image
            src="/common-images/celebration-icon.png"
            alt="Celebration"
            width={40}
            height={40}
          />
        </h2>

        <p className="text-gray-600 max-w-96 mx-auto text-base mb-6">
          Your course has been renewed. You can now continue learning without interruptions.
        </p>

        <button
onClick={() => router.push("/b2c-student/student-flow/single-course-detail")} 
          className="px-6 py-2 rounded-full bg-[#8dd9b3] text-white font-medium text-sm"
        >
          Start Learning Again
        </button>
      </div>
    </StudentB2CBaseModal>
  );
};

export default CourseRenewedModal;
