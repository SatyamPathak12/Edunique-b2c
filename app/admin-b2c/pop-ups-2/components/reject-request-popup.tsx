"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// --- Main Reject Request Popup Component ---
const RejectRequestPopup: React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({ isOpen, onClose }) => {
    const [reason, setReason] = useState('');

    return (
        // The dark background for the entire page
        <NewBaseModal isOpen={isOpen} onClose={onClose}>
            
            {/* The main popup card */}
            <div className="bg-white w-full max-w-lg mx-auto rounded-3xl shadow-2xl p-6">
                
                {/* Title */}
                <h1 className="text-2xl font-semibold text-black text-center mb-4">
                    Reject Request
                </h1>
                
                {/* Reason Form */}
                <div className="space-y-2 mb-4 ">
                    <label htmlFor="rejectionReason" className="block text-base text-black">
                        Please provide a reason for rejection:
                    </label>
                    <textarea
                        id="rejectionReason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows={4}
                        className="w-full p-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-2xl text-sm placeholder-gray-400
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {/* Cancel Button */}
                    <button 
                        onClick={onClose}
                        className="w-full sm:w-auto px-8 py-3 text-gray-700 font-semibold bg-[#6B72801A] rounded-full 
                                   hover:bg-gray-200 transition-colors text-sm sm:text-base"
                    >
                        Cancel
                    </button>
                    {/* Confirm Reject Button */}
                    <button 
                        onClick={onClose}
                        className="w-full sm:w-auto px-8 py-3 text-[#FF3366] font-semibold bg-[#FF33661A] rounded-full 
                                   hover:bg-red-200 transition-colors text-sm sm:text-base"
                    >
                        Confirm Reject
                    </button>
                </div>

            </div>
        </NewBaseModal>
    );
};

export default RejectRequestPopup;


// --- Base Modal Component (for reuse and professional structure) ---
interface NewBaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const NewBaseModal: React.FC<NewBaseModalProps> = ({
    isOpen,
    onClose,
    children,
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
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='w-full'
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};