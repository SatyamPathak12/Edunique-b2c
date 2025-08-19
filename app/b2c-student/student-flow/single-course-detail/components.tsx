// components.tsx
"use client";

import React from "react";
import {
  FiChevronDown,
  FiChevronUp,

  FiDownload,
} from "react-icons/fi";
import { DateNavigatorWithArrows, FilterDropdown } from "./ui-components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MonthTab from "@/components/common-components/MonthTab/MonthTab";
import { useRouter } from "next/navigation";
import Link from "next/link";

// --- Interfaces ---
export interface LearningWeek {
  id: string;
  title: string;
  videoCount: number;
  videos: { id: string; topic: string }[];
}
export interface UpcomingClass {
  id: number;
  title: string;
  teacher: string;
  description: string;
  time: string;
  date: string;
}
export interface CourseMaterial {
  id: number;
  fileName: string;
  date: string;
}

const StyledSelect: React.FC<{
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
  // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className="w-fit rounded-xl sm:py-4 bg-[#F9FAFB] text-xs sm:text-sm text-black border border-[#E5E7EB]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
    </SelectContent>
  </Select>
);

// --- Full Component Definitions ---
export const LearningContentCard: React.FC<{
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
  currentWeekFilter: string;
  onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentMonth: string;
  courseTitle: string;
  courseSubtitle: string;
  learningWeeks: LearningWeek[];
  openAccordionIds: string[];
  onAccordionToggle: (weekId: string) => void;
  leftRef: React.RefObject<HTMLDivElement | null>
}> = (props) => (
  <div className="bg-white rounded-2xl p-4 md:p-6" ref={props.leftRef}>

    <div className="mb-4 md:mb-6 flex flex-col lg:flex-row md:items-center justify-between gap-4">
      {/* Tabs */}
      <nav
        className="w-full md:w-auto -mb-px gap-2 flex overflow-x-auto space-x-1 lg:space-x-2 custom-scrollbar-thin"
        aria-label="Content Tabs"
      >
        {props.tabs.map((tab) => (
          <ContentTab
            key={tab}
            label={tab}
            isActive={props.activeTab === tab}
            onClick={() => props.onTabClick(tab)}
          />
        ))}
      </nav>

      {/* Filters */}
      <div className="w-full md:w-auto flex items-center gap-2 sm:gap-3 justify-center md:justify-end">
        <StyledSelect
          defaultValue="all"
          placeholder="Filter"
          items={[
            { value: "all", label: "Week 1" },
            { value: "batch1", label: "Batch 1" },
          ]}
        />
        <MonthTab />
      </div>
    </div>


    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2 sm:gap-4">
      <div>
        <h2 className="text-lg md:text-xl font-bold text-[#3366FF]">
          {props.courseTitle}
        </h2>
        <p className="text-md md:text-lg text-[#3366FF] mt-0.5 text-sm">
          {props.courseSubtitle}
        </p>
      </div>
    </div>

    <div className="space-y-2 md:space-y-3">
      {props.learningWeeks.map((week) => (
        <LearningAccordion
          key={week.id}
          week={week}
          isOpen={props.openAccordionIds.includes(week.id)}
          onToggle={() => props.onAccordionToggle(week.id)}
        />
      ))}
    </div>
  </div>
);

export const LearningAccordion: React.FC<{
  week: LearningWeek;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ week, isOpen, onToggle }) => (
  <div className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#E5E7EB]">

    <div
      className="w-full flex justify-between items-center p-3 sm:p-4 focus:outline-none transition-colors"
    >
      <div>

        <h3 className="text-sm sm:text-md mb-0.5 sm:mb-1 text-black text-left">
          {week.title}
        </h3>
        <p className="text-[10px] sm:text-xs text-left mt-1 sm:mt-1.5 text-gray-500">
          {week.videoCount} videos
        </p>
      </div>
      {isOpen ? (
        <FiChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" onClick={onToggle} />
      ) : (
        <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" onClick={onToggle} />
      )}
    </div>
    {isOpen && (
      <div className="p-3 sm:p-4 bg-[#F9FAFB] space-y-1.5 sm:space-y-2">
        {week.videos.map((video) => (
          <VideoItem key={video.id} topic={video.topic} />
        ))}
      </div>
    )}
  </div>
);

