"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface TabSwitchProps {
  tabs: string[];
  selected: string;
  onChange: (tab: string) => void;
}

const TabSwitchLight: React.FC<TabSwitchProps> = ({ tabs, selected, onChange }) => {
  return (
    <div className="pb-4">
      <div className="w-full flex justify-center bg-white border rounded-2xl py-2">
        <div className="flex flex-wrap justify-center items-center px-2 gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`
                relative px-2 py-2 rounded-xl text-xs sm:text-sm md:text-md cursor-pointer font-medium transition-colors duration-200
                ${selected === tab
                  ? 'text-white bg-[#FF99B7]'
                  : 'text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <AnimatePresence>
                {selected === tab && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-[#FF99B7] rounded-2xl z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSwitchLight;
