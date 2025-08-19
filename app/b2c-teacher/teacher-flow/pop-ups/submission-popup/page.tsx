"use client";
import { ModalProps } from "@/app/principal/pop-ups/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface modalProps {
  show: boolean;
  onClose: () => void;
}

export default function SubmissionPopup({show, onClose}: modalProps) {
  if(!show) return
  const router = useRouter();

  return (
    <div onClick={(e) => {e.stopPropagation(); onClose()}} className="z-100 fixed min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center z-50">
        {/* Modal Dialog */}
        <div
          role="dialog"
          aria-modal="true"
          className="bg-white rounded-2xl w-[300px] sm:w-[593px] p-6 sm:p-8 text-center shadow-lg space-y-6"
        >
          <h2 className="text-black font-bold text-2xl">Report Published</h2>

          <p className="text-black text-xl leading-tight">
            The report for Shlok has been successfully published.
          </p>

          <button
            onClick={() => router.push("/b2c-teacher/teacher-flow/student-progress-report")}
            className="bg-[#3366FF] text-white px-10 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
