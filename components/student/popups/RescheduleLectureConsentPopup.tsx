"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface RescheduleLectureConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
}

export default function RescheduleLectureModal({
  isOpen,
  onClose,
  onCancel,
}: RescheduleLectureConsentModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContinue = () => {
    onCancel();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reschedule Request
        </h2>

        {/* Body Content */}
        <p className="text-center leading-relaxed mb-3 text-base">
          Please note that the lecture can only be canceled if the request is
          made at least 24 hours prior to the lecture timing.
        </p>

        <p className="text-center leading-relaxed mb-8 text-base">
          Are you sure you want to proceed with the rescheduling request?
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handleContinue}
            className="px-8 text-base font-medium rounded-full bg-[#3366FF] hover:bg-blue-600 text-white transition-colors h-fit"
          >
            <span className="py-1">Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
