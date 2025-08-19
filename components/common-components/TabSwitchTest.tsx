"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface TabSwitchProps {
  tabs: readonly string[]; // Accept any array of strings (even readonly)
  selected: string;
  onChange: (tab: string) => void;
}


const TabSwitchTest: React.FC<TabSwitchProps> = ({ tabs, selected, onChange }) => {
  return (
    <div className="pb-4">
      <div className="w-full flex justify-center bg-white rounded-2xl py-2">
        <div className="flex flex-wrap justify-start sm:justify-center px-2 sm:gap-4">
          {tabs.map((tab, index) => {
            const isSelected = selected === tab;
            return (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                className="relative px-3.5 py-2  flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300"
              >
                {/* Number Circle */}
                <motion.div
                  className={`w-8 h-8 flex items-center font-medium justify-center rounded-full font-bold text-base border-2 ${
                    isSelected ? 'border-[#FF3366] text-[#FF3366]' : 'border-[#6B7280] text-black'
                  }`}
                  animate={{ color: isSelected ? '#FF3366' : '#000000', borderColor: isSelected ? '#FF3366' : '#6B7280' }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>

                {/* Tab Text */}
                <motion.span
                  className={`text-sm md:text-md font-medium`}
                  animate={{ color: isSelected ? '#FF3366' : '#000000' }} // Tailwind: pink-500 or gray-700
                  transition={{ duration: 0.3 }}
                >
                  {tab}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabSwitchTest;