export const UpcomingClassesCard: React.FC<{
  classes: UpcomingClass[];
  currentWeekFilter: string;
  onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentMonth: string;
  rightHeight: number;
}> = (props) => (
  <div className={`bg-white rounded-2xl p-4 flex flex-col flex-grow md:min-h-[300px]`}
    style={{ maxHeight: `${props.rightHeight - 136}px` }}
  >
    <div className="flex justify-between items-center mb-3 md:mb-4 flex-shrink-0">
      <h3 className="text-lg md:text-xl font-bold text-[#FF3366]">
        Upcoming Classes
      </h3>
    </div>
    <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 md:mb-4 flex-shrink-0">
      <StyledSelect
        defaultValue="all"
        placeholder="Filter"
        items={[{ value: "all", label: "Date" }, { value: "batch1", label: "Batch 1" }]}
      />
      <MonthTab />
    </div>
    <div className="flex-1 space-y-2 md:space-y-3 overflow-y-auto -mr-2 pr-1 custom-scrollbar-blue">
      {props.classes.map((uClass) => (
        <UpcomingClassItem key={uClass.id} uClass={uClass} />
      ))}
      {props.classes.length === 0 && (
        <p className="text-center text-sm text-gray-500 py-4">
          No upcoming classes.
        </p>
      )}
    </div>
  </div>
);

export const UpcomingClassItem: React.FC<{ uClass: UpcomingClass }> = ({
  uClass,
}) => (
  <div className="relative bg-[#F9FAFB]/70 p-3 sm:p-4 rounded-3xl border border-[#E5E7EB]/100 flex flex-col xs:flex-row xs:items-stretch justify-between">

    <div className="mb-2 xs:mb-0 w-full space-y-1 md:space-y-1.5">
      <div className="flex justify-between items-start gap-2">
        <h4 className="text-sm sm:text-md font-bold text-black">
          {uClass.title}
        </h4>
        <p className="text-[10px] sm:text-xs text-[#6B7280] mb-1 xs:mb-0 whitespace-nowrap">
          {uClass.date}
        </p>
      </div>

      <p className="text-[10px] sm:text-xs text-[#FFCC00] font-light tracking-wide mt-0.5">
        {uClass.teacher}
      </p>

      <p className="text-[10px] sm:text-xs text-[#6B7280] font-light tracking-tight mt-1">
        {uClass.description}
      </p>

      <p className="text-[10px] sm:text-xs text-[#6B7280] tracking-tight mt-1 whitespace-nowrap">
        {uClass.time}
      </p>

    </div>
    <ActionButton variant="primary" size="sm" className="absolute right-3 bottom-3 px-6 w-auto">
      Join
    </ActionButton>
  </div>
);

export const FillForm: React.FC<{setOpenModal: React.Dispatch<React.SetStateAction<string | null>>}> = ({setOpenModal}) => (

  <div className="w-full p-5 bg-white rounded-2xl flex flex-col items-center justify-center gap-4 flex-shrink-0">
    
    <h3 className="text-lg md:text-xl font-bold text-[#FF3366]">
      Request Teacher Change
    </h3>
    <ActionButton onClick={()=>setOpenModal("requestChangeSingle")} variant="primary" size="sm" className="xs:w-auto">
      Fill the Form
    </ActionButton>
  </div>
);

export const AttendanceCard: React.FC<{
  attendance: {
    total: number;
    attended: number;
    missed: number;
    percentage: number;
  };
}> = ({ attendance }) => (
  <div className="bg-white rounded-2xl p-3 md:p-4 h-full flex flex-col gap-4 lg:col-span-5">
    <h3 className="font-medium text-black  text-sm md:text-base">Attendence</h3>
    <p className="text-[10px] md:text-xs text-black ">
      Total : {attendance.total}   Attended : {attendance.attended}   Missed :
      {attendance.missed}
    </p>
    <div className="w-full flex rounded-full h-2.5 md:h-3">
      <div
        className="bg-[#3366FF] relative h-full rounded-full"
        style={{ width: `${attendance.percentage}%` }}
      >
        <p className="absolute right-0 bottom-0 self-center translate-x-[115%] translate-y-[1px] sm:translate-y-[2px] text-xs md:text-xs text-[#B0B0B0] font-medium text-right mt-1">
          {attendance.percentage}%
        </p>
      </div>
    </div>
    <div className="flex-1 text-[#78350F] space-y-2 text-xs text-center bg-[#FFCC004D] rounded-2xl p-4 mt-auto">
      <h1 className="font-semibold">Only 3 Classes Left</h1>
      <p className="text-xs lg:mt-8 lg:px-4">
        To continue learning without interruption, please renew your course or
        complete the payment.
      </p>
      <Link href={"/b2c-student/student-flow/checkout"}>
      <button className={`rounded-full bg-[#D97706] text-white px-4 py-3`}>
        Pay Fees
      </button></Link>
    </div>
  </div>
);

