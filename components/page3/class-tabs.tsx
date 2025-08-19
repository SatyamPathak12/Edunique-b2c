"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ClassTabsProps {
  tabs: { id: string; label: string }[]
  defaultTab?: string
  onChange?: (tab: string) => void
  type?: "blue" | "pink" | "underline"
}

export function ClassTabs({ tabs, defaultTab, onChange, type = "blue" }: ClassTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (onChange) {
      onChange(tab)
    }
  }

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => {
        let tabClass = ""

        if (type === "blue") {
          tabClass =
            activeTab === tab.id ? "bg-blue-500 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        } else if (type === "pink") {
          tabClass = activeTab === tab.id ? "tab-underline tab-pink" : "text-gray-600 hover:text-gray-900"
        } else if (type === "underline") {
          tabClass = activeTab === tab.id ? "tab-underline tab-blue" : "text-gray-600 hover:text-gray-900"
        }

        return (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn("px-4 py-2 text-sm font-medium transition-colors", tabClass)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
