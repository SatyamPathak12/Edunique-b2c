"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Play, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function MyClassesComponent() {
  // State for active tabs and navigation
  const [activeMainTab, setActiveMainTab] = useState("Academics")
  const [activeSubject, setActiveSubject] = useState("Science")
  const [activeContentTab, setActiveContentTab] = useState("Learning")
  const [expandedSection, setExpandedSection] = useState<string | null>("Learning Videos (Week1)")
  const [currentView, setCurrentView] = useState<"list" | "detail">("list")
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [currentMonth] = useState("May 2023")
  const [currentWeekView, setCurrentWeekView] = useState("Week1")

  // Main navigation tabs
  const mainTabs = ["Academics", "Sports", "TBH1", "TBH2", "TBH3"]

  // Subject sidebar options
  const subjects = ["Science", "Maths", "English"]

  // Content tabs
  const contentTabs = ["Learning", "Mandatory Assessments", "Recordings"]

  // Collapsible sections
  const sections = [
    { id: "Introduction", title: "Introduction", resources: 1 },
    {
      id: "Learning Videos (Week1)",
      title: "Learning Videos (Week1)",
      resources: 3,
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    { id: "Learning material (Week1)", title: "Learning material (Week1)", resources: 5 },
    { id: "Additional Reads (Week1)", title: "Additional Reads (Week1)", resources: 3 },
    { id: "Assessment (Week1)", title: "Assessment (Week1)", resources: 1 },
  ]

  // Handle section toggle
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionId)
    }
  }

  // Handle topic selection
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic)
    setCurrentView("detail")
  }

  // Handle back button click
  const handleBackClick = () => {
    setCurrentView("list")
    setSelectedTopic(null)
  }

  // Render the list view (main content)
  const renderListView = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-8">
          {contentTabs.map((tab) => (
            <button
              key={tab}
              className={cn(
                "pb-2 font-medium",
                activeContentTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700",
              )}
              onClick={() => setActiveContentTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <select
              className="appearance-none bg-white border rounded px-3 py-1 pr-8 text-sm"
              value={currentWeekView}
              onChange={(e) => setCurrentWeekView(e.target.value)}
            >
              <option>Week1</option>
              <option>Week2</option>
              <option>Week3</option>
              <option>Week4</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
          </div>
          <button className="p-1">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm">{currentMonth}</span>
          <button className="p-1">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-blue-600 text-lg font-medium">Earth and Space Science</h2>
        <p className="text-blue-600 text-sm">Solar system, weather patterns, and basic understanding of the Earth.</p>
      </div>

      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className={cn(
              "border rounded-md overflow-hidden",
              expandedSection === section.id && section.topics ? "border-pink-500" : "",
            )}
          >
            <button className="w-full flex justify-between items-center p-4" onClick={() => toggleSection(section.id)}>
              <div>
                <div className="font-medium text-left">{section.title}</div>
                <div className="text-sm text-gray-500 text-left">
                  {section.resources} resource{section.resources !== 1 ? "s" : ""}
                </div>
              </div>
              {expandedSection === section.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {expandedSection === section.id && section.topics && (
              <div className="border-t bg-pink-50">
                {section.topics.map((topic) => (
                  <button
                    key={topic}
                    className="w-full flex items-center justify-between p-4 hover:bg-pink-100 border-b last:border-b-0"
                    onClick={() => handleTopicClick(topic)}
                  >
                    <div className="flex items-center">
                      <Play className="h-5 w-5 mr-3 text-gray-700" />
                      <span>{topic}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )

  // Render the detail view (topic detail)
  const renderDetailView = () => (
    <>
      <button className="flex items-center text-blue-600 mb-4" onClick={handleBackClick}>
        <ArrowLeft className="h-5 w-5 mr-2" />
        <div>
          <div className="text-blue-600 font-medium text-start">Earth and Space Science</div>
          <div className="text-blue-600 text-sm">
            Solar system, weather patterns, and basic understanding of the Earth.
          </div>
        </div>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden mb-6">
            <Image
              src="/page3/solar.png"
              alt="Solar System"
              className="object-cover"
              priority
              width={1200}
              height={800}
            />
          </div>

          <div className="prose max-w-none">
            <h2>Solar System</h2>
            <p>
              The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed
              4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.
            </p>
            <p>
              The vast majority of the system&apos;s mass is in the Sun, with most of the remaining mass contained in
              Jupiter. The four inner system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being
              composed primarily of rock and metal.
            </p>
            <h3>Key Components</h3>
            <ul>
              <li>The Sun - A G-type main-sequence star</li>
              <li>Inner Planets - Mercury, Venus, Earth, Mars</li>
              <li>Outer Planets - Jupiter, Saturn, Uranus, Neptune</li>
              <li>Dwarf Planets - Pluto, Ceres, Eris, Haumea, Makemake</li>
              <li>Other objects - Asteroids, comets, meteoroids</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Learning</h3>

            {sections.map((section) => (
              <div key={section.id} className="mb-2">
                <button
                  className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-50"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="text-sm font-medium text-left">{section.title}</div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedSection === section.id && section.topics && (
                  <div className="border rounded-md mt-2 overflow-hidden bg-blue-50">
                    {section.topics.map((topic) => (
                      <button
                        key={topic}
                        className={cn(
                          "w-full flex items-center p-3 text-sm hover:bg-blue-100 border-b last:border-b-0",
                          selectedTopic === topic ? "bg-blue-100 font-medium" : "",
                        )}
                        onClick={() => setSelectedTopic(topic)}
                      >
                        <Play className="h-4 w-4 mr-2 text-gray-700" />
                        <span>{topic}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="min-h-screen">
      {/* Main navigation tabs */}
      <div className="flex border-b w-full">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "py-4 px-8 font-medium w-full",
              activeMainTab === tab ? "bg-pink-500 text-white" : "bg-gray-500 text-white",
            )}
            onClick={() => setActiveMainTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex min-h-[calc(100vh-56px)]">
        {/* Subject sidebar - only show in list view or when not in Academics tab */}
        {(currentView === "list" || activeMainTab !== "Academics") && (
          <div className="w-48  p-4 space-y-4">
            {subjects.map((subject) => (
              <button
                key={subject}
                className={cn(
                  "w-full py-3 px-4 text-center rounded-xl font-medium text-white",
                  activeSubject === subject ? "bg-blue-600" : " text-gray-800",
                )}
                onClick={() => setActiveSubject(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        )}

        {/* Main content area */}
        <div className="flex-1 bg-white rounded-2xl m-4 p-6">
          {currentView === "list" ? renderListView() : renderDetailView()}
        </div>
      </div>
    </div>
  )
}
