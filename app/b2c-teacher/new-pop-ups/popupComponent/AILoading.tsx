"use client";

import React from 'react';
import { TeacherB2CBaseModal } from '../page';

interface AILoadingProps {
    isOpen: boolean;
}

const AILoadingPopup: React.FC<AILoadingProps> = ({ isOpen }) => {
    const handleDummyClose = () => {};

    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={handleDummyClose} maxWidth="max-w-[620px]">
            <div className="bg-white rounded-3xl p-4 overflow-hidden w-full flex flex-col items-center justify-center shadow-xl">
                {/* Loader Video */}
                <div className="w-full aspect-video rounded-3xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/star-loader.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <p className="mt-6 text-base sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-[#3366FF] to-[#3366FF] text-center px-4">
                    Please wait a moment while the AI works its magic.
                </p>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default AILoadingPopup;