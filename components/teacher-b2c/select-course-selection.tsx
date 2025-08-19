"use client";

import { useState } from "react";
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import BackButton from "../common-components/BackButton";
import TeacherB2CWrapper from "./common-components/TeacherB2CPageWrapper";
import Link from "next/link";

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


  const courses = [
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
  ];
  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading="Daily Log Manager" />
      <TeacherB2CWrapper>

        <main className="p-4 md:p-8 bg-white  rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center sm:justify-start">
            {courses.map((course, index) => (
              <Link
              href={"/b2c-teacher/teacher-flow/daily-log-student-list"}
                key={index}
                className="flex flex-col gap-3 px-3 py-3 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl "
              >
                {/* Image section */}
                <div className="h-48 rounded-xl overflow-hidden">
                  <Image
                    src={course.image}
                    width={300}
                    height={200}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text section */}
                <div className="flex flex-col gap-1 px-1 text-black">
                  <h2 className="font-semibold text-base">{course.name}</h2>
                  <p className="text-sm font-normal text-black">
                    No. of Batch:{" "}
                    <span className="text-[#6B7280] text-sm">{course.batch}</span>
                  </p>
                  <p className="text-sm font-normal">
                    No. of Students:{" "}
                    <span className="text-[#6B7280] text-sm">{course.students}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </main>

      </TeacherB2CWrapper>
        <Footer />
    </>
  );
}
