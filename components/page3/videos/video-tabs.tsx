"use client"

import { cn } from "@/lib/utils"

interface VideoTabsProps {
  activeTab: string
  onChange: (tab: string) => void
}

export function VideoTabs({ activeTab, onChange }: VideoTabsProps) {
  const tabs = ["Class Recordings", "Reference Videos", "Pedagogy Videos"]

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "px-6 py-4 text-base font-medium transition-colors border-b-2",
            activeTab === tab
              ? tab === "Class Recordings"
                ? "border-pink-500 text-pink-500"
                : tab === "Reference Videos"
                  ? "border-pink-500 text-pink-500"
                  : "border-pink-500 text-pink-500"
              : "border-transparent text-gray-600 hover:text-gray-900",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
