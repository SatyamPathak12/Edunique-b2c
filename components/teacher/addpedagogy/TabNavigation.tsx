
import React from 'react';
import { cn } from "@/lib/utils";

interface TabItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TabItem = ({ label, active, onClick }: TabItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-all border-b-2 focus:outline-none",
        active ? "border-[#FF3366] text-[#FF3366]" : "border-transparent text-gray-600 hover:text-gray-800"
      )}
    >
      {label}
    </button>
  );
};

interface TabNavigationProps {
  tabs: { id: string; label: string; }[];
  activeTabId: string;
  onChange: (tabId: string) => void;
  className?: string;
}

const TabNavigation = ({ tabs, activeTabId, onChange, className }: TabNavigationProps) => {
  return (
    <div className={cn("flex border-b", className)}>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          label={tab.label}
          active={tab.id === activeTabId}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  );
};

export default TabNavigation;
