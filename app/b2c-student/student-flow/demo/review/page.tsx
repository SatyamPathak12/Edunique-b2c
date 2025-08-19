"use client";

import StudentWrapper from "@/components/student-wrapper";
import { ArrowLeft } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import BackButton from "@/components/common-components/BackButton";
import Footer from "@/components/layout/Footer";

export default function CourseDetail() {
  const router = useRouter();
  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
        {/* headers */}
        <BackButton Heading="Course Name" />

        <section className="px-2 md:px-8 lg:px-12 xl:px-16 py-8">
          <div className="rounded-3xl max-w-7xl mx-auto bg-white space-y-4 p-4">
            <h1 className="text-3xl font-semibold text-[#FF3366]">Review</h1>
            <div className="md:grid md:grid-cols-[1fr_1fr] gap-16">
              <div className="space-y-5">
                {[
                  "Student Name",
                  "Student Age",
                  "Student Grade",
                  "Parent Name",
                  "Parent Email ID",
                  "Parent Phone Number",
                ].map((label, index) => (
                  <div key={index} className="space-y-8">
                    <Input
                      id="hours"
                      type="text"
                      className="w-full rounded-xl bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5]"
                      placeholder={label}
                    />
                  </div>
                ))}
                <div className="w-full rounded-2xl bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5] flex items-center px-2 py-1 gap-4">
                  <img
                    alt="profile image"
                    src="/common-images/teacher.png"
                    className="w-20 h-20 rounded-2xl"
                  />
                  <span className="font-semibold">Name</span>
                </div>
                <div className="w-full rounded-xl bg-[#3366FF1A] placeholder:text-[#6B7280] border border-[#3366FF] flex items-center p-3 gap-4">
                  <strong>Slot:</strong>12th June 2025, 6:30 PM
                </div>
                <Button
                
              onClick={() => router.push("/b2c-student/student-flow/demo/booking-form")} className="bg-[#F9FAFB] border border-[#E5E7EB] px-8 py-4 rounded-full text-black hover:bg-[#F9FAFB] cursor-pointer">
                  Edit
                </Button>
              </div>
              <div className="space-y-2 mt-4 sm:mt-0">
                <div className="flex justify-center items-center overflow-hidden rounded-3xl max-h-[480px]">
                  <img
                    alt="course pack image"
                    src="/student/courses/detail/hero.png"
                    className="block mx-auto rounded-3xl"
                  />
                </div>
                <div className="border border-zinc-200 bg-[#F9FAFB] rounded-3xl text-center gap-2 p-6">
                  Pellentesque ac sapien quis ipsum
                  <br /> faucibus ullamcorper sed eu enim.
                  <br /> Mauris id ornare metus.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="bg-[#3366ff] text-white px-10 py-3.5 hover:bg-[#0c45f0] hover:text-white rounded-full cursor-pointer"
                onClick={() => router.push("/b2c-student/student-flow/demo/confirmation")}
              >
                Book
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
