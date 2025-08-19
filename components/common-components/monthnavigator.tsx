"use client";

import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface MonthNavigatorProps {
  currentDate: string;
  onPrevious: () => void;
  onNext: () => void;
}

const MonthNavigator: React.FC<MonthNavigatorProps> = ({
  currentDate,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center gap-2 text-xs border border-[#E5E7EB] text-black bg-[#F9FAFB] px-2.5 py-1.5 rounded-lg sm:text-sm sm:gap-2.5 sm:px-3 sm:py-2 sm:rounded-xl">
      <button onClick={onPrevious} aria-label="Previous month">
        <FiArrowLeftCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
      </button>
      <span>{currentDate}</span>
      <button onClick={onNext} aria-label="Next month">
        <FiArrowRightCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
      </button>
    </div>
  );
};

export default MonthNavigator;
// use like this
//  import { format } from "date-fns";
// import MonthNavigator from "@/components/MonthNavigator"; // Adjust path as needed

// const [currentDate, setCurrentDate] = useState(new Date());

// const handlePrevious = () => {
//   const prev = new Date(currentDate);
//   prev.setMonth(prev.getMonth() - 1);
//   setCurrentDate(prev);
// };

// const handleNext = () => {
//   const next = new Date(currentDate);
//   next.setMonth(next.getMonth() + 1);
//   setCurrentDate(next);
// };
// component call
{/* <MonthNavigator
  currentDate={format(currentDate, "MMMM yyyy")}
  onPrevious={handlePrevious}
  onNext={handleNext}
/> */}
