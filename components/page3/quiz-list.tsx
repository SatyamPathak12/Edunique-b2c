"use client";

import { useState } from "react";
import { Info, Eye, Edit, Trash } from "lucide-react";

interface Test {
  id: string;
  title: string;
  batch: string;
  date: string;
  status?: string;
  studentsEnrolled?: number;
  studentsAttended?: number;
  averageScores?: number;
}

interface TestListProps {
  tests: Test[];
  type: "scheduled" | "completed" | "saved";
}

export function QuizList({ tests, type }: TestListProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (id: string) => {
    setActivePopup(activePopup === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {tests.map((test) => (
        <div key={test.id} className="border rounded-lg p-4 bg-white">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="w-full">
              <h4 className="font-medium text-lg">{test.title}</h4>
              <p className="text-sm text-gray-600">Class 3 Math</p>
              <p className="text-sm text-gray-600 pb-3">
                {test.batch} •{" "}
                {type === "completed" ? "Completed on" : "Scheduled for"}{" "}
                <span className="text-pink-500">

                {test.date}
                </span>
              </p>

              {type === "completed" && (
                <div>
                  <div className="w-full border-b-2 border-gray-200 "></div>
                  <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
                    <div className="text-center bg-[#F8F8F8] p-2 rounded-lg">
                      <p className="text-sm text-gray-500">Enrolled</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {test.studentsEnrolled ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F8F8F8] p-2 rounded-lg">
                      <p className="text-sm text-gray-500">Attended</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {test.studentsAttended ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F8F8F8] p-2 rounded-lg">
                      <p className="text-sm text-gray-500">Avg. Score</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {test.averageScores ?? "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* {type === "scheduled" && (
                <p className="mt-4 text-sm text-yellow-700 bg-yellow-100 px-2 py-1 rounded inline-block">
                  Upcoming Test
                </p>
              )} */}

              {/* {type === "saved" && (
                <p className="mt-4 text-sm text-gray-600 italic">
                  Draft – Not yet scheduled
                </p>
              )} */}
            </div>

            {/* Right Section: Status + Popup Menu */}
            <div className="flex items-start relative">
              {test.status && (
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mr-2">
                  {test.status}
                </span>
              )}

              <button
                onClick={() => togglePopup(test.id)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Info className="h-5 w-5" />
              </button>

              {activePopup === test.id && (
                <div className="absolute right-0 mt-8 z-10 bg-white border shadow-md flex flex-col gap-1 rounded-xl w-50 text-sm p-2">
                  {type === "completed" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>View Students</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Re-use Test</span>
                      </div>
                    </>
                  )}

                  {type === "scheduled" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>View Details</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Reschedule</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Trash className="h-4 w-4 mr-2 text-red-500" />
                        <span>Cancel</span>
                      </div>
                    </>
                  )}

                  {type === "saved" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>Preview</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Edit Draft</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Trash className="h-4 w-4 mr-2 text-red-500" />
                        <span>Delete Draft</span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
