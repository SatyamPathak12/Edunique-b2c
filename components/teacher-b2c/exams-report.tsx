import SubmissionPopup from "@/app/b2c-teacher/teacher-flow/pop-ups/submission-popup/page";
import React, { useState } from "react";

// Main App component
export default function ExamReport() {
  const [showSubmissionPopup, setShowSubmissionPopup] = useState<boolean>(false)
  // Sample data for exam results
  const examResults = [
    {
      subject: "English",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Hindi",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Maths",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Evs",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
  ];

  // Data for marks to grade mapping
  const gradeMapping = [
    { marks: "35 - 40", grade: "A+" },
    { marks: "30 - 35", grade: "A" },
    { marks: "25 - 30", grade: "B+" },
    { marks: "20 - 25", grade: "B" },
    { marks: "15 - 20", grade: "D" },
  ];

  return (
    // Main container with responsive padding and background
    <div className="">
      <div className="flex-grow container mx-auto p-4 space-y-6 bg-white rounded-2xl ">

        {/* Exams Header */}
        <div className="py-3 px-4 bg-[#B0B0B014] rounded-2xl mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#3366FF]">Exams</h1>
        </div>

        <ExamResultsTable />

        {/* Marks and Grade*/}
        <div className="overflow-x-auto my-8">
          <div className="min-w-full ">
            {/* Table Header */}
            <div>
              <div className=" flex gap-4">
                <div className="px-4 py-3 sm:px-6  w-1/2 text-center text-md font-medium bg-[#8dd9b3]  uppercase tracking-wider rounded-2xl">
                  Marks
                </div>
                <div className="px-4 py-3 sm:px-6 w-1/2 text-center text-md font-medium bg-[#8dd9b3] uppercase tracking-wider rounded-2xl">
                  Grade
                </div>
              </div>
            </div>
            {/* Table Body */}
            <div>
              {gradeMapping.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4  rounded-xl p-3"
                >
                  <div className="w-1/2  px-4 py-3 text-center rounded-2xl bg-[#faf9fb] font-bold text-black">
                    {item.marks}
                  </div>
                  <div className="w-1/2  px-4 py-3 text-center rounded-2xl bg-[#faf9fb] font-bold text-black">
                    {item.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publish Report Button */}
        <div className="flex justify-center mt-8">
          <button onClick={() => setShowSubmissionPopup(true)} className="bg-[#3366ff] hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Publish Report
          </button>
        </div>
      </div>
      <SubmissionPopup show={showSubmissionPopup} onClose={() => setShowSubmissionPopup(false)} />
    </div>
  );
}



// --- Data Interfaces & Sample Data ---
interface ExamDetail {
  name: string;
  totalMarks: string;
  marksObtain: string;
  grade: string;
}

interface SubjectResult {
  subject: string;
  exams: ExamDetail[];
  overallGrade: string;
}

const examResults: SubjectResult[] = [
  {
    subject: 'English',
    exams: [
      { name: 'Exam 1', totalMarks: 'Exam 1 marks', marksObtain: 'Exam 1 marks', grade: 'Grade 1' },
      { name: 'Exam 2', totalMarks: 'Exam 2 marks', marksObtain: 'Exam 2 marks', grade: 'Grade 2' },
    ],
    overallGrade: 'Overall Grade',
  },
  {
    subject: 'Hindi',
    exams: [
      { name: 'Exam 1', totalMarks: 'Exam 1 marks', marksObtain: 'Exam 1 marks', grade: 'Grade 1' },
      { name: 'Exam 2', totalMarks: 'Exam 2 marks', marksObtain: 'Exam 2 marks', grade: 'Grade 2' },
    ],
    overallGrade: 'Overall Grade',
  },
  {
    subject: 'Maths',
    exams: [
      { name: 'Exam 1', totalMarks: 'Exam 1 marks', marksObtain: 'Exam 1 marks', grade: 'Grade 1' },
      { name: 'Exam 2', totalMarks: 'Exam 2 marks', marksObtain: 'Exam 2 marks', grade: 'Grade 2' },
    ],
    overallGrade: 'Overall Grade',
  },
  {
    subject: 'EVS',
    exams: [
      { name: 'Exam 1', totalMarks: 'Exam 1 marks', marksObtain: 'Exam 1 marks', grade: 'Grade 1' },
      { name: 'Exam 2', totalMarks: 'Exam 2 marks', marksObtain: 'Exam 2 marks', grade: 'Grade 2' },
    ],
    overallGrade: 'Overall Grade',
  },
];

const headers = ['Subject', 'Exams', 'Total Marks', 'Marks Obtain', 'Grade', 'Overall Grade'];


// --- Main Component ---
function ExamResultsTable() {
  return (
    <div className="overflow-x-auto custom-scrollbar-thin">
      <div className="grid grid-cols-6 gap-3 min-w-[900px] text-[#6B7280]">

        {/* Header Row */}
        {headers.map(header => (
          <div key={header} className="bg-[#FFC79A] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
            {header}
          </div>
        ))}

        {/* Data Rows */}
        {examResults.map((subjectData) => (
          <React.Fragment key={subjectData.subject}>
            {/* Subject Cell - Spans 2 rows vertically */}
            <div className=" bg-[#F9FAFB] flex items-center justify-center p-4 rounded-2xl font-bold text-lg text-black">
              {subjectData.subject}
            </div>

            {/* Exams Cell */}
            <div className="bg-[#F9FAFB] flex flex-col items-start justify-center p-4 rounded-2xl space-y-2 text-black">
              {subjectData.exams.map(exam => <p key={exam.name} className="font-medium">{exam.name}</p>)}
            </div>

            {/* Total Marks Cell */}
            <div className="bg-[#F9FAFB] flex flex-col items-center justify-center p-4 rounded-2xl space-y-2">
              {subjectData.exams.map(exam => (
                <div key={exam.name} className="border border-[#D5D5D5] w-full text-center py-2 px-4 rounded-full text-sm">
                  {exam.totalMarks}
                </div>
              ))}
            </div>

            {/* Marks Obtain Cell */}
            <div className="bg-[#F9FAFB] flex flex-col items-center justify-center p-4 rounded-2xl space-y-2">
              {subjectData.exams.map(exam => (
                <div key={exam.name} className="border border-[#D5D5D5] w-full text-center py-2 px-4 rounded-full text-sm">
                  {exam.marksObtain}
                </div>
              ))}
            </div>

            {/* Grade Cell */}
            <div className="bg-[#F9FAFB] flex flex-col items-center justify-center p-4 rounded-2xl space-y-2">
              {subjectData.exams.map(exam => (
                <div key={exam.name} className="border border-[#D5D5D5] w-full text-center py-2 px-4 rounded-full text-sm">
                  {exam.grade}
                </div>
              ))}
            </div>

            {/* Overall Grade Cell - Spans 2 rows vertically */}
            <div className=" bg-[#F9FAFB] flex items-center justify-center p-4 rounded-2xl">
              <div className="border border-[#D5D5D5] w-full text-center py-2 px-4 rounded-full text-sm">
                {subjectData.overallGrade}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}