"use client";

import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import ReferenceVideoContentPage from "./VideoContent"
import { FiArrowLeft, FiPlus } from "react-icons/fi"; // Ensure FiArrowLeft is imported
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import { useState } from "react";
import AddVideoModal from "@/app/b2c-teacher/ct-pop-ups/popupComponent/AddVideo";

export default function RecordingsPage() {

    const [addVideoPopup, setAddVideoPopup] = useState(false);

    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };

    return (
        <>
            <Header activeState="Dashboard" />
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
            <TeacherB2CWrapper>

                <ReferenceVideoContentPage />{" "}

                <button
                    onClick={() => setAddVideoPopup(true)}
                    className={` mb-16 mr-10 mt-4 ml-auto relative bottom-0 bg-[#FFCC00] text-white font-semibold px-4 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1 text-sm sm:text-md`}
                    aria-label="Add new videos"
                >
                    <FiPlus className="w-5 h-5 " />
                    Add Videos
                </button>

            </TeacherB2CWrapper>



            <Footer />
            <AddVideoModal isOpen={addVideoPopup} onClose={() => setAddVideoPopup(false)} />
        </>
    );
}
