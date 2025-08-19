"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReferenceVideoContentPage from "@/components/teacher-b2b/reference-video-content-page"; // Assuming VideoContentPage.tsx is in the same directory or adjust path
import { FiArrowLeft, FiPlus } from "react-icons/fi"; // Ensure FiArrowLeft is imported

export default function RecordingsPage() {
  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Teacher",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header activeState="Dashboard" />

      <div className="bg-gray-100">
        <div className="bg-white">
          {" "}
          <div className="flex items-center gap-3 max-w-[96rem] mx-auto  px-4 sm:px-6 py-2  sticky top-0 z-40">
            <button
              onClick={handleBackClick}
              className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
          </div>

        </div>

        <div className="p-8 min-h-screen">
          <ReferenceVideoContentPage />{" "}
        </div>
        <button
          onClick={() => alert("Add Videos Clicked!")}
          className={` mb-16 mr-10 mt-4 ml-auto relative bottom-0 bg-[#FFCC00] text-white font-semibold px-4 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1 text-sm sm:text-md`}
          aria-label="Add new videos"
        >
          <FiPlus className="w-5 h-5 " />
          Add Videos
        </button>
      </div>

      <Footer />
    </div>
  );
}
