// /popupComponent/VideoPlayer.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlay, FiVolume2, FiMaximize } from 'react-icons/fi';
import { PopupPropB2CTeacher } from '../page'; // Assuming page.tsx is in the parent directory

// --- Main Video Player Popup Component ---
const VideoPlayerPopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    const [progress, setProgress] = useState(40);

    // This component uses AnimatePresence directly for a full-screen fade effect
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 font-sans"
                >
                    {/* Main Content Area */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full max-w-6xl max-h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl group"
                    >
                        {/* Video/Image Background */}
                        <Image
                            src="/b2c-student/video.jpg"
                            alt="Video thumbnail"
                            layout="fill"
                            objectFit="cover"
                        />

                        {/* Top Translucent Bar */}
                        <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-end items-center bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20">
                            <button onClick={onClose} className="p-1 bg-[#FFFFFF1A] text-black rounded-full hover:bg-white/60 transition-colors cursor-pointer">
                                <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="p-1.5 bg-[#FFFFFF1A] text-black rounded-full hover:bg-white/60 transition-colors"
                            >
                                <FiPlay className="w-6 h-6 ml-1" />
                            </button>
                        </div>

                        {/* Bottom Translucent Controls Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            {/* Progress Bar */}
                            <div className="relative w-full h-1.5 rounded-full cursor-pointer mb-2">
                                <div className="absolute h-full bg-[#FF3366] rounded-full" style={{ width: `${progress}%` }}></div>
                                <div className="absolute h-4 w-4 bg-white rounded-full -top-1.5 shadow" style={{ left: `calc(${progress}% - 8px)` }}></div>
                            </div>

                            {/* Control Icons */}
                            <div className="flex justify-end items-center text-white space-x-3 sm:space-x-4">
                                <button className="hover:opacity-80"><FiVolume2 className="w-5 h-5 sm:w-6 sm:h-6" /></button>
                                <button className="hover:opacity-80"><FiMaximize className="w-5 h-5 sm:w-6 sm:h-6" /></button>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VideoPlayerPopup;