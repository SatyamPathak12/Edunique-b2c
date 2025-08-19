"use client";


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AttitudeGrid from '@/components/teacher-b2c/progress-report/components'
import { FiArrowLeft } from "react-icons/fi";




export default function ProgressPage() {
    
  
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };

  
  return (
    <>
      <Header user={headerUser} />
      <div className="bg-[#eeeeee]  min-h-screen flex flex-col">
        <div className=" px-22  bg-white py-4 flex justify-between">
          <div className="flex items-center gap-2 ">
            <button
              className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            {/* You can make this title dynamic based on context */}
            <h1 className="text-lg sm:text-2xl font-bold text-[#FF3366]">
               Student Progress Report
            </h1>
          </div>
        </div>
<main>
  <AttitudeGrid/>
</main>
        

        <Footer />
      </div>
    </>
  );
}
