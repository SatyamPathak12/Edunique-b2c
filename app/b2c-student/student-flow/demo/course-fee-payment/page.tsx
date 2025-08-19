"use client";

import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { ReviewCard, reviews } from "../course-details/page";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

export default function AfterDemoCourseFeePayment() {
  const router = useRouter();
  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
        <section className="px-2 md:px-8 lg:px-12 xl:px-16 py-8">
          <div className="rounded-3xl max-w-7xl mx-auto bg-white space-y-4 p-4">
            <div className="md:grid md:grid-cols-[1fr_1fr] px-2 py-4 md:p-4 gap-14">
              <div className="space-y-5">
                <h1 className=" text-center text-3xl font-bold text-[#8DD9B3]">
                  What Our Learners Are Saying
                </h1>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-1 content-start pr-2"
                  
                >
                  {[...reviews, ...reviews, ...reviews, ...reviews].map(
                    (review, index) => (
                      <ReviewCard
                        key={`${review.id}-${index}`}
                        review={review}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="space-y-2 mt-4 sm:mt-0">
                <Image
                  alt="course pack image"
                  width={600}
                  height={800}
                  src="/student/courses/detail/hero.png"
                  className="block max-h-[675px] h-full mx-auto object-cover rounded-3xl"
                />
                <div className="border border-zinc-200 bg-[#F9FAFB] rounded-3xl space-y-2 px-3 py-4 text-center">
                  <h2 className="font-semibold text-lg">Enjoyed the Demo?</h2>
                  <p className="text-sm font-semibold text-[#6B7280] text-center">
                    Unlock the full course and continue your learning journey
                    with us!
                  </p>
                  <Button 

onClick={() => router.push("/b2c-student/student-flow/demo/course-details")} 
                  className="bg-[#3366ff] w-full text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full">
                    Pay Fees and Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
