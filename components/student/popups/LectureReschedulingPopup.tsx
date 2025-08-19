"use client";

import { useState, useEffect } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { PiCheckFatFill } from "react-icons/pi";

import { Button } from "@/components/ui/button";

interface LectureSlot {
  id: string;
  subject: string;
  teacher: string;
  time: string;
  day: string;
  timeSlot: string;
}

const mockLectures: LectureSlot[] = [
  {
    id: "1",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Mon",
    timeSlot: "9:00",
  },
  {
    id: "2",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Thu",
    timeSlot: "9:00",
  },
  {
    id: "3",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Fri",
    timeSlot: "9:00",
  },

  {
    id: "4",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Mon",
    timeSlot: "11:00",
  },
  {
    id: "5",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Tue",
    timeSlot: "11:00",
  },
  {
    id: "6",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Wed",
    timeSlot: "11:00",
  },
  {
    id: "7",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Fri",
    timeSlot: "11:00",
  },

  {
    id: "8",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Thu",
    timeSlot: "12:00",
  },

  {
    id: "9",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Mon",
    timeSlot: "13:00",
  },
  {
    id: "10",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Wed",
    timeSlot: "13:00",
  },
  {
    id: "11",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Fri",
    timeSlot: "13:00",
  },

  {
    id: "12",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Tue",
    timeSlot: "14:00",
  },
  {
    id: "13",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Fri",
    timeSlot: "14:00",
  },

  {
    id: "14",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Tue",
    timeSlot: "15:00",
  },
  {
    id: "15",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Wed",
    timeSlot: "15:00",
  },

  {
    id: "16",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Thu",
    timeSlot: "16:00",
  },
  {
    id: "17",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Fri",
    timeSlot: "16:00",
  },

  {
    id: "18",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Tue",
    timeSlot: "17:00",
  },
  {
    id: "19",
    subject: "Subject",
    teacher: "Teacher Name",
    time: "9:00 Am",
    day: "Wed",
    timeSlot: "17:00",
  },
];

const timeSlots = [
  { time: "9:00", label: "9:00" },
  { time: "10:00", label: "10:00" },
  { time: "11:00", label: "11:00" },
  { time: "12:00", label: "12:00" },
  { time: "13:00", label: "13:00" },
  { time: "14:00", label: "14:00" },
  { time: "15:00", label: "15:00" },
  { time: "16:00", label: "16:00" },
  { time: "17:00", label: "17:00" },
  { time: "18:00", label: "18:00" },
];

const days = [
  { short: "Mon", date: "14" },
  { short: "Tue", date: "15" },
  { short: "Wed", date: "16" },
  { short: "Thu", date: "17" },
  { short: "Fri", date: "18" },
];

interface ReschedulePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (selectedLecture: LectureSlot | null) => void;
}

export default function ReschedulePopup({
  isOpen,
  onClose,
  onContinue,
}: ReschedulePopupProps) {
  const [selectedLecture, setSelectedLecture] = useState<LectureSlot | null>(
    null
  );

  // Prevent background scroll when popup is open
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

  const handleLectureSelect = (lecture: LectureSlot) => {
    setSelectedLecture(selectedLecture?.id === lecture.id ? null : lecture);
  };

  const handleCancel = () => {
    setSelectedLecture(null);
    onClose();
  };

  const handleContinue = () => {
    onContinue(selectedLecture);
    onClose();
  };

  const getLecturesForSlot = (day: string, timeSlot: string) => {
    return mockLectures.filter(
      (lecture) => lecture.day === day && lecture.timeSlot === timeSlot
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleCancel}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-2xl font-semibold">
            Select Lecture to Reschedule
          </h2>

          {/* Date Navigation */}
          <div className="flex items-center gap-2 bg-[#F9FAFB] border rounded-2xl px-4 py-2">
            <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
              <CircleArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-base font-medium px-3">June 2025</span>
            <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
              <CircleArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Calendar Table */}
          <div className="rounded-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-6 border-b border-[#B0B0B0]">
              <div className="p-3 text-center font-medium text-gray-600"></div>
              {days.map((day) => (
                <div key={day.short} className={`p-3 text-center`}>
                  <div className="text-lg font-semibold text-[#6B7280]">
                    {day.date}
                  </div>
                  <div className="text-sm text-[#6B7280]">{day.short}</div>
                </div>
              ))}
            </div>

            {/* Time Rows */}
            {timeSlots.map((timeSlot, rowIndex) => (
              <div
                key={timeSlot.time}
                className={`grid grid-cols-6 min-h-[64px] ${
                  rowIndex < timeSlots.length - 1
                    ? "border-b border-[#B0B0B0]"
                    : ""
                }`}
              >
                {/* Time Label */}
                <div className="p-3 text-center font-medium text-[#6B7280] flex items-center justify-center">
                  {timeSlot.label}
                </div>

                {/* Day Cells */}
                {days.map((day) => {
                  const lectures = getLecturesForSlot(day.short, timeSlot.time);
                  return (
                    <div
                      key={`${day.short}-${timeSlot.time}`}
                      className={`p-2 flex flex-wrap gap-1 items-start content-start`}
                    >
                      {lectures.map((lecture) => (
                        <div
                          key={lecture.id}
                          onClick={() => handleLectureSelect(lecture)}
                          className={`relative cursor-pointer rounded-2xl p-2 text-xs transition-all duration-200 hover:shadow-sm w-full ${
                            selectedLecture?.id === lecture.id
                              ? "bg-[#FFC79A] border border-[#FFC79A]"
                              : "bg-[#FFC79A1A] border border-[#FFC79A] hover:bg-gray-150"
                          }`}
                        >
                          {selectedLecture?.id === lecture.id ? (
                            <div className="py-[10px] px-4 flex items-center justify-center">
                              <PiCheckFatFill className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <>
                              <div className="flex justify-between items-start">
                                <div className="font-medium mb-0.5">
                                  {lecture.subject}
                                </div>
                                <div className="mb-0.5">{lecture.time}</div>
                              </div>
                              <div>{lecture.teacher}</div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-center gap-4 p-6 pt-4">
          <Button
            onClick={handleCancel}
            className="px-8 text-base font-medium rounded-full bg-[#FF33661A] text-[#FF3366] hover:bg-pink-200 border-0 transition-colors h-fit"
          >
            <span className="text-center py-1">Cancel</span>
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!selectedLecture}
            className={`px-8 text-base font-medium rounded-full transition-all duration-200 h-fit ${
              selectedLecture
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span className="text-center py-1">Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
