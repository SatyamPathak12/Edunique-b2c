"use client";

import FooterNew from "@/components/footer3";
import Footer from "@/components/layout/Footer";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ScheduleSlot {
  time: string;
  courses: {
    [key: string]: string; // day -> course code
  };
}

interface Course {
  code: string;
  name: string;
}

const scheduleData: ScheduleSlot[] = [
  {
    time: "9:00",
    courses: {
      Mon: "Olyp M G2",
    },
  },
  {
    time: "10:00",
    courses: {},
  },
  {
    time: "11:00",
    courses: {
      Tue: "Olyp M G3",
    },
  },
  {
    time: "12:00",
    courses: {},
  },
  {
    time: "13:00",
    courses: {},
  },
  {
    time: "14:00",
    courses: {
      Wed: "Olyp M G6",
      Fri: "Math F",
    },
  },
  {
    time: "15:00",
    courses: {},
  },
  {
    time: "16:00",
    courses: {
      Thu: "Math F",
    },
  },
  {
    time: "17:00",
    courses: {},
  },
  {
    time: "18:00",
    courses: {},
  },
];

const courses: Course[] = [
  { code: "Olyp M G1", name: "Course Name" },
  { code: "Olyp M G2", name: "Course Name" },
  { code: "Olyp M G3", name: "Course Name" },
  { code: "Olyp M G5", name: "Course Name" },
  { code: "Olyp M G6", name: "Course Name" },
  { code: "Math F", name: "Course Name" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function LearningSchedule() {
  const [selectedSlots, setSelectedSlots] = useState<{
    [key: string]: boolean;
  }>({});
  const router = useRouter();

  const handleContinue = () => {
    router.push("/b2c-student/student-flow/course-policy");
  };
  useEffect(() => {
    const initialSelected: { [key: string]: boolean } = {};
    scheduleData.forEach((slot) => {
      days.forEach((day) => {
        if (slot.courses[day]) {
          const key = `${day}_${slot.time}`;
          initialSelected[key] = true;
        }
      });
    });
    setSelectedSlots(initialSelected);
  }, []);
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 px-4 py-6 md:p-10">
        <div className="min-h-fit w-full max-w-[86rem] mx-auto bg-white py-8 px-4 sm:px-6 lg:px-30 rounded-3xl">
          <div className="">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFCC00] mb-4">
                Your Learning Schedule
              </h1>
              <p className="text-xl sm:text-2xl  md:text-3xl font-medium text-[#6B7280] max-w-5xl mx-auto">
                Here&#39;s your confirmed schedule based on your selections.
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col  gap-3 md:flex-row justify-center">
              <div className="grid grid-cols-1 xl:grid-cols-14 ">
                {/* Schedule Grid */}
                <div className="xl:col-span-13">
                  <div className="bg-white overflow-hidden">
                    {/* Days Header */}
                    <div className="grid grid-cols-6 border-b  border-[#B0B0B0]">
                      <div className="p-4"></div>{" "}
                      {/* Empty cell for time column */}
                      {days.map((day) => (
                        <div
                          key={day}
                          className="p-4 text-center text-sm font-medium text-[#6B7280]"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Schedule Rows */}
                    {scheduleData.map((slot, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-6 border-b border-[#B0B0B0] last:border-b-0"
                      >
                        {/* Time Column */}
                        <div className="p-4 text-center font-medium text-[#6B7280]">
                          {slot.time}
                        </div>

                        {/* Day Columns */}
                        {days.map((day) => (
                          <div key={day} className="p-2">
                            <div
                              onClick={() => {
                                const key = `${day}_${slot.time}`; // e.g., "Mon_09:00"
                                setSelectedSlots((prev) => ({
                                  ...prev,
                                  [key]: !prev[key],
                                }));
                              }}
                              className={`h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer
      ${selectedSlots[`${day}_${slot.time}`]
                                  ? "bg-[#3366FF] text-white  px-2 m hover:bg-blue-600"
                                  : "border bg-[#B0B0B01A] border-[#6B7280] hover:border-gray-300"
                                }`}
                            >
                              {selectedSlots[`${day}_${slot.time}`] && (
                                <span className="flex items-center gap-1 text-center">
                                  {slot.courses[day] && (
                                    <span>{slot.courses[day]}</span>
                                  )}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Legend */}

              </div>
              <div className="items-center md:my-8 lg:my-40">


                {/* Header */} <div className="">
                  <div className="bg-[#3366FF] text-white px-4 rounded-t-xl py-2 ">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-medium text-left">Code Name</div>
                      <div className="font-medium text-right">Course</div>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="bg-[#3366FF1A] rounded-b-xl">
                    {courses.map((course, index) => (
                      <div key={index} className="px-4 py-2">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="font-medium text-gray-900">
                            {course.code}
                          </div>
                          <div className="text-gray-600 text-right">
                            {course.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> </div>

                {/* Continue Button */}
                <div className="pt-3">
                  <Link href={"/b2c-student/student-flow/course-policy"}>
                    <Button
                      onClick={handleContinue}
                      className="w-full bg-[#FF3366] hover:bg-[#FF3366] text-white py-3 rounded-full cursor-pointer font-medium transition-colors duration-200"
                    >
                      Continue
                    </Button></Link>
                </div>


              </div></div>
          </div>
        </div>
      </div>

      <div className="z-10 absolute">
        <Footer />
      </div>
    </StudentWrapper>
  );
}
