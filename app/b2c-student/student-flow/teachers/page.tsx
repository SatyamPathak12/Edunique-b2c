"use client"

import Footer from "@/components/footer";
import StudentWrapper from "@/components/student-wrapper";
import TeachersList from "@/components/student/home/teachers-component";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Teachers() {
  return (
    <StudentWrapper>
      <section className="relative w-full min-h-[400px] bg-[#f9326f] overflow-hidden text-white px-6 md:px-30 flex flex-col md:flex-row items-center justify-between">
        {/* Background pattern overlay (if needed) */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/bg-pattern.png')] bg-cover bg-no-repeat" />

        {/* Left content */}
        <div className="relative z-10 flex flex-col gap-12 md:w-1/2 text-center md:text-left">
        <div className="flex flex-col">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">JOIN THE TEAM</h2>
          <p className="text-lg mb-2">
            The place where you take no risk & make business out of your
            passion!
          </p>

          {/* Underline bar */}
          <div className="w-20 h-1 bg-white mx-auto md:mx-0 mt-2 mb-6" />
        </div>

          {/* CTA Button */}
          <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
            Join Now
          </Button>
        </div>

        {/* Right image section */}
        <div className="relative h-[400px] w-full flex justify-end items-end z-10 md:w-[480px]">
          {/* White semi-arch background */}
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-white rounded-t-full z-0" />

          {/* Main teacher image aligned to bottom of the arch */}
          <Image
            src="/student/teachers/people.png"
            alt="Group of students and teacher"
            width={400}
            height={400}
            className="absolute bottom-0 right-0 z-10 object-contain"
          />
        </div>

      </section>
      
      <TeachersList className="pb-20" masked/>

      <Footer />
    </StudentWrapper>
  );
}
