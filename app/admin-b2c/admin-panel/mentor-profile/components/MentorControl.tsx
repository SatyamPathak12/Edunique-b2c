"use client";
import { LuBook, LuFileText, LuMonitor } from "react-icons/lu";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
import { useState } from "react";
import AssignCourses from "../../pop-ups/assign-courses/page";
import RequestDiagnostic from "../../pop-ups/schedule-diagnostic-test/page";
import RequestAssessmentModal from "../../pop-ups/schedule-demo/page";
import AssignCourseTeacher from "../../pop-ups/assign-courses-teachers/page";

const MentorControl = () => {

  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);
  const [buttonFour, setButtonFour] = useState(false);
  const actions = [
    {
      label: 'Assign Course',
      icon: <LuFileText className="text-[#6b7280] w-5 h-5" />,
      handler: () => setButtonOne(true)
    },
    {
      label: 'Request Demo',
      icon: <LuMonitor className="text-[#6b7280] w-5 h-6" />,
      handler: () => setButtonTwo(true)
    },
    {
      label: 'Request Assessment',
      icon: <PiSquaresFour className="text-[#6b7280] w-5 h-6" />,
      handler: () => setButtonThree(true)
    },
    {
      label: 'Request Diagnostic Test',
      icon: <LuBook className="text-[#6b7280] w-5 h-6" />,
      handler: () => setButtonFour(true)
    },
  ];
  return (
    <>
      <div className="bg-[#faf9fb]  max-w-[90rem] mx-4  sm:mx-auto mt-4 p-4 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Mentor Control Panel</h2>
        <div className="flex flex-wrap gap-4">
          {actions.map((action, index) => (

            <button
              type="button"
              key={index}
              onClick={() => {
                if (action.handler) action.handler();
              }}
              className="flex items-center gap-2 cursor-pointer border border-[#e5e7eb] px-4 py-3.5 rounded-xl text-sm bg-[#faf9fb] hover:bg-[#f0f0f0] transition"
            >
              {action.icon}
              {action.label}
            </button>

          ))}
        </div>
      </div>

      <AssignCourses onClose={() => setButtonOne} isOpen={buttonOne}/>

      <AssignCourseTeacher onClose={() => setButtonTwo} isOpen={buttonTwo}/>
         <RequestAssessmentModal onClose={() => setButtonThree} isOpen={buttonThree}/>
           <RequestDiagnostic onClose={() => setButtonFour} isOpen={buttonFour}/>
    </>
  );
};

export default MentorControl;
