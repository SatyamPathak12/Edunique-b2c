"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TestTabsProps {
  tabs: string[]
  defaultTab?: string
  onChange?: (tab: string) => void
}

export function TestTabs({ tabs, defaultTab, onChange }: TestTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (onChange) {
      onChange(tab)
    }
  }

  return (
    <div className="border-b">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "px-6 py-3 text-sm font-medium transition-colors border-b-2",
              activeTab === tab
                ? "border-pink-500 text-pink-500"
                : "border-transparent text-gray-600 hover:text-gray-900",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
