'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DualTabSwitcher: React.FC<TabSwitcherProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="relative inline-flex ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={clsx(
            'relative px-2 py-2 text-base mr-4 font-medium transition cursor-pointer',
            activeTab === tab ? 'text-[#3366ff]' : 'text-gray-600'
          )}

        >
          {activeTab === tab && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#3366ff] rounded-full"
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
};

export default DualTabSwitcher;
