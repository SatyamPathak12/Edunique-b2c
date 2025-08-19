"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseRenewedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartLearning: () => void;
}

export default function CourseRenewedModal({
  isOpen,
  onClose,
  onStartLearning,
}: CourseRenewedModalProps) {
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

  const handleStartLearning = () => {
    onStartLearning();
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
      <div className="relative bg-white rounded-3xl shadow-2xl py-10 px-10 md:px-16 w-full max-w-2xl mx-4 flex flex-col items-center gap-4">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-[#8DD9B3] rounded-full flex items-center justify-center">
            <Check className="h-12 w-12 stroke-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-3xl font-semibold">
          Course Renewed Successfully🎉
        </h2>

        {/* Description */}
        <p className="text-center text-lg text-[#6B7280] max-w-[70%]">
          Your course has been renewed. You can now continue learning without
          interruptions.
        </p>

        {/* Action Button */}
        <Button
          onClick={handleStartLearning}
          className="bg-[#8DD9B3] text-white px-10 text-sm font-medium rounded-full transition-all duration-200 h-fit"
        >
          <span className="py-1">Start Learning Again</span>
        </Button>
      </div>
    </div>
  );
}
