// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FileShare from "./popupComponent/FileShare";
import UploadFilePopup from "./popupComponent/UploadFile";
import AILoadingPopup from "./popupComponent/AILoading";
import ChatPopup from "./popupComponent/ChatPopup";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth: string;
}
export interface PopupPropB2CTeacher {  // this can be import as a prop
    isOpen: boolean;
    onClose: () => void;
}

// this can be import as a prop
export const TeacherB2CBaseModal: React.FC<BaseModalProps> = ({
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
                    className="fixed inset-0 z-50 bg-[#0000004a] overflow-y-auto"
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
    const [isAiLoading, setIsAiLoading] = useState(false);
    const handleOpenAiLoading = () => {
        setIsAiLoading(true);
        setTimeout(() => {
            setIsAiLoading(false);
        }, 3000);
    };

    const modalButtons = [
        { id: "fileShare", label: "File Sharing", action: () => setOpenModal("fileShare") },
        { id: "uploadFile", label: "Upload File Popup", action: () => setOpenModal("uploadFile") },
        { id: "aiLoading", label: "AI is Loading...", action: handleOpenAiLoading },
        { id: "chatPopup", label: "Chat Popup", action: () => setOpenModal("chatPopup") },
    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                Teacher B2C Popups
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {modalButtons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={btn.action}
                        className="bg-white text-[#6B7280] font-semibold py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <FileShare
                isOpen={openModal === "fileShare"}
                onClose={() => setOpenModal(null)}
            />
            <UploadFilePopup
                isOpen={openModal === "uploadFile"}
                onClose={() => setOpenModal(null)}
            />
            <AILoadingPopup
                isOpen={isAiLoading}
            />
            <ChatPopup
                isOpen={openModal === "chatPopup"}
                onClose={() => setOpenModal(null)}
            />

        </div>
    );
}
