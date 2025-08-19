// /popupComponent/ReportButtons.tsx
"use client";

import React, { useState } from "react";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from "../page"; // Assuming page.tsx is in the parent directory
import Link from "next/link";
import ToastNotification from "./ToastNotification";

// --- Custom SVG Icons to exactly match your design ---

const AdvancePlanIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18V12"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15H15"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const JourneyReportIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V2.01"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 14H20.01"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 14H4.01"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MonthEndIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2V6"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V6"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10H21"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Reusable Button Component for this modal ---

const ReportButton: React.FC<{
  label: string;
  link?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}> = ({ label, link, icon, onClick }) => {
  const content = (
    <div
      className="w-full flex items-center justify-between py-2.5 px-4 bg-[#F9FAFB]
                 rounded-2xl border border-gray-200 
                 hover:bg-gray-100 hover:shadow-sm transition-all duration-200"
    >
      <span className="text-xs sm:text-sm md:mr-2 font-medium text-black">
        {label}
      </span>
      <div className="text-[#6B7280]">{icon}</div>
    </div>
  );

  return link ? (
    <Link href={link} className="w-full block">
      {content}
    </Link>
  ) : (
    <button className="w-full"  onClick={onClick}>{content}</button>
  );
};

// --- Main Report Buttons Popup Component ---
const ReportButtonsPopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [showToast, setShowToast] = useState(false);
  // Hardcoded data for the buttons
  const buttonsData = [
    {
      label: "View Advance Plan Report",
      link: "/b2c-student/student-flow/advance-plan/course-selection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
        >
          <path
            fill="#6B7280"
            d="M16.718 6.402 4.705 6.4A1.306 1.306 0 0 1 3.4 5.096c0-.72.586-1.305 1.305-1.305l13.721-.001a.453.453 0 0 1 0 .905l-13.721.002a.4.4 0 0 0 0 .798l12.013.001a.453.453 0 1 1 0 .906M25.444 6.4l-3.13-.004a.453.453 0 0 1 0-.906l3.131.004a.4.4 0 0 0 0-.797h-1.432a.453.453 0 1 1 0-.906h1.431a1.305 1.305 0 0 1 0 2.61M25.628 22.795H4.224a.974.974 0 0 1-.973-.973v-.664c0-.536.436-.973.973-.973h21.404c.536 0 .972.437.972.973v.664a.973.973 0 0 1-.972.973M4.224 21.09a.067.067 0 0 0-.067.067v.664c0 .037.03.067.067.067h21.404c.037 0 .067-.03.067-.067v-.664a.067.067 0 0 0-.067-.067z"
          ></path>
          <path
            fill="#6B7280"
            d="M25.448 21.115H4.488a.453.453 0 0 1-.453-.453V5.947a.453.453 0 1 1 .906 0V20.21h20.055V5.947a.453.453 0 1 1 .906 0v14.715c0 .25-.204.453-.454.453M8.508 29.941h-.002l-1.773-.01a.454.454 0 0 1-.42-.615l2.737-7.125a.45.45 0 0 1 .42-.29l1.78-.012a.453.453 0 0 1 .426.615L8.932 29.65a.455.455 0 0 1-.424.29m-1.115-.912.805.005 2.394-6.235-.809.006zM21.053 29.941a.45.45 0 0 1-.43-.31l-2.384-7.146a.45.45 0 0 1 .063-.409c.085-.118.22-.207.37-.187l1.78.012a.45.45 0 0 1 .42.29l2.737 7.126a.452.452 0 0 1-.421.615l-2.133.01zM19.298 22.8l2.081 6.235 1.15-.005-2.39-6.225z"
          ></path>
          <path
            fill="#6B7280"
            d="M7.448 18.551a.453.453 0 0 1-.453-.453V8.395a.453.453 0 1 1 .906 0v9.703c0 .25-.203.453-.453.453"
          ></path>
          <path
            fill="#6B7280"
            d="M22.938 17.038H6.558a.453.453 0 1 1 0-.906h16.38a.453.453 0 0 1 0 .906M15.471 13.238a.45.45 0 0 1-.32-.133l-2.795-2.795a.453.453 0 0 1 0-.64l9.48-9.48a.453.453 0 0 1 .64 0l2.795 2.796a.45.45 0 0 1 0 .64l-9.48 9.48a.45.45 0 0 1-.32.132M13.317 9.99l2.154 2.155 8.84-8.839-2.156-2.155z"
          ></path>
          <path
            fill="#6B7280"
            d="M11.279 14.635a.453.453 0 0 1-.43-.596l1.398-4.192a.452.452 0 0 1 .75-.176l2.795 2.795a.454.454 0 0 1-.177.749l-4.193 1.397a.5.5 0 0 1-.143.023m1.595-3.807-.88 2.639 2.64-.88z"
          ></path>
        </svg>
      ),
      action: () => alert("View Advance Plan Report"),
    },
    {
      label: "Download Journey Report",
     
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          viewBox="0 0 34 34"
        >
          <path
            stroke="#6B7280"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.083 12.75a2.833 2.833 0 1 0 0-5.667 2.833 2.833 0 0 0 0 5.667m0 0v1.417m0 9.917v-1.417M9.917 26.917a2.833 2.833 0 1 0-5.667 0 2.833 2.833 0 0 0 5.667 0m0 0h1.416M24.084 24.083a2.833 2.833 0 1 1-2.834 2.834m2.834-2.834a2.833 2.833 0 0 0-2.834 2.834m2.834-2.834v-1.416m-2.834 4.25h-1.416"
          ></path>
          <path
            fill="#6B7280"
            d="M7.083 19.833a1.417 1.417 0 1 0 0-2.833 1.417 1.417 0 0 0 0 2.833M15.583 28.333a1.417 1.417 0 1 0 0-2.833 1.417 1.417 0 0 0 0 2.833"
          ></path>
          <path
            stroke="#6B7280"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M29.75 9.917c0 3.699-5.667 8.5-5.667 8.5s-5.666-4.801-5.666-8.5c0-3.7 2.537-5.667 5.666-5.667s5.667 1.968 5.667 5.667"
          ></path>
          <path
            fill="#6B7280"
            d="M24.083 11.333a1.417 1.417 0 1 0 0-2.833 1.417 1.417 0 0 0 0 2.833"
          ></path>
        </svg>
      ),
      
    },
    {
      label: "Download Month End Report",
      icon: <MonthEndIcon />,
    
    },
  ];

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xs">
      <div className="p-2 bg-white">
        <ToastNotification isVisible={showToast} message="Downloaded !" />
        <div className="space-y-2">
          {buttonsData.map((button,index) => (
            <ReportButton
              key={button.label}
              label={button.label}
              link={button.link}
              icon={button.icon}
              onClick={() => {
                // Only show toast for 2nd and 3rd buttons (index 1 and 2)
                if (index === 1 || index === 2) {
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 2000); // Auto-hide after 2s
                }
                // Call button's custom action if defined
                button.action?.();
              }}
            />
          ))}
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default ReportButtonsPopup;
