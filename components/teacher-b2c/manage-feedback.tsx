"use client";

import { useState } from "react";
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import BackButton from "../common-components/BackButton";
import TeacherB2CWrapper from "./common-components/TeacherB2CPageWrapper";

// --- Recording Card Component ---
interface Course {
  id: string;
  imageSrc: string;
  // e.g., "PERSONALITY DEVELOPMENT"
  courseName: string;
  domain: string;
  grade: string; // e.g., "Class"
  // e.g., "00 hrs : 00 mins"
}

export default function ManageCardPage() {


  const courses = [
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
      grade: "Grade 4"
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
      grade: "Grade 4"
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
      grade: "Grade 4"
    },


  ];
  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading="Manage Reviews" />
      <TeacherB2CWrapper>


        <main className="p-4  bg-white rounded-2xl min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {courses.map((course, index) => (
              <Link href={"/b2c-teacher/teacher-flow/manage-feedback-course-name"}
                key={index}
                className="flex w-full flex-col gap-2 p-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl "
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={course.image}
                    width={260}
                    height={200}
                    alt={course.name}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 text-black">
                  <h2 className="font-semibold text-lg">{course.name}</h2>
                  <p className="text-sm font-normal text-black-300">
                    Domain:{" "}
                    <span className="text-[#6B7280] tracking-wide font-normal">{course.domain}</span>
                  </p>
                  <p className="text-sm font-normal text-black-300">
                    Level/Grade: <span className="font-normal tracking-wide text-[#6B7280]">{course.grade}</span>
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