export const CertificateCard: React.FC = () => {
  const Router = useRouter();
  return(
  <div className="bg-white rounded-2xl p-3 md:p-4 text-left h-full flex flex-col lg:col-span-5">
    <h3 className="font-medium text-black mb-2 text-sm md:text-base">
      Download Certificate
    </h3>
    <p className="text-xs text-[#6B7280] mb-2 flex-grow">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, enim rhoncus tincidunt facilisis, ligula mauris hendrerit massa, a tincidunt urna nisl eget metus. Nulla facilisi. Vivamus convallis tempor lectus ac viverra. Sed vulputate sem est, ultrices finibus odio ornare quis. Vivamus porta finibus accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, enim rhoncus tincidunt facilisis, ligula mauris hendrerit massa, a tincidunt urna nisl eget metus. Nulla facilisi. Vivamus convallis tempor lectus ac viverra. Sed vulputate sem est, ultrices finibus odio ornare quis. Vivamus porta finibus accumsan.
    </p>
    <ActionButton
      variant="secondary"
      size="sm"
      onClick={() => Router.push("/b2c-student/student-flow/checkout")}
      className="w-full bg-[#F3F4F6] flex justify-center items-center mt-auto"
    >
      <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-[#B0B0B0]" />
      <span className="text-[#B0B0B0]">Download</span>
    </ActionButton>
  </div>
);}

export const ExtraClass: React.FC<{ materials: CourseMaterial[] }> = ({

}) => (
  <div className="bg-white rounded-2xl p-3 md:p-4 h-full flex flex-col justify-between lg:col-span-4">
    <h3 className="font-medium text-black  text-sm md:text-base">
      Extra Class Payment
    </h3>
    <p className="text-xs text-[#6B7280]">
      Some topics remain uncovered in your current course plan.
    </p>
    <ul className="space-y-2">
      {[
        { id: 1, topic: "Topic 1" },
        { id: 2, topic: "Topic 2" },
        { id: 3, topic: "Topic 3" },
        { id: 4, topic: "Topic 4" },
      ].map((item) => (
        <li
          key={item.id}
          className="flex gap-1 items-center justify-start w-full"
        >
          <div className="p-1 rounded-full bg-[#8DD9B3]">
            <svg
              width={9}
              height={9}
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.909 1L2.909 5L1.09082 3.18182"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-black text-xs">{item.topic}</h2>
        </li>
      ))}
    </ul>
    <div className="flex items-center justify-between ">
      <h2 className="text-sm self-center text-[#3366FF]">Total: ₹ 3000</h2>
      <Link href={"/b2c-student/student-flow/checkout"}><button className="bg-[#3366FF] text-white px-4 text-sm rounded-full py-1 xs:w-auto">
        Proceed to pay
      </button></Link>
    </div>
    <p className="text-xs text-[#6B7280]">
      Once payment is confirmed, your extra class will be scheduled and updated
      in your calendar
    </p>
  </div>
);

// --- Mock UI Components (for standalone testing) ---
// In a real project, these would be in their own 'ui-components.tsx' file.

export const ContentTab: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap md:px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium  ${isActive ? "border-b-2 border-[#3366FF] text-[#3366FF]" : "text-[#6B7280] hover:bg-gray-100"
      }`}
  >
    {label}
  </button>
);

export const VideoItem: React.FC<{ topic: string }> = ({ topic }) => {
  const Router = useRouter();
  return(
  <div onClick={()=>Router.push("/b2c-student/student-flow/video-screen")} className="flex items-center justify-between bg-[#F3F4F6] p-2 rounded-full border border-[#E5E7EB] cursor-pointer">
    <div className="flex items-center gap-2">
      <div className=" rounded-full p-1">
        <svg
          width={26}
          height={26}
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4997 36.6668C29.7044 36.6668 37.1663 29.2049 37.1663 20.0002C37.1663 10.7954 29.7044 3.3335 20.4997 3.3335C11.2949 3.3335 3.83301 10.7954 3.83301 20.0002C3.83301 29.2049 11.2949 36.6668 20.4997 36.6668Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.167 13.3335L27.167 20.0002L17.167 26.6668V13.3335Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700">{topic}</span>
    </div>
    <svg
      className="w-5 h-5 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  </div>
);}

export const ActionButton: React.FC<{
  variant: "primary" | "secondary";
  size: "sm" | "md";
  children: React.ReactNode;
  className?: string;
  onClick?:()=>void;
}> = ({ variant, size, children, className, onClick }) => (
  <button
  onClick={onClick}
    className={`font-semibold rounded-full transition-colors ${variant === "primary"
      ? "bg-[#3366FF] text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } ${size === "sm"
        ? "px-4 py-2 text-xs sm:text-sm"
        : "px-6 py-3 text-sm sm:text-base"
      } ${className}`}
  >
    {children}
  </button>
);
