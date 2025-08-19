"use client";

import { useState } from "react";
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";

import { FiArrowLeft, FiFilter } from "react-icons/fi";

import { FaSearch } from 'react-icons/fa';
import BackButton from "../common-components/BackButton";
import TeacherB2CWrapper from "./common-components/TeacherB2CPageWrapper";
import TabSwitch from "../common-components/TabSwitch";
import SearchFilterIcon from "../common-components/SearchFilterIcon";
import Link from "next/link";
import EditBatchNameModal from "@/app/b2c-teacher/ct-pop-ups/popupComponent/EditRenameBatch";


// --- Recording Card Component ---
interface Course {
  id: string;
  imageSrc: string;
  // e.g., "PERSONALITY DEVELOPMENT"
  courseName: string;
  noofbatch: string;
  noofBtudents: string; // e.g., "Class"
  // e.g., "00 hrs : 00 mins"
}

export default function CourseCardPage() {
  // Dummy user for Header
  const [editOpen, setEditOpen] = useState(false)
  const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];
  const [activeBatch, setActiveBatch] = useState(batches[0]);
  const dates = [
    '16 / 6 / 25', '17 / 6 / 25', '18 / 6 / 25', '19 / 6 / 25', '20 / 6 / 25',
    '21 / 6 / 25', '22 / 6 / 25', '23 / 6 / 25', '24 / 6 / 25'
  ];

  const filter = [
    { id: "f1", label: "Filter 1" },
    { id: "f2", label: "Filter 2" },
    { id: "f3", label: "Filter 3" },
  ]

  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading="Batch Daily Log" />

      <TeacherB2CWrapper>


        <main className="p-2  w-full sm:p-4 flex flex-col  bg-white  rounded-2xl">

          <TabSwitch tabs={batches} selected={activeBatch} onChange={setActiveBatch} />

          <div className="flex flex-col md:flex-row sm:gap-2 gap-4 md:px-4 items-center">
            <SearchFilterIcon filters={filter} />
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setEditOpen(true)}
                className="px-2 py-2.5 border bg-[#f9fafb] text-sm rounded-full  whitespace-nowrap">Edit Batch Name</button>
              <Link href={"/b2c-teacher/teacher-flow/add-progress-form"} className="px-2 py-2.5 border bg-[#3366ff] text-sm rounded-full text-white  whitespace-nowrap">Add Daily Progress</Link>
            </div>
          </div>

          {/* Date Rows */}
          <div className="flex flex-col gap-4 mt-4 md:px-4 pb-6">
            {dates.map((date, idx) => (
              <Link href={"/b2c-teacher/teacher-flow/add-progress-form-edit"}
                key={idx}
                className="bg-[#F9FAFB] w-full rounded-full px-4 py-2 text-black text-base border border-[#D0D0D0] font-medium "
              >
                {date}
              </Link>
            ))}
          </div>


        </main>
      </TeacherB2CWrapper>

      <Footer />
      <EditBatchNameModal isOpen={editOpen} onClose={() => setEditOpen(false)} />
    </>
  );
}
