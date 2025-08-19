"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CancelLectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
}

export default function CancelLectureConsentModal({
  isOpen,
  onClose,
  onCancel,
}: CancelLectureModalProps) {
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

  const handleDiscard = () => {
    onClose();
  };

  const handleCancelLecture = () => {
    onCancel();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleDiscard}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Cancel Lecture
        </h2>

        {/* Body Content */}
        <p className="text-center leading-relaxed mb-8 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          cursus urna elit. Phasellus pharetra orci dolor, eget convallis tellus
          facilisis facilisis. Nulla mattis, augue nec facilisis cursus, diam
          libero scelerisque ex, vitae pretium ligula sem quis mi.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handleDiscard}
            className="px-8 text-base font-medium rounded-full bg-[#E5E7EB] text-[#6B7280] hover:bg-gray-300 border-0 transition-colors h-fit"
          >
            <span className="py-1">Discard</span>
          </Button>
          <Button
            onClick={handleCancelLecture}
            className="px-8 text-base font-medium rounded-full bg-[#FF3366] hover:bg-[#ff1a53] text-white transition-colors h-fit"
          >
            <span className="py-1">Cancel Lecture</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
