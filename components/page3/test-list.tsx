"use client";

import { useState } from "react";
import { Info, Eye, Edit, Trash } from "lucide-react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";


// --- 6. Actions Popup (Not a modal, but a popover) ---
const ActionsPopupScheduled: React.FC = () => (
  <div className="bg-white p-2 rounded-2xl space-y-1">
    {[
      { label: "View", icon: FiEye },
      { label: "Edit", icon: FiEdit },
      { label: "Delete", icon: FiTrash2 },
    ].map(({ label, icon: Icon }) => (
      <button
        key={label}
        className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-xl text-[#3366FF] bg-blue-50 hover:bg-blue-100"
      >
        <Icon className="w-5 h-5" />
        <span className="font-semibold">{label}</span>
      </button>
    ))}
  </div>
);

const ActionsPopupSaved: React.FC = () => (
  <div className="bg-white p-2 rounded-2xl space-y-1">
    {[
      { label: "Edit", icon: FiEdit },
      { label: "Delete", icon: FiTrash2 },
    ].map(({ label, icon: Icon }) => (
      <button
        key={label}
        className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-xl text-[#3366FF] bg-blue-50 hover:bg-blue-100"
      >
        <Icon className="w-5 h-5" />
        <span className="font-semibold">{label}</span>
      </button>
    ))}
  </div>
);


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

export function TestList({ tests, type }: TestListProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (id: string) => {
    setActivePopup(activePopup === id ? null : id);
  };

  return (
    <div className="space-y-2">
      {tests.map((test) => (
        <div key={test.id} className="border rounded-2xl p-4  bg-[#F9FAFB]">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="w-full ">
              <h4 className="font-medium text-md sm:text-lg">{test.title}</h4>
              <p className="text-sm text-[#6B7280] pb-3 flex sm:flex-row flex-col gap-2">
                <span>{test.batch}</span>
                <span>{test.date}</span>
              </p>

              {type === "completed" && (
                <div>
                  <div className="grid grid-cols-3 gap-2 max-w-lg">
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Students Enrolled</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.studentsEnrolled ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Students Attended</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.studentsAttended ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Average Score</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.averageScores ?? "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section: Status + Popup Menu */}
            <div className="flex flex-col items-end gap-2 self-center relative">

              {type !== "completed" && (
                <Info className="h-4 w-4 cursor-pointer" onClick={()=>togglePopup(test.id)}/>
              )}

              
              {test.status && (
                <span className="px-3 py-1 text-sm bg-[#8DD9B31A] text-[#8DD9B3] rounded-2xl mr-2">
                  {test.status}
                </span>
              )}

              {activePopup === test.id && (
                <div className="absolute right-0 mt-8 z-10 ">
                  {type === "scheduled" && (
                    <ActionsPopupScheduled />
                  )}

                  {type === "completed" && (
                    <ActionsPopupScheduled />
                  )}

                  {type === "saved" && (
                    <ActionsPopupSaved />

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
