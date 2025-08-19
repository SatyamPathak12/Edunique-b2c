import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/common-components/BackButton";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function CourseSelection() {
  return (
    <StudentWrapper student>
      {/* headers */}
     <BackButton Heading="Advance Plan" />
      <section className="bg-[#EEEEEE] px-2 py-6 lg:p-10">
        <div className="w-full max-w-7xl mx-auto space-y-6 p-4 lg:p-6 bg-white rounded-3xl">
          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Cards */}
            {new Array(4).fill(0).map((_, index) => (
              <Link
              href={"/b2c-student/student-flow/advance-plan"}
                key={index}
                className="bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] overflow-hidden p-2"
              >
                <div className="relative h-48 rounded-[12px] overflow-hidden">
                  <img
                    src="/student/home/pers-dev.png"
                    alt="course image"
                    className="object-cover"
                  />
                </div>
                <div className="p-2 pb-0">
                  <h3 className="text-xl font-bold">Course Name</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </StudentWrapper>
  );
}
