"use client"
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import SearchFilterIcon from "@/components/common-components/SearchFilterIcon";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

export default function Component() {
  const filter = [{ id: 'f1', label: 'Filter 1' }, { id: 'f2', label: 'Filter 2' }, { id: 'f3', label: 'Filter 3' }];
const router = useRouter();

  return (
    <StudentWrapper student activeState="Material">
      
      <section className="bg-[#EEEEEE] p-4 md:p-6 lg:p-10">
        <div className="w-full max-w-7xl min-h-screen mx-auto space-y-6 p-4 bg-white rounded-3xl">
          
          <SearchFilterIcon filters={filter} />

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Knowledge Box Card */}
            <div onClick={() => router.push("/b2c-student/student-flow/material-knowledge-box")}  className="bg-[#F9FAFB] rounded-3xl cursor-pointer border border-[#E5E7EB] overflow-hidden p-2">
              <div className="h-48 bg-gradient-to-br from-purple-200 via-purple-300 to-blue-200 flex items-center justify-center rounded-3xl">
                <div className="text-black text-6xl font-bold">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-16 h-8 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">My Knowledge Box</h3>
              </div>
            </div>

            {/* Course Cards */}
            {new Array(2).fill(0).map((_, index) => (
              <div
              onClick={() => router.push("/b2c-student/student-flow/material-page-course")} 
                key={index}
                className="bg-[#F9FAFB] rounded-3xl cursor-pointer border border-[#E5E7EB] overflow-hidden p-2"
              >
                <div className="relative h-48 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl overflow-hidden">
                  <img
                    src="/student/home/pers-dev.png"
                    alt="course image"
                    className="object-fit"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-bold">Course Name</h3>
                  <p className="font">
                    Domain:
                    <span className="text-[#6B7280]">&nbsp;Self Dev.</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </StudentWrapper>
  );
}
