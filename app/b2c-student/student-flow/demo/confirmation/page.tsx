"use client";

import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";

export default function DemoBookingConfirmation() {
  const router = useRouter();
  return (
    <StudentWrapper>
      <div className="relative z-10 py-4 px-2 sm:p-4 lg:px-10 lg:py-6 bg-[#EEEEEE]">
        <div className="w-full rounded-3xl px-2 flex flex-col justify-center items-center bg-white  py-6 md:py-12 gap-5">
          <FaCircleCheck className="w-44 h-44 fill-[#8DD9B3]" />
          <h1 className="text-2xl md:text-3xl tracking-wide lg:text-4xl font-semibold text-center">
            Demo Booked Successfully 🎉
          </h1>
          <p className="text-[#6B7280] text-sm max-w-3xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum leo quis sodales sagittis. Donec mattis mauris vel
            molestie aliquam. Mauris porttitor dolor sit amet massa egestas
            commodo non eget turpis. Nunc venenatis elementum lacus, sed
            bibendum orci blandit vitae
          </p>
          <Button
            className="bg-[#FF3366] text-white px-4 py-6 hover:bg-[#ff1a53] cursor-pointer rounded-full"
            onClick={() => router.push("/b2c-student/student-flow/demo/course-details")}
          >
            Explore More Courses
          </Button>
        </div>
      </div>
      <Footer />
    </StudentWrapper>
  );
}
