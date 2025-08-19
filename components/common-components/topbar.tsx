"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const PALETTE = {
  ACCENT_PINK: "#FF3366",
};

interface MainCategoryTabsBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export const OptimizedCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="flex-wrap bg-white mx-auto rounded-2xl py-2">
        <div className="relative w-full overflow-x-auto pb-1 custom-scrollbar-thin flex items-center">
          <button
            onClick={handleScroll}
            className="absolute left-1  lg:left-2 top-1/2 -translate-y-1/2 z-20 p-1 lg:p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FiArrowLeft
              className="w-5 h-5  text-black"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.history.back();
                }
              }}
            />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto pb-1 custom-scrollbar-thin"
          >
            <div className="flex flex-nowrap  md:justify-center justify-start pr-4 md:pl-14 pl-10 xl:gap-6 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryClick(category)}
                  className={`relative xl:px-5 lg:px-3 px-2 py-2 rounded-lg md:rounded-xl cursor-pointer font-medium transition-colors duration-200 text-xs lg:text-sm whitespace-nowrap
                      ${activeCategory === category
                      ? `text-white` : "text-[#6B7280] hover:bg-gray-200"}
                  `}
                >
                  <AnimatePresence>
                    {activeCategory === category && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 rounded-2xl z-0"
                        style={{ backgroundColor: PALETTE.ACCENT_PINK }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
