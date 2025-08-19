"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../layout/Header";
import Footer from "@/components/layout/Footer";
// import MaxWidthWrapper from "../admin/max-width-wrapper";
import {
  FiArrowLeft,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiChevronDown,
} from "react-icons/fi";
import { ACCENT_PINK } from "../teacher-b2b/create-test/CreateTestPage";
// import { url } from "inspector";

const categories = [
  "Subject 1",
  "Subject 2",
  "Subject 3",
  "Subject 4",
  "Subject 5",
];
const PALETTE = {
  GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
  GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
  PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
  PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
  PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
  PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

  ACCENT_PINK: "#FF3366", // Tags, highlights
  ACCENT_BLUE: "#0DC6FD", // Line chart, progress
  ACCENT_PURPLE: "#AC50F5", // Line chart, progress
  ACCENT_RED: "#FF4A69", // Failed status

  BG_PAGE: "#F3F4F6", // Main page background
  BORDER_GREY: "#B0B0B0", // General borders for cards
  TEXT_DARK: "#1F2937", // For primary text
  TEXT_MEDIUM: "#6B7280", // For secondary text
  TEXT_LIGHT: "#9CA3AF", // For tertiary text
  WHITE_CARD: "#FFFFFF",
};

const sessionData = Array.from({ length: 14 }, () => ({
  title: `Unit Name`,
  content: `1. REAL NUMBERS

1. Review of representation of natural numbers, integers, and
rational numbers on the number line. Rational numbers as
recurring/terminating decimals. Operations on real numbers.

2. Examples of non-recurring/non-terminating decimals.
Existence of non-rational numbers (irrational numbers) such as,
and their representation on the number line. Explaining that
every real number is represented by a unique point on the
number line and conversely, viz. every point on the number line
represents a unique real number.

3. Definition of nth root of a real number.
4. Rationalization (with precise meaning) of real numbers of the
type
`,
}));
const Curriculum = () => {
  const [selected, setSelected] = useState<string>("Subject 1");

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const headerUser = {
    name: "Educator Name",
    role: "Teacher",
    avatarSrc: "/images/person.jpg",
  };
  return (
    <div className="bg-gray-100">
      <Header user={headerUser} />

      <div className="bg-white py-3">
        <div className="container mx-2 flex items-center gap-3">
          <button
            className="p-1.5 text-black hover:text-gray-700 focus:outline-none rounded-md"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1
            className="text-lg sm:text-xl font-semibold"
            style={{ color: ACCENT_PINK }}
          >
            Yearly Plan Overview
          </h1>
        </div>
      </div>

      <div className=" px-4 mx-auto bg-gray-100">
        <div className="px-4 pt-4">
          <div className="w-full flex justify-center bg-white  rounded-2xl py-2">
            <div className="flex flex-wrap md:text-base text-xs md:justify-center justify-start px-2 md:gap-4 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelected(category)}
                  className={`
                    relative md:px-5 px-2 py-2 rounded-2xl cursor-pointer font-medium transition-colors duration-200
                    ${
                      selected === category
                        ? `text-white bg-[${PALETTE.ACCENT_PINK}]`
                        : "text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  {/* Animated background highlight */}
                  {selected === category && (
                    <motion.div
                      layoutId="highlight"
                      className={`absolute inset-0 bg-[${PALETTE.ACCENT_PINK}] rounded-2xl z-0`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    />
                  )}
                  {/* Button text above animation layer */}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-[3fr_2fr] gap-4 sm:gap-8 p-4">
          {/* Left column */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex  flex-col sm:flex-row items-center justify-between gap-2 xs:flex-col mb-3">
              <h2 className="text-md font-semibold h-fit text-[#3366FF] border-b border-[#3366FF] w-fit">
                Modules
              </h2>
              <div className="flex items-center h-fit gap-2 sm:gap-3 sm:self-center">
                <FilterDropdown
                  value={"Week 1"}
                  options={[
                    { value: "Weekly", label: "Weekly" },
                    { value: "Week 1", label: "Week 1" },
                    { value: "Week 2", label: "Week 2" },
                  ]} // Added Weekly as per original
                />
                <DateNavigatorWithArrows currentDate={"June 2025"} />
              </div>
            </div>

            <div className="space-y-2">
              {sessionData.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`${
                      isOpen ? "p-6" : "border border-[#E5E7EB]"
                    } relative z-20 rounded-2xl overflow-hidden transition-all`}
                  >
                    {/* Filtered background image */}
                    <div
                      className="absolute inset-0 bg-cover rounded-3xl bg-repeat -z-10"
                      style={{
                        backgroundImage: 'url("/pattern.png")',
                        filter: "brightness(0.7) grayscale(30%)",
                      }}
                    />
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className={`${
                        isOpen ? "bg-white px-6 py-2" : ""
                      } w-full bg-[#F9FAFB] rounded-2xl flex justify-between items-center px-4 py-3 font-medium focus:outline-none`}
                    >
                      <span className="text-lg">{item.title}</span>
                      <div>
                        {isOpen ? (
                          <div className="flex gap-2 text-[#6B7280] text-xs items-center">
                            <p>Periods: 18</p>
                            <p>Marks: 20</p>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width={24}
                                height={24}
                                rx={12}
                                transform="matrix(1 0 0 -1 0 24.5)"
                                fill="black"
                                fillOpacity="0.3"
                              />
                              <path
                                d="M6 15.5L12 9.5L18 15.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        ) : (
                          <IoIosArrowDown className="text-xl text-gray-600" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 py-4 rounded-2xl mt-2 bg-white text-sm text-[#6B7280] whitespace-pre-line">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column with two rows */}
          <div className="font-medium">
            <div className="bg-white  md:p-8 h-fit p-6 rounded-2xl overflow-auto">
              <h3 className="text-m text-blue-600 text-center font-semibold mb-4">
                COURSE STRUCTURE CLASS - IX
              </h3>

              <table className="w-full  md:p-6 table-auto border-collapse">
                <thead>
                  <tr className="bg-[#bedbff] text-left">
                    <th className="border border-black px-4 py-2">Units</th>
                    <th className="border border-black px-4 py-2">Unit Name</th>
                    <th className="border border-black px-4 py-2 text-right">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["I", "Number Systems", "10"],
                    ["II", "Algebra", "20"],
                    ["III", "Coordinate Geometry", "04"],
                    ["IV", "Geometry", "27"],
                    ["V", "Mensuration", "13"],
                    ["VI", "Statistics", "06"],
                    ["", "Total", "80"],
                  ].map(([unit, name, marks], idx) => (
                    <tr
                      key={idx}
                      className={
                        name === "Total" ? "font-bold bg-[#bedbff]" : "bg-white"
                      }
                    >
                      <td className="border border-black  px-4 py-2">{unit}</td>
                      <td className="border border-black  px-4 py-2">{name}</td>
                      <td className="border border-black px-4 py-2 text-right">
                        {marks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6  md:p-8 mt-6 rounded-2xl space-y-6">
              {/* Title */}
              <div className="text-center space-y-1">
                <h2 className="text-lg font-semibold uppercase">Mathematics</h2>
                <p className="font-medium">Question Paper Design</p>
                <p>Class - IX</p>
                <div className="flex justify-between mt-2 text-sm font-medium px-2">
                  <span>Time: 3 Hrs.</span>
                  <span>Max. Marks: 80</span>
                </div>
              </div>

              {/* Main Table */}
              <div className="overflow-auto">
                <table className="w-full table-auto py-4 md:px-6 border-collapse  text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#bedbff]">
                      <th className="border border-black px-2 py-2 md:w-12">
                        S. No
                      </th>
                      <th className="border w-full border-black px-2 py-2 ">
                        Typology of Questions
                      </th>
                      <th className="border border-black px-2 py-2">
                        Total Marks
                      </th>
                      <th className="border border-black px-2 py-2 md:w-24">
                        % Weightage <br /> (approx.)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        1,
                        "Remembering: Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers. Understanding: Demonstrate understanding of facts and ideas by organizing, comparing, interpreting, giving descriptions, and stating main ideas.",
                        43,
                        54,
                      ],
                      [
                        2,
                        "Applying: Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.",
                        19,
                        24,
                      ],
                      [
                        3,
                        "Analysing: Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations. Evaluating: Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria. Creating: Compile information together in a different way by combining elements in a new pattern or proposing alternative solutions.",
                        18,
                        22,
                      ],
                    ].map(([sn, question, marks, weight], i) => (
                      <tr key={i} className="bg-white">
                        <td className="border font-medium border-black px-2 py-2 text-center align-top">
                          {sn}
                        </td>
                        <td className="border font-medium border-black px-2 py-2 text-xs">
                          {question}
                        </td>
                        <td className="border font-medium border-black px-2 py-2 text-center">
                          {marks}
                        </td>
                        <td className="border font-medium border-black px-2 py-2 text-center">
                          {weight}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-[#bedbff]">
                      <td
                        className="border border-black px-2 py-2 text-center"
                        colSpan={2}
                      >
                        Total
                      </td>
                      <td className="border border-black px-2 py-2 text-center">
                        80
                      </td>
                      <td className="border border-black px-2 py-2 text-center">
                        100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Internal Assessment Section */}
              <div className=" text-xs md:text-sm">
                <div className="overflow-auto ">
                  <table className="w-full md:p-4 table-auto border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#bedbff]">
                        <th
                          className="border border-black px-3 py-2 text-left"
                          colSpan={2}
                        >
                          INTERNAL ASSESSMENT
                        </th>
                        <th className="border border-black px-3 py-2 w-24 text-right">
                          20 Marks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          component:
                            "Pen Paper Test and Multiple Assessment (5+5)",
                          marks: "10 Marks",
                        },
                        { component: "Portfolio", marks: "05 Marks" },
                        {
                          component:
                            "Lab Practical (Lab activities to be done from the prescribed books)",
                          marks: "05 Marks",
                        },
                      ].map((item, idx) => (
                        <tr key={idx} className="bg-white">
                          <td
                            className="border font-medium border-black px-3 py-2"
                            colSpan={2}
                          >
                            {item.component}
                          </td>
                          <td className="border font-medium border-black px-3 py-2 text-right">
                            {item.marks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Curriculum;

interface DateNavigatorProps {
  currentDate: string;
  onPrevious?: () => void;
  onNext?: () => void;
}
export const DateNavigatorWithArrows: React.FC<DateNavigatorProps> = ({
  currentDate,
  onPrevious,
  onNext,
}) => (
  <div className="flex items-center gap-2 text-xs border border-[#E5E7EB] text-black bg-[#F9FAFB] px-2.5 py-1.5 rounded-lg sm:text-sm sm:gap-2.5 sm:px-3 sm:py-2 sm:rounded-xl">
    <button
      onClick={onPrevious}
      className="disabled:opacity-50"
      disabled={!onPrevious}
      aria-label="Previous month"
    >
      <FiArrowLeftCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
    </button>
    <span className="">{currentDate}</span>
    <button
      onClick={onNext}
      className="disabled:opacity-50"
      disabled={!onNext}
      aria-label="Next month"
    >
      <FiArrowRightCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black cursor-pointer" />
    </button>
  </div>
);

// --- Component 6: FilterDropdown (from previous) ---
interface FilterDropdownProps {
  value: string;
  options: { value: string; label: string }[];
  className?: string;
}
export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  
  options,
  className = "",
}) => (
  <div className={`relative ${className}`}>
    <select
      className="appearance-none border border-[#E5E7EB] text-xs text-black bg-[#F9FAFB] px-3 py-1.5 rounded-lg pr-7 focus:outline-none focus:ring-1 focus:ring-[#3366FF]
                       sm:text-sm sm:px-4 sm:py-2 sm:rounded-xl sm:pr-8"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <FiChevronDown className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-black pointer-events-none" />
  </div>
);
