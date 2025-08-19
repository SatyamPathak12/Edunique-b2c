'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const classes = ['Active', 'Inactive'] as const;

const PALETTE = {
  ACCENT_PINK: '#FF3366',
  BG_LIGHT: '#F3F4F6',
  TEXT_DARK: '#1F2937',
  TEXT_LIGHT: '#9CA3AF',
};

interface ActiveTabProps {
  activeTab: 'active' | 'inactive';
  setActiveTab: (tab: 'active' | 'inactive') => void;
}

const ActiveTab: React.FC<ActiveTabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="pb-6 pt-2">
      <div className="w-full flex justify-center bg-white border rounded-2xl py-2">
        <div className="flex flex-wrap justify-center px-2 gap-4">
          {classes.map((category) => {
            const isSelected = activeTab === category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category.toLowerCase() as 'active' | 'inactive')}
                className={`relative px-5 py-2 rounded-2xl font-medium transition-colors duration-200 ${
                  isSelected ? 'text-white' : 'text-[#6b7280] hover:bg-gray-200'
                }`}
              >
                {/* Animated background highlight */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 rounded-2xl z-0"
                      style={{ backgroundColor: PALETTE.ACCENT_PINK }}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveTab;
