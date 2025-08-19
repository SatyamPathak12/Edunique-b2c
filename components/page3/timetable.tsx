"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

export function Timetable() {
  // Current selected day (Tuesday/16 in the image)
  const [selectedDay] = useState(2); // 0-based index, 2 = Tuesday

  // Days of the week and their numbers
  const weekDays = [
    { day: "Sun", number: 14 },
    { day: "Mon", number: 15 },
    { day: "Tue", number: 16 },
    { day: "Wed", number: 17 },
    { day: "Thu", number: 18 },
    { day: "Fri", number: 19 },
    { day: "Sat", number: 20 },
  ];

  // Time slots from 09:00 to 18:00
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",

  ];

  // Classes for the selected day (Tuesday)
  const classes = [
    {
      id: 1,
      title: "Basics of C#",
      classNumber: "2",
      startTime: "09:00",
      endTime: "10:20",
      timeSlot: 0, // corresponds to 09:00
    },
    {
      id: 2,
      title: "Basics of C#",
      classNumber: "2",
      startTime: "09:00",
      endTime: "10:20",
      timeSlot: 1, // corresponds to 10:00
    },
    {
      id: 3,
      title: "Basics of C#",
      classNumber: "2",
      startTime: "09:00",
      endTime: "10:20",
      timeSlot: 2, // corresponds to 11:00
    },
  ];

  return (
    <div className="p-6">
      {/* Header outside the main container */}
      <div className="flex items-center mb-4">
        <div className="text-pink-500 mr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 3v18" />
            <path d="M16 3v18" />
            <path d="M3 8h18" />
            <path d="M3 16h18" />
          </svg>
        </div>
        <h2 className="text-xl font-medium">My Timetable</h2>
      </div>

      {/* Main timetable container */}
      <div className="bg-white rounded-lg shadow-sm  p-6">
        {/* Days header */}
        <div className="flex mb-4">
          <div className="w-20 text-gray-400 font-medium">Week</div>
          <div className="flex-1 flex">
            {weekDays.map((weekDay, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-gray-400">{weekDay.number}</div>
                <div
                  className={`${
                    index === selectedDay
                      ? "text-blue-500 font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {weekDay.day}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time slots and events */}
        <div>
        {timeSlots.map((time, index) => {
  const classForThisSlot = classes.find((c) => c.timeSlot === index);

  return (
    <div key={index} className="relative h-20"> {/* Set fixed height per row */}
      <div className="flex h-full">
        {/* Time column */}
        <div className="w-20 text-gray-400">{time}</div>

        {/* Content area */}
        <div className="flex-1 relative h-full">
          {classForThisSlot && (
            <div
              className="absolute h-full"
              style={{
                left: `${(selectedDay / weekDays.length) * 100}%`,
                width: "220px",
              }}
            >
              <div className="flex h-full">
                {/* Blue left border */}
                <div className="w-1 bg-blue-500 absolute h-full left-0 rounded-l"></div>

                {/* Event content */}
                <div className="bg-blue-50 rounded-r p-2 pl-4 w-full flex justify-between h-full items-center">
                  <div className="text-blue-600 font-medium">
                    {classForThisSlot.title}
                    <div className="text-blue-500 text-sm">
                      Class {classForThisSlot.classNumber}
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-gray-500 text-xs">
                    <Clock className="h-3 w-3 mb-1" />
                    <span>
                      {classForThisSlot.startTime} - {classForThisSlot.endTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal line */}
      <div className="absolute w-full h-px bg-gray-200 bottom-0 left-0"></div>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
}
