// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CancelLectureModal from "./components-popups/CancelLecture";
import RescheduleRequestModal from "./components-popups/WarningPopup";
import CourseRenewedModal from "./components-popups/ConfirmationPopup";
import Timetable from "./Reschedule/RescheduleClass";
import RescheduleClass from "./Reschedule/RescheduleClass";
import SelectLectureToReschedule from "./Reschedule/SelectLectureToReschedule";
import SelectLectureToCancel from "./Reschedule/SelectLectureToCancel";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth: string;
}
export interface PopupPropB2CStudent {  // this can be import as a prop
    isOpen: boolean;
    onClose: () => void;
}

// this can be import as a prop
export const StudentB2CBaseModal: React.FC<BaseModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth,
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-[#0000004a] h-full overflow-y-auto"
                >
                    <div className="flex flex-col min-h-screen justify-center items-center p-4">
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`bg-white rounded-3xl w-full ${maxWidth} overflow-hidden h-fit my-auto`}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>

    );
};

// --- Main Page Component to trigger modals ---
export default function AllTeacherB2CPopups() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "cancelLecture", label: "Cancel Warning Popup" },
        { id: "warningPopup", label: "Warning Popup" },
        { id: "confirmationPopup", label: "Confirmation Popup" },
        { id: "rescheduleClass", label: "Reschedule Class" },
        { id: "selectLecture", label: "Select Lecture to Reschedule" },
        { id: "selectLectureToCancel", label: "Select Lecture to Cancel" },
        
        // here you can add pop id and it's label to show it on the page 
    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                C&T Student B2C Popups
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {modalButtons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setOpenModal(btn.id)}
                        className="bg-white text-[#6B7280] font-semibold py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Edit Demo Video pop  */}
            <CancelLectureModal
                isOpen={openModal === "cancelLecture"}
                onClose={() => setOpenModal(null)}
            />
            <RescheduleRequestModal
                isOpen={openModal === "warningPopup"}
                onClose={() => setOpenModal(null)}
            />
            <CourseRenewedModal
                isOpen={openModal === "confirmationPopup"}
                onClose={() => setOpenModal(null)}
            />
            <RescheduleClass
                isOpen={openModal === "rescheduleClass"}
                onClose={() => setOpenModal(null)}
            />
            <SelectLectureToReschedule
                isOpen={openModal === "selectLecture"}
                onClose={() => setOpenModal(null)}
            />
            <SelectLectureToCancel
                isOpen={openModal === "selectLectureToCancel"}
                onClose={() => setOpenModal(null)}
            />
            
        </div>
    );
}