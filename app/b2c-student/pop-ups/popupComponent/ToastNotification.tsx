// /popupComponent/ToastNotification.tsx
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Using FiCheckCircle as it's a closer match to the original image than FaRegCircleCheck
import { FaRegCheckCircle } from "react-icons/fa";

interface ToastNotificationProps {
    isVisible: boolean;
    message?: string;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ 
    isVisible, 
    message = "Saved !" 
}) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }} // Animate from top
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }} // Animate to top
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    // Positioned at the top center of the viewport
                    className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
                >
                    <div
                        // Styling to match your image: green background, white text, rounded corners
                        className="flex items-start gap-3 w-56 bg-[#00b060] border border-[#02a35a]/47 text-white font-semibold 
                                   px-4 py-3 rounded-xl shadow-lg"
                    >
                        <FaRegCheckCircle className="w-6 h-6" strokeWidth={2.5} />
                        <span className="text-base">{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ToastNotification;