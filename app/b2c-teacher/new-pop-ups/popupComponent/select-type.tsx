// components/popupComponent/ToastNotification.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ToastNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLORS = {
  primaryBlue: "#3366FF",
  textBlack: "#000000",
  textGray: "#777777",
};

const selectionOptions = [
  {
    id: "explore_courses",
    title: (
      <p
        className="text-xs xs:text-sm sm:text-base font-bold break-words leading-snug text-left text-black"
        style={{ color: COLORS.textBlack }}
      >
        Explore EdUnique Courses
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc: "/select1.png",
  },
  {
    id: 'future_school',
    title:
     <p className="text-xs xs:text-sm sm:text-base font-bold break-words leading-snug text-left text-black"
      style={{ color: COLORS.textBlack }}
    >
      Become a Future School
    </p>,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    iconSrc: '/select2.png'
  },
  {
    id: "Learning",
    title: (
      <p
        className="text-xs xs:text-sm sm:text-base font-bold break-words leading-snug text-left text-black"
        style={{ color: COLORS.textBlack }}
      >
        AI Mapped Holistic Learning Program
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc: "/select2.png",
  },
  {
    id: "membership_plans",
    title: (
      <p
        className="text-xs xs:text-sm sm:text-base font-bold break-words leading-snug text-left text-black"
        style={{ color: COLORS.textBlack }}
      >
        Pre-recorded Courses
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc: "/select3.png",
  },
];

interface SelectionCardProps {
  option: (typeof selectionOptions)[0];
  isSelected: boolean;
  onSelect: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  option,
  isSelected,
  onSelect,
}) => (
  <button
    onClick={onSelect}
    className="w-full max-w-xl mx-auto flex items-center gap-2 sm:gap-4 p-1.5 sm:p-3 rounded-full bg-white hover:shadow-lg transition-all duration-200 cursor-pointer"
  >
    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
      <Image
        src={option.iconSrc}
        alt={option.id}
        width={90}
        height={90}
        className="w-full h-full object-contain"
        priority
        quality={100}
      />
    </div>
    <div className="flex-1 text-left">
      {option.title}
      <p
        className="text-[10px] xs:text-xs sm:text-sm mt-1 leading-snug"
        style={{ color: COLORS.textGray }}
      >
        {option.description}
      </p>
    </div>
    <div className="flex-shrink-0 h-12 w-12 sm:w-16 sm:h-16 flex items-center justify-center">
      {isSelected && (
        <div
          className="h-8 w-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: COLORS.primaryBlue }}
        >
          <FiCheck className="w-5 h-5 text-white" strokeWidth={4} />
        </div>
      )}
    </div>
  </button>
);

const SelectionTypeCard: React.FC<ToastNotificationProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(
    selectionOptions[0].id
  );
  const Router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-xl mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition z-30"
        >
          ✕
        </button>

        {/* Pattern background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "1000px",
            filter: "brightness(60%) grayscale(10%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "#cccccc",
            filter: "brightness(120%) opacity(70%)",
          }}
        />

        <div className="relative z-20 px-6 my-20 py-8 sm:py-12">
          <div className="space-y-4">
            {selectionOptions.map((option) => (
              <SelectionCard
                key={option.id}
                option={option}
                isSelected={selectedOptionId === option.id}
                onSelect={() => {
                  setSelectedOptionId(option.id);
                  if (option.id === "explore_courses") {
                    Router.push("/b2c-teacher/registration/login");
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionTypeCard;
