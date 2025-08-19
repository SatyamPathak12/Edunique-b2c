import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
const PALETTE = {
    GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
    GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
    PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
    PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
    PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
    PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

    ACCENT_PINK: "#FF3366", // Tags, highlights
    ACCENT_BLUE: "#0DC6FD", // Line chart, progress
    ACCENT_PURPLE: "#AC50F5", // Line chart, progress
    ACCENT_RED: "#FF4A69", // Failed status

    BG_PAGE: "#F3F4F6", // Main page background
    BORDER_GREY: "#B0B0B0", // General borders for cards
    TEXT_DARK: "#1F2937", // For primary text
    TEXT_MEDIUM: "#6B7280", // For secondary text
    TEXT_LIGHT: "#9CA3AF", // For tertiary text
    WHITE_CARD: "#FFFFFF",
};

const ClassTab = () => {
    const [selected, setSelected] = useState<string>('Class 1');
    return (
        <div className="pb-6 pt-2">
            <div className="w-full flex justify-center bg-white border shadow rounded-2xl py-2">
                <div className="flex flex-wrap justify-center px-2 gap-4">
                    {classes.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelected(category)}
                            className={`
              relative px-5 py-2 rounded-2xl cursor-pointer font-medium transition-colors duration-200
              ${selected === category
                                    ? `text-white bg-[${PALETTE.ACCENT_PINK}]`
                                    : 'text-gray-700 hover:bg-gray-200'
                                }
            `}
                        >
                            {/* Animated background highlight */}
                            <AnimatePresence>
                                {selected === category && (
                                    <motion.div
                                        layoutId="highlight"
                                        className={`absolute inset-0 bg-[${PALETTE.ACCENT_PINK}] rounded-2xl z-0`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Button text above animation layer */}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClassTab;