"use client";

import StudentWrapper from "@/components/student-wrapper";
import { Star } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating
              ? "fill-[#FFCC00] text-[#FFCC00]"
              : "fill-white stroke-[#FFCC00]"
            }`}
        />
      ))}
    </div>
  );
};

export default function DemoRating() {
  const router = useRouter();
  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
        <section className="px-2 md:px-8 lg:px-12 xl:px-16 py-8">
          <div className="rounded-3xl max-w-7xl mx-auto bg-white space-y-4 p-4">
            <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold text-[#FF3366]">
                  Rate Your Demo Experience
                </h1>
                {[
                  { parameter: "Clarity", rating: 4 },
                  { parameter: "Friendliness", rating: 4 },
                  { parameter: "Punctuality", rating: 4 },
                  { parameter: "Subject Knowledge", rating: 4 },
                  { parameter: "Overall Satisfaction", rating: 4 },
                  { parameter: "Engagement Level", rating: 4 },
                ].map((elem, index) => (
                  <div key={index} className="space-y-4">
                    <span className="font-medium block">{elem.parameter}</span>
                    <StarRating rating={elem.rating} />
                  </div>
                ))}
                <div className="flex flex-col gap-4 w-full mt-4">
                  <span className="font-medium block">Your Feedback</span>
                  <Textarea
                    rows={4}
                    className="border resize-none border-[#D1D5DB] bg-[#F9FAFB] rounded-3xl w-full p-2"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Button

                    onClick={() => router.push("/b2c-student/student-flow/demo/course-fee-payment")} className="bg-[#3366ff] text-white px-8 py-4 hover:bg-[#0c45f0] hover:text-white rounded-full">
                    Submit Feedback
                  </Button>
                </div>
              </div>
              <div className="space-y-2 mt-4 sm:mt-0">
                <div className="flex justify-center items-center max-h-[400px] overflow-hidden rounded-3xl">
                  <img
                    alt="course pack image"
                    src="/student/courses/detail/hero.png"
                    className="block mx-auto rounded-3xl"
                  />
                </div>
                <div className="w-full rounded-2xl bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5] flex items-center p-2 gap-4">
                  <img
                    alt="profile image"
                    src="/common-images/teacher.png"
                    className="w-20 h-20 rounded-2xl"
                  />
                  <span className="font-semibold">Name</span>
                </div>
                <div className="w-full rounded-xl bg-[#3366FF1A] placeholder:text-[#6B7280] border border-[#3366FF] flex items-center p-3 gap-4">
                  12th June 2025, 6:30 PM
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
