"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Play, FileText } from "lucide-react"


export  function Curriculum() {
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({
    "Getting Started": true, // First lesson expanded by default
  })

  const toggleLesson = (lessonTitle: string) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [lessonTitle]: !prev[lessonTitle],
    }))
  }

  // Sample data to match the image
  const sessions = Array.from({ length: 34 }, (_, i) => ({
    id: `session-${i + 1}`,
    title: `session ${i + 1}`,
    lessons: i === 0 ? [
      {
        id: "getting-started",
        title: "Getting Started",
        type: "video",
        content: [
          { id: "whats-webflow", title: "What's is Webflow?", type: "video" },
          { id: "sign-up", title: "Sign up in Webflow", type: "video" },
          { id: "terms", title: "Webflow Terms & Conditions", type: "document" },
          { id: "teaser", title: "Teaser of Webflow", type: "video" },
          { id: "practice", title: "Practice Project", type: "document" },
        ]
      }
    ] : [
      {
        id: `practice-design-${i + 1}`,
        title: "Practice Design Like an Artist",
        type: "video",
        content: []
      }
    ]
  }))

  return (
    <div className="py-6 pb-16">
      <div className="flex items-center mb-4">
        <div className="text-pink-500 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
          </svg>
        </div>
        <h2 className="text-xl font-medium">My Curriculum</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Maths 1 A</h3>
            <div className="flex items-center text-pink-500">
              <Play className="h-4 w-4 mr-1" />
              <span className="text-sm text-gray-600">34 Sessions</span>
            </div>
          </div>

          <div className="space-y-2 overflow-y-auto pr-2">
            {sessions.slice(0, 4).map((session) => (
              <div key={session.id} className="bg-gray-100 rounded-md overflow-hidden">
                <div className="p-3 flex items-center text-pink-500">
                  <div className="pr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                      <line x1="7" y1="2" x2="7" y2="22"></line>
                      <line x1="17" y1="2" x2="17" y2="22"></line>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <line x1="2" y1="7" x2="7" y2="7"></line>
                      <line x1="2" y1="17" x2="7" y2="17"></line>
                      <line x1="17" y1="17" x2="22" y2="17"></line>
                      <line x1="17" y1="7" x2="22" y2="7"></line>
                    </svg>
                  </div>
                  <span className="text-pink-500">{session.title}</span>
                </div>

                {session.lessons.map((lesson) => (
                  <div key={lesson.id} className="bg-white">
                    <div 
                      className="flex items-center p-3 cursor-pointer"
                      onClick={() => toggleLesson(lesson.title)}
                    >
                      {expandedLessons[lesson.title] ? (
                        <ChevronDown className="h-4 w-4 text-pink-500 mr-2" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-pink-500 mr-2" />
                      )}
                      <span>{lesson.title}</span>
                    </div>
                    
                    {expandedLessons[lesson.title] && lesson.id === "getting-started" && (
                      <div className="pl-9 pr-3 pb-3 space-y-3">
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          <span className="text-sm">What&apos;s is Webflow?</span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          <span className="text-sm">Sign up in Webflow</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <span className="text-sm">Webflow Terms & Conditions</span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          <span className="text-sm">Teaser of Webflow</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <span className="text-sm">Practice Project</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}